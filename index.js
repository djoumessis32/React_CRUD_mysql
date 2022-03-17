import express from "express";
import bodyParser from "body-parser";

import router from "./src/routes/employe.route.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/employe", router);
//server
const port = 5000;

//Definition des routes
app.get("/", (req, res) => {
   res.send("Hello word !!!!\n");
});

//port d'ecoute
app.listen(port, () => {
   console.log(`Server Execute sur le port http://locahost:${port}`);
});
