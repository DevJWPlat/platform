const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",
    allowedHosts: "all",
    client: {
      webSocketURL: "wss://8080-" + process.env.GITPOD_WORKSPACE_URL.replace("https://", ""),
    }
  }
});
