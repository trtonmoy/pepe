let tl1 = gsap.timeline()
tl1
.fromTo('.main_left_side > img', {
    opacity: 0
}, {
    opacity: 1,
    duration: 1,
})
.fromTo('.main_right_side h1', {
    opacity: 0,
    y: 20
}, {
    opacity: 1,
    y: 0,
    duration: .7,
})
.fromTo('.main_right_side p', {
    opacity: 0,
    y: 20
}, {
    opacity: 1,
    y: 0,
    stagger: .3,
    duration: .7,
}, '<.2')
.fromTo('.btns_container a', {
    opacity: 0,
    scale: .4
}, {
    opacity: 1,
    scale: 1,
    duration: .7,
}, '<.2')

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.first_section',
        start: 'top 80%',
        end: '+100 80%',
        scrub: 2,
    }
})
tl2
.fromTo('.first_section_img', {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    stagger: .3,
    duration: 2,
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.second_section',
        start: 'top 80%',
        end: '+100 80%',
        scrub: 2,
    }
})

tl3
.fromTo('.ss_left_side > *', {
    y: -100,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    stagger: .3,
    duration: 2,
})
.fromTo('.ss_right_side img', {
    scale: 0.7,
    opacity: 0
}, {
    scale: 1,
    opacity: 1,
    duration: 1,
})

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.third_section',
        start: 'top 80%',
        end: '+100 80%',
        scrub: 2,
    }
})

tl4
.fromTo('.ts_elements_wrapper .title_container > *', {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    stagger: .3,
    duration: 2,
})
.fromTo('.ts_elements_wrapper .ts_element', {
    scale: 0.7,
    opacity: 0
}, {
    scale: 1,
    opacity: 1,
    stagger: .4,
    duration: 1,
})

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.forth_section',
        start: 'top 80%',
        end: '+100 80%',
        scrub: 2,
    }
})

tl5
.fromTo('.forth_section .fths_right_side > *', {
    y: -100,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    stagger: .3,
    duration: 2,
})

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        end: '+100 80%',
        scrub: 3,
    }
})

tl6
.fromTo('.footer > img', {
    scale: .4,
    opacity: 0
}, {
    scale: 1,
    opacity: 1,
    duration: 2,
})
.fromTo('.footer > h1', {
    y: 20,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 2,
})
.fromTo('.footer_social_media a', {
    scale: .3,
    opacity: 0
}, {
    scale: 1,
    opacity: 1,
    stagger: .3,
    duration: 2,
})
