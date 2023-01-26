const controlledApp = {
    name: 'Controlled  app',
    description: 'Basic Canvas app for element controlling',
    version: '1.0.0',
    license: undefined,
    author: 'Germán',
    canvasTag: undefined,
    ctx: undefined,
    dogInstance: undefined,
    canvasSize: { w: undefined, h: undefined },
    dogPosition: { x: 500, y: 500 },
    dogSize: { w: 100, h: 120 },
    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.createDog()
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
    setEventListeners() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft') this.dogPosition.x -= 10
            if (evt.key === 'ArrowRight') this.dogPosition.x += 10
        }
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 10)
    },
    createDog() {
        this.dogInstance = new Image()
        this.dogInstance.src = './img/doggy.png'
    },
    drawAll() {
        this.drawDog()
        // here we'll draw the other stuff
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawDog() {
        this.ctx.drawImage(this.dogInstance, this.dogPosition.x, this.dogPosition.y, this.dogSize.w, this.dogSize.h)
    }
}