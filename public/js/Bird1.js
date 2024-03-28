import { Creature } from "./Creature.js"; // Импорт базового класса

class Bird1 extends Creature {
    constructor(scene, x, y) {
        super(scene, x, y, 'bird1', 'bird1.png');
        this.setScale(1.3);
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
        // Запуск анимации смерти
        this.play('die');
        this.isMoving=false;
        // Подписка на событие завершения анимации
        this.on('animationcomplete', () => {
            // После завершения анимации, оставляем питомца на последнем кадре
            this.anims.stop();
            let lastFrame = this.anims.currentAnim.frames[this.anims.currentAnim.frames.length - 1];
            this.setTexture(lastFrame.textureKey, lastFrame.textureFrame);
    
            // Опускаем питомца на 40 пикселей вниз
            this.y += 40;
        }, this); // Обратите внимание на передачу контекста this для корректной работы внутри обработчика
    }

    // Метод `update` наследуется от Creature, но его можно переопределить для добавления специфичной логики
}

export { Bird1 };
