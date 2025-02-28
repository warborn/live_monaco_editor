import CodeEditor from "../editor/code_editor"

/**
 * Debounce function that limits how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @return {Function} - The debounced function
 */
function debounce(func, wait) {
  let timeout
  return function (...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}

const CodeEditorHook = {
  mounted() {
    // TODO: validate dataset
    const opts = JSON.parse(this.el.dataset.opts)

    this.codeEditor = new CodeEditor(
      this.el,
      this.el.dataset.path,
      this.el.dataset.value,
      opts
    )

    this.codeEditor.onMount((monaco) => {
      if (this.el.dataset.changeEvent && this.el.dataset.changeEvent !== "") {
        // Create the event handler function
        const handleContentChange = () => {
          if (this.el.dataset.target && this.el.dataset.target !== "") {
            this.pushEventTo(
              this.el.dataset.target,
              this.el.dataset.changeEvent,
              {
                value: this.codeEditor.standalone_code_editor.getValue(),
              }
            )
          } else {
            this.pushEvent(this.el.dataset.changeEvent, {
              value: this.codeEditor.standalone_code_editor.getValue(),
            })
          }
        }

        // Apply debouncing if debounce attribute is present
        const debounceMs = parseInt(this.el.dataset.debounce)
        const eventHandler =
          !isNaN(debounceMs) && debounceMs > 0
            ? debounce(handleContentChange, debounceMs)
            : handleContentChange

        this.codeEditor.standalone_code_editor.onDidChangeModelContent(
          eventHandler
        )
      }

      this.handleEvent(
        "lme:change_language:" + this.el.dataset.path,
        (data) => {
          const model = this.codeEditor.standalone_code_editor.getModel()

          if (model.getLanguageId() !== data.mimeTypeOrLanguageId) {
            monaco.editor.setModelLanguage(model, data.mimeTypeOrLanguageId)
          }
        }
      )

      this.handleEvent("lme:set_value:" + this.el.dataset.path, (data) => {
        this.codeEditor.standalone_code_editor.setValue(data.value)
      })

      this.el.querySelectorAll("textarea").forEach((textarea) => {
        textarea.setAttribute(
          "name",
          "live_monaco_editor[" + this.el.dataset.path + "]"
        )
      })

      this.el.removeAttribute("data-value")
      this.el.removeAttribute("data-opts")

      this.el.dispatchEvent(
        new CustomEvent("lme:editor_mounted", {
          detail: { hook: this, editor: this.codeEditor },
          bubbles: true,
        })
      )
    })

    if (!this.codeEditor.isMounted()) {
      this.codeEditor.mount()
    }
  },

  destroyed() {
    if (this.codeEditor) {
      this.codeEditor.dispose()
    }
  },
}

export { CodeEditorHook }
