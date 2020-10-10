const express = require("express");
const app = express();
const genreRouter = require("./routers/gneres");

app.use("/", genreRouter);

app.listen(3005, () => {
	console.log("Connected Successfully ...");
});
