class Skill {
  constructor(obj) {
    this.name = obj.name;
    this.desc = obj.desc;
    this.dmg = obj.dmg;
    this.cooldown = obj.cooldown;
    this.currentCoolDown = 0;
  }

  getName = () => this.name;
  setName = (value) => (this.name = value);

  getDesc = () => this.desc;
  setDesc = (value) => (this.desc = value);

  getDmg = () => this.dmg;
  setDmg = (value) => (this.dmg = value);

  isSkillReady = () => {
    return this.currentCoolDown === 0;
  };
}

const skill1 = {
  name: "Seek & destroy",
  desc: "you ambush your enemy from the shadows and dealt a lot of damage.",
  damage: 200,
  cooldown: 3,
  currentCoolDown: 0,
};


export { Skill };