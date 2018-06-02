# button

Используется для создания различных типов кнопок.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `button_width_available` | Используется, когда надо сделать кнопку во всю ширину контейнера. |
| `button_theme_pale` | Для группировки стилевого оформления кнопок. |
| `button_size_xs`, `button_size_s`, `button_size_m`, `button_size_l`, `button_size_xl` | Размеры кнопок. |
| `button_view_action` | Сильно заметная кнопка. |
| `button_view_outline` | Средне заметная кнопка. |
| `button_view_text` | Наименее заметная кнопка. |
| `button_view_plain` | Используется при необходимости представить кнопкой другой блок, например, иконку (icon). |
| `button_raised` | Добавляет тень, "приподнимая" кнопку. |


## Примеры

```html
<em>Tags:</em>
<p>
  <a class="button button_theme_pale button_view_action" href="#" role="button">Link</a>
  <button class="button button_theme_pale button_view_action" type="button">Button</button>
  <input class="button button_theme_pale button_view_action" type="button" value="Input">
  <input class="button button_theme_pale button_view_action" type="submit" value="Submit">
  <input class="button button_theme_pale button_view_action" type="reset" value="Reset">
</p>

<em>Width:</em>
<p>
  <button class="button button_theme_pale button_view_action button_width_available" type="button">Button width available</button>
</p>

<em>View:</em>
<p>
  <button class="button button_view_plain" type="button">Plain</button>

  <button class="button button_theme_pale button_view_action" type="button">Action</button>

  <button class="button button_theme_pale button_view_action button_raised" type="button">Action raised</button>

  <button class="button button_theme_pale button_view_text" type="button">Text</button>

  <button class="button button_theme_pale button_view_outline" type="button">Outline</button>
</p>

<em>Disabled:</em>
<p>
  <button class="button button_view_plain" type="button" disabled>Plain</button>

  <button class="button button_theme_pale button_view_action" type="button" disabled>Action</button>

  <button class="button button_theme_pale button_view_action button_raised" type="button" disabled>Action raised</button>

  <button class="button button_theme_pale button_view_text" type="button" disabled>Text</button>

  <button class="button button_theme_pale button_view_outline" type="button" disabled>Outline</button>
</p>

<em>Size:</em>
<p>
  <button class="button button_theme_pale button_view_action button_size_xs" type="button">Size xs</button>

  <button class="button button_theme_pale button_view_action button_size_s" type="button">Size s</button>

  <button class="button button_theme_pale button_view_action button_size_m" type="button">Size m</button>

  <button class="button button_theme_pale button_view_action button_size_l" type="button">Size l</button>

  <button class="button button_theme_pale button_view_action button_size_xl" type="button">Size xl</button>
</p>
```
