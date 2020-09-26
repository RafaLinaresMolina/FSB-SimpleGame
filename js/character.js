import { Job } from "./job.js";

class Character {
  constructor(obj) {
    this.name = obj.name;
    this.job = new Job(obj.job);
    console.log(JSON.stringify(this.job.baseSpells, null, 2));
    this.hp = this.job.getBaseHP();
    this.mp = this.job.getBaseMP();
    this.def = this.job.getBaseDefense();
    console.log(JSON.stringify(this.job.getBaseDefense(), null, 2));
    this.skills = this.job.getBaseSkills();
    console.log(JSON.stringify(this.job.getBaseSkills(), null, 2));
    this.spells = this.job.getBaseSpells();
    console.log(JSON.stringify(this.job.getBaseSpells(), null, 2));
    this.critic = this.job.getBaseCritic();
    console.log(JSON.stringify(this.job.getBaseCritic(), null, 2));

    this.imgCard = obj.imgCard ? obj.imgCard : '../img/portraits/default.jpg';
    this.imgGame = obj.imgGame ? obj.imgGame : '../img/portraits/default.jpg';
  }

  getName = () => this.name;
  getJob = () => this.job;
  getHP = () => this.hp;
  getMP = () => this.mp;
  getDef = () => this.def;
  getSkills = () => this.skills;
  getSpells = () => this.spells;
  getCritic = () => this.critic;
  getImgCard = () => this.imgCard;
  getImgGame = () => this.imgGame;

  setName = (value) => (this.name = value);
  setJob = (value) => (this.job = value);
  setHP = (value) => (this.hp = value);
  setMP = (value) => (this.mp = value);
  setDef = () => (this.def = value);
  setSkills = (value) => (this.skills = value);
  setSpells = (value) => (this.spells = value);
  setCritic = (value) => (this.critic = value);
  setImgGame = (value) => this.imgCard = value;
  setImgGame = (value) => this.imgGame = value;
}

export { Character };