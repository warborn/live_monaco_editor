# LiveMonacoEditor

<!-- MDOC -->

<p align="center">
  <img src="https://raw.githubusercontent.com/BeaconCMS/live_monaco_editor/main/assets/images/live_monaco_editor_logo.png" width="512" alt="LiveMonacoEditor logo">
</p>

<p align="center">
  <a href="https://microsoft.github.io/monaco-editor">Monaco Editor</a> component for Phoenix LiveView.
</p>

<p align="center">
  <a href="https://hex.pm/packages/live_monaco_editor">
    <img alt="Hex Version" src="https://img.shields.io/hexpm/v/live_monaco_editor">
  </a>

  <a href="https://hexdocs.pm/live_monaco_editor">
    <img alt="Hex Docs" src="http://img.shields.io/badge/hex.pm-docs-green.svg?style=flat">
  </a>

  <a href="https://opensource.org/licenses/MIT">
    <img alt="MIT" src="https://img.shields.io/hexpm/l/live_monaco_editor">
  </a>
</p>

## Features

- [Lazy load](https://github.com/suren-atoyan/monaco-loader) assets
- Easily instantiate [single](https://github.com/BeaconCMS/live_monaco_editor#usage) or [multpiple](https://github.com/BeaconCMS/live_monaco_editor#multiple-editors) editors
- Pass any [option available](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html) to the editor
- [Interoperability](https://github.com/BeaconCMS/live_monaco_editor#interface) with the underlying editor

## Installation

Add `:live_monaco_editor` dependency:

```elixir
def deps do
  [
    {:live_monaco_editor, "~> 0.1"}
  ]
end
```

Once installed, change your `assets/js/app.js` file to load the code editor hook in the live socket:

```javascript
import { CodeEditorHook } from "../../deps/live_monaco_editor/priv/static/live_monaco_editor.esm"

let Hooks = {}
Hooks.CodeEditorHook = CodeEditorHook

let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks, params: { _csrf_token: csrfToken } })
```

And change your `assets/css/app.css` file to load styling:

```css
@import "../../deps/live_monaco_editor/priv/static/live_monaco_editor.min.css";
```

## Usage

A new editor using the default options can be created as:

```heex
<LiveMonacoEditor.code_editor value="# My Code Editor" />
```

Or you can customize it as:

```heex
<LiveMonacoEditor.code_editor
  style="min-height: 250px; width: 100%;"
  value={~S{
  defmodule Math do
    def sum_list([head | tail], accumulator) do
      sum_list(tail, head + accumulator)
    end

    def sum_list([], accumulator) do
      accumulator
    end
  end

  IO.puts Math.sum_list([1, 2, 3], 0)
  }}
  opts={
    Map.merge(
      LiveMonacoEditor.default_opts(),
      %{"language" => "elixir"}
    )
  }
/>
```

![Elixir](https://raw.github.com/BeaconCMS/live_monaco_editor/main/assets/elixir.png)

## Interface

### Set editor options

All [monaco editor options](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html) are supported by passing a map to `opts`, for example to change the initial language and some other visual options:

```heex
<LiveMonacoEditor.code_editor
  value="<h1>My Code Editor</h1>"
  opts={
    %{
      "language" => "html",
      "fontSize" => 10,
      "minimap" => %{
        "autohide" => true,
        "showSlider" => "always"
      }
    }
  }
/>
```

### Merge with default options

The code editor is created with default options to provide a better UX out-of-the-box, which may not suit your needs, but you can keep the defaults and overwrite some options as you wish:

```heex
<LiveMonacoEditor.code_editor
  opts={
    Map.merge(
      LiveMonacoEditor.default_opts(),
      %{"wordWrap" => "on"}
    )
  }
/>
```

### Fetching the editor value

You can listen to events emitted by the code editor to fetch its current value and send it back to the parent LiveView where the component is used. Firstly, add a event listener:

```javascript
window.addEventListener("lme:editor_mounted", (ev) => {
  const hook = ev.detail.hook

  // https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html
  const editor = ev.detail.editor.standalone_code_editor

  // push an event to the parent liveview containing the editor current value when the editor loses focus
  editor.onDidBlurEditorWidget(() => {
    hook.pushEvent("code-editor-lost-focus", { value: editor.getValue() })
  })
})
```

Then you can handle that event on the LiveView to save the editor content or perform any kind of operation you need:

```elixir
def handle_event("code-editor-lost-focus", %{"value" => value}, socket) do
  {:noreply, assign(socket, :source, value)}
end
```

### Inside forms

Do not rely on `phx-change` to fetch the editor content because it has known limitations due to how Monaco Editor works:

- Pressing "backspace" does not trigger the change event.
- [Only the last 10 lines](https://github.com/BeaconCMS/live_monaco_editor/issues/14) are sent in the event value.

Instead use the `:change` option in the component:

```heex
<form>
  <LiveMonacoEditor.code_editor
    path="my_file.html"
    value="<h1>Title</h1>"
    change="set_editor_value"
  />
</form>
```

Which will trigger an event `set_editor_value` in the current LiveView process:

```elixir
def handle_event("set_editor_value", %{"value" => value}, socket) do
  # do something with `value` - it contains the whole editor content
  {:noreply, socket}
end
```

You'll need to ignore phx-change events for the editor field:

```elixir
def handle_event("validate", %{"_target" => ["live_monaco_editor", "my_file.html"]}, socket) do
  # ignore change events from the editor field
  {:noreply, socket}
end
```

### Debouncing editor changes

You can add debouncing to the editor change events to reduce the number of events sent to the server:

```elixir
<LiveMonacoEditor.code_editor
  value="<h1>Title</h1>"
  change="set_editor_value"
  debounce="300" />
```

This will wait 300 milliseconds after the user stops typing before sending the event to the server, which can significantly reduce the number of events for fast typists and improve performance.


### Multiple editors

Set an unique `id` and `path` for each one:

```heex
<LiveMonacoEditor.code_editor id="html" path="my_file.html" />
<LiveMonacoEditor.code_editor id="css" path="my_file.css" />
```

### Change language and value

```heex
<button phx-click="create-file">my_file.html</button>
```

```elixir
def handle_event("create-file", _params, socket) do
  {:noreply,
   socket
   |> LiveMonacoEditor.change_language("html")
   |> LiveMonacoEditor.set_value("<h1>New File</h1>")}
end
```

### Change editor theme

You can set the editor theme in two ways:

1. Using the `theme` attribute when creating the editor:

```heex
<LiveMonacoEditor.code_editor
  path="my_file.html"
  value="<h1>Title</h1>"
  theme="tokyonight"
/>
```

2. Dynamically changing the theme:

```elixir
def handle_event("change_theme", %{"theme" => theme}, socket) do
  {:noreply, LiveMonacoEditor.set_theme(socket, theme)}
end
```

Available themes:
- `"default"` - Light theme
- `"tokyonight"` - Dark blue theme
- `"moonlight-ii"` - Dark theme
- `"github-light"` - Light theme

_More operations will be supported in new releases._

### Styling

The component does not depend on any CSS framework but its parent container has to be large enough to be visible. The default style can be changed and/or classes can be applied:

```heex
<LiveMonacoEditor.code_editor
  style="height: 100%; width: 100%; min-height: 1000px; min-width: 600px;"
  class="my-2"
/>
```

### Update editor options

You can dynamically update any of the editor's options after it has been created:

```elixir
def handle_event("increase_font", _params, socket) do
  {:noreply, LiveMonacoEditor.update_options(socket, %{"fontSize" => 16})}
end

# Or for a specific editor when using multiple editors
def handle_event("increase_font", _params, socket) do
  {:noreply, LiveMonacoEditor.update_options(socket, %{"fontSize" => 16}, to: "my_file.html")}
end
```

This allows you to change any of the [Monaco Editor options](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html#updateOptions) dynamically, such as:
- Font size
- Word wrap settings
- Line numbers visibility
- Minimap settings
- And many more

For example, to create a font size control:

```heex
<div>
  <button phx-click="decrease_font">-</button>
  <button phx-click="increase_font">+</button>
</div>

<LiveMonacoEditor.code_editor
  path="my_file.html"
  value="<h1>Title</h1>"
/>
```

```elixir
def handle_event("decrease_font", _params, socket) do
  {:noreply, LiveMonacoEditor.update_options(socket, %{"fontSize" => 12})}
end

def handle_event("increase_font", _params, socket) do
  {:noreply, LiveMonacoEditor.update_options(socket, %{"fontSize" => 16})}
end
```

### Fixed Height and Scrolling

By default, the editor automatically adjusts its height to fit the content, which can cause it to overflow its container when working with large files.

For a fixed-height editor with scrollbars, set `auto_height` to `false`:

```heex
<LiveMonacoEditor.code_editor
  style="height: 500px; width: 100%;"
  auto_height={false}
  value={@code}
/>
```

This is particularly useful for:
- Side-by-side layouts where you want the editor to take a fixed height
- When embedding the editor in applications with limited screen space
- Working with larger files where scrolling is preferable to a tall editor

## Status

Early-stage, you can expect incomplete features and breaking changes.

## Contributing

You can use the file `dev.exs` which is a self-contained Phoenix application running LiveMonacoEditor. Execute:

```sh
mix setup
iex dev.exs
```

Visit http://localhost:4000

## Looking for help with your Elixir project?

<img src="https://raw.githubusercontent.com/BeaconCMS/live_monaco_editor/main/assets/images/dockyard_logo.png" width="256" alt="DockYard logo">

At DockYard we are [ready to help you build your next Elixir project](https://dockyard.com/phoenix-consulting).
We have a unique expertise in Elixir and Phoenix development that is unmatched and we love to [write about Elixir](https://dockyard.com/blog/categories/elixir).

Have a project in mind? [Get in touch](https://dockyard.com/contact/hire-us)!

## Acknowledgements

* [Jonatan Kłosko](https://github.com/jonatanklosko) for his amazing work with [Livebook Editor](https://github.com/livebook-dev/livebook/blob/main/assets/js/hooks/cell_editor.js)
* [Logo](https://www.flaticon.com/free-icons/script) created by kerismaker - Flaticon
* [Logo font](https://fonts.google.com/specimen/Source+Code+Pro) designed by Paul D. hunt

