<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" :width='width' :height='height' v-on:mousedown='drawStart' v-on:mouseup='drawEnd' v-on:mousemove='draw' ref='grid'>
      <template v-for='(_x, x) in gridNumW'>
        <template v-for='(_y, y) in gridNumH'>
          <rect :x='gridSize * x' :y='gridSize * y' :width='gridSize' :height='gridSize' :rx='0' :ry='0' :fill='color(x, y)' :stroke='stroke' :stroke-width='lineWidth' v-on:click='draw(x, y)'/>
          <text :x='gridSize * x' :y='gridSize * (y + 1)' font-size='8' v-if='showGridNo'>{{ gridIndex(x, y) }}</text>
          <text :x='gridSize * x' :y='gridSize * (y + 1)' font-size='8' v-if='showPalleteNo'>{{ grid(x, y)['pallete']}}</text>
        </template>
      </template>
      <line v-if='drawing' :x1='drag_start.x' :y1='drag_start.y' :x2='drag_now.x' :y2='drag_now.y' stroke="black" stroke-width="1"/>
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

class Vec2 {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

export default {
  data: function () {
    return {
      stroke: '#000000',
      griddata: [],
      drawing: false,
      no: false,
      pallete: false,
      drag_start: null,
      drag_now: null
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
      this.drag_start = new Vec2(eventObject.clientX, eventObject.clientY)
      this.drag_now = this.drag_start.clone
    },
    drawEnd: function (eventObject) {
      this.drawing = false
      this.drag_start = null
      this.drag_now = null
    },
    draw: function (eventObject) {
      if (!(eventObject.buttons & 1)) {
        return
      }

      // this.grid(x, y)['pallete'] = this.currentPalleteNo
      this.drag_now = new Vec2(eventObject.clientX, eventObject.clientY)
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
