import { Creature } from "./Creature.js"; // Импорт базового класса

class Panda extends Creature {
    constructor(scene, x, y) {
        super(scene, x, y, 'panda', 'PANDARING_0002.png'); // Вызов конструктора базового класса
        this.initAnimations('panda', {
            start: 0, end: 3,
            prefix: 'PANDARING_000', suffix: '.png',
            zeroPad: 1
        });
    }

    // Метод `update` наследуется от Creature, но его можно переопределить для добавления специфичной логики
}

export { Panda };
