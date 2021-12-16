input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
    basic.showString("" + (hours))
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
    basic.showString("" + (minutes))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + hours + (":" + minutes))
})
let minutes = 0
let hours = 0
hours = 0
minutes = 0
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
