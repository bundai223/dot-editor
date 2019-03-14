export default class Dot {
  constructor (x, y, size) {
    this.x = x
    this.y = y
    this.size = size
    this.palleteNo = -1
  }
  draw (palleteNo) {
    this.palleteNo = palleteNo
  }
  color () {
    if (this.palleteNo === -1) {
      return 'none'
    } else {
      return '#ffff00'
    }
  }
}
