//A Vector Type
class Vector {
    constructor (x, y) {
      this.x = x;
      this.y = y;
    }
    plus(v) {
      return new Vector(this.x + v.x, this.y + v.y);
    }
    minus(v) {
      return new Vector(this.x - v.x, this.y - v.y);
    }
    get length() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}
console.log(new Vector(1, 2).plus(new Vector(2, 3)));