import { Character } from "./character.js";
import { Job } from "./job.js";
import { Item } from "./item.js";
import { Skill } from "./skill.js";
import { Spell } from "./spell.js";

const firstScreen = document.getElementById("screen1");
const createElementH3 = document.createElement("h3");
createElementH3.setAttribute("id", "loadState");
createElementH3.innerHTML = "LOADING...";
firstScreen.appendChild(createElementH3);

const loadState = document.getElementById("loadState");

export const getObjects = async () => {
  const myBigBadObject = await fetch("../json/bigbadobject.json");
  return await myBigBadObject.json();
};

const sleep = ms => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

getObjects()
  .then((res) => {
    loadState.innerHTML = `LOAD COMPLETE`;
    console.log(res["items"]);

    // Logic here
  })
  .catch((err) => {
    loadState.innerHTML = `LOAD FAILED`;
  });
