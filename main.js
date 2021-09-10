import './style.scss'

import { scrlAnimsSetup } from './scrl_anims.js'
import { initCursor } from './cursor.js'

window.addEventListener('DOMContentLoaded', init)

function init() {
  initCursor()
  setCustomVh()
  window.addEventListener('resize', setCustomVh)
  scrlAnimsSetup()

  scrollTriggerText()
  scrollTriggerEvent()

  window.addEventListener('scroll', (e) => {
    console.log(e)
  })
}

function setCustomVh() {
  const vh = window.innerHeight
  document.querySelector('body').style.setProperty('--full-vh', vh + 'px')
}

function scrollTriggerText() {
  const elms = document.querySelectorAll('#description span')
  const observer = new IntersectionObserver(textScrolled, {
    threshold: [0.5, 0.6],
  })

  elms.forEach((elm) => observer.observe(elm))
}

function scrollTriggerEvent() {
  const elms = document.querySelectorAll('.event')
  const observer = new IntersectionObserver(textScrolled, {
    threshold: [0.2, 0.3],
  })

  elms.forEach((elm) => observer.observe(elm))
}

function textScrolled(event) {
  event.forEach((elm) => {
    if (elm.isIntersecting) {
      elm.target.classList.add('show')
    }
  })
}
