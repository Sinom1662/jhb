input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    shoot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (shoot.isTouching(Enemy)) {
            game.addScore(2)
            Enemy.delete()
            shoot.delete()
        }
    }
    shoot.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let Enemy: game.LedSprite = null
let shoot: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
game.setScore(0)
if (game.score() == 20) {
    game.gameOver()
    soundExpression.slide.play()
}
basic.forever(function () {
    Enemy = game.createSprite(randint(0, 4), 0)
    Enemy.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    Enemy.turn(Direction.Right, 30)
    for (let index = 0; index < 4; index++) {
        Enemy.move(1)
        basic.pause(500)
    }
    if (Enemy.isTouching(ship)) {
        game.gameOver()
    }
    if (Enemy.isTouchingEdge()) {
        Enemy.delete()
    }
})
