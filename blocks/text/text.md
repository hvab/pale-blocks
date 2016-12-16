# text

Вспомогательный блок. Используется для задания различных служебных стилей тексту.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `text_title` | Для больших размеров текста, уменьшает `line-height`. |
| `text_truncate` | Обрезает однострочный текст, и добавляет многоточие. Требуется, чтобы блок был `inline-block` или `block`. |
| `text_hide` | Используется, когда нужно скрыть текст и поставить фоновую картинку. |
| `text_sr` | Скрывает текст, но оставляет его доступным для экранных читалок. |
| `text_align_center`, `text_align_left`, `text_align_right` | Выравнивание текста по горизонтали. |
| `text_size_xs`, `text_size_s`, `text_size_m`, `text_size_l`, `text_size_xl` | Размеры текста. |
| `text_color_primary`, `text_color_secondary`, `text_color_disabled`, `text_color_divider` | Оттенки от черного до бледно-серого для визуального выделения текста. |
| `text_bg_300`, `text_bg_100`, `text_bg_50` | Серые фоны от темного к светлому. |


## Примеры

```html
<div class="text text_center text_size_l text_color_primary text_bg_100">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
```
