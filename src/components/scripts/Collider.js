import Vec2 from './Vec2.js'

export class Collider {
  constructor (type) {
    this._type = type
  }

  get type () {
    return this._type
  }
}

export class Rectangle extends Collider {
  constructor (x, y, w, h) {
    super('rectangle')
    this.pos = new Vec2(x, y)
    this.w = w
    this.h = h
    var hw = w / 2
    var hh = h / 2
    this.lt = new Vec2(x - hw, y - hh)
    this.rd = new Vec2(x + hw, y + hw)
  }

  get center () { return this.pos }
  get leftTop () { return this.lt }
  get rightDown () { return this.rd }
}

export class Circle extends Collider {
  constructor (x, y, r) {
    super('circle')
    this.pos = new Vec2(x, y)
    this.r = r
  }

  get center () { return this.pos }
  get r () { return this.r }
}
