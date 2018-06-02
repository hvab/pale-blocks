# input

Используется для создания различных типов текстовых полей.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `input_width_available` | Максимально допустимая ширина текстового поля. |
| `input_theme_pale` | Для группировки стилевого оформления текстовых полей. |
| `input_size_xs`, `input_size_s`, `input_size_m`, `input_size_l`, `input_size_xl` | Размер текстового поля.  |

## Примеры

```html
<em>Типы полей:</em>
<p>
  <input class="input input_theme_pale" type="text" value="Text">
</p>
<p>
  <input class="input input_theme_pale" type="search" value="How do I shoot web">
</p>
<p>
  <input class="input input_theme_pale" type="email" value="bootstrap@example.com">
</p>
<p>
  <input class="input input_theme_pale" type="url" value="https://ya.ru">
</p>
<p>
  <input class="input input_theme_pale" type="tel" value="1-(555)-555-5555">
</p>
<p>
  <input class="input input_theme_pale" type="password" value="hunter2">
</p>
<p>
  <input class="input input_theme_pale" type="number" value="42">
</p>
<p>
  <input class="input input_theme_pale" type="date" value="2011-08-19">
</p>
<p>
  <input class="input input_theme_pale" type="time" value="13:45:00">
</p>
<p>
  <input class="input input_theme_pale" type="color" value="#563d7c">
</p>

<em>Disabled:</em>
<p>
  <input class="input input_theme_pale" type="text" value="Text" disabled>
</p>

<em>Width:</em>
<p>
  <input class="input input_theme_pale input_width_available" type="text" value="Text">
</p>

<em>Size:</em>
<p>
  <input class="input input_size_xs input_theme_pale" type="text" value="size xs">
</p>
<p>
  <input class="input input_size_s input_theme_pale" type="text" value="size s">
</p>
<p>
  <input class="input input_size_m input_theme_pale" type="text" value="size m">
</p>
<p>
  <input class="input input_size_l input_theme_pale" type="text" value="size l">
</p>
<p>
  <input class="input input_size_xl input_theme_pale" type="text" value="size xl">
</p>
```
