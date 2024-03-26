class Apple extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        // Используйте первый кадр анимации или статичное изображение для инициализации спрайта
        super(scene, x, y, 'apple', 'REDAPPLEPORING_0002.png');

        // Добавление спрайта на сцену
        this.scene.add.existing(this);
        this.moveSpeed = 1;

        // Направление движения: -1 для влево, 1 для вправо
        this.moveDirection = Math.random() > 0.5 ? 1 : -1;

        // Флаг для управления движением
        this.isMoving = false;
        // Инициализация анимаций питомца
        this.initAppleAnimations();
    }

    initAppleAnimations() {
        if (this.scene.anims.get('apple_walk') === undefined) {
            this.scene.anims.create({
                key: 'apple_walk',
                frames: this.scene.anims.generateFrameNames('apple', {
                    start: 0, end: 3, // Предположим, что у нас есть 4 кадра ходьбы
                    prefix: 'REDAPPLEPORING_000', // Общий префикс имён файлов
                    suffix: '.png',
                    zeroPad: 1 // Настройте в соответствии с форматом именования файлов
                }),
                frameRate: 4,
                repeat: -1 // Бесконечное повторение анимации
            });
        } // Уникальный ключ анимации для собаки
    }

    walk() {
        // Активация движения
        this.isMoving = true;

        // Запуск анимации ходьбы
        this.play('apple_walk', true);
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
                this.flipX = this.moveDirection > 0 ? true : false;
            }

            // Проверка на выход за границы сцены и изменение направления при необходимости
            if (this.x < 0 || this.x > this.scene.sys.game.config.width) {
                this.moveDirection *= -1;
                this.flipX = this.moveDirection > 0 ? false : true;
            }
        }
    }
}
export { Apple }