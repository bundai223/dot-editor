<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" :width='width' :height='height'>
      <template v-for='(_x, x) in gridNumW'>
        <template v-for='(_y, y) in gridNumH'>
          <rect :x='gridSize * x' :y='gridSize * y' :width='gridSize' :height='gridSize' :rx='0' :ry='0' :fill='color(x, y)' :stroke='stroke' :stroke-width='lineWidth' v-on:mousemove='draw(x, y)'/>
          <text :x='gridSize * x' :y='gridSize * (y + 1)' font-size='8' v-if='viewNo'>{{ gridIndex(x, y) }}</text>
          <text :x='gridSize * x' :y='gridSize * (y + 1)' font-size='8' v-if='viewPalleteNo'>{{ grid(x, y)['pallete']}}</text>
        </template>
      </template>
    </svg>
</template>

<script>
export default {
  data: function () {
    return {
      stroke: '#000000',
      griddata: [],
      no: false,
      pallete: false
    }
  },

  computed: {
    viewNo: function () {
      return this.no
    },
    viewPalleteNo: function () {
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
      var pallete = this.grid(x, y)['pallete']
      if (pallete === -1) {
        return 'none'
      } else {
        return '#ffff00'
      }
    },
    draw: function (x, y) {
      this.grid(x, y)['pallete'] = 1
      console.log(`${x}, ${y}`)
    }
  },
  created: function () {
    var griddata = new Array(this.gridNumW * this.gridNumH)
    for (let x = 0; x < this.gridNumW; ++x) {
      for (let y = 0; y < this.gridNumH; ++y) {
        griddata[this.gridIndex(x, y)] = { pallete: -1 }
      }
    }
    this.griddata = griddata
  }
}
</script>

<style lang="scss" scoped>

div {
  width: 100%;
  height: 100%;
}
</style>
