import GameScene from './scenes/GameScene.js';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }, // Пример установки гравитации
            debug: false, // Установите в true для визуализации зон столкновений
        }
    },
    parent: 'game-container',
    scene: [GameScene],
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: window.innerWidth,
        height: window.innerHeight,
    }
};

const game = new Phaser.Game(config);
