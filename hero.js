class Hero {

  constructor(ctx, heroPosX, heroPosY) {
    this.isMoving = false;
    this.direction = '';
    this.ctx = ctx;
    this.positionx = heroPosX;
    this.positiony = heroPosY;
    this.heroWith = 90;
    this.heroHeight = 90;
    this.imageStand = new Image();
    this.imageStand.src = "./img/papaquieto.png";
    this.imageStand.frames = 10;
    this.imageStand.framesIndex = 0;
    this.imageMove = new Image();
    this.imageMove.src = "./img/papacamina.png";
    this.imageMove.frames = 13;
    this.imageMove.framesIndex = 0;
    
    

    this.heroInstance = undefined

      this.nodamage=false
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
 

  }



  draw2(frames) {
  
    this.ctx.drawImage(
      this.imageStand,
      this.imageStand.framesIndex * Math.floor(this.imageStand.width / this.imageStand.frames),
      0,
      Math.floor(this.imageStand.width / this.imageStand.frames),
      
      this.imageStand.height,
      this.positionx,
      this.positiony,
      this.heroWith,
      this.heroHeight)
    this.animateStand(frames)
    
  }

animateStand(frames) {

    if (frames % 0.5 == 0) {
      this.imageStand.framesIndex++;
    }
    if (this.imageStand.framesIndex > this.imageStand.frames - 1) {
      this.imageStand.framesIndex = 0;
    }
  }

  
  draw1(frames) {
    
    
    this.ctx.drawImage(
      this.imageMove,
      this.imageMove.framesIndex * Math.floor(this.imageMove.width / this.imageMove.frames),
      0,
      Math.floor(this.imageMove.width / this.imageMove.frames),
      
      this.imageMove.height,
      this.positionx,
      this.positiony,
      this.heroWith,
      this.heroHeight)
    this.animateMove(frames)
    this.move()
  }
  animateMove(frames) {

    if (frames % 0.5 == 0) {
      this.imageMove.framesIndex++;
    }
    if (this.imageMove.framesIndex > this.imageMove.frames - 1) {
      this.imageMove.framesIndex = 0;
    }
  }


  move() {
    if (this.isMoving === true) {
      if ((this.positionx + (this.heroWith)) <= this.canvasSize.w && this.positionx > 0) {
        this.direction === 'left' ? this.positionx -= 10: null
        this.direction === 'right' ? this.positionx += 10: null
      }
    
      if (this.positiony + (this.heroHeight) <= this.canvasSize.h && this.positiony > 0) {
        this.direction === 'up' ? this.positiony -= 10: null
        this.direction === 'down' ? this.positiony += 10: null
      }
    
      if ((this.positionx + (this.heroWith)) <= this.canvasSize.w) {
        this.direction === 'right' ? this.positionx += 10: null
      }
      if (this.positionx > 0) {
        this.direction === 'left' ? this.positionx -= 10: null
      }
    
      if (this.positiony + (this.heroHeight) <= this.canvasSize.h) {
        this.direction === 'down' ? this.positiony += 10: null
      }
      if (this.positiony > 0) {
        this.direction === 'up' ? this.positiony -= 10 : null
      }
    
    }
  }

  stop() {
    this.isMoving = false;
  }

  changeDirection(direction) {
  this.isMoving = true;
  this.direction = direction;
}


  invulnerability() {
     this.nodamage = true
    function invul(bar) {
      bar.nodamage=false
    }
   
    let var2 = setTimeout(invul, 1000, this)
    
        function sizeDown(popino) {
  

    popino.heroWith = 90;
    popino.heroHeight = 90;
        }
    var2 
    this.heroWith =200;
    this.heroHeight = 200;
    let myvar = setTimeout(sizeDown,1000,this); 
    
    myvar
    
}


  hit() {


    function sizeDown(popino) {
  

    popino.heroWith = 90;
    popino.heroHeight = 90;
    }
    console.log('algo')
    this.heroWith = 100;
    this.heroHeight = 100;
    let myvar = setTimeout(sizeDown,500,this); 
    
    myvar
    
  }




}


