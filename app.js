const cookieParser = require('cookie-parser');
const express = require('express');
const Path = require('path');
const app = express();
const port = 3000;
const db = require("./config/mongoose-connect");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, 'public')));
app.use(cookieParser());
app.set('view engine', 'ejs');


// Routes
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);


// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});