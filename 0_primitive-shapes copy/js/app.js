const basicShapesApp = {
    name: 'Basic shapes app',
    description: 'Basic Canvas app for primitive shapes drawing',
    version: '1.0.0',
    license: undefined,
    author: 'Germán',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init() {
        this.setContext()
        this.setDimensions()
    },
    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
        console.log(this.ctx)
    },
    setDimensions() {

        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }

        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },
    drawSquare() {
        this.ctx.fillRect(this.canvasSize.w / 2 - 300, this.canvasSize.h / 2 - 150, 600, 300)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.canvasSize.w / 2 - 50, 0, 100, this.canvasSize.h)
        this.ctx.fillStyle = 'blue',
            this.ctx.fillRect(100, 100, 100, 100)
    },
    drawRegularLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(100, 100)
        this.ctx.lineTo(500, 500)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = 30

        this.ctx.beginPath()
        this.ctx.moveTo(100, 100)
        this.ctx.lineTo(600, 100)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawDashedLines() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'blue'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([60, 20])      // <-- patrón de repetición
        this.ctx.moveTo(this.canvasSize.w / 2, 100)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h - 100)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawArc() {
        this.ctx.arc(300, 500, 100, 0, Math.PI * 2)
        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = 30
        this.ctx.fillStyle = 'red'
        this.ctx.stroke()
        this.ctx.fill()
    },
    drawText(text) {
        this.ctx.font = '50px arial'
        this.ctx.fillText(text, 100, 100)
    }
}