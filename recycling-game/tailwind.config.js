/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/App.js"],
    theme: {
        extend: {
            backgroundImage: {
                earth: "url('./public/images/earth.png')",
            },
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
