export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
}

export const fade = {
    hidden: {opacity:0},
    show: {
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1}
    }
}

export const scrollReveal = {
    hidden: {opacity: 0, scale: 1.2},
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        }
    }
}

export const swoop = {
    hidden: {width: "0%", transition:{duration: 1}},
    show: {
        width: "100%",
        transition: { ease: "easeOut", duration: 1}
    }
}

export const textReveal = {
    hidden: {width: '0%'},
    show: {
        width: '100%',
        transition: {duration: 1}
    }
}