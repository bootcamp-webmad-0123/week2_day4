class Camel {

    constructor(ctx, canvasSize, camelWidth, camelHeight, camelSpeed) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.camelSize = {
            w: camelWidth,
            h: camelHeight
        }

        this.camelSpeed = camelSpeed

        this.camelPos = { x: 0, y: this.canvasSize.h - this.camelSize.h }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/camel.png'
    }

    move() {
        this.camelPos.x += this.camelSpeed
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
    }
}