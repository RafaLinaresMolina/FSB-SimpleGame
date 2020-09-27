import { Character } from "./character.js";
import { Item } from "./item.js";
import { Skill } from "./skill.js";
import { Spell } from "./spell.js";

const divScreen1 = document.getElementById("screen1");
const divScreen2 = document.getElementById("screen2");
const divScreen3 = document.getElementById("screen3");
const divScreen4 = document.getElementById("screen4");
const rosterArray = [];
const mapArray = [];

const divRosterElement = document.getElementById("roster");
divRosterElement.innerHTML = "";

const divMapElement = document.getElementById("maps");
divMapElement.innerHTML = "";

divScreen2.style.display = "none";
divScreen3.style.display = "none";
divScreen4.style.display = "none";

const h1Loading = document.getElementById("loadingMessage");
const divMainMenu = document.getElementById("mainMenu");

divMainMenu.style.visibility = "hidden";

export const getObjects = async () => {
  await sleep(2000);
  const myBigBadObject = await fetch("json/bigbadobject.json");
  return await myBigBadObject.json();
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const loadRoster = (rawCharacters) => {
  for (const i in rawCharacters) {
    const character = new Character(rawCharacters[i]);
    rosterArray.push(character);
    const divCharacter = `
    <div class="ff7 character" id="character${i}">
    <div class="rosterCard" onclick="selectCharacter(${i})">
      <div class="image" style="background-image: url('${character.getImgCard()}')"></div>
    </div>
    <div class="rosterText" onclick="viewDetails(${i})">
      <h1>${character.getName()}</h1>
      <div class="info">
        <div><span class="property">Class:</span> ${character
          .getJob()
          .getJobName()}</div>
        <div class="customStat">
          <div class="numbers">
            <span class="property">HP: </span>
            <div class="">${character.getHP()} / ${character.getHP()}</div>
          </div>
          <div class="hiddenVar">
            <div class="hpVar"></div>
          </div>
        </div>

        <div class="customStat">
          <div class="numbers">
            <span class="property">MP: </span>
            <div class="">${character.getMP()} / ${character.getMP()}</div>
          </div>
          <div class="hiddenVar">
            <div class="mpVar"></div>
          </div>
        </div>
      </div>
    </div>
    
  </div>  
  `;

    const divDetail = `
  <div id="detail${i}" class="unselectableText">
    <div class="detail">
      <div class="detailTitle">
        <div>${character.getName()}</div>
      </div>
    <div class="ff7 detailContent">
      <div><span class="property">DEFENSE: </span>${JSON.stringify(
        character.getJob().getBaseDefense(),
        null,
        2
      )}</div>
      <div><span class="property">CRITICAL: </span>${JSON.stringify(
        character.getJob().getBaseCritic(),
        null,
        2
      )}</div>

      <div class="spells">
        Spells
        <div class="ff7 skillList">${drawSpells(character.getSpells())}</div>
      </div>

      <div class="skills">
        Skills
        <div class="ff7 skillList">${drawSkills(character.getSkills())}</div>
      </div>

      <div class="items">
        Items
        <div class="ff7 skillList">${drawItems(character.getItems())}</div>
      </div>
      
    </div>
    </div>
    <div class="buttonsForDetails">
        <div class="ff7 closeDetail" onclick="closeModal()"> close </div>
    </div>
  </div>`;
    divRosterElement.innerHTML += divCharacter;
    divDetailDisplay.innerHTML += divDetail;
  }

  localStorage.setItem("characters", JSON.stringify(rosterArray));
};

const drawSkills = (skills) => {
  if (skills.length === 0) return "";
  let auxDiv = "";
  for (const skill of skills) {
    auxDiv += `

    <div class="ff7 skillTitle"> 
      <span class="property"> ${skill.name}  </span> 
    </div>
    <div class="skillContent"> 
      <div> <span class="property">Desc: </span> ${skill.desc} </div>
      <div> <span class="property">DMG: </span> ${skill.dmg} </div>
      <div> <span class="property">Cooldown: </span> ${skill.cooldown} </div>
    </div>
    
    `;
  }
  return auxDiv;
};

const drawSpells = (skills) => {
  if (skills.length === 0) return "";
  let auxDiv = "";
  for (const spell of skills) {
    auxDiv += `

      <div class="ff7 skillTitle"> 
        <span class="property"> ${spell.name}  </span> 
      </div>
      <div class="skillContent"> 
        <div> <span class="property">Desc: </span> ${spell.desc} </div>
        <div> <span class="property"> ${
          spell.isForHeal ? " HEAL:" : "DMG:"
        }
        </span> ${spell.dmg} </div>
        <div> <span class="property">MP Cost: </span> ${spell.mpCost} </div>
      </div>
      `;
  }
  return auxDiv;
};

const drawItems = (items) => {
  
  if (items.length === 0) return "";
  let auxDiv = "";
  for (const item of items) {
    auxDiv += `

      <div class="ff7 skillTitle"> 
        <span class="property"> ${item.name}  </span> 
      </div>
      <div class="skillContent"> 
        <div> <span class="property">Desc: </span> ${item.desc} </div>
        <div> <span class="property"> Type: </span> ${item.type} ${item.isEquipable ? " [EQUIPED]" : ` [${item.quantity}]`} </div>
        <div> ${drawIncreasesOfItem(item.values)} </div>
      </div>
      `;
  }
  return auxDiv;
};

const drawIncreasesOfItem = (stats) => {
  let string = ``;
  //DMG    HP     MP    DEF     CRIT 
  stats[0] !== 0 ? string+= `[<span class="property">DMG: </span> ${stats[0]}]` : ``;
  stats[1] !== 0 ? string+= `[<span class="property">HP: </span> ${stats[1]}]` : ``;
  stats[2] !== 0 ? string+= `[<span class="property">MP: </span> ${stats[2]}]` : ``;
  stats[3] !== 0 ? string+= `[<span class="property">DEF: </span> ${stats[3]}]` : ``;
  stats[4] !== 0 ? string+= `[<span class="property">CRIT: </span> ${stats[4]}]` : ``;
  return string;
}


const loadMaps = (rawMaps) => {
  for (const i in rawMaps) {
    const map = rawMaps[i];
    mapArray.push(map);
    const divMap = `
    <div class="ff7 map" id="map${i}" style="background-image: url(${map.img})" onclick="selectMap(${i},'3')">
            <div class="rosterCard">
              <div class="image" style="background-image: url('${map.bossImg}'); background-color: black;"></div>
            </div>
            <div class="mapInfo">
              <h1>${map.name}</h1>
              <div class="descMap">
                <div><span class="property">Description:</span> ${map.desc}</div>
              </div>
            </div>
          </div>`;
    divMapElement.innerHTML += divMap;
  }
  localStorage.setItem("maps", JSON.stringify(mapArray));
};


getObjects()
  .then((res) => {
    h1Loading.innerHTML = `LOAD COMPLETE`;
    divMainMenu.style.visibility = "visible";
    loadRoster(res["characters"]);
    loadMaps(res["maps"]);

    // Logic here
  })
  .catch((err) => {
    h1Loading.innerHTML = `LOAD FAILED`;
  });
