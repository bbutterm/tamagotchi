import { Creature } from "./Creature.js";
class Panda extends Creature {
    constructor(scene, x, y) {
        super(scene, x, y, 'panda', 'PANDARING_0002.png'); 
        this.initAnimations('panda', {
            start: 0, end: 3,
            prefix: 'PANDARING_000', suffix: '.png',
            zeroPad: 1
        });
    }

  
}

export { Panda };
