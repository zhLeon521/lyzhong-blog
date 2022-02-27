const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./pages/**/*.js",
        "./components/**/*.js",
        "./layouts/**/*.js",
        "./lib/**/*.js",
    ],
    darkMode: "class",
    theme: {
        extend: {
            spacing: {
                "9/16": "56.25%",
            },
            lineHeight: {
                11: "2.75rem",
                12: "3rem",
                13: "3.25rem",
                14: "3.5rem",
            },
            fontFamily: {
                sans: [
                    "Noto Sans TC",
                    "InterVariable",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                "black-75": "rgba(0,0,0,0.75)",
                primary: colors.red,
                gray: colors.neutral,
                dark: "#000",
                code: {
                    green: "#b5f4a5",
                    yellow: "#ffe484",
                    purple: "#d9a9ff",
                    red: "#ff8383",
                    blue: "#93ddfd",
                    white: "#fff",
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.700"),
                        a: {
                            fontWeight: "600",
                            color: "#e10000",
                            "&:hover": {
                                color: `${theme(
                                    "colors.primary.600"
                                )} !important`,
                            },
                            code: { color: theme("colors.primary.400") },
                        },
                        "h2,h3,h4": {
                            "scroll-margin-top": defaultTheme.spacing[32],
                        },
                        pre: {
                            backgroundColor: "#24283b",
                            marginLeft: "0.5rem",
                            marginRight: "0.5rem",
                        },
                        code: {
                            color: "#de0000",
                            backgroundColor: "#f3f3f3",
                            paddingLeft: "4px",
                            paddingRight: "4px",
                            paddingTop: "2px",
                            paddingBottom: "2px",
                            borderRadius: "0.25rem",
                        },
                        "code::before": {
                            content: "none",
                        },
                        "code::after": {
                            content: "none",
                        },
                        details: {
                            backgroundColor: theme("colors.gray.100"),
                            paddingLeft: "4px",
                            paddingRight: "4px",
                            paddingTop: "2px",
                            paddingBottom: "2px",
                            borderRadius: "0.25rem",
                        },
                        hr: { borderColor: theme("colors.gray.200") },
                        "ol li::marker": {
                            fontWeight: "600",
                            color: theme("colors.gray.500"),
                        },
                        "ul li::marker": {
                            backgroundColor: theme("colors.gray.500"),
                        },
                        strong: { color: theme("colors.gray.600") },
                        blockquote: {
                            color: theme("colors.gray.900"),
                            borderLeftColor: theme("colors.gray.200"),
                        },
                        img: {
                            borderRadius: "12px",
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme("colors.gray.300"),
                        a: {
                            color: theme("colors.primary.500"),
                            "&:hover": {
                                color: `${theme(
                                    "colors.primary.400"
                                )} !important`,
                            },
                            code: { color: theme("colors.primary.400") },
                        },
                        "h1,h2,h3,h4,h5,h6": {
                            color: theme("colors.gray.100"),
                        },
                        pre: {
                            backgroundColor: "#171717",
                        },
                        code: {
                            backgroundColor: "#171717",
                        },
                        details: {
                            backgroundColor: theme("colors.gray.800"),
                        },
                        hr: { borderColor: theme("colors.gray.700") },
                        "ol li::marker": {
                            fontWeight: "600",
                            color: theme("colors.gray.400"),
                        },
                        "ul li::marker": {
                            backgroundColor: theme("colors.gray.400"),
                        },
                        strong: { color: theme("colors.gray.100") },
                        thead: {
                            th: {
                                color: theme("colors.gray.100"),
                            },
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme("colors.gray.700"),
                            },
                        },
                        blockquote: {
                            color: theme("colors.gray.100"),
                            borderLeftColor: theme("colors.gray.700"),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
