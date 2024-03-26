import { Pet } from "../js/Pet.js";
import { Apple } from "../js/Apple.js";
import { Panda } from "../js/Panda.js";
export default class GameScene extends Phaser.Scene {

    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.atlas('apple', 'assets/apple.png', 'assets/apple.json');
        this.load.atlas('lunatic', 'assets/lunatic.png', 'assets/lunatic.json');
        this.load.atlas('panda', 'assets/panda.png', 'assets/panda.json');
    }

    create() {
        this.add.text(100, window.innerHeight/2, "Игровая сцена", {font: "25px Arial", fill: "yellow"});
        this.pet = new Pet(this, 100, 100);
        this.pet.walk();
        this.panda = new Panda(this, 100, 200);
        this.panda.walk();
        this.apple = new Apple(this, 100, 300);
        this.apple.walk();

    }

    update() {
        this.pet.update();
        this.apple.update();
        this.panda.update();
    }
}
