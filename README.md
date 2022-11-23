# fifa-2022

API doc: <https://documenter.getpostman.com/view/24446543/2s8YsnYGuh>

## App setup

- Create app with nextjs 13: `npx create-next-app@latest --experimental-app`
- Install tailwind: `npm i -D tailwindcss postcss autoprefixer`
- Config tailwind: `npx tailwindcss init -p`
- change `tailwind.config.js` to:

  ```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

- app/globals.css

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
