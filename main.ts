input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    birdy.change(LedSpriteProperty.Y, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    birdy.change(LedSpriteProperty.Y, 1)
})
let hindernis: game.LedSprite = null
let schlupflochY = 0
let ticks = 0
let birdy: game.LedSprite = null
let hindernisse: game.LedSprite[] = []
birdy = game.createSprite(0, 2)
birdy.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    ticks += 1
    if (ticks % 3 == 0) {
        schlupflochY = randint(0, 4)
        for (let Index = 0; Index <= 4; Index++) {
            if (Index != schlupflochY) {
                hindernis = game.createSprite(4, Index)
                hindernisse.unshift(hindernis)
            }
        }
    }
    for (let hindernis of hindernisse) {
        hindernis.change(LedSpriteProperty.X, -1)
        if (hindernis.get(LedSpriteProperty.X) == 0) {
            if (hindernis.isTouching(birdy)) {
                game.gameOver()
            } else {
                hindernis.delete()
            }
        }
    }
    basic.pause(1000)
})
