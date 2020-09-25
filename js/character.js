class Character {
  constructor(obj) {
    this.name = obj.name;
    this.job = new Job(obj.job);
  }

  getJob() {
    return this.job;
  }

  setJob(value) {
    this.job = value;
  }

  getDamage(dmg, isMagic = false) {
    if (isMagic && this.magicPoints <= 0) {
      console.log("Out of Magic!");
    } else {
      let finalDamage = 0;
      if (dmg > this.defense) {
        if (isMagic) {
          finalDamage = dmg;
        } else {
          finalDamage = dmg - this.defense;
          console.log("Armor absorbed " + this.defense);
        }
        this.healthPoints -= finalDamage;
        console.log(this.name + " recive: " + finalDamage + " damage!");
      } else console.log("Can't break though the armor");
    }
  }

  setLostMagic(mpCost) {
    this.magicPoints -= mpCost;
    if (this.magicPoints <= 0) {
      console.log("Out of Magic!");
    }
  }
}

export { Character };