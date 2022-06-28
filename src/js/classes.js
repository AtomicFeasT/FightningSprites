class Sprite {
    constructor({ position }) {
        this.position = position
        this.width = 50
        this.height = 130 
    }

    draw() {

       } 
    
    update() {
        this.draw()
       
    }
    
}

class Fighter {
    constructor({position, velocity, color = 'red', offset}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 130
        this.lastKey
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            offset,
            width: 100, 
            height: 50
        }
        this.color = color
        this.isAttacking   
        this.health = 100
    }

    draw() {
        canvasContext.fillStyle = this.color
        canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        // Attack Box
        if (this.isAttacking == true) {
            canvasContext.fillStyle = 'green'
            canvasContext.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height) 
        } 
    } 
    
    update() {
        this.draw()
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x 
        this.attackBox.position.y = this.position.y
         
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
            
        } else {
            this.velocity.y += gravity
        }
        
    }
    
    attack() {
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }
    
}