export default {
  base: "vs-dark",
  inherit: true,
  rules: [
    // Comments
    { token: "comment", foreground: "7a88cf", fontStyle: "italic" }, // saturatedGray

    // Variables and Plain Text
    { token: "variable", foreground: "c8d3f5" }, // gray10

    // DOM Variables
    { token: "variable.dom", foreground: "ffc777" }, // yellow
    { token: "variable.object.property", foreground: "a9b8e8" }, // gray8

    // Properties
    { token: "property", foreground: "a9b8e8" }, // gray8
    { token: "property.declaration", foreground: "4fd6be" }, // teal

    // Keywords
    { token: "keyword", foreground: "c099ff", fontStyle: "italic" }, // purple
    { token: "keyword.control", foreground: "c099ff", fontStyle: "italic" }, // purple
    { token: "keyword.operator", foreground: "c099ff" }, // purple

    // Operators and punctuation
    { token: "operator", foreground: "86e1fc" }, // cyan
    { token: "punctuation", foreground: "86e1fc" }, // cyan

    // Tags
    { token: "tag", foreground: "ff757f" }, // red

    // Functions
    { token: "function", foreground: "82aaff" }, // blue
    { token: "function.call", foreground: "65bcff" }, // sky

    // Constants
    { token: "constant", foreground: "ff98a4" }, // lightRed
    { token: "constant.language", foreground: "ff98a4" }, // lightRed

    // Numbers and Booleans
    { token: "number", foreground: "ff966c" }, // orange
    { token: "boolean", foreground: "ff966c" }, // orange

    // Function Parameters
    { token: "parameter", foreground: "f0a1a8" }, // pink

    // Strings
    { token: "string", foreground: "c3e88d" }, // green

    // Regular Expressions
    { token: "regexp", foreground: "7fdaff" }, // lightCyan

    // Types
    { token: "type", foreground: "ffc777" }, // yellow
    { token: "type.builtin", foreground: "ff966c" }, // orange

    // Class
    { token: "class", foreground: "ffc777" }, // yellow

    // Language variables (this, self, etc.)
    { token: "variable.language", foreground: "ff757f", fontStyle: "italic" }, // red

    // Object
    { token: "variable.object", foreground: "ffc777" }, // yellow

    // CSS properties
    { token: "property.css", foreground: "82aaff" }, // blue

    // Markup (markdown, etc.)
    { token: "markup.heading", foreground: "82aaff" },
    { token: "markup.italic", foreground: "ff757f", fontStyle: "italic" },
    { token: "markup.bold", foreground: "ff757f", fontStyle: "bold" },
    { token: "markup.link", foreground: "82aaff" },
  ],
  colors: {
    // Editor colors
    "editor.background": "#222436", // background color from vscode
    "editor.foreground": "#c8d3f5", // gray10
    "editor.selectionBackground": "#2f334d",
    "editor.lineHighlightBackground": "#2f334d",
    "editorCursor.foreground": "#c8d3f5",
    "editorWhitespace.foreground": "#444a73",
    "editorIndentGuide.background": "#444a73",
    "editor.selectionHighlightBackground": "#444a73",

    // UI elements
    "editorLineNumber.foreground": "#444a73",
    "editorLineNumber.activeForeground": "#828bb8",
    "editorSuggestWidget.background": "#1e2030",
    "editorSuggestWidget.border": "#444a73",
    "editorSuggestWidget.selectedBackground": "#2f334d",
    "editorWidget.background": "#1e2030",
    "editorWidget.border": "#444a73",
    "list.activeSelectionBackground": "#2f334d",
    "list.hoverBackground": "#2f334d",
  },
}
