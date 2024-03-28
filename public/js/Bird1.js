import { Creature } from "./Creature.js"; 

class Bird1 extends Creature {
    constructor(scene, x, y) {
        super(scene, x, y, 'bird1', 'bird1.png');
        this.setScale(3);
        this.initAnimations('bird1', {
            start: 1, end: 4,
            prefix: 'move', suffix: '.png',
            zeroPad: 1
        });
        this.anims.create({
            key: 'feed',
            frames: this.anims.generateFrameNames('bird1', {
                start:3, end: 3,
                prefix: 'move', suffix: '.png',
                zeroPad: 1
            })
            
        });
        
        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNames('bird1', {
                prefix: 'death',
                start: 1,
                end: 4,
                zeroPad: 1,
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: 0
        });
    }
    die() {
        if (this.isAlive){
            this.initialY +=100;
            this.play('die');
            console.log("pet_die")
            
            this.on('animationcomplete', () => {

            this.anims.stop();
            let lastFrame = this.anims.currentAnim.frames[this.anims.currentAnim.frames.length - 1];
            this.setTexture(lastFrame.textureKey, lastFrame.textureFrame);
    
            this.initialY += 60;
            this.isAlive=false
            this.isMoving=false;
        }, this);
    }

    }
    update() {
        if (this.isAlive && this.y>this.initialY ) {
            this.y=this.initialY;
        }
        if (this.isAlive && this.y<this.initialY) {
            this.y+=1;
        }
        
        if (this.isMoving) {
            this.x += this.moveSpeed * this.moveDirection;
            if (Math.random() < 0.01) {
                this.moveDirection *= -1;
                this.flipX = this.moveDirection < 0;
            }
            if (this.x < 0 || this.x > this.scene.sys.game.config.width) {
                this.moveDirection *= -1;
                this.flipX = this.moveDirection < 0;
            }
        }
    }
}

export { Bird1 };
