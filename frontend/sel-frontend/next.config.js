const withPWA = require("next-pwa")({
    dest: "public", // Where the service worker and manifest will be generated
    disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  });
  
  module.exports = withPWA({
    // Other Next.js configuration options
  });
  