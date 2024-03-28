import { Pet } from "../js/Pet.js";
import { Apple } from "../js/Apple.js";
import { Panda } from "../js/Panda.js";
export default class GameScene extends Phaser.Scene {

    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('ground', 'assets/ground.png');
        //this.load.atlas('apple', 'assets/apple.png', 'assets/apple.json');
        //this.load.atlas('lunatic', 'assets/lunatic.png', 'assets/lunatic.json');
        this.load.atlas('panda', 'assets/panda.png', 'assets/panda.json');
    }

    create() {
        this.cameras.main.setBackgroundColor('#87CEEB'); // Голубой цвет фона
        let groundHeight = 100; // Высота прямоугольника земли
        this.add.rectangle(0, window.innerHeight, window.innerWidth, groundHeight, 0x8B4513).setOrigin(0, 1);
        this.add.text(100, window.innerHeight/2, "Игровая сцена", {font: "25px Arial", fill: "yellow"});
        // this.pet = new Pet(this, 100, 730);
        // this.pet.walk();
        this.panda = new Panda(this, 100, window.innerHeight - 100);
        this.panda.walk();
        // this.apple = new Apple(this, 100,800);
        // this.apple.walk();

    }

    update() {
        // this.pet.update();
        //this.apple.update();
        this.panda.update();
    }
}
