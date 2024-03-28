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
            
            this.play('die');
            this.isMoving=false;
            this.on('animationcomplete', () => {

            this.anims.stop();
            let lastFrame = this.anims.currentAnim.frames[this.anims.currentAnim.frames.length - 1];
            this.setTexture(lastFrame.textureKey, lastFrame.textureFrame);
    
            this.y += 60;
            this.isAlive=false
        }, this);
    }

    }
}

export { Bird1 };
