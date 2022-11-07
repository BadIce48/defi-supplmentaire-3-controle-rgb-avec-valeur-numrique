let lumiere = 0
let état_actuel = 0
let état_passé = 0
basic.forever(function () {
    état_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (état_actuel != état_passé && état_actuel == 1) {
        lumiere += 100
    }
    état_passé = état_actuel
    if (lumiere >= 0 && lumiere < 1000) {
        pins.analogWritePin(AnalogPin.P1, lumiere)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    } else if (lumiere > 1000 && lumiere < 2000) {
        pins.analogWritePin(AnalogPin.P1, 1000)
        pins.analogWritePin(AnalogPin.P2, lumiere - 1000)
        pins.analogWritePin(AnalogPin.P8, 0)
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P8, lumiere)
    }
    if (lumiere >= 3000) {
        lumiere = 0
    }
})
basic.forever(function () {
	
})
