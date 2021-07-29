let _4digit = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
_4digit.set(7)
_4digit.point(true)
let hr1 = 2
let hr2 = 3
let min1 = 5
let min2 = 0
let sec = 0
basic.forever(function () {
    if (min2 > 9) {
        min2 = 0
        min1 += 1
    }
    if (min1 > 5) {
        min1 = 0
        hr2 += 1
    }
})
basic.forever(function () {
    if (hr2 > 9) {
        hr2 = 0
        hr1 += 1
    }
})
basic.forever(function () {
    basic.showNumber(sec)
    _4digit.bit(min2, 3)
    _4digit.bit(min1, 2)
    _4digit.bit(hr2, 1)
    _4digit.bit(hr1, 0)
})
basic.forever(function () {
    if (hr1 == 2 && hr2 > 3) {
        hr2 = 0
        hr1 = 0
        min1 = 0
        min2 = 0
        sec = 0
    }
})
basic.forever(function () {
    if (sec < 60) {
        sec += 1
        basic.pause(1000)
    } else {
        min2 += 1
        sec = 0
    }
})
