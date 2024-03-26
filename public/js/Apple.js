import { Creature } from "./Creature.js"; // Импорт базового класса

class Apple extends Creature {
    constructor(scene, x, y) {
        super(scene, x, y, 'apple', 'REDAPPLEPORING_0002.png'); // Вызов конструктора базового класса
        this.initAnimations('apple', {
            start: 0, end: 3,
            prefix: 'REDAPPLEPORING_000', suffix: '.png',
            zeroPad: 1
        });
    }

    // Метод `update` также наследуется от Creature, его можно переопределить если необходимо
}

export { Apple };
