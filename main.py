lumiere = 0
état_actuel = 0
état_passé = 0

def on_forever():
    global état_actuel, lumiere, état_passé
    état_actuel = pins.digital_read_pin(DigitalPin.P16)
    if état_actuel != état_passé and état_actuel == 1:
        lumiere += 100
    état_passé = état_actuel
    if lumiere > 1000 and lumiere < 2000:
        pass
basic.forever(on_forever)

def on_forever2():
    if lumiere > 1000 and lumiere < 2000:
        pins.analog_write_pin(AnalogPin.P1, lumiere)
        pins.analog_write_pin(AnalogPin.P2, lumiere)
        pins.analog_write_pin(AnalogPin.P8, lumiere)
    elif lumiere > 1000 and lumiere < 2000:
        pins.analog_write_pin(AnalogPin.P1, 1000)
        pins.analog_write_pin(AnalogPin.P2, lumiere)
    else:
        pins.analog_write_pin(AnalogPin.P1, lumiere)
basic.forever(on_forever2)
