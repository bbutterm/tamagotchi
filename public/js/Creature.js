export class Creature extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.isAlive=true;
        this.scene.add.existing(this);
        this.moveSpeed = 1; // Стандартная скорость движения
        this.moveDirection = Math.random() > 0.5 ? 1 : -1; // Направление движения
        this.isMoving = false; // Статус движения
    }

    // Инициализация анимаций
    initAnimations(animationKey, framesConfig) {
        const animsKey = `${animationKey}_walk`;
        if (this.scene.anims.get(animsKey) === undefined) {
            this.scene.anims.create({
                key: animsKey,
                frames: this.scene.anims.generateFrameNames(animationKey, framesConfig),
                frameRate: 4,
                repeat: -1
            });
        }
    }

    // Начало движения
    walk() {
        this.isMoving = true;
        this.play(`${this.texture.key}_walk`, true);
    }

    // Остановка движения
    stop() {
        this.isMoving = false;
        this.anims.stop();
    }

    // Обновление состояния
    update() {
        if (!this.isAlive){
            this.stop();
        }
        if (this.isMoving) {
            this.x += this.moveSpeed * this.moveDirection;
            if (Math.random() < 0.01) {
                this.moveDirection *= -1;
                this.flipX = this.moveDirection < 0;
            }
            if (this.x < 0 || this.x > this.scene.sys.game.config.width) {
                this.moveDirection *= -1;
                this.flipX = this.moveDirection < 0;
            }
        }
    }
}
