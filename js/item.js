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
    this.quantity = obj.quantity;
  }

  validTypes = ["weapon", "armor", "ring", "head", "consumable"];

  setName = (value) => (this.name = value);
  getName = () => this.name;
  setDesc = (value) => (this.desc = value);
  getDesc = () => this.desc;
  setIsEquipable = (value) => (this.isEquipable = value);
  isEquipable = () => this.isEquipable;
  getType = () => this.type;
  setType = (value) => {
    if (validTypes.includes(value)) {
      this.type = value;
    } else {
      this.type = 'consumable';
    }
  };
  getValues = () => this.values;
  getValueByPosition = (pos) =>
    this.values[pos]
      ? this.values[pos]
      : 0;

  setValues = (values) => this.values = values;
  setIsInArea = (value) => this.isInArea = value;
  isInArea = () => this.isInArea;
  setIsMagical = (value) => this.isInArea = value;
  isMagical = () => this.isInArea;
  getQuantity = () => this.quantity;
  setQuantity = (value) => this.quantity = value;
}

export { Item };