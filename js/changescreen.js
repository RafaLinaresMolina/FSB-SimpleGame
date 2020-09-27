const divSelectedElement = document.getElementById("selected");
divSelectedElement.innerHTML = "";
const selectedArray = [];

const divDetailDisplay = document.getElementById("detailDisplay");
divDetailDisplay.innerHTML = "";

let terminal = document.getElementById("progressText");
terminal.innerHTML = "";

let mapArray;
let enemyArray;
let mapSelected;

const fightUpMessage = document.getElementById("fightMessage");

const cambiaPantalla = (valor) => {
  let screen = "screen" + valor;
  if (screen === "screen3" && !isFightable()) {
    return false;
  }

  let arrayFases = ["screen1", "screen2", "screen3"];
  arrayFases = arrayFases.filter((val) => !screen.includes(val));

  document.getElementById(screen).style.display = "block";
  for (let pantalla of arrayFases) {
    document.getElementById(pantalla).style.display = "none";
  }
};

const selectMap = (mapId, valor) => {
  mapSelected = mapId;
  mapArray = JSON.parse(localStorage.getItem("maps"));
  const map = mapArray[mapId];
  document.getElementById(
    "fightVisuals"
  ).style.backgroundImage = `url(${map.img})`;
  cambiaPantalla(valor);
  drawPlayers();
  drawNPCs(mapId);
};

const deSelectCharacter = (i, pos) => {
  selectedArray.splice(pos);
  document.getElementById("selected" + i).remove();
  document.getElementById("character" + i).style.display = "flex";
};

const isFightable = () => {
  return selectedArray.length === 0 ? false : true;
};

const drawPlayers = () => {
  for (const i in selectedArray) {
    let elem = document.getElementById("ch" + (parseInt(i) + 1));
    elem.innerHTML = "";
    selectedArray[i];
    elem.innerHTML += `
      <div class="stats" id="ch${i + 1}Stat">
        <div style="display: flex; flex-direction: row"> <span class="property">[${
          selectedArray[i].name
        }]</span> </div>
        <div style="display: flex; flex-direction: row"> <span class="property">LVL:</span> ${
          selectedArray[i].lvl
        } </div>
        <div style="display: flex; flex-direction: row"> <span class="property">[HP] </span> ${
          selectedArray[i].hp
        } / ${selectedArray[i].initialHP}</div>
        <div style="display: flex; flex-direction: row"> <span class="property">[MP] </span> ${
          selectedArray[i].mp
        } / ${selectedArray[i].initialMP}</div>
      </div>
      <div class="charImg" id="ch${i + 1}Img" style="background-image: url(${
      selectedArray[i].imgGame
    })">
        <div style="display: flex; flex-direction: row"></div>
      </div>
      <div class="charNum" id="ch${i + 1}Numbers">
        <div style="display: flex; flex-direction: row"></div>
      </div>
    `;
  }
};

const drawNPCs = (mapId) => {
  enemyArray = mapArray[mapId].enemies;
  for (const i in enemyArray) {
    let elem = document.getElementById("npc" + (parseInt(i) + 1));
    elem.innerHTML = "";
    selectedArray[i];
    elem.innerHTML += `
      <div class="npcNum" id="npc${i + 1}Numbers">
        <div style="display: flex; flex-direction: row; align-self: flex-end;"></div>
      </div>
      <div class="charImg" id="npc${i + 1}Img" style="background-image: url(${
      enemyArray[i].imgGame
    })">
        <div style="display: flex; flex-direction: row"></div>
      </div>
      <div class="stats" id="npc${i + 1}Stat">
        <div style="display: flex; flex-direction: row; align-self: flex-end;"> <span class="property">[${
          enemyArray[i].name
        }]</span> </div>
        <div style="display: flex; flex-direction: row; align-self: flex-end;"> <span class="property">LVL: </span> ${
          enemyArray[i].lvl
        } </div>
        <div style="display: flex; flex-direction: row; align-self: flex-end;"> ${
          enemyArray[i].hp
        } / ${enemyArray[i].initialHP} <span class="property">[HP] </span></div>
      </div>
    `;
  }
};

const selectCharacter = (i) => {
  if (selectedArray.length < 3) {
    const arrayRaw = localStorage.getItem("characters");
    const characters = JSON.parse(arrayRaw);
    const character = characters[i];
    selectedArray.push(character);
    const divCharacter = `
      <div class="ff7 character" id="selected${i}" onclick="deSelectCharacter(${i},${
      selectedArray.length - 1
    })">
      <div class="rosterCard">
        <div class="image" style="background-image: url('${
          character.imgCard
        }')"></div>
      </div>
      <div class="rosterText">
        <h1>${character.name}</h1>
        <div class="info">
          <div><span class="property">Class:</span> ${character.job.name}</div>
          <div class="customStat">
            <div class="numbers">
              <span class="property">HP: </span>
              <div class="">${character.hp} / ${character.hp}</div>
            </div>
            <div class="hiddenVar">
              <div class="hpVar"></div>
            </div>
          </div>
  
          <div class="customStat">
            <div class="numbers">
              <span class="property">MP: </span>
              <div class="">${character.mp} / ${character.mp}</div>
            </div>
            <div class="hiddenVar">
              <div class="mpVar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    document.getElementById("character" + i).style.display = "none";
    divSelectedElement.innerHTML += divCharacter;
    return character;
  }
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const min = 1;
const max = 20;
const tirarDado = () => Math.floor(Math.random() * (max - min + min)) + 1;

const keepFighting = () => {
  let charactersLifeLeft = 0;
  let npcLifeLeft = 0;
  for (const i in selectedArray) {
    charactersLifeLeft += selectedArray[i].hp > 0 ? selectedArray[i].hp : 0;
  }
  for (const i in enemyArray) {
    npcLifeLeft += enemyArray[i].hp > 0 ? enemyArray[i].hp : 0;
  }
  const keepGoing = npcLifeLeft > 0 && charactersLifeLeft > 0;

  terminal.innerHTML += `<span class="auxText2">  &nbsp;&nbsp;&nbsp;&nbsp;Players pool Life: ${charactersLifeLeft} | NPC pool Life: ${npcLifeLeft} </span> <br>`;
  
  if(!keepGoing){
    document.getElementById('modalEndgame').style.display = 'block';
    console.log('asd')
    if(charactersLifeLeft > 0){
      document.getElementById('modalFightTitle').innerHTML = 'YOU WIN !';
    }else{
      document.getElementById('modalFightTitle').innerHTML = 'You lose...';
    }
    
    terminal.innerHTML += `<span class="auxText">  &nbsp;&nbsp; - THE END - </span> <br>`;
  }
  
  return keepGoing ? true : false;
};

const fight = (whoStart) => {
  
  if (keepFighting()) {
    terminal.innerHTML += `<span class="auxText">  &nbsp;&nbsp; NEW TURN </span> <br>`;
    if (whoStart % 2 === 0) {
      playerMove();
      npcMove();
    } else {
      npcMove();
      playerMove();
    }
  } 
  keepFighting();
};

const npcWithLessLife = () => {
  let auxCharacter = enemyArray[0];
  let pos = 0;
  for (const i in enemyArray) {
    terminal.innerHTML += `<span class="auxText">  &nbsp;&nbsp;&nbsp; NPC ${enemyArray[i].name} : ${enemyArray[i].hp} HP </span> <br>`;
    if (!enemyArray[i].isDead && auxCharacter.hp < enemyArray[i].hp) {
      pos = i;
      auxCharacter = enemyArray[i];
    }
  }

  terminal.innerHTML += `<span class="auxText">  &nbsp;&nbsp;&nbsp; NPC with higer life ${auxCharacter.name} </span> <br>`;
  return pos;
};

const chWithLessLife = () => {
  let auxCharacter = selectedArray[0];
  let pos = 0;
  for (const i in selectedArray) {
    terminal.innerHTML += `<span class="auxText">  &nbsp;&nbsp;&nbsp; CH   ${selectedArray[i].name} : ${selectedArray[i].hp} HP </span> <br>`;
    if (!selectedArray[i].isDead && auxCharacter.hp < selectedArray[i].hp) {
      pos = i;
      auxCharacter = selectedArray[i];
    }
  }
  terminal.innerHTML += `<span class="auxText">  &nbsp;&nbsp;&nbsp; Character with higer life ${auxCharacter.name} </span> <br>`;
  return pos;
};

const calculateCritical = (crit, dmg) => {
  const dado = tirarDado();
  if (dado >= crit) {
    terminal.innerHTML += `<span class="auxText">  &nbsp;&nbsp;&nbsp; CRITICAL! </span> <br>`;
    return dmg * 2;
  } else if (dado === 1) {
    terminal.innerHTML += `<span class="auxText">  &nbsp;&nbsp;&nbsp; MISS  </span> <br>`;
    return 0;
  } else {
    return dmg;
  }
};

const npcMove = () => {
  for (const npc of enemyArray) {
    if (npc.hp > 0) {
      terminal.innerHTML += `<span class="npcText">  [${npc.name}] </span> <br>`;
      const dmg = calculateCritical(npc.critic, npc.atk);

      let finalDamage;
      let pos = chWithLessLife();

      finalDamage =
        dmg - selectedArray[pos].def < 0 || dmg === 0
          ? 0
          : dmg - selectedArray[pos].def;

      terminal.innerHTML += `<span class="auxText"> &nbsp;&nbsp;&nbsp;&nbsp; ATK: ${dmg} vs DEF:${selectedArray[pos].def} = DMG: ${finalDamage} </span> <br>`;

      selectedArray[pos].hp -= finalDamage;

      terminal.innerHTML += `<span class="npcText"> &nbsp;&nbsp;&nbsp;&nbsp; ${npc.name} atack with ${finalDamage} damage! </span> <br>`;
      terminal.innerHTML += `<span class="npcText"> &nbsp;&nbsp;&nbsp;&nbsp; ${selectedArray[pos].name} have ${selectedArray[pos].hp} HP </span> <br>`;

      if (selectedArray[pos].hp <= 0) {
        selectedArray[pos].isDead = true;
      }
    }
    drawPlayers();
  }
};

const playerMove = () => {
  for (const ch of selectedArray) {
    if (ch.hp > 0) {
      terminal.innerHTML += `<span class="chText"> [${ch.name}] </span> <br>`;
      const dmg = calculateCritical(ch.critic, ch.atk);
      let finalDamage;
      let pos = npcWithLessLife();

      finalDamage =
        dmg - enemyArray[pos].def < 0 || dmg === 0
          ? 0
          : dmg - enemyArray[pos].def;
      terminal.innerHTML += `<span class="auxText"> &nbsp;&nbsp;&nbsp;&nbsp; ATK: ${dmg} vs DEF:${enemyArray[pos].def} = DMG: ${finalDamage} </span> <br>`;
      enemyArray[pos].hp -= finalDamage;
      terminal.innerHTML += `<span class="chText"> &nbsp;&nbsp;&nbsp;&nbsp; ${ch.name} atack with ${finalDamage} damage! </span> <br>`;
      terminal.innerHTML += `<span class="chText"> &nbsp;&nbsp;&nbsp;&nbsp; ${enemyArray[pos].name} remain with ${enemyArray[pos].hp} HP </span> <br>`;

      if (enemyArray[pos].hp <= 0) {
        enemyArray[pos].isDead = true;
      }
    }
    drawNPCs(mapSelected);
  }
};

const viewDetails = (valor) => {
  let detail = "detail" + valor;
  let arrayDetail = ["detail0", "detail1", "detail2", "detail3", "detail4"];
  arrayDetail = arrayDetail.filter((val) => !detail.includes(val));

  document.getElementById(detail).style.display = "block";
  for (let pantalla of arrayDetail) {
    document.getElementById(pantalla).style.display = "none";
  }

  divDetailDisplay.style.display = "block";
};

const closeModal = () => {
  divDetailDisplay.style.display = "none";
};


const refresh = () => {
  location.reload(); 
}