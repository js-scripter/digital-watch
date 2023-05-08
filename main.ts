function showhour () {
    if (hours == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (hours == 2) {
        basic.showLeds(`
            # # # . .
            . . # . .
            # # # . .
            # . . . .
            # # # . .
            `)
    }
    if (hours == 3) {
        basic.showLeds(`
            # # # . .
            . . # . .
            # # # . .
            . . # . .
            # # # . .
            `)
    }
    if (hours == 4) {
        basic.showLeds(`
            # . # . .
            # . # . .
            # # # . .
            . . # . .
            . . # . .
            `)
    }
    if (hours == 5) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            . . # . .
            # # # . .
            `)
    }
    if (hours == 6) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # . # . .
            # # # . .
            `)
    }
    if (hours == 7) {
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (hours == 8) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # # # . .
            `)
    }
    if (hours == 9) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            . . # . .
            . . # . .
            `)
    }
    if (hours == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (hours == 11) {
        basic.showLeds(`
            # . # . .
            # . # . .
            # . # . .
            # . # . .
            # . # . .
            `)
    }
    if (hours == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    if (hours < 12) {
        hours += 1
    } else {
        hours = 1
    }
    showhour()
})
let hours = 0
hours = 1
showhour()
basic.forever(function () {
    basic.pause(3600000)
    if (hours < 12) {
        hours += 1
    } else {
        hours = 1
    }
})
