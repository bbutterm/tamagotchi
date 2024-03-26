import GameScene from './scenes/GameScene.js'; // Убедитесь, что путь корректен

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    scene: [GameScene], // Теперь GameScene является первой и единственной сценой в массиве
    scale: {
        mode: Phaser.Scale.RESIZE,
        //autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,
    }
};

const game = new Phaser.Game(config);
