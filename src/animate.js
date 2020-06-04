import { sineInOut } from 'svelte/easing'

export const fadeIn = () => ({
  duration: 300,
  easing: sineInOut,
  css: t => {
    return `
    opacity: ${t}; 
    transform: translate3d(0, ${(1 - t) * 100}px, 0)`
  }
})

export const fadeOut = () => ({
  duration: 300,
  easing: sineInOut,
  css: t => {
    return `
    opacity: ${t}; 
    transform: translate3d(0, ${(1 - t) * 100}px, 0)`
  }
})
