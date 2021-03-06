---
title: Внедрение Sass
category:
  - Sass
  - Внедрение
---

## Обзор

У Sass есть процветающее сообщество реализаций, которые постоянно создаются. Основная команда любит видеть, как новые реализации развиваются и развиваются, и они хотят помочь всем, чем могут.

## Ресурсы

- [`sass-spec`](https://github.com/sass/sass-spec) - это набор независимых от реализации тестовых примеров для проверки правильности работы реализации Sass. Это лучший способ отслеживать совместимость вашей реализации с эталонной реализацией Sass.
- [Как работает `@extend`](https://gist.github.com/nex3/7609394) - это довольно подробное описание алгоритма, используемого самой сложной функцией Sass. Натали по-прежнему говорит, что реализация `@extend` - самый сложный код, который ей когда-либо приходилось писать, но, к счастью, вам не нужно разбираться в этом с нуля.
- **Протяните руку помощи!** Если вы работаете над новой реализацией, мы хотим об этом услышать. Отправьте электронное письмо [Натали](mailto:nex342@gmail.com) и [Крису](mailto:chris@eppsteins.net), расскажите нам о крутой работе, которую вы делаете, и спросите о любых уголках языка, которые не совсем понятно.

## Требования

Мы искренне любим новые реализации Sass, но у нас есть несколько ограничений, которым мы просим эти реализации следовать, чтобы называть себя «Sass», «реализациями Sass» и т.п. Sass - это не только язык, но и сообщество, и важно, чтобы все реализации были готовы работать на благо сообщества.

Во-первых, мы просим, ​​чтобы каждая реализация принимала [руководящие принципы сообщества Sass](./community-guidelines) для своих собственных сообществ, ориентированных на конкретную реализацию. Многое из того, что делает сообщество Sass сильным, - это культура доброты и уважения, а наличие четких и ясных руководящих принципов помогает создать эту культуру.

Во-вторых, мы просим, ​​чтобы реализации не расширяли язык без согласия других основных реализаций и разработчиков языка Натали и Криса. Единственная причина, по которой сообщество Sass вообще существует, заключается в том, что язык позволяет разработчикам совместно использовать стили и фреймворки, и для совместного использования этого кода Sass, который работает для одной реализации, он работает одинаково для всех из них. Кроме того, важно иметь единое видение языкового дизайна.

## Внесение изменений в язык

Конечно, Sass все еще может развиваться как язык. У нас есть [процесс][a process] для предложения и повторения новых языковых функций, в которых может участвовать каждый. Языковые изменения обсуждаются совместно, с особым вниманием к разработчикам зрелых реализаций Sass. Будут предприняты попытки достичь консенсуса со всеми заинтересованными сторонами. Однако в некоторых случаях это может быть невозможно, и последнее слово остается за ведущим дизайнером Sass Натали.

[a process]: https://github.com/sass/language/blob/master/CONTRIBUTING.md
