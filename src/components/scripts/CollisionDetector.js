import Vec2 from './Vec2.js'
import * as col from './Collider.js'

export class CollisionDetector {
  constructor () {
    this._colliders = []
  }

  add (collider) {
    this._colliders.push (collider)
  }

  traverse (collider) {
    var detected = []
    this._colliders.map(elm => {
      return this.test (collider, elm)
    })
  }

  test (collider, collider) {
    return false
  }
}
