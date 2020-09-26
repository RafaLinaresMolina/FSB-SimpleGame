class Skill {
  constructor(obj) {
    this.name = obj.name;
    this.desc = obj.desc;
    this.dmg = obj.dmg;
    this.cooldown = obj.cooldown ? obj.cooldown : 0;
    this.currentCoolDown = 0;
  }

  getName = () => this.name;
  setName = (value) => (this.name = value);
  getDesc = () => this.desc;
  setDesc = (value) => (this.desc = value);
  getDmg = () => this.dmg;
  setDmg = (value) => (this.dmg = value);
  isSkillReady = () => this.currentCoolDown === 0;
}

export { Skill };