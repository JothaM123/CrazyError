var bgimg, logoimg, logo, start, home1, restart, about, gameSound
var gameState = "wait"





function preload() {
    bgimg = loadImage("background.png")
    logoimg = loadImage("kv.png")
    // startimg = loadImage("play.png")


}


function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20)
    logo = createSprite(width / 2 - 20, height / 2 - 20)
    logo.addImage(logoimg)
    logo.debug = true
    logo.setCollider("circle", 0, 0, 40)


    home1 = createImg("home.png")
    home1.position(width / 3, 10)
    home1.size(200, 100)
    home1.hide()

    start = createImg("play.png")
    start.position(width / 3 + 200, height - 150)
    start.size(225, 195)

    about = createImg("about.png")
    about.position(width / 3, height - 161)
    about.size(225, 215)

}
   

function draw() {

    if (gameState === "wait") {
        background(bgimg)
        home1.hide()
        start.show()
        about.show()
        logo.visible = true
    }





    about.mousePressed(() => {
        gameState = "about"
        about.hide()
    })


    start.mousePressed(() => {
        gameState = "level 1"
    })

    home1.mousePressed(() => {
        gameState = "wait"
    })

    if (gameState === "level 1") {
        background(0)
        logo.visible = false
        about.hide()
        home1.hide()

    }

    if (gameState === "about") {
        background(180)
        logo.visible = false
        home1.show()
        play.hide()
        // about.hide()

    }



    drawSprites()
}