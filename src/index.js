const express = require("express");
const app = express();

app.set("trust proxy", true);
app.use(
  express.static("public", {
    index: "index.html",
  })
);

app.listen(process.env.PORT || 80, () => {
  console.log("express telah berjalan");
});
