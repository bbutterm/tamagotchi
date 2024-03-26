class Pet extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        // Используйте первый кадр анимации или статичное изображение для инициализации спрайта
        super(scene, x, y, 'lunatic', 'Lunatic-2.png');

        // Добавление спрайта на сцену
        this.scene.add.existing(this);
        this.moveSpeed = 1;

        // Направление движения: -1 для влево, 1 для вправо
        this.moveDirection = Math.random() > 0.5 ? 1 : -1;

        // Флаг для управления движением
        this.isMoving = false;
        // Инициализация анимаций питомца
        this.initAnimations();
    }

    initAnimations() {
        // Убедитесь, что анимация создаётся только один раз
        if (this.scene.anims.get('walk') === undefined) {
            this.scene.anims.create({
                key: 'walk',
                frames: this.scene.anims.generateFrameNames('lunatic', {
                    start: 0, end: 3, // Предположим, что у нас есть 4 кадра ходьбы
                    prefix: 'Lunatic-', // Общий префикс имён файлов
                    suffix: '.png',
                    zeroPad: 1 // Настройте в соответствии с форматом именования файлов
                }),
                frameRate: 4,
                repeat: -1 // Бесконечное повторение анимации
            });
        }
    }

    walk() {
        // Активация движения
        this.isMoving = true;

        // Запуск анимации ходьбы
        this.play('walk', true);
    }

    stop() {
        // Остановка движения
        this.isMoving = false;

        // Остановка анимации
        this.stop();
    }

    update() {
        if (this.isMoving) {
            // Обновление положения питомца в зависимости от направления
            this.x += this.moveSpeed * this.moveDirection;

            // Случайное изменение направления
            if (Math.random() < 0.01) {
                this.moveDirection *= -1;
                this.flipX = this.moveDirection > 0 ? false : true;
            }

            // Проверка на выход за границы сцены и изменение направления при необходимости
            if (this.x < 0 || this.x > this.scene.sys.game.config.width) {
                this.moveDirection *= -1;
                this.flipX = this.moveDirection > 0 ? false : true;
            }
        }
    }
}
export { Pet };

