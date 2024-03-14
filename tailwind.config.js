/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                primary: "#FFFFFF",
                secondary: "#00FFFF",
            },

            fontFamily: {
                heading: "helvetica",
                bodyContent: "axiforma",
            },
        },
    },
    plugins: [],
};
