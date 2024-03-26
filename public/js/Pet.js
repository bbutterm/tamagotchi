import { Creature } from "./Creature.js"; // Импорт базового класса

class Pet extends Creature {
    constructor(scene, x, y) {
        super(scene, x, y, 'lunatic', 'Lunatic-2.png'); // Вызов конструктора базового класса
        this.initAnimations('lunatic', {
            start: 0, end: 3,
            prefix: 'Lunatic-', suffix: '.png',
            zeroPad: 1
        });
    }

    // Метод `update` можно переопределить, если нужна уникальная логика обновления для Pet
}

export { Pet };
