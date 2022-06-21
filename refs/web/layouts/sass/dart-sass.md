---
title: Dart Sass
category:
  - Sass
  - Dart Sass
---

## Введение

Dart Sass — это основная реализация Sass, что означает, что он получает новые функции раньше любой другой реализации. Он быстрый, простой в установке и компилируется в чистый JavaScript, что позволяет легко интегрировать его в современные рабочие процессы веб-разработки. Узнайте больше или помогите с его разработкой на [GitHub](https://github.com/sass/dart-sass).

## Командная строка

Автономный исполняемый файл командной строки Dart Sass использует молниеносную виртуальную машину Dart для компиляции ваших таблиц стилей. Чтобы установить Dart Sass из командной строки, ознакомьтесь с [инструкцией по установке](./install). Как только вы запустите его, вы можете использовать его для компиляции файлов:

```sh
sass source/index.scss css/index.css
```

Смотрите `sass --help` для получения дополнительной информации об интерфейсе командной строки.

### Библиотека Dart

Вы также можете использовать Dart Sass в качестве библиотеки Dart, чтобы получить скорость виртуальной машины Dart, а также возможность определять свои собственные функции и средства импорта. Чтобы добавить его в существующий проект:

1. [Установите Dart SDK](https://www.dartlang.org/install#automated-installation-and-updates). Убедитесь, что его каталог `bin` находится [в вашем `PATH`](https://katiek2.github.io/path-doc/).
2. Создайте файл `pubspec.yaml` следующим образом:

  ```yaml
  name: my_project
  dev_dependencies:
  sass: ^#{impl_version(:dart)}
  ```

3. Запустите `dart pub get`.
4. Создайте файл `compile-sass.dart` следующим образом:

  ```dart
  import 'dart:io';
  import 'package:sass/sass.dart' as sass;

  void main(List<String> arguments) {
    var result = sass.compile(arguments[0]);
    new File(arguments[1]).writeAsStringSync(result);
  }
  ```

5. Теперь вы можете использовать это для компиляции файлов:

  ```sh
  dart compile-sass.dart styles.scss styles.css
  ```

6. Узнайте больше о [написании кода Dart](https://www.dartlang.org/guides/language/language-tour) (это просто!) и о [Sass Dart API](https://pub.dev/documentation/sass/latest/sass/compileToResult.html).

## Библиотека JavaScript

Dart Sass также распространяется как чистый JavaScript [пакет `sass`](https://npmjs.com/package/sass) на `npm`. Чистая версия JS медленнее, чем автономный исполняемый файл, но ее легко интегрировать в существующие рабочие процессы, и она позволяет определять пользовательские функции и средства импорта в JavaScript. Вы можете добавить его в свой проект, используя `npm install --save-dev sass` b `require()` как библиотеку:

```js
var sass = require('sass');

sass.render({
  file: scss_filename
}, function(err, result) {
  /* ... */
});

// OR

var result = sass.renderSync({
  file: scss_filename
});
```

При установке через npm Dart Sass поддерживает API JavaScript, который должен быть совместим с [Node Sass](https://github.com/sass/node-sass#usage). Полная совместимость находится в стадии разработки, но Dart Sass в настоящее время поддерживает функции `render()` и `renderSync()`. Однако обратите внимание, что по умолчанию **`renderSync()` работает более чем в два раза быстрее, чем `render()`**, из-за накладных расходов на асинхронные обратные вызовы.

Чтобы избежать этого падения производительности, `render()` может использовать пакет [`fibers`](https://www.npmjs.com/package/fibers) для вызова асинхронных импортеров из пути синхронного кода. Чтобы включить это, передайте класс `Fiber` опции `fiber`:

```js
var sass = require("sass");
var Fiber = require("fibers");

sass.render({
  file: "input.scss",
  importer: function(url, prev, done) {
    // ...
  },
  fiber: Fiber
}, function(err, result) {
  // ...
});
```

Смотрите [документацию Dart Sass](https://github.com/sass/dart-sass/blob/master/README.md#javascript-api) для получения дополнительной информации о его JavaScript API.
