class Spell {
  constructor(obj) {
    this.name = obj.name;
    this.desc = obj.desc;
    this.dmg = obj.dmg;
    this.mpCost = obj.mpCost;
    this.isArea = obj.isArea;
  }

  getName = () => this.name;
  setName = (value) => (this.name = value);

  getDesc = () => this.desc;
  setDesc = (value) => (this.desc = value);

  getDmg = () => this.dmg;
  setDmg = (value) => (this.dmg = value);

  getMpCost = () => this.mpCost;
  setMpCost = (value) => (this.mpCost = value);

  isAreaEfect = () => this.isArea;
  setAreaEfect = (value) => (this.isArea = value);
}

const spell1 = {
  name: "Fireball",
  desc: "you cast fire from your hands and deals damage.",
  damage: 200,
  mpCost: 30,
  isArea: true,
};

export { Spell };