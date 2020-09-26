const divSelectedElement = document.getElementById("selected");
divSelectedElement.innerHTML = "";
const selectedArray = [];

const cambiaPantalla = (valor) => {
  console.log(valor);
  let screen = "screen" + valor;
  let arrayFases = ["screen1", "screen2", "screen3", "screen4", "screen5"];
  arrayFases = arrayFases.filter((val) => !screen.includes(val));

  document.getElementById(screen).style.display = "block";
  for (let pantalla of arrayFases) {
    document.getElementById(pantalla).style.display = "none";
  }
};

const deSelectCharacter = (i, pos) => {
  console.log(i, pos);
  selectedArray.splice(pos);
  document.getElementById("selected" + i).remove();
  document.getElementById("character" + i).style.display = "flex";
};

const selectCharacter = (i) => {
  if (selectedArray.length < 3) {
    const arrayRaw = localStorage.getItem("characters");
    const characters = JSON.parse(arrayRaw);
    const character = characters[i];
    selectedArray.push(character);
    console.log(selectedArray.length - 1);
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
    console.log(selectedArray);
    return character;
  }
};
