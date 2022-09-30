let tocar = false
let P2 = 0
let P1 = 0
input.onPinPressed(TouchPin.P0, function () {
    tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Giraffe)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (tocar == false) {
        tocar = true
        P2 += 1
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . . . # #
            . . . # #
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (tocar == false) {
        tocar = true
        P1 += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
    }
})
basic.forever(function () {
	
})
