input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.ShowString("Temperatur", 0, 0)
    I2C_LCD1602.ShowNumber(input.temperature(), 0, 1)
})
input.onButtonPressed(Button.B, function () {
    I2C_LCD1602.clear()
})
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.on()
I2C_LCD1602.clear()
basic.forever(function () {
	
})
