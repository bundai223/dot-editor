<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" :width='width' :height='height' v-on:mousedown='drawStart' v-on:mouseup='drawEnd' v-on:mousemove='draw' ref='grid'>
      <template v-for='(_x, x) in gridNumW'>
        <template v-for='(_y, y) in gridNumH'>
          <rect :x='gridSize * x' :y='gridSize * y' :width='gridSize' :height='gridSize' :rx='0' :ry='0' :fill='color(x, y)' :stroke='stroke' :stroke-width='lineWidth' v-on:click='draw(x, y)'/>
          <text :x='gridSize * x' :y='gridSize * (y + 1)' font-size='8' v-if='showGridNo'>{{ gridIndex(x, y) }}</text>
          <text :x='gridSize * x' :y='gridSize * (y + 1)' font-size='8' v-if='showPalleteNo'>{{ grid(x, y)['pallete']}}</text>
        </template>
      </template>
    </svg>
</template>

<script>
class Dot {
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

export default {
  data: function () {
    return {
      stroke: '#000000',
      griddata: [],
      drawing: false,
      no: false,
      pallete: false
    }
  },

  computed: {
    showGridNo: function () {
      return this.no
    },
    showPalleteNo: function () {
      return this.pallete
    },
    gridSize: function () {
      return 20
    },
    gridNumW: function () {
      return 32
    },
    gridNumH: function () {
      return 32
    },
    width: function () {
      return this.gridSize * this.gridNumW
    },
    height: function () {
      return this.gridSize * this.gridNumH
    },
    lineWidth: function () {
      return 1
    },
    currentPalleteNo: function () {
      return 1
    }
  },
  methods: {
    gridIndex: function (x, y) {
      return x + (y * this.gridNumW)
    },
    grid: function (x, y) {
      var index = this.gridIndex(x, y)
      return this.griddata[index]
    },
    color: function (x, y) {
      return this.grid(x, y).color()
    },
    drawStart: function (eventObject) {
      this.drawing = true
    },
    drawEnd: function (eventObject) {
      this.drawing = false
    },
    draw: function (eventObject) {
      if (!(eventObject.buttons & 1)) {
        return
      }

      var x = eventObject.clientX
      var y = eventObject.clientY
      // this.grid(x, y)['pallete'] = this.currentPalleteNo
      console.log(`${eventObject.buttons}: ${x}, ${y}`)
    },
    createGrid: function () {
      var griddata = new Array(this.gridNumW * this.gridNumH)
      for (let y = 0; y < this.gridNumH; ++y) {
        for (let x = 0; x < this.gridNumW; ++x) {
          griddata[this.gridIndex(x, y)] = new Dot(
            this.gridSize * x,
            this.gridSize * y,
            this.gridSize
          )
        }
      }
      this.griddata = griddata
    }
  },
  created: function () {
    this.createGrid()
  }
}
</script>

<style lang="scss" scoped>

div {
  width: 100%;
  height: 100%;
}
</style>
