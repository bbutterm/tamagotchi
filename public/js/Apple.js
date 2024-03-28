import { Creature } from "./Creature.js"; 
class Apple extends Creature {
    constructor(scene, x, y) {
        super(scene, x, y, 'apple', 'REDAPPLEPORING_0002.png');
        this.initAnimations('apple', {
            start: 0, end: 3,
            prefix: 'REDAPPLEPORING_000', suffix: '.png',
            zeroPad: 1
        });
    }

   
}

export { Apple };
