class Item {
  constructor(obj) {
    this.name = obj.name;
    this.desc = obj.desc;
    this.isEquipable = obj.isEquipable;
    // type can be ['weapon', 'armor', 'ring', 'head', 'consumable']
    this.type = obj.type;
    //       [DMG    HP     MP    DEF     CRIT  ]
    // array [ 0     0      0      0       0    ]
    this.values = obj.values;
    this.isInArea = obj.isInArea;
    // Increase damage for atak/skill OR magic spell
    this.isMagical = obj.isMagical;
  }

  validTypes = ["weapon", "armor", "ring", "head", "consumable"];

  setName = (value) => (this.name = value);

  getName() {
    return this.name;
  }

  setDesc(value) {
    this.desc = value;
  }

  getDesc() {
    return this.desc;
  }

  setIsEquipable(value) {
    this.isEquipable = value;
  }

  isEquipable() {
    return this.isEquipable;
  }

  getType() {
    return this.type;
  }

  setType(value) {
    if (validTypes.includes(value)) {
      this.type = value;
    } else {
      console.log(`The type ${value} does not exist`);
    }
  }

  getValues() {
    return this.values;
  }

  getValueByPosition(pos) {
    return this.values[pos]
      ? this.values[pos]
      : console.log(`The position ${pos} does not exist`);
  }

  setValues(values) {
    this.values = values;
  }

  setIsInArea(value) {
    this.isInArea = value;
  }

  isInArea() {
    return this.isInArea;
  }

  setIsMagical(value) {
    this.isInArea = value;
  }

  isMagical() {
    return this.isInArea;
  }
}

export { Item };