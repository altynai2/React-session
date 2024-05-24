const path = require('path');

module.exports = {
  // Определение режима сборки: development для разработки или production для продакшена
  mode: 'development', 

  // Точка входа в приложение
  entry: './src/index.js',

  // Настройка выходных данных
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  // Настройки сервера разработки
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },

  // Настройки модулей
  module: {
    rules: [
      {
        test: /\.js$/, // Регулярное выражение, которое подходит для всех файлов JS
        exclude: /node_modules/, // Исключить папку node_modules
        use: {
          loader: 'babel-loader', // Использовать загрузчик Babel для транспиляции JS
          options: {
            presets: ['@babel/preset-env'] // Подключение пресета для поддержки современного JavaScript
          }
        }
      }
    ]
  }
};
