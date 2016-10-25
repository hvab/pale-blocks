# button

Используется для создания различных типов кнопок.

## Модификаторы блока

| Модификатор | Описание |
| -- | -- |
| `button_type_link` | Используется с тегом `a`. |
| `button_type_submit` | Используется для создания кнопки, обеспечивающей отправку данных на сервер. Кнопка такого типа всегда должна располагаться в форме. |
| `button_block` | Используется, когда надо сделать кнопку блочным элментом во всю ширину контейнера. |
| `button_theme_pale` | Для группировки стилевого оформления кнопок. |
| `button_size_xs`, `button_size_s`, `button_size_m`, `button_size_l`, `button_size_xl` | Размеры кнопок. |
| `button_view_action` | Используется для визуального выделения кнопки на странице. |
| `button_view_pseudo` | Используется для изменения внешнего вида блока при необходимости сделать кнопку менее заметной на странице. |


## Примеры

### Виды
```html
<button type="button" class="button button_theme_pale button_view_action">Button</button>

<button type="button" class="button button_theme_pale button_view_pseudo">Button</button>

<button type="button" class="button button_theme_pale">Button</button>

<a href="" class="button button_type_link button_theme_pale">Button</a>
```

### Размеры
```html
<button type="button" class="button button_size_xs button_theme_pale button_view_action">Button</button>

<button type="button" class="button button_size_s button_theme_pale button_view_action">Button</button>

<button type="button" class="button button_size_m button_theme_pale button_view_action">Button</button>

<button type="button" class="button button_size_l button_theme_pale button_view_action">Button</button>

<button type="button" class="button button_size_xl button_theme_pale button_view_action">Button</button>
```
