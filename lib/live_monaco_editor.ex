defmodule LiveMonacoEditor do
  @external_resource "README.md"

  @moduledoc "README.md"
             |> File.read!()
             |> String.split("<!-- MDOC -->")
             |> Enum.fetch!(1)

  use Phoenix.Component
  import Phoenix.LiveView, only: [push_event: 3]
  alias Phoenix.LiveView.Socket

  @default_path "file"

  @default_opts %{
    # editor
    "language" => "markdown",
    "tabSize" => 2,
    "formatOnType" => true,
    "formatOnPaste" => true,
    "tabIndex" => -1,
    # visual
    "theme" => "default",
    "fontFamily" => "JetBrains Mono, monospace",
    "fontSize" => 14,
    "guides" => %{
      "indentation" => false
    },
    "occurrencesHighlight" => false,
    "minimap" => %{
      "enabled" => false
    },
    # behavior
    "scrollbar" => %{
      "alwaysConsumeMouseWheel" => false
    },
    "scrollBeyondLastLine" => false,
    # auto complete
    "renderLineHighlight" => "none",
    "suggestSelection" => "first",
    "parameterHints" => true,
    # TODO: enable with intellisense implementation
    # "wordBasedSuggestions" => !this.intellisense,
    "tabCompletion" => "on"
  }

  @doc """
  Renders a monaco editor [model](https://microsoft.github.io/monaco-editor/docs.html#functions/editor.createModel.html).


  ## Examples

  Render a simple editor using default options:

      <LiveMonacoEditor.code_editor value="# My Code Editor" />

  Or merge with custom options:

      <LiveMonacoEditor.code_editor
        opts={
          Map.merge(
            LiveMonacoEditor.default_opts(),
            %{"wordWrap" => "on"}
          )
        }
      />

  """
  attr :path, :string,
    default: @default_path,
    doc: "file identifier, pass unique names to render multiple editors"

  attr :value, :string, default: "", doc: "initial content"

  attr :change, :string,
    default: "",
    doc:
      "event name to capture editor content changes, see https://github.com/BeaconCMS/live_monaco_editor#inside-forms for more info"

  attr :target, :string,
    default: "",
    doc:
      "target for editor events in order to use with LiveComponent, see https://github.com/BeaconCMS/live_monaco_editor#inside-forms for more info"

  attr :debounce, :string,
    default: "",
    doc:
      "debounce time in milliseconds for editor change events, see https://github.com/BeaconCMS/live_monaco_editor#debouncing-editor-changes for more info"

  attr :theme, :string,
    default: "",
    doc: "editor theme to use, available options: 'default', 'tokyonight', 'moonlight-ii', 'github-light'"

  attr :auto_height, :boolean,
    default: true,
    doc:
      "whether the editor should automatically adjust its height to fit content, set to false for fixed height with scrollbars"

  attr :opts, :map,
    default: @default_opts,
    doc: """
    options for the monaco editor instance

    ## Example

        %{
          "language" => "markdown",
          "fontSize" => 12,
          "wordWrap" => "on"
        }

    See all available options at https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html
    """

  attr :style, :string, default: "min-height: 100px; width: 100%;"
  attr :rest, :global, doc: "the arbitrary HTML attributes to add to the editor container element"

  def code_editor(assigns) do
    opts =
      assigns
      |> Map.get(:opts, %{})
      |> Jason.encode!()

    assigns = assign(assigns, :opts, opts)

    ~H"""
    <div id={"lme-wrapper-code-#{random_id()}"} phx-update="ignore" style="display: contents">
      <div
        id={"lme-code-#{random_id()}"}
        style={@style}
        phx-hook="CodeEditorHook"
        data-path={@path}
        data-value={@value}
        data-change-event={@change}
        data-target={@target}
        data-debounce={@debounce}
        data-theme={@theme}
        data-auto-height={to_string(@auto_height)}
        data-opts={@opts}
        {@rest}
      >
      </div>
    </div>
    """
  end

  @doc """
  The default Monaco Editor opts passed to `<.code_editor>`
  """
  def default_opts, do: @default_opts

  # https://github.com/phoenixframework/phoenix_live_view/blob/c3c21d6de55315adea04e28f7a461a91e46497bb/lib/phoenix_live_view/utils.ex#L176-L183
  defp random_encoded_bytes do
    binary = <<
      System.system_time(:nanosecond)::64,
      :erlang.phash2({node(), self()})::16,
      :erlang.unique_integer()::16
    >>

    Base.url_encode64(binary)
  end

  defp random_id do
    String.replace(random_encoded_bytes(), ["/", "+"], "-")
  end

  @doc """
  Change the editor's language.

  ## Examples

      LiveMonacoEditor.change_language(socket, "markdown", to: "my_file.md")

  ## Options

    * `:to` - the editor's `path` name that will get the language changed. Defaults to "#{@default_path}".

  See https://microsoft.github.io/monaco-editor/docs.html#functions/editor.setModelLanguage.html for more info.
  """
  @spec change_language(Socket.t(), String.t(), keyword()) :: Socket.t()
  def change_language(socket, mime_type_or_language_id, opts \\ [])
      when is_binary(mime_type_or_language_id) do
    to = Keyword.get(opts, :to, @default_path)

    push_event(socket, "lme:change_language:#{to}", %{
      "mimeTypeOrLanguageId" => mime_type_or_language_id
    })
  end

  @doc """
  Change the editor's `value` (content).

  ## Examples

      LiveMonacoEditor.set_value(socket, "Enum.all?([1, 2, 3])", to: "my_script.exs")

  ## Options

    * `:to` - the editor's `path` name that will get the value updated. Defaults to "#{@default_path}".

  See https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html#setValue for more info.
  """
  @spec set_value(Socket.t(), String.t(), keyword()) :: Socket.t()
  def set_value(socket, value, opts \\ []) when is_binary(value) do
    to = Keyword.get(opts, :to, @default_path)
    push_event(socket, "lme:set_value:#{to}", %{"value" => value})
  end

  @doc """
  Change the editor's theme.

  ## Examples

      LiveMonacoEditor.set_theme(socket, "tokyonight", to: "my_file.md")

  ## Options

    * `:to` - the editor's `path` name that will get the theme changed. Defaults to "#{@default_path}".

  Available themes:
    * "default" - Light theme
    * "tokyonight" - Dark blue theme
    * "moonlight-ii" - Dark theme
    * "github-light" - Light theme
  """
  @spec set_theme(Socket.t(), String.t(), keyword()) :: Socket.t()
  def set_theme(socket, theme, opts \\ []) when is_binary(theme) do
    to = Keyword.get(opts, :to, @default_path)
    push_event(socket, "lme:set_theme:#{to}", %{"theme" => theme})
  end

  @doc """
  Update the editor's options.

  ## Examples

      LiveMonacoEditor.update_options(socket, %{"fontSize" => 16}, to: "my_file.md")

  ## Options

    * `:to` - the editor's `path` name that will get the options updated. Defaults to "#{@default_path}".

  See https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html#updateOptions for available options.
  """
  @spec update_options(Socket.t(), map(), keyword()) :: Socket.t()
  def update_options(socket, options, opts \\ []) when is_map(options) do
    to = Keyword.get(opts, :to, @default_path)
    push_event(socket, "lme:update_options:#{to}", %{"options" => options})
  end
end
