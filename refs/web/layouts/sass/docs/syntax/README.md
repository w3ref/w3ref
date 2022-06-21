---
title: Синтаксис
category:
  - Sass
  - Синтаксис
---

## Синтаксис

Sass поддерживает два разных синтаксиса. Каждый может загружать другой, поэтому вам и вашей команде решать, какой из них выбрать.

### SCSS

Синтаксис SCSS использует расширение файла .scss. За некоторыми небольшими исключениями, это надмножество CSS, что означает, по сути, что весь действующий CSS также является действительным SCSS. Из-за его сходства с CSS это самый простой и популярный синтаксис.

SCSS выглядит так:

```scss
@mixin button-base() {
  @include typography(button);
  @include ripple-surface;
  @include ripple-radius-bounded;

  display: inline-flex;
  position: relative;
  height: $button-height;
  border: none;
  vertical-align: middle;

  &:hover { cursor: pointer; }

  &:disabled {
    color: $mdc-button-disabled-ink-color;
    cursor: default;
    pointer-events: none;
  }
}
```

### Синтаксис с отступом

Синтаксис с отступом был оригинальным синтаксисом Sass, поэтому он использует расширение файла `.sass`. Из-за этого расширения его иногда называют просто «Sass». Синтаксис с отступом поддерживает все те же функции, что и SCSS, но он использует отступы вместо фигурных скобок и точек с запятой для описания формата документа.

В общем, каждый раз, когда вы пишете фигурные скобки в CSS или SCSS, вы можете просто сделать отступ на один уровень глубже в синтаксисе с отступом. И каждый раз, когда строка заканчивается, это считается точкой с запятой. Есть также несколько дополнительных отличий в синтаксисе с отступом, которые отмечены в справочнике.

Синтаксис с отступом выглядит так:

```sass
@mixin button-base()
  @include typography(button)
  @include ripple-surface
  @include ripple-radius-bounded

  display: inline-flex
  position: relative
  height: $button-height
  border: none
  vertical-align: middle

  &:hover
    cursor: pointer

  &:disabled
    color: $mdc-button-disabled-ink-color
    cursor: default
    pointer-events: none
```
