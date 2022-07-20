import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import * as url from "url";
import path from "path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let pngFileNames = [];
let jpgFileNames = [];
let svgFileNames = [];
fs.readdirSync("./images/png").forEach((file) => {
  pngFileNames.push(file);
});
fs.readdirSync("./images/jpg").forEach((file) => {
  jpgFileNames.push(file);
});
fs.readdirSync("./images/svg").forEach((file) => {
  svgFileNames.push(file);
});

let filesNames = [...pngFileNames, ...jpgFileNames, ...svgFileNames];

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  const arr = [];
  filesNames.forEach((file) => {
    let [arabName, engName, code1, code2, code3] = file.split("#");
    let url = `${req.protocol}://${req.get("host")}/svg/${arabName}`;
    if (code3) {
      code3 = code3.replace(".png", "").replace(".jpg", "").replace(".svg", "");
      arr.push({
        arabic: arabName,
        english: engName,
        url,
      });
    } else {
      arr.push({
        arabic: arabName,
        english: engName,
        url,
      });
    }
  });

  res.json(arr);
});

app.get("/png/:finder", (req, res) => {
  const finder = req.params.finder;
  let file = pngFileNames.find((file) => {
    return file
      .split("#")
      .find((elem) => elem.toLowerCase() === finder.toLowerCase());
  });
  if (!file) {
    file = pngFileNames.find((file) => {
      return file
        .split("#")
        .find((elem) => elem.toLowerCase().includes(finder.toLowerCase()));
    });
  }
  if (file) {
    res.sendFile(path.join(__dirname, `/images/png/${file}`));
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/svg/:finder", (req, res) => {
  const finder = req.params.finder;
  let file = svgFileNames.find((file) => {
    return file
      .split("#")
      .find((elem) => elem.toLowerCase() === finder.toLowerCase());
  });
  if (!file) {
    file = svgFileNames.find((file) => {
      return file
        .split("#")
        .find((elem) => elem.toLowerCase().includes(finder.toLowerCase()));
    });
  }
  if (file) {
    res.sendFile(path.join(__dirname, `/images/svg/${file}`));
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/jpg/:finder", (req, res) => {
  const finder = req.params.finder;
  let file = jpgFileNames.find((file) => {
    return file
      .split("#")
      .find((elem) => elem.toLowerCase() === finder.toLowerCase());
  });
  if (!file) {
    file = jpgFileNames.find((file) => {
      return file
        .split("#")
        .find((elem) => elem.toLowerCase().includes(finder.toLowerCase()));
    });
  }
  if (file) {
    res.sendFile(path.join(__dirname, `/images/jpg/${file}`));
  } else {
    res.status(404).send("Not found");
  }
});

app.use(
  cors({
    origin: "*",
  })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
