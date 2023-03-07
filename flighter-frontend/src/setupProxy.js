const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_BACKEND_URL,
      changeOrigin: true,
      dnsPrefetch: true,
      dnsResolver: "8.8.8.8",
    })
  );
};
