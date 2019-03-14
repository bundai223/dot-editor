// import Vec2 from './Vec2.js'
// import * as Collider from './Collider.js'

export class CollisionDetector {
  constructor () {
    this._colliders = []
  }

  add (collider) {
    this._colliders.push(collider)
  }

  traverse (collider) {
    var detected = this._colliders.map(elm => {
      return this.test(collider, elm)
    })
    return (detected.length > 0)
  }

  test (target, collider) {
    return false
  }
}
