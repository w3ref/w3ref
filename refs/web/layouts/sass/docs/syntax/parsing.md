---
title: Парсинг таблицы стилей
index: false
category:
  - Sass
  - Syntax
---

## Обзор

Таблица стилей Sass анализируется из последовательности кодовых точек Unicode. Он анализируется напрямую, без предварительного преобразования в поток токенов.

### Кодирование ввода

::: details <Status :data="{ feature: false, dart: false, lib: true, ruby: true }" />

Dart Sass в настоящее время поддерживает только кодировку UTF-8. Таким образом, безопаснее всего кодировать все таблицы стилей Sass как UTF-8.

:::

Часто бывает, что документ изначально доступен только как последовательность байтов, которую необходимо декодировать в Unicode. Sass выполняет это декодирование следующим образом:

- Если последовательность байтов начинается с `UTF-8` или `UTF-16` кодировки `U+FEFF` `BYTE` `ORDER` `MARK`, используется соответствующая кодировка.
- Если последовательность байтов начинается с простой строки ASCII @charset, Sass определяет кодировку, используя шаг 2 алгоритма CSS для определения резервной кодировки.
- В противном случае используется `UTF-8`.

### Разбор ошибок

Когда Sass обнаруживает недопустимый синтаксис в таблице стилей, синтаксический анализ завершается неудачно, и пользователю будет представлена ошибка с информацией о местонахождении недопустимого синтаксиса и причине, по которой он был недопустимым.

Обратите внимание, что это отличается от CSS, который указывает, как исправить большинство ошибок, а не сразу после сбоя. Это один из немногих случаев, когда SCSS не является строго надмножеством CSS. Однако пользователям Sass гораздо полезнее сразу видеть ошибки, а не передавать их в вывод CSS.

Доступ к местоположению ошибок синтаксического анализа можно получить через API, зависящие от реализации. Например, в Dart Sass вы можете получить доступ к [`SassException.span`](https://pub.dartlang.org/documentation/sass/latest/sass/SassException/span.html), а в Node Sass и Dart Sass JS API вы можете получить доступ к свойствам [`file`, `line` и `column`](https://github.com/sass/node-sass#error-object).

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>