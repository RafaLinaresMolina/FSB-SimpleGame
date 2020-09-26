import { Character } from "./character.js";
import { Job } from "./job.js";
import { Item } from "./item.js";
import { Skill } from "./skill.js";
import { Spell } from "./spell.js";

const divScreen1 = document.getElementById("screen1");
const divScreen2 = document.getElementById("screen2");
const divScreen3 = document.getElementById("screen3");
const divScreen4 = document.getElementById("screen4");
const divScreen5 = document.getElementById("screen5");

divScreen2.style.display = "none";
divScreen3.style.display = "none";
divScreen4.style.display = "none";
divScreen5.style.display = "none";

const h1Loading = document.getElementById("loadingMessage");
const divMainMenu = document.getElementById("mainMenu");
divMainMenu.style.visibility = "hidden";


export const getObjects = async () => {
  //await sleep(2000);
  const myBigBadObject = await fetch("../json/bigbadobject.json");
  return await myBigBadObject.json();
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

getObjects()
  .then((res) => {
    h1Loading.innerHTML = `LOAD COMPLETE`;
    divMainMenu.style.visibility = "visible";
    console.log(res["characters"]);

    // Logic here
  })
  .catch((err) => {
    console.log(err);
    h1Loading.innerHTML = `LOAD FAILED`;
  });
