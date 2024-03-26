const express = require('express');
const app = express();
const PORT = 3000;

// Добавление поддержки статических файлов
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Tamagotchi Game Server is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
