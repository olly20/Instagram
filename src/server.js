const app = require("express")();

app.use(
  "/",
  require("express-http-proxy")("https://api.unsplash.com", {
    proxyReqPathResolver: (request) => {
      const parts = request.url.split("?");

      return (
        `${parts[0]}?client_id=vtLD-LPrTGaEbXy4NtD9n9Acr-BKZY2pONZ9rJ45g3E` +
        (parts.length ? `&${parts[1]}` : "")
      );
    },
  }),
);

app.listen(8080);
