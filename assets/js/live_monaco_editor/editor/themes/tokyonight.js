// Adapted from https://github.com/leandrocp/autumn/blob/main/priv/themes/tokyonight.toml

export default {
  base: "vs-dark",
  inherit: true,
  rules: [
    // Basic tokens
    { token: "", foreground: "c0caf5" }, // Default text
    { token: "comment", foreground: "565f89", fontStyle: "italic" },
    { token: "comment.doc", foreground: "e0af68" }, // Documentation comments

    // Constants
    { token: "constant", foreground: "ff9e64" },
    { token: "constant.language", foreground: "2ac3de" },
    { token: "constant.numeric", foreground: "ff9e64" },
    { token: "constant.character", foreground: "9ece6a" },
    { token: "constant.character.escape", foreground: "bb9af7" },

    // Strings
    { token: "string", foreground: "9ece6a" },
    { token: "string.regexp", foreground: "b4f9f8" },
    { token: "string.special", foreground: "2ac3de" },

    // Variables
    { token: "variable", foreground: "c0caf5" },
    { token: "variable.predefined", foreground: "f7768e" },
    { token: "variable.parameter", foreground: "e0af68", fontStyle: "italic" },
    { token: "member", foreground: "73daca" },

    // Keywords
    { token: "keyword", foreground: "9d7cd8", fontStyle: "italic" },
    { token: "keyword.control", foreground: "bb9af7" },
    { token: "keyword.operator", foreground: "bb9af7" },
    { token: "keyword.import", foreground: "7dcfff" },
    { token: "keyword.return", foreground: "9d7cd8", fontStyle: "italic" },

    // Functions
    { token: "function", foreground: "7aa2f7", fontStyle: "italic" },
    { token: "function.builtin", foreground: "2ac3de" },
    { token: "function.macro", foreground: "7dcfff" },

    // Types
    { token: "type", foreground: "2ac3de" },
    { token: "type.builtin", foreground: "2ac3de" },
    { token: "type.enum.variant", foreground: "ff9e64" },
    { token: "namespace", foreground: "7dcfff" },

    // Markup
    { token: "markup.heading", foreground: "7aa2f7", fontStyle: "bold" },
    { token: "markup.bold", fontStyle: "bold" },
    { token: "markup.italic", fontStyle: "italic" },
    { token: "markup.strikethrough", fontStyle: "strikethrough" },
    { token: "markup.inserted", foreground: "9ece6a" },
    { token: "markup.deleted", foreground: "f7768e" },
    { token: "markup.changed", foreground: "6183bb" },

    // Operators and punctuation
    { token: "operator", foreground: "89ddff" },
    { token: "punctuation", foreground: "89ddff" },
  ],
  colors: {
    // Editor UI colors
    "editor.background": "#1a1b26",
    "editor.foreground": "#c0caf5",
    "editor.lineHighlightBackground": "#292e42",
    "editor.selectionBackground": "#283457",
    "editor.selectionHighlightBackground": "#343a55",
    "editorCursor.foreground": "#c0caf5",
    "editorWhitespace.foreground": "#3b4261",
    "editorLineNumber.foreground": "#3b4261",
    "editorLineNumber.activeForeground": "#737aa2",
    "editor.findMatchBackground": "#ff9e6455",
    "editor.findMatchHighlightBackground": "#ff9e6422",

    // UI elements
    "editorWidget.background": "#16161e",
    "editorWidget.border": "#15161e",
    "editorSuggestWidget.background": "#16161e",
    "editorSuggestWidget.border": "#15161e",
    "editorSuggestWidget.selectedBackground": "#343a55",
    "editorHoverWidget.background": "#16161e",
    "editorHoverWidget.border": "#15161e",
    "tab.activeBackground": "#1a1b26",
    "tab.inactiveBackground": "#16161e",
    "tab.activeForeground": "#c0caf5",
    "tab.inactiveForeground": "#565f89",
    "diffEditor.insertedTextBackground": "#449dab22",
    "diffEditor.removedTextBackground": "#914c5422",
  },
}
