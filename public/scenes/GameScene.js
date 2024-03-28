import { Bird1 } from "../js/Bird1.js";
export default class GameScene extends Phaser.Scene {

    constructor() {
        super({ key: 'GameScene' });
    }
    
    preload() {
        this.load.image('ground', 'assets/ground.png');
        //this.load.atlas('apple', 'assets/apple.png', 'assets/apple.json');
        //this.load.atlas('lunatic', 'assets/lunatic.png', 'assets/lunatic.json');
        this.load.atlas('bird1', 'assets/bird1.png', 'assets/bird1.json');
    }

    create() {
        this.cameras.main.setBackgroundColor('#87CEEB'); 
        let groundHeight = 100;
        let button = this.add.rectangle(175, 125, 150, 50, 0x800000)
        .setInteractive()
        .on('pointerdown', () => {
            button.setFillStyle(0xFF0000, 1); 
            this.pet.die();
        })
        .on('pointerup', () => button.setFillStyle(0x800000, 1)) 
        .on('pointerout', () => button.setFillStyle(0x800000, 1)); 

    this.add.text(button.x, button.y, 'Kill', {
        font: '20px Arial',
        fill: '#000000'
    }).setOrigin(0.5);
        this.add.rectangle(0, window.innerHeight, window.innerWidth, groundHeight, 0x8B4513).setOrigin(0, 1);
        this.add.text(100, window.innerHeight/2, "Игровая сцена", {font: "25px Arial", fill: "yellow"});
        this.pet = new Bird1(this, 100, window.innerHeight - 160);
        this.pet.walk();

    }
    update() {

        this.pet.update();
    }
}
