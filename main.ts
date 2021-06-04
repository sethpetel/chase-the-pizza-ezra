namespace SpriteKind {
    export const BadFood = SpriteKind.create()
    export const GoodFood = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.GoodFood, function (player2, food) {
    pizza.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(1)
    music.baDing.play()
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BadFood, function (player2, food) {
    rottenPizza.setPosition(randint(0, 160), randint(0, 120))
    music.spooky.play()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 200)
})
let rottenPizza: Sprite = null
let pizza: Sprite = null
scene.setBackgroundColor(7)
// general way to create sprite: let name = sprites.create(img, kind)
// creating cat sprite
let cat = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(cat)
// creating the pizza sprite
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.GoodFood)
// creating the pizza sprite
rottenPizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 6 1 1 6 5 4 e 4 4 b . 
    . . . b d 1 1 1 6 7 5 4 e 4 4 e 
    . . . b 6 1 1 1 6 6 5 6 e e e e 
    . . b d 6 6 6 6 3 2 3 6 6 e e e 
    . . b 6 6 6 6 6 2 2 2 6 6 d e e 
    . b 3 2 3 6 7 6 3 2 3 6 d d e 4 
    . b 2 2 2 6 6 6 6 6 6 d d e 4 . 
    b d 3 6 6 6 6 6 6 d d 4 4 . . . 
    b 5 6 6 6 6 d 6 6 4 4 . . . . . 
    4 d d d 4 6 4 6 . . . . . . . . 
    4 4 4 4 . 6 . . . . . . . . . . 
    `, SpriteKind.BadFood)
pizza.setPosition(randint(0, 160), randint(0, 120))
rottenPizza.setPosition(randint(0, 160), randint(0, 120))
info.setScore(0)
info.setLife(3)
info.startCountdown(30)
cat.setStayInScreen(true)
pizza.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    rottenPizza.setPosition(randint(0, 160), randint(0, 120))
})
forever(function () {
    music.playMelody("G F G A - F E D ", 240)
})
