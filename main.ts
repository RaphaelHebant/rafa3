maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
basic.pause(1000)
for (let index = 0; index <= 4; index++) {
    maqueenIR.initIR(Pins.P0)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    index += 1
}
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(randint(100, 1000))
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(200)
})
