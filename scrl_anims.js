import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function scrlAnimsSetup() {
  const heading = document.querySelector('h1')
  gsap.to(heading, {
    scale: 0.2,
    y: '-40%',
    ease: 'linear',
    scrollTrigger: {
      trigger: document.querySelector('#heading_trigger'),
      scrub: true,
      // markers: true,
      start: 'top 0%',
      end: 'bottom 0%',
    },
  })

  // const splashImg = document.querySelector('#splash figure')
  // gsap.to(splashImg, {
  //   scale: 1,
  //   ease: 'linear',
  //   scrollTrigger: {
  //     trigger: document.querySelector('#heading_trigger'),
  //     scrub: true,
  //     // markers: true,
  //     start: 'top 0%',
  //     end: 'bottom 20%',
  //   },
  // })

  const body = document.querySelector('body')
  // gsap.to(body, {
  //   backgroundColor: '#f6f6f6',
  //   ease: 'linear',
  //   scrollTrigger: {
  //     trigger: document.querySelector('#splash'),
  //     scrub: true,
  //     // markers: true,
  //     start: 'bottom 50%',
  //     end: 'bottom 40%',
  //   },
  // })

  ScrollTrigger.create({
    trigger: document.querySelector('#splash figure'),
    markers: true,
    start: 'bottom 0%',
    end: 'bottom 0%',
    onEnter: () => body.classList.add('white'),
    onEnterBack: () => body.classList.remove('white'),
  })

  // const grains = document.querySelector('#grains')
  // gsap.to(grains, {
  //   opacity: 0.15,
  //   ease: 'linear',
  //   scrollTrigger: {
  //     trigger: document.querySelector('#splash'),
  //     scrub: true,
  //     // markers: true,
  //     start: 'bottom 50%',
  //     end: 'bottom 45%',
  //   },
  // })

  // gsap.to(document.querySelectorAll('h1 span, #description p'), {
  //   color: '#1d1d1d',
  //   ease: 'linear',
  //   borderColor: '#1d1d1d',
  //   scrollTrigger: {
  //     trigger: document.querySelector('#splash'),
  //     scrub: true,
  //     // markers: true,
  //     start: 'bottom 50%',
  //     end: 'bottom 50%',
  //   },
  // })

  // gsap.to(document.querySelector('.inner_csr'), {
  //   backgroundColor: '#1d1d1d',
  //   ease: 'linear',
  //   scrollTrigger: {
  //     trigger: document.querySelector('#splash'),
  //     scrub: true,
  //     // markers: true,
  //     start: 'bottom 50%',
  //     end: 'bottom 50%',
  //   },
  // })

  // gsap.to(document.querySelector('.outer_csr'), {
  //   borderColor: '#1d1d1d',
  //   ease: 'linear',
  //   scrollTrigger: {
  //     trigger: document.querySelector('#splash'),
  //     scrub: true,
  //     // markers: true,
  //     start: 'bottom 50%',
  //     end: 'bottom 50%',
  //   },
  // })
}
