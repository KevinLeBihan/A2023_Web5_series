import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5173',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportWidth: 1920, // Set the width of the viewport
    viewportHeight: 1080, // Set the height of the viewport
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
