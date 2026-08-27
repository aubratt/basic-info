const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home", heading: "Lorem Ipsum" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", heading: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", heading: "Contact" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404", heading: "Error 404" });
});

// listen for requests
app.listen(8080, () => {
  console.log("server running on http://localhost:8080")
})
