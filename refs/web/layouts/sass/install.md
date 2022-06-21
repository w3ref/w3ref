---
title: Установка Sass
category:
  - Sass
  - Установка
---

## Приложения

::: center
![Mouse](/images/refs/web/layouts/sass/illustrations/mouse.svg)
:::

Существует множество приложений, которые позволят вам за несколько минут начать работу с Sass для Mac, Windows и Linux. Вы можете скачать большинство приложений бесплатно, но некоторые из них являются платными <small>(и они того стоят)</small>.

- [CodeKit](https://codekitapp.com/) (<Badge text="Платно" type="danger" vertical="middle" />) <Badge text="Mac" type="note" vertical="middle" />
- [Hammer](http://hammerformac.com/) (<Badge text="Платно" type="danger" vertical="middle" />) <Badge text="Mac" type="note" vertical="middle" />
- [LiveReload](http://livereload.com/) (<Badge text="Платно" type="danger" vertical="middle" />, <Badge text="С открытым исходным кодом" type="tip" vertical="middle" />) <Badge text="Mac" type="note" vertical="middle" /> <Badge text="Windows" type="note" vertical="middle" />
- [Prepros](https://prepros.io/) (<Badge text="Платно" type="danger" vertical="middle" />) <Badge text="Mac" type="note" vertical="middle" /> <Badge text="Windows" type="note" vertical="middle" /> <Badge text="Linux" type="note" vertical="middle" />
- [Scout-App](http://scout-app.io/) (<Badge text="Бесплатно" type="tip" vertical="middle" />), <Badge text="С открытым исходным кодом" type="tip" vertical="middle" />) <Badge text="Mac" type="note" vertical="middle" /> <Badge text="Windows" type="note" vertical="middle" /> <Badge text="Linux" type="note" vertical="middle" />

## Библиотеки

Команда Sass поддерживает два пакета Node.js для Sass, оба из которых поддерживают [стандартный JavaScript API](./docs/js-api). [Пакет `sass`](https://www.npmjs.com/package/sass) представляет собой чистый JavaScript, который немного медленнее, но может быть установлен на всех платформах, поддерживаемых Node.js. [Пакет `sass-embedded`](https://www.npmjs.com/package/sass-embedded) оборачивает JS API вокруг виртуальной машины Dart, поэтому он работает быстрее, но поддерживает только Windows, Mac OS и Linux.

Существуют также поддерживаемые сообществом оболочки для следующих языков:

- [Java](https://mvnrepository.com/artifact/de.larsgrefer.sass), включая плагин [Gradle](https://docs.freefair.io/gradle-plugins/current/reference/#_embedded_sass)
- [Ruby](https://github.com/ntkme/sass-embedded-host-ruby#readme)
- [Swift](https://github.com/johnfairh/swift-sass#readme)

## Командная строка

::: center
![Keyboard](/images/refs/web/layouts/sass/illustrations/keyboard.svg)
:::

Когда вы устанавливаете Sass в командной строке, вы сможете запустить исполняемый файл `sass` для компиляции файлов `.sass` и `.scss` в файлы `.css`. Например:

```bash
sass source/stylesheets/index.scss build/stylesheets/index.css
```

Сначала установите Sass, используя один из вариантов ниже, затем запустите `sass --version` , чтобы убедиться, что он установлен правильно. Если это так, это будет включать {{ versions.dart }}. Вы также можете запустить `sass --help` для получения дополнительной информации об интерфейсе командной строки.

Как только все будет готово, <strong>иди и играй</strong>. Если вы новичок в Sass, мы подготовили несколько ресурсов, которые помогут вам быстро освоиться.

[Узнать больше о Sass](/guide)

### Установка в любом месте (автономная)

Вы можете установить Sass на Windows, Mac или Linux, загрузив пакет для своей операционной системы <a :href="tags.dart" target="_blank">с GitHub</a> и <a href="https://katiek2.github.io/path-doc/" target="_blank">добавив его в свой `PATH`</a>. Вот и все - никаких внешних зависимостей и ничего больше устанавливать не нужно.

### Установка в любом месте (npm)

Если вы используете Node.js, вы также можете установить Sass с помощью npm, запустив [npm](https://www.npmjs.com/)

``` bash
npm install -g sass
```

<strong>Однако обратите внимание</strong>, что при этом будет установлена чистая реализация Sass на JavaScript, которая работает несколько медленнее, чем другие варианты, перечисленные здесь. Но у него тот же интерфейс, поэтому позже, если вам понадобится немного больше скорости, будет легко заменить его на другую реализацию!

### Установка на Windows (Chocolatey)

Если вы используете [менеджер пакетов Chocolatey](https://chocolatey.org/) для Windows, вы можете установить Dart Sass, запустив

```bash
choco install sass
```

### Установка на Mac OS X или Linux (Homebrew)

Если вы используете [менеджер пакетов Homebrew](https://brew.sh/) для Mac OS X или Linux, вы можете установить Dart Sass, запустив

```bash
brew install sass/sass/sass
```

<script setup>
import { versions, tags } from "@data/sass";
</script>
