// Adapted from https://github.com/atomiks/moonlight-vscode-theme/blob/master/src/moonlight-ii.json

export default {
  base: "vs-dark",
  inherit: true,
  colors: {
    // Base colors
    "editor.background": "#222436", // gray4
    "editor.foreground": "#c8d3f5", // gray10
    "editor.selectionBackground": "#2f334d99", // gray5 with opacity
    "editor.selectionHighlightBackground": "#444a7380", // gray6 with opacity
    "editor.lineHighlightBackground": "#2f334d55", // gray5 with opacity
    "editorCursor.foreground": "#c8d3f5", // gray10
    "editorLineNumber.foreground": "#828bb8", // gray7
    "editorLineNumber.activeForeground": "#c8d3f5", // gray10

    // Syntax highlighting
    "editor.findMatchBackground": "#444a7399", // gray6 with opacity
    "editor.findMatchHighlightBackground": "#444a7366", // gray6 with lower opacity

    // Scrollbar
    "scrollbarSlider.background": "#2f334d80", // gray5 with opacity
    "scrollbarSlider.hoverBackground": "#444a7380", // gray6 with opacity
    "scrollbarSlider.activeBackground": "#828bb880", // gray7 with opacity

    // Sidebar
    "sideBar.background": "#1e2030", // gray3
    "sideBar.foreground": "#c8d3f5", // gray10
    "sideBar.border": "#191a2a", // gray2
    "sideBarTitle.foreground": "#c8d3f5", // gray10
    "sideBarSectionHeader.background": "#1e2030", // gray3
    "sideBarSectionHeader.foreground": "#c8d3f5", // gray10

    // Activity bar
    "activityBar.background": "#1e2030", // gray3
    "activityBar.foreground": "#c8d3f5", // gray10
    "activityBar.inactiveForeground": "#828bb8", // gray7
    "activityBarBadge.background": "#3d6fe0", // darkBlue
    "activityBarBadge.foreground": "#c8d3f5", // gray10

    // Title bar
    "titleBar.activeBackground": "#1e2030", // gray3
    "titleBar.activeForeground": "#c8d3f5", // gray10
    "titleBar.inactiveBackground": "#1e2030", // gray3
    "titleBar.inactiveForeground": "#828bb8", // gray7

    // Status bar
    "statusBar.background": "#1e2030", // gray3
    "statusBar.foreground": "#c8d3f5", // gray10
    "statusBar.noFolderBackground": "#1e2030", // gray3
    "statusBar.debuggingBackground": "#ff757f", // red
    "statusBar.debuggingForeground": "#222436", // gray4

    // Tabs
    "editorGroupHeader.tabsBackground": "#1e2030", // gray3
    "tab.activeBackground": "#222436", // gray4
    "tab.activeForeground": "#c8d3f5", // gray10
    "tab.inactiveBackground": "#1e2030", // gray3
    "tab.inactiveForeground": "#828bb8", // gray7
    "tab.activeBorderTop": "#7cafff", // blue

    // Panel
    "panel.background": "#1e2030", // gray3
    "panel.border": "#191a2a", // gray2
    "panelTitle.activeForeground": "#c8d3f5", // gray10
    "panelTitle.inactiveForeground": "#828bb8", // gray7

    // Terminal
    "terminal.background": "#222436", // gray4
    "terminal.foreground": "#c8d3f5", // gray10
    "terminal.ansiBlack": "#131421", // gray1
    "terminal.ansiRed": "#ff757f", // red
    "terminal.ansiGreen": "#c3e88d", // green
    "terminal.ansiYellow": "#ffc777", // yellow
    "terminal.ansiBlue": "#7cafff", // blue
    "terminal.ansiMagenta": "#c4a2ff", // purple
    "terminal.ansiCyan": "#78dbff", // cyan
    "terminal.ansiWhite": "#c8d3f5", // gray10
    "terminal.ansiBrightBlack": "#828bb8", // gray7
    "terminal.ansiBrightRed": "#ff5370", // darkRed
    "terminal.ansiBrightGreen": "#c3e88d", // green
    "terminal.ansiBrightYellow": "#ffc777", // yellow
    "terminal.ansiBrightBlue": "#60bdff", // sky
    "terminal.ansiBrightMagenta": "#c4a2ff", // purple
    "terminal.ansiBrightCyan": "#78dbff", // cyan
    "terminal.ansiBrightWhite": "#d5def8", // gray11

    // Input
    "input.background": "#2f334d", // gray5
    "input.foreground": "#c8d3f5", // gray10
    "input.placeholderForeground": "#828bb8", // gray7
    "inputOption.activeBorder": "#7cafff", // blue

    // List
    "list.activeSelectionBackground": "#2f334d", // gray5
    "list.activeSelectionForeground": "#c8d3f5", // gray10
    "list.inactiveSelectionBackground": "#222436", // gray4
    "list.inactiveSelectionForeground": "#c8d3f5", // gray10
    "list.hoverBackground": "#2f334d", // gray5
    "list.highlightForeground": "#7cafff", // blue
  },

  rules: [
    // Comments
    { token: "comment", foreground: "#7a88cf", fontStyle: "italic" }, // saturatedGray

    // Variables and Plain Text
    { token: "variable", foreground: "#c8d3f5" }, // gray10
    { token: "variable.predefined", foreground: "#ff757f" }, // red

    // Keywords
    { token: "keyword", foreground: "#c4a2ff", fontStyle: "italic" }, // purple
    { token: "keyword.control", foreground: "#c4a2ff", fontStyle: "italic" }, // purple
    { token: "keyword.operator", foreground: "#78dbff" }, // cyan

    // Constants
    { token: "constant", foreground: "#ff98a4" }, // lightRed
    { token: "constant.language", foreground: "#ff98a4" }, // lightRed
    { token: "constant.numeric", foreground: "#ff966c" }, // orange
    { token: "constant.character.escape", foreground: "#78dbff" }, // cyan
    { token: "constant.language.boolean", foreground: "#ff966c" }, // orange
    { token: "constant.language.null", foreground: "#979bb6" }, // desaturatedGray
    { token: "constant.language.undefined", foreground: "#979bb6" }, // desaturatedGray

    // Storage
    { token: "storage", foreground: "#c4a2ff", fontStyle: "italic" }, // purple
    { token: "storage.type", foreground: "#c4a2ff", fontStyle: "italic" }, // purple
    { token: "storage.modifier", foreground: "#c4a2ff", fontStyle: "italic" }, // purple

    // Strings
    { token: "string", foreground: "#c3e88d" }, // green
    { token: "string.regexp", foreground: "#b4f9f8" }, // lightCyan

    // Punctuation
    { token: "delimiter", foreground: "#78dbff" }, // cyan
    { token: "delimiter.html", foreground: "#78dbff" }, // cyan
    { token: "delimiter.xml", foreground: "#78dbff" }, // cyan
    { token: "tag", foreground: "#78dbff" }, // cyan

    // Tags / HTML
    { token: "tag.tag-name", foreground: "#ff757f" }, // red
    { token: "tag.attribute-name", foreground: "#c4a2ff", fontStyle: "italic" }, // purple
    { token: "attribute.name", foreground: "#c4a2ff" }, // purple
    { token: "attribute.value", foreground: "#c3e88d" }, // green

    // Functions
    { token: "function", foreground: "#7cafff" }, // blue
    { token: "function.call", foreground: "#7cafff" }, // blue
    { token: "method", foreground: "#60bdff" }, // sky

    // Types
    { token: "type", foreground: "#ffc777" }, // yellow
    { token: "class", foreground: "#ffc777" }, // yellow
    { token: "constructor", foreground: "#7cafff" }, // blue

    // Parameters
    { token: "parameter", foreground: "#fca7ea" }, // pink

    // Objects and Properties
    { token: "property", foreground: "#a9b8e8" }, // gray8
    { token: "property.declaration", foreground: "#3ad7c7" }, // teal
    { token: "member", foreground: "#a9b8e8" }, // gray8
    { token: "variable.object.property", foreground: "#a9b8e8" }, // gray8

    // JSON specific
    { token: "string.key.json", foreground: "#3ad7c7" }, // teal
    { token: "keyword.json", foreground: "#c4a2ff" }, // purple

    // CSS specific
    { token: "attribute.name.css", foreground: "#7cafff" }, // blue
    { token: "property.css", foreground: "#7cafff" }, // blue
    { token: "keyword.css", foreground: "#c4a2ff" }, // purple
    { token: "attribute.value.css", foreground: "#fca7ea" }, // pink
    { token: "attribute.value.number.css", foreground: "#ff966c" }, // orange
    { token: "attribute.value.unit.css", foreground: "#fc7b7b" }, // darkOrange

    // Markdown specific
    { token: "markup.heading", foreground: "#78dbff" }, // cyan
    { token: "markup.italic", foreground: "#ff757f", fontStyle: "italic" }, // red
    { token: "markup.bold", foreground: "#ff757f", fontStyle: "bold" }, // red
    {
      token: "markup.underline",
      foreground: "#ff966c",
      fontStyle: "underline",
    }, // orange
    { token: "markup.quote", foreground: "#c8d3f5", fontStyle: "italic" }, // gray10
    { token: "markup.inserted", foreground: "#c3e88d" }, // green
    { token: "markup.deleted", foreground: "#ff757f" }, // red
    { token: "markup.changed", foreground: "#c4a2ff" }, // purple

    // Misc
    { token: "invalid", foreground: "#ff5370" }, // darkRed
    { token: "emphasis", fontStyle: "italic" },
    { token: "strong", fontStyle: "bold" },
  ],
}
