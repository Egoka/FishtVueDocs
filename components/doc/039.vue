<script setup lang="ts">
import {useEventListener} from "@vueuse/core"
import type { P5I } from 'p5i'
import { p5i } from 'p5i'
import { onMounted, onUnmounted, ref } from 'vue'
const colorMode = useColorMode()
const el = ref<HTMLCanvasElement | null>(null)

const {
  mount,
  unmount,
  createCanvas,
  background,
  noFill,
  stroke,
  noise,
  noiseSeed,
  resizeCanvas,
  cos,
  sin,
  TWO_PI,
} = p5i()

let w = window.innerWidth
let h = window.innerHeight
const offsetY = window.scrollY
let mouseX = 0
let mouseY = 0

const SCALE = 200
const LENGTH = 10
const SPACING = 22
const GLOW_DISTANCE = 50 // Расстояние, на котором точки начинают светиться другим цветом

function getForceOnPoint(x: number, y: number, z: number) {
  // https://p5js.org/reference/#/p5/noise
  return (noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * TWO_PI
}

const existingPoints = new Set<string>()
const points: { x: number, y: number, opacity: number }[] = []

function addPoints() {
  for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
    for (let y = -SPACING / 2; y < h + offsetY + SPACING; y += SPACING) {
      const id = `${x}-${y}`
      if (existingPoints.has(id))
        continue
      existingPoints.add(id)
      points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 })
    }
  }
}

function setup() {
  createCanvas(w, h)
  background('#ffffff')
  stroke('#ccc')
  noFill()
  noiseSeed(+new Date())
  addPoints()
}

function draw({ circle }: P5I) {
  background(colorMode.value === 'light' ? '#f5f5f5' : '#171717')
  const t = +new Date() / 10000

  for (const p of points) {
    const { x, y } = p
    const rad = getForceOnPoint(x, y, t)
    const length = (noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH
    const nx = x + cos(rad) * length
    const ny = y + sin(rad) * length

    const distToMouse = Math.sqrt((nx - mouseX) ** 2 + (ny - offsetY - mouseY) ** 2)

    if (distToMouse < GLOW_DISTANCE) {
      if (colorMode.value === 'light')
        stroke(0, 130, 0, (Math.abs(cos(rad)) * 0.5 + 0.5) * p.opacity * 255)
      else stroke(130, 200, 160, (Math.abs(cos(rad)) * 0.5 + 0.5) * p.opacity * 255)
    } else {
      if (colorMode.value === 'light')
        stroke(130, 255, 165, (Math.abs(cos(rad)) * 0.5 + 0.5) * p.opacity * 255)
      else stroke(15, 55, 30, (Math.abs(cos(rad)) * 0.5 + 0.5) * p.opacity * 255)
    }

    circle(nx, ny - offsetY, 1)
  }
}

function restart() {
  if (el.value)
    mount(el.value, { setup, draw })
}

onMounted(() => {
  restart()

  // Отслеживание позиции курсора
  useEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
  })

  useEventListener('resize', () => {
    w = window.innerWidth
    h = window.innerHeight
    resizeCanvas(w, h)
    addPoints()
  })
})

onUnmounted(() => {
  unmount()
})
</script>

<template>
  <div ref="el" class="pointer-events-none fixed bottom-0 left-0 right-0 top-0 -z-1" />
</template>
