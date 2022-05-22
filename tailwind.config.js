module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                doctortheme: {
                    primary: "#1e69e3",
                    secondary: "#0FCFEC",
                    accent: "#3A4256",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            "dark",
            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
};
