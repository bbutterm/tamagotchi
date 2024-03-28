import { Creature } from "./Creature.js"; 

class Pet extends Creature {
    constructor(scene, x, y) {
        super(scene, x, y, 'lunatic', 'Lunatic-2.png'); 
        this.initAnimations('lunatic', {
            start: 0, end: 3,
            prefix: 'Lunatic-', suffix: '.png',
            zeroPad: 1
        });
    }

}

export { Pet };
