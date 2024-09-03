import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/verify", function (req, res) {
    res.sendFile(path.join(__dirname, "verify.html"));
})

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
