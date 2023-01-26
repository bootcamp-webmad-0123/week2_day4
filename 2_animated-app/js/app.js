const animatedApp = {
    name: 'Controlled  app',
    description: 'Basic Canvas app for element controlling',
    version: '1.0.0',
    license: undefined,
    author: 'Germán',
    canvasTag: undefined,
    ctx: undefined,
    framesIndex: 0,
    canvasSize: { w: undefined, h: undefined },
    camels: [],
    init() {
        this.setContext()
        this.setDimensions()
        this.createCamels()
        this.start()
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
    createCamels() {
        this.camels.push(
            new Camel(this.ctx, this.canvasSize, 300, 200, 5),
            new Camel(this.ctx, this.canvasSize, 100, 80, 10),
            new Camel(this.ctx, this.canvasSize, 200, 150, 6),
            new Camel(this.ctx, this.canvasSize, 150, 120, 2),
        )
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 100 === 0) this.generateObstacle()
        }, 10)
    },
    drawAll() {
        this.camels.forEach(elm => elm.draw())
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    generateObstacle() {
        console.log('OBSTÁCULO GENERADO')

    }

}