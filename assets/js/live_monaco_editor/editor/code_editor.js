// Copied and modified from the original work available at https://github.com/livebook-dev/livebook/blob/8532bc334bdcf3c57fab9b694666e609877d279f/assets/js/hooks/cell_editor/live_editor.js
// Copyright (C) 2021 Dashbit
// Licensed under Apache 2.0 available at https://www.apache.org/licenses/LICENSE-2.0

import loader from "@monaco-editor/loader"
import { livebook, tokyonight, moonlight_ii } from "./themes"

class CodeEditor {
  constructor(el, path, value, opts) {
    this.el = el
    this.path = path
    this.value = value
    this.opts = opts || {}
    // Set default theme if not provided
    this.theme = this.opts.theme || "tokyonight"
    // https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html
    this.standalone_code_editor = null
    this._onMount = []
    this._monaco = null // Store Monaco instance
  }

  isMounted() {
    return !!this.standalone_code_editor
  }

  mount() {
    if (this.isMounted()) {
      throw new Error("The monaco editor is already mounted")
    }

    this._mountEditor()
  }

  onMount(callback) {
    this._onMount.push(callback)
  }

  dispose() {
    if (this.isMounted()) {
      const model = this.standalone_code_editor.getModel()

      if (model) {
        model.dispose()
      }

      this.standalone_code_editor.dispose()
    }
  }

  /**
   * Changes the editor theme
   * @param {string} theme - The theme name ("default", "tokyonight")
   * @returns {boolean} - Whether the theme was successfully changed
   */
  setTheme(theme) {
    this.theme = theme

    if (this.isMounted() && this._monaco) {
      // If editor is already mounted, change the theme immediately
      try {
        this._monaco.editor.setTheme(theme)
        return true
      } catch (error) {
        console.error("Failed to set theme:", error)
        return false
      }
    }

    return false
  }

  /**
   * Returns the available themes
   * @returns {string[]} - Array of available theme names
   */
  getAvailableThemes() {
    return ["default", "tokyonight"]
  }

  /**
   * Returns the current theme
   * @returns {string} - Current theme name
   */
  getCurrentTheme() {
    return this.theme
  }

  _mountEditor() {
    this.opts.value = this.value

    loader.config({
      paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" },
    })

    loader.init().then((monaco) => {
      this._monaco = monaco // Store Monaco instance
      monaco.editor.defineTheme("default", livebook)
      monaco.editor.defineTheme("tokyonight", tokyonight)
      monaco.editor.defineTheme("moonlight-ii", moonlight_ii)
      // Set the theme based on the constructor option
      monaco.editor.setTheme(this.theme)

      let modelUri = monaco.Uri.parse(this.path)
      let language = this.opts.language
      let model = monaco.editor.createModel(this.value, language, modelUri)

      this.opts.language = undefined
      this.opts.model = model
      this.standalone_code_editor = monaco.editor.create(this.el, this.opts)

      this._onMount.forEach((callback) => callback(monaco))

      this._setScreenDependantEditorOptions()

      this.standalone_code_editor.addAction({
        contextMenuGroupId: "word-wrapping",
        id: "enable-word-wrapping",
        label: "Enable word wrapping",
        precondition: "config.editor.wordWrap == off",
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KeyZ],
        run: (editor) => editor.updateOptions({ wordWrap: "on" }),
      })

      this.standalone_code_editor.addAction({
        contextMenuGroupId: "word-wrapping",
        id: "disable-word-wrapping",
        label: "Disable word wrapping",
        precondition: "config.editor.wordWrap == on",
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KeyZ],
        run: (editor) => editor.updateOptions({ wordWrap: "off" }),
      })

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(() => {
          if (this.el.offsetHeight > 0) {
            this._setScreenDependantEditorOptions()
            this.standalone_code_editor.layout()
          }
        })
      })

      resizeObserver.observe(this.el)

      this.standalone_code_editor.onDidContentSizeChange(() => {
        const contentHeight = this.standalone_code_editor.getContentHeight()
        this.el.style.height = `${contentHeight}px`
      })
    })
  }

  _setScreenDependantEditorOptions() {
    if (window.screen.width < 768) {
      this.standalone_code_editor.updateOptions({
        folding: false,
        lineDecorationsWidth: 16,
        lineNumbersMinChars:
          Math.floor(
            Math.log10(this.standalone_code_editor.getModel().getLineCount())
          ) + 3,
      })
    } else {
      this.standalone_code_editor.updateOptions({
        folding: true,
        lineDecorationsWidth: 10,
        lineNumbersMinChars: 5,
      })
    }
  }
}

export default CodeEditor
