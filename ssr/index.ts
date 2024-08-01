import { JSDOM } from "jsdom";
import fs from "node:fs";

const root = new JSDOM(`<html>
        <head>
            <meta charset="utf8" version="1">
            <title>杨的博客</title>
            <meta name="description" content="杨的学习博客">
            <meta name="Keywords" content="前端，javascript，react">
        </head>
        <body>
            <div id = "root"></div>
        </body>
    </html
    `);

const window = root.window;
const document = window.document;
const app = document.getElementById("root");
let i = 0;
while (i < 10) {
  const div = document.createElement("div");
  div.innerHTML = i + "";
  app?.appendChild(div);
  i++;
}

fs.writeFileSync("./index.html", root.serialize());
