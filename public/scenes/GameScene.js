import { Bird1 } from "../js/Bird1.js";
export default class GameScene extends Phaser.Scene {

    constructor() {
        super({ key: 'GameScene' });
    }
    
    preload() {
        this.load.image('ground', 'assets/ground.png');
        this.load.image('fish', 'assets/fish.png');
        //this.load.atlas('apple', 'assets/apple.png', 'assets/apple.json');
        //this.load.atlas('lunatic', 'assets/lunatic.png', 'assets/lunatic.json');
        this.load.atlas('bird1', 'assets/bird1.png', 'assets/bird1.json');
    }
    
    create() {
        this.cameras.main.setBackgroundColor('#87CEEB'); 
        let groundHeight = 100;
        let feedButton = this.add.rectangle(230, 125, 150, 50, 0x008000) // Зелёный прямоугольник
        .setInteractive()
        .on('pointerdown', () => {
            feedButton.setFillStyle(0x00FF00); // Светло-зеленый при нажатии
            this.feed();
        })
        .on('pointerup', () => feedButton.setFillStyle(0x008000)) // Вернуть первоначальный цвет
        .on('pointerout', () => feedButton.setFillStyle(0x008000)); // Вернуть первоначальный цвет
        this.feed = () => {
            let food = this.physics.add.image(230, 125, 'fish');
            food.setVelocityY(50);
            food.setScale(0.5);
            this.lastFood = food;
            //food.setVelocityY(100); // Настройте скорость по вашему усмотрению
        };
    this.add.text(feedButton.x, feedButton.y, 'Feed', {
        font: '20px Arial',
        fill: '#000000'
    }).setOrigin(0.5);
        let button = this.add.rectangle(75, 125, 150, 50, 0x800000)
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
        this.pet = new Bird1(this, 100, window.innerHeight - 160);
        this.pet.walk();

    }
    update() {
        if (this.lastFood && this.pet) {
            // Вычисляем направление от питомца к еде
            let direction = new Phaser.Math.Vector2(this.lastFood.x - this.pet.x, this.lastFood.y - this.pet.y);
            direction.normalize(); // Нормализуем вектор, чтобы получить только направление
    
            // Обновляем положение питомца, чтобы приблизить его к еде
            this.pet.x += direction.x * 2; // Умножаем на скорость питомца
            this.pet.y += direction.y * 2;
    
            // Опционально: если питомец достиг еды, можно уничтожить еду и остановить движение
            if (Phaser.Math.Distance.Between(this.pet.x, this.pet.y, this.lastFood.x, this.lastFood.y) < 30) {
                this.lastFood.destroy(); // Уничтожаем еду
                this.lastFood = null; // Сбрасываем ссылку на еду
            }
        }
        this.pet.update();
    }
}
