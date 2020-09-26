class Spell {
  constructor(obj) {
    this.name = obj.name;
    this.desc = obj.desc;
    this.dmg = obj.dmg;
    this.mpCost = obj.mpCost;
    this.isArea = obj.isArea ? obj.isArea : false;
    this.isForHeal = obj.isForHeal ? obj.isForHeal : false;
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
  isForHeal = () => this.isForHeal;
  setIsForHeal = (value) => this.isForHeal = value;
}

export { Spell };