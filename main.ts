input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("go")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("back")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
radio.setGroup(6)
basic.forever(function () {
	
})
