class Job {
  constructor(obj) {
    this.name = obj.name;
    this.baseHP = obj.baseHP;
    this.baseMP = obj.baseMP ? obj.baseMP : 0;
    this.baseDef = obj.baseDef ? obj.baseDef : 0;
    this.baseAtk = obj.baseAtk ? obj.baseAtk : 15;
    this.baseSkills = obj.baseSkills ? obj.baseSkills : 0;
    this.baseSpells = obj.baseSpells ? obj.baseSpells : [];
    this.baseCritic = obj.baseCritic ? obj.baseCritic : 20;
    this.basicItems = obj.basicItems ? obj.basicItems : [];
  }

  getJobName = () => this.name;
  setJobName = (value) => this.name = value;
  getBaseHP = () => this.baseHP;
  setBaseHP = (value) => this.baseHP = value;
  getBaseMP = () => this.baseMP;
  setBaseMP = (value) => this.baseMP = value;
  getBaseDefense = () => this.baseDef;
  setBaseAtk = (value) => this.baseAtk = value;
  getBaseAtk = () => this.baseAtk;
  
  setBaseDefense = (value) => this.baseDef = value;
  getBaseCritic = () => this.baseCritic;
  setBaseCritic = (value) => this.baseCritic = value;
  getBaseAtacks = () => this.baseAtacks;
  setBaseAtacks = (value) => this.baseAtacks = value;

  getBaseSpells = () => this.baseSpells;
  setBaseSpells = (value) => this.baseSpells = value;
  getBaseSkills = () => this.baseSkills;
  setBaseSkills = (value) => this.baseSkills = value;

  getBasicItems = () => this.basicItems;
  setBasicItems = (value) => this.basicItems = value;

  getSkillById = (pos) => this.baseSkills[pos];
  getAtackId = (pos) => this.baseAtacks[pos];
  getSpellById = (pos) => this.baseSpells[pos];
  isSpellDoable = (pos) => getSpellById(pos).getMpCost() > this.getJob().getBaseMP();
  isSpellArea = (pos) => getSpellById(pos).isArea();
  castSpell = (pos) => {
    if (this.getJob().getBaseMP() > 0 && isSpellDoable(pos)) {
      return getSpellById(pos).getDmg();
    } else {
      return false;
    }
  };
}

export { Job };