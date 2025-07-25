const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@layouts": path.resolve(__dirname, "src/shared/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@env": path.resolve(__dirname, "src/env"),
      "@services": path.resolve(__dirname, "src/core/services"),
      "@hooks": path.resolve(__dirname, "src/core/hooks"),
      "@data": path.resolve(__dirname, "src/data"),
      "@utils": path.resolve(__dirname, "src/utils")
    },
  },
};