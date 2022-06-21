---
title: LibSass
category:
  - Sass
  - LibSass
---

## Введение

LibSass — это реализация Sass на C/C++, предназначенная для простой интеграции во множество различных языков. Однако со временем он стал отставать от [Dart Sass](dart-sass) по функциям и совместимости с CSS. **LibSass больше не рекомендуется** — в новых проектах вместо него следует использовать Dart Sass.

## Обертки

LibSass — это просто библиотека. Для локального запуска кода (т. е. для компиляции ваших таблиц стилей) вам понадобится средство реализации или "wrapper". Существует ряд других оболочек для LibSass. Мы призываем вас написать свою собственную оболочку --- вся суть LibSass в том, что мы хотим перенести Sass на многие другие языки, а не только на Ruby!

Ниже приведены обёртки LibSass, о которых мы в настоящее время знаем. Иногда для каждого языка используется несколько оболочек — в таких случаях мы помещаем самую последнюю обновленную оболочку первой.

### Sass C

[SassC](https://github.com/sass/sassc) (понятно?) — это оболочка, написанная на C.

Чтобы запустить компилятор на вашем локальном компьютере, вам нужно собрать SassC. Для сборки SassC у вас должна быть либо локальная копия исходного кода LibSass, либо он должен быть установлен в вашей системе. Для разработки используйте исходную версию. Затем вы должны настроить переменную среды, указывающую на папку LibSass, например:

```sh
export SASS_LIBSASS_PATH=/Users/hcatlin/path/libsass
```

Исполняемый файл будет находиться в папке `bin`. Чтобы запустить его, попробуйте что-то вроде:

```bash
./bin/sassc [input file] > output.css
```

### Crystal

[sass.cr](https://github.com/straight-shoota/sass.cr) — это оболочка LibSass для [языка программирования Crystal](https://crystal-lang.org/).

### Go

[go-libsass](https://github.com/wellington/go-libsass) имеет самую активную оболочку GoLang. [gosass](https://github.com/moovweb/gosass) — еще одна оболочка LibSass.

[C6](https://github.com/c9s/c6) — это реализация, совместимая с Sass 3.2, написанная на чистом GoLang, целью которой является расширение Sass. [wellington/sass](https://github.com/wellington/sass) — это чистый лексер, парсер и компилятор Go Sass, находящийся в разработке.

### Java

Существует одна оболочка Java --- [jsass](https://github.com/bit3/jsass). Также есть плагин для Maven --- [LibSass Maven plugin](https://gitlab.com/haynes/libsass-maven-plugin).

### JavaScript

Проект [sass.js](https://github.com/medialize/sass.js) делает LibSass доступным как чистый JavaScript. Также есть способ [протестировать в браузере](http://medialize.github.io/playground.sass.js/).

### Lua

Обертка Lua находится по адресу [lua-sass](https://github.com/craigbarnes/lua-sass).

### .NET

[LibSass Host](https://github.com/Taritsyn/LibSassHost) регулярно обновляется и, вероятно, является лучшим выбором. Также есть [libsass-net](https://github.com/darrenkopp/libsass-net) или [NSass](https://github.com/TBAPI-0KA/NSass), хотя они не обновлялись в какое-то время.

### Node

Проект [node-sass](https://github.com/sass/node-sass) оказался популярным, и мы добавили его в основной репозиторий Sass на GitHub. Посетите страницу пакета [здесь](https://www.npmjs.org/package/node-sass) и [есть специальная учетная запись twitter](https://twitter.com/nodesass) для получения обновлений.

### Perl

Проект [CSS::Sass](https://github.com/sass/perl-libsass) регулярно обновляется. Также есть проект [Text-Sass-XS](https://github.com/ysasaki/Text-Sass-XS), хотя он давно не обновлялся.

### PHP

Проект [SassPHP](https://github.com/absalomedia/sassphp) является обновленным форком [старой версии PHP](https://github.com/jamierumbelow/sassphp).

### Python

Проект [libsass-python](https://github.com/sass/libsass-python) регулярно обновляется. Более подробную информацию можно найти на [собственном веб-сайте](https://sass.github.io/libsass-python/).

Три других проекта Python: [python-scss](https://github.com/pistolero/python-scss), [pylibsass](https://github.com/rsenk330/pylibsass) и [SassPython](https://github.com/marianoguerra/SassPython), давно не обновлялся.

### Ruby

LibSass также был портирован обратно на Ruby для проекта [sassc-ruby](https://github.com/sass/sassc-ruby).

### R

[R](https://www.r-project.org/) [пакет Sass](https://github.com/rstudio/sass) включает в себя LibSass с дополнительными методами кэширования и связывания. [Расширенная документация](https://rstudio.github.io/sass/).

### Rust

Крейт [`sass_rs`](https://github.com/compass-rs/sass-rs) является оболочкой LibSass и регулярно обновляется.

### Scala

Единственный проект на Scala [Sass-Scala](https://github.com/kkung/Sass-Scala), не обновлялся уже пару лет.

### О LibSass

Этот проект является детищем [Hampton Catlin](http://twitter.com/hcatlin), первоначального создателя Sass, и спонсируется [Moovweb](http://moovweb.com/). [Aaron Leung](http://github.com/akhleung) из Moovweb является основным разработчиком.

::: center
![LibSass logo](/images/refs/web/layouts/sass/logos/libsass.png)
:::

### Ресурсы

- [Молниеносная компиляция Sass с помощью libsass, Node-sass и Grunt-sass](http://benfrain.com/lightning-fast-sass-compiling-with-libsass-node-sass-and-grunt-sass/) — Бен Фрейн, август 2013г
- [Node, Express и libSass](https://anotheruiguy.gitbooks.io/nodeexpreslibsass_from-scratch/content/index.html) мастерская проекта с нуля
