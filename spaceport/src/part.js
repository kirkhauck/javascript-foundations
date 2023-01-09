class Part {
  constructor(part) {
    this.name = part.name;
    this.type = part.type;
    this.value = part.value;
    this.broken = false;
    this.isValid = true;
  }

  checkForValidity() {
    if (!this.name) {
      this.isValid = false;
      return 'This part needs a name!';
    } else if (!this.type) {
      this.isValid = false;
      return 'This part needs a type!';
    } else if (!this.value) {
      this.isValid = false;
      return 'This part needs a value!';
    } else {
      this.isValid = true;
    }
  }
}

module.exports = Part;