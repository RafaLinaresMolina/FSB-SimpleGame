import { Job } from "./job.js";
import { Item } from "./item.js";
import { Skill } from "./skill.js";
import { Spell } from "./spell.js";

class Character {
  constructor(obj) {
    this.name = obj.name;
    this.job = new Job(obj.job);
    this.hp = this.job.getBaseHP();
    this.mp = this.job.getBaseMP();
    this.def = this.job.getBaseDefense();
    this.skills = this.job.getBaseSkills();
    this.spells = this.job.getBaseSpells();
    this.critic = this.job.getBaseCritic();
  }

  getName = () => this.name;
  getJob = () => this.job;
  getHP = () => this.hp;
  getMP = () => this.mp;
  getDef = () => this.def;
  getSkills = () => this.skills;
  getSpells = () => this.spells;
  getCritic = () => this.critic;

  setName = (value) => (this.name = value);
  setJob = (value) => (this.job = value);
  setHP = (value) => (this.hp = value);
  setMP = (value) => (this.mp = value);
  setDef = () => (this.def = value);
  setSkills = (value) => (this.skills = value);
  setSpells = (value) => (this.spells = value);
  setCritic = (value) => (this.critic = value);
}

export { Character };