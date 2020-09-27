const divSelectedElement = document.getElementById("selected");
divSelectedElement.innerHTML = "";
const selectedArray = [];

const divDetailDisplay = document.getElementById("detailDisplay");
divDetailDisplay.innerHTML = "";

const cambiaPantalla = (valor) => {
  let screen = "screen" + valor;
  let arrayFases = ["screen1", "screen2", "screen3", "screen4"];
  arrayFases = arrayFases.filter((val) => !screen.includes(val));

  document.getElementById(screen).style.display = "block";
  for (let pantalla of arrayFases) {
    document.getElementById(pantalla).style.display = "none";
  }
};

const deSelectCharacter = (i, pos) => {
  selectedArray.splice(pos);
  document.getElementById("selected" + i).remove();
  document.getElementById("character" + i).style.display = "flex";
};

const isFightable = () => {
  return selectedArray.length === 0 ? false : true;
}

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


const viewDetails = (valor) => {
  let detail = "detail" + valor;
  let arrayDetail = ["detail0", "detail1", "detail2", "detail3", "detail4"];
  arrayDetail = arrayDetail.filter((val) => !detail.includes(val));

  document.getElementById(detail).style.display = "block";
  for (let pantalla of arrayDetail) {
    document.getElementById(pantalla).style.display = "none";
  }

  divDetailDisplay.style.display = 'block';
  
}

const closeModal = () => {
  divDetailDisplay.style.display = 'none';
}