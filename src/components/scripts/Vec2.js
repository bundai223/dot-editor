export default class Vec2 {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  clone () {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }
}
