# text

Вспомогательный блок. Используется для задания различных служебных стилей тексту.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `text_title` | Для больших размеров текста, уменьшает `line-height`. |
| `text_paragraph` | Для случаев, когда надо добавить отступ как у `p`. |
| `text_padded` | Добавляет отступ вокруг блока с текстом. |
| `text_truncate` | Обрезает однострочный текст, и добавляет многоточие. Требуется, чтобы блок был `inline-block` или `block`. |
| `text_hide` | Используется, когда нужно скрыть текст и поставить фоновую картинку. |
| `text_sr` | Скрывает текст, но оставляет его доступным для экранных читалок. |
| `text_align_center`, `text_align_left`, `text_align_right` | Выравнивание текста по горизонтали. |
| `text_size_xs`, `text_size_s`, `text_size_m`, `text_size_l`, `text_size_xl` | Размеры текста. |
| `text_color_primary`, `text_color_secondary`, `text_color_disabled`, `text_color_divider` | Оттенки от черного до бледно-серого для визуального выделения текста. |
| `text_bg_300`, `text_bg_100`, `text_bg_50` | Серые фоны от темного к светлому. |


## Примеры

```html
<p class="text text_title"><strong>Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit</strong></p>

<div class="text text_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>

<p class="text text_padded">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_align_left">Left aligned text.</p>
<p class="text text_align_center">Center aligned text.</p>
<p class="text text_align_right">Right aligned text.</p>

<p class="text text_size_xs">xs: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_size_s">s: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_size_m">m: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_size_l">l: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_size_xl">xl: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_color_primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_color_secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_color_disabled">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_color_divider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_bg_300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_bg_100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="text text_bg_50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
```
