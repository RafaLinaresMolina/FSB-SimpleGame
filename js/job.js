class Job {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.baseHP = obj.baseHP;
    this.baseMP = obj.baseMP;
    this.baseDef = obj.baseDef;
    this.baseAtacks = obj.baseAtacks;
    this.baseSkills = obj.baseSkills;
    this.baseSpells = obj.baseSpells;
    this.baseCritic = obj.baseCritic;
    this.basicItems = obj.basicItems;
  }

  getJobName() {
    return this.name;
  }

  setJobName(value) {
    this.name = value;
  }

  getBaseHP() {
    return this.baseHP;
  }

  setBaseHP(value) {
    this.baseHP = value;
  }

  getBaseMP() {
    return this.baseMP;
  }

  setBaseMP(value) {
    this.baseMP = value;
  }

  getBaseDefense() {
    return this.baseDef;
  }

  setBaseDefense(value) {
    this.baseDef = value;
  }

  getBaseCritic() {
    return this.baseCritic;
  }

  setBaseCritic(value) {
    this.baseCritic = value;
  }

  setBaseAtacks() {
    return this.baseAtacks;
  }

  getBaseAtacks(value) {
    this.baseAtacks = value;
  }

  getBaseSpells() {
    return this.baseSpells;
  }

  getBaseSpells(value) {
    this.baseSpells = value;
  }

  getSkillById = (pos) => this.baseSkills[pos];
  getAtackId = (pos) => this.baseAtacks[pos];
  getSpellById = (pos) => this.baseSpells[pos];

  isSpellDoable = (pos) => {
    return getSpellById(pos).getMpCost() > this.getJob().getBaseMP();
  };

  isSpellArea = (pos) => {
    return getSpellById(pos).isArea();
  };

  castSpell = (pos) => {
    if (this.getJob().getBaseMP() > 0 && isSpellDoable(pos)) {
      return getSpellById(pos).getDmg();
    } else {
      console.log(`Can't cast Magic.`);
    }
  };
}

const jobs = [
  {
    id: 0,
    name: "Paladin",
    baseHP: 120,
    baseMP: 75,
    baseDef: 25,
    baseAtacks: [
      { name: "Holy Diver", damage: 35 },
      { name: "Slice & Cut!", damage: 40 },
    ],
    baseSpells: [
      { name: "Smite", damage: 60, costMP: 50 },
      { name: "Heal", damage: -40, costMP: 25 },
    ],
  },
  {
    id: 1,
    name: "Wizard",
    baseHP: 80,
    baseMP: 150,
    baseDef: 5,
    baseAtacks: [{ name: "Stab & pray (that the enemy is dead)", damage: 15 }],
    baseSpells: [
      { name: "Fireball", damage: 60, costMP: 40 },
      { name: "Icy separ", damage: 50, costMP: 25 },
      { name: "Lighting bolt", damage: 20, costMP: 0 },
      { name: "You `Under the rocks´", damage: 65, costMP: 50 },
    ],
  },
  {
    id: 2,
    name: "Fighter",
    baseHP: 150,
    baseMP: 20,
    baseDef: 40,
    baseAtacks: [
      { name: "Hit with the shield!", damage: 25 },
      { name: "Omnislash", damage: 40 },
      { name: "Kick in the nuts", damage: 25 },
    ],
  },
  {
    id: 3,
    name: "Roge",
    baseHP: 90,
    baseMP: 30,
    baseDef: 10,
    baseAtacks: [
      { name: "Behind you", damage: 30 },
      { name: "Throwing knive", damage: 30 },
      { name: "Hidden gun", damage: 30 },
    ],
    baseSpells: [{ name: "Ambush", damage: 200, costMP: 30 }],
  },
];


export { Job };