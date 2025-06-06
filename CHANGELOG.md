# Changelog

## 0.3.7 (2025-05-15)

### Enhancements

- Add auto_height attribute

## 0.3.6 (2025-03-17)

### Enhancements

  * Add support to update theme default options dynamically

### Enhancements

  * Add a "theme" attribute and an event handler to allow updating the theme dynamically

## 0.3.4 (2025-02-28)

### Enhancements

  * Add github_light theme

## 0.3.3 (2025-02-27)

### Enhancements

  * Add support to debounce editor's change event

## 0.3.2 (2025-02-27)

### Bug fixes

  * Correct colors of moonlight-ii theme

## 0.3.1 (2025-02-27)

### Enhancements

  * New moonlight-ii theme

## 0.3.0 (2025-02-27)

### Enhancements

  * Support to dynamically change between themes
  * New tokyonight theme

## 0.2.0 (2024-12-05)

### Enhancements
  * Support Phoenix LiveView 1.0
  * Update Monaco Editor to 0.52.0
  * Relax phoenix dependency to `~> 1.6`
  * Relax phoenix_live_view dependency to `~> 0.16`
  * Relax jason dependency to `~> 1.3`

## 0.1.8 (2024-02-08)

### Enhancements
  * [Add action to toggle word wrapping](https://github.com/BeaconCMS/live_monaco_editor/pull/20)
  * [Add support for targeted events](https://github.com/BeaconCMS/live_monaco_editor/pull/21)

### Bug fixes
  * Replace `monaco-editor@latest` with `monaco-editor@0.45.0` to avoid upstream breaking changes or bugs

## 0.1.7 (2023-11-08)

### Enhancements
  * Add `:change` option to capture editor content changes

## 0.1.6 (2023-09-18)

### Enhancements
  * Auto resize editor on content or viewport change
  * Change default options to improve default look & feel

## 0.1.5 (2023-09-15)

### Enhancements
  * Always load latest monaco editor package version

## 0.1.4 (2023-08-14)

### Bug fixes
  * Add `display: contents` to wrapper div - [lukad](https://github.com/lukad)

## 0.1.3 (2023-06-28)

### Bug fixes
  * DOM patch conflict causing the editor to stop receiving some keystrokes

## 0.1.2 (2023-06-10)

### Enhancements
  * Load JetBrains Mono font by default
  * Load OneDark theme by default

### Bug fixes
  * Remove unnecessary parent `<div>` element

## 0.1.1 (2023-06-08)

### Enhancements
  * Set default theme `vs-dark`

### Bug fixes
  * Only install and load `esbuild` in `:dev` env

## 0.1.0 (2023-05-23)

### Enhancements
  * Add `<LiveMonacoEditor.code_editor>` component

