export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        const button = this.add.rectangle(this.cameras.main.centerX, 200, 150, 50, 0x00ff00)
            .setInteractive() 
            .on('pointerover', () => this.onButtonHover(button)) 
            .on('pointerout', () => this.onButtonRest(button)) 
            .on('pointerdown', () => this.onButtonDown(button)) 
            .on('pointerup', () => {
                this.onButtonUp(button);
                this.scene.start('GameScene'); 
            });

        // Добавляем текст на кнопку
        this.add.text(button.x, button.y, 'Создать питомца', {
            font: '18px Arial',
            fill: '#ffffff'
        })
        .setOrigin(0.5); 
    }

    // Методы для анимации кнопок
    onButtonHover(button) {
        button.setFillStyle(0x00ff00, 0.8); 
    }

    onButtonRest(button) {
        button.setFillStyle(0x00ff00, 1); 
    }

    onButtonDown(button) {
        button.setScale(0.9);
    }

    onButtonUp(button) {
        button.setScale(1);
    }
}
