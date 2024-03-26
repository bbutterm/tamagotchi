export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        // Создаем прямоугольник, который будет служить фоном для кнопки
        const button = this.add.rectangle(this.cameras.main.centerX, 200, 150, 50, 0x00ff00)
            .setInteractive() // Сделать кнопку интерактивной
            .on('pointerover', () => this.onButtonHover(button)) // Событие при наведении мыши
            .on('pointerout', () => this.onButtonRest(button)) // Событие когда мышь уходит с кнопки
            .on('pointerdown', () => this.onButtonDown(button)) // Событие при нажатии
            .on('pointerup', () => {
                this.onButtonUp(button);
                this.scene.start('GameScene'); // Переключение на сцену создания питомца
            });

        // Добавляем текст на кнопку
        this.add.text(button.x, button.y, 'Создать питомца', {
            font: '18px Arial',
            fill: '#ffffff'
        })
        .setOrigin(0.5); // Центрируем текст относительно прямоугольника
    }

    // Методы для анимации кнопок
    onButtonHover(button) {
        button.setFillStyle(0x00ff00, 0.8); // Изменить прозрачность
    }

    onButtonRest(button) {
        button.setFillStyle(0x00ff00, 1); // Вернуть к исходной прозрачности
    }

    onButtonDown(button) {
        button.setScale(0.9); // Уменьшить при нажатии
    }

    onButtonUp(button) {
        button.setScale(1); // Вернуть к исходному размеру
    }
}
