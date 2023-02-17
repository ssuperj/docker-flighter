const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/sendgrid",
    createProxyMiddleware({
      target: "https://api.sendgrid.com",
      changeOrigin: true,
      pathRewrite: {
        "^/sendgrid": "/v3/mail/send",
      },
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
  );
};
