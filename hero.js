class Hero {

  constructor(ctx, heroPosX, heroPosY, heroImage) {
      
    this.ctx = ctx;
    this.positionx = heroPosX;
    this.positiony = heroPosY;
    this.heroWith = 90;
    this.heroHeight = 90;
    this.imageName = heroImage
    this.heroInstance = undefined
    this.init()
      
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }

      


  }


  init() {
    this.heroInstance = new Image()
    this.heroInstance.src = `img/${this.imageName}`
  }
    
  draw() {
    this.ctx.drawImage(this.heroInstance, this.positionx, this.positiony, this.heroWith, this.heroHeight)
  }
  
  move(dir) {
  
    if ((this.positionx + (this.heroWith + 20)) <= this.canvasSize.w && this.positionx > 0) {
      dir === 'left' ? this.positionx -= 20 : null
      dir === 'right' ? this.positionx += 20 : null
    }
    
    if (this.positiony + (this.heroHeight + 20) <= this.canvasSize.h && this.positiony > 0) {
      dir === 'up' ? this.positiony -= 20 : null
      dir === 'down' ? this.positiony += 20 : null
    }
    
    if ((this.positionx + (this.heroWith +20)) <= this.canvasSize.w) {
      dir === 'right' ? this.positionx += 20 : null
    }
if (this.positionx > 0) {
     dir === 'left' ? this.positionx -= 20 : null
}
    
    if (this.positiony + (this.heroHeight+20) <= this.canvasSize.h) {
      dir === 'down' ? this.positiony += 20 : null
     }
    if (this.positiony > 0) {
      dir === 'up' ? this.positiony -= 20 : null
    }



  }
}