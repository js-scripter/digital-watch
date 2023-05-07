function showhour () {
    if (hours < 10) {
        basic.showNumber(hours)
    } else {
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
}
input.onButtonPressed(Button.A, function () {
    showhour()
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (hours < 12) {
        hours += 1
    } else {
        hours = 1
    }
    showhour()
    basic.clearScreen()
})
let hours = 0
hours = 1
basic.forever(function () {
    basic.pause(3600000)
    if (hours < 12) {
        hours += 1
    } else {
        hours = 1
    }
})
