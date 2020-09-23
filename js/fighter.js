class Item{
  constructor(obj){
    this.name = obj.name,
    this.desc = obj.desc,
    this.isEquipable = obj.isEquipable,
    // type can be ['weapon', 'armor', 'ring', 'head', 'consumable']
    this.type = obj.type,
    //       [DMG    HP     MP    DEF     CRIT  ]
    // array [ 0     0      0      0       0    ]
    this.values = obj.values,
    this.isInArea = obj.isInArea,
    // Increase damage for atak/skill OR magic spell
    this.isMagical = obj.isMagical
  }

  validTypes = ['weapon', 'armor', 'ring', 'head', 'consumable'];

  setName(value){
    this.name = value;
  }

  getName(){
    return this.name;
  }

  setDesc(value){
    this.desc = value;
  }

  getDesc(){
    return this.desc;
  }

  setIsEquipable(value){
    this.isEquipable = value;
  }

  isEquipable(){
    return this.isEquipable;
  }

  getType(){
    return this.type;
  }

  setType(value){
    if(validTypes.includes(value)){
      this.type = value;
    } else {
      console.log(`The type ${value} does not exist`);
    }
  }

  getValues(){
    return this.values;
  }

  getValueByPosition(pos){
    return this.values[pos] ? this.values[pos] : console.log(`The position ${pos} does not exist`);
  }

  setValues(values){
    this.values = values;
  }

  setIsInArea(value){
    this.isInArea = value;
  }

  isInArea(){
    return this.isInArea;
  }

  setIsMagical(value){
    this.isInArea = value;
  }

  isMagical(){
    return this.isInArea;
  }
}

// Examples of Items

const helmet1 = {
  name: "Casco de acero valirio.",
  desc: "Este casco valirio protege mucho",
  isEquipable: true,
  type: 'head',
  values: [0, 0, 0, 5, 0],
  isInArea: false,
  isMagical: false
}

const sword1 = {
  name: "Espada de madera",
  desc: "Espada de madera, no muy util",
  isEquipable: true,
  type: 'weapon',
  values: [10, 0, 0, 0, 0],
  isInArea: false,
  isMagical: false
}

const potion1 = {
  name: "Pocion de Mana",
  desc: "Pocion de Mana para recuperar magia",
  isEquipable: false,
  type: 'consumable',
  values: [0, 0, 20, 0, 0],
  isInArea: false,
  isMagical: false
}

const bomb1 = {
  name: "Bomba alquimica",
  desc: "No quieres que te pille",
  isEquipable: false,
  type: 'consumable',
  values: [0, 0, 40, 0, 0],
  isInArea: true,
  isMagical: false
}

const potion2 = {
  name: "Vial de Acido",
  desc: "Produce daño por acido",
  isEquipable: false,
  type: 'consumable',
  values: [20, 0, 0, 0, 0],
  isInArea: false,
  isMagical: true
}

const ring1 = {
  name: "Anillo unico",
  desc: "Sauron lo busca",
  isEquipable: true,
  type: 'ring',
  values: [100, 100, 100, 100, 1],
  isInArea: false,
  isMagical: true
}

const vara1 = {
  name: "Vara de mago",
  desc: "Gandalf la ha perdido",
  isEquipable: true,
  type: 'weapon',
  values: [50, 15, 15, 10, 1],
  isInArea: false,
  isMagical: true
}


class Job{
  constructor(obj){
    this.id = obj.id;
    this.name = obj.name;
    this.baseHP = obj.baseHP;
    this.baseMP = obj.baseMP;
    this.baseDef = obj.baseDef
    this.baseAtacks = obj.baseAtacks;
    this.baseCritic = obj.baseCritic;
    this.basicItems = obj.basicItems;
  }

  getJobName(){
    return this.name;
  }

  setJobName(value){
    this.name = value;
  }

  getBaseHP(){
    return this.baseHP;
  }

  setBaseHP(value){
    this.baseHP = value;
  }

  getBaseMP(){
    return this.baseMP;
  }

  setBaseMP(value){
    this.baseMP = value;
  }

  getBaseDefense(){
    return this.baseDef;
  }

  setBaseDefense(value){
    this.baseDef = value;
  }

  getBaseCritic(){
    return this.baseCritic;
  }

  setBaseCritic(value){
    this.baseCritic = value;
  }

  setBaseAtacks(){
    return this.baseAtacks;
  }

  getBaseAtacks(value){
    this.baseAtacks = value;
  }

}

class SkillAtack{
  constructor(obj){
    this.name = obj.name,
    this.desc = obj.desc,
    this.dmg = obj.dmg,
    this.cooldown = obj.cooldown
  }

  getName = () => this.name;
  setName = value => this.name = value;
  
  getDesc = () => this.desc;
  setDesc = value => this.desc = value;

  getDmg = () => this.dmg;
  setDmg = value => this.dmg = value;
}

const skill1 = { name: "Seek & destroy", desc: "you ambush your enemy from the shadows and dealt a lot of damage.", damage: 200, cooldown: 3};


const jobs = [
  {
    id: 0,
    name: "Paladin",
    baseHP: 120,
    baseMP: 75,
    baseDef: 25,
    baseAtacks: [
      { name: "Holy Diver", damage: 35},
      { name: "Slice & Cut!", damage: 40},
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

class DefaultPJ {
  constructor(obj) {
    this.name = obj.name;
    this.job = new Job(obj.job);
    this.backpack = this.job.getBasicItems();
    this.equipedItems = this.job.getEquipedItems();
  }

  getJob(){
    return this.job;
  }

  setJob(value){
    this.job = value
  }

  setAtacks(atacks) {
    this.atacks = atacks;
  }

  setSpells(spells) {
    this.spells = spells;
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

class meleAtack {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
}

class magicAtack {
  constructor(name, damage, costMP) {
    this.name = name;
    this.damage = damage;
    this.costMP = costMP;
  }
}

let fighter1 = new DefaultPJ("Arthur", 2);
let fighter2 = new DefaultPJ("Merlin", 1);

console.log(fighter1.name + " vs. " + fighter2.name);

console.log(
  "Sir. " + fighter1.name + " will try to do " + fighter1.atacks[0].name
);
fighter2.getDamage(fighter2.spells[0].damage);

console.log(
  fighter2.name +
    " turn.\n" +
    fighter2.healthPoints +
    " HP remaining | " +
    fighter2.magicPoints +
    " MP remaining."
);

console.log(
  "Sir. " + fighter2.name + " will try to do " + fighter2.spells[0].name
);
fighter1.getDamage(fighter2.spells[0].damage, true);
fighter2.setLostMagic(fighter2.spells[0].costMP);

console.log(
  fighter1.name +
    " turn.\n" +
    fighter1.healthPoints +
    " HP remaining | " +
    fighter1.magicPoints +
    " MP remaining."
);
