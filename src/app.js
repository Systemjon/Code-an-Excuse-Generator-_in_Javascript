/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuseGenerator() {
  let whoOptions = ["the dog", "my granma", "his turtle", "my bird"];
  let didOptions = ["eat", "pissed", "crushed", "broked"];
  let objectOptions = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let firstPartAnswer = "Sorry..!";
  let whoAnswer =
    whoOptions[Math.round(Math.random() * (whoOptions.length - 1))];
  let didAnswer =
    didOptions[Math.round(Math.random() * (didOptions.length - 1))];
  let objectAnswer =
    objectOptions[Math.round(Math.random() * (objectOptions.length - 1))];

  document.querySelector("#answerDocument").innerHTML = firstPartAnswer.concat(
    " ",
    whoAnswer,
    " ",
    didAnswer,
    " ",
    objectAnswer,
    " "
  );
};
