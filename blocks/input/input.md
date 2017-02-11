# input

Используется для создания различных типов текстовых полей.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `input_width_available` | Максимально допустимая ширина текстового поля. |
| `input_theme_pale` | Для группировки стилевого оформления текстовых полей. |
| `input_size_xs`, `input_size_s`, `input_size_m`, `input_size_l`, `input_size_xl` | Размер текстового поля.  |

## Примеры

### Типы полей
```html
<input class="input input_theme_pale" type="text" value="Text" disabled>
<input class="input input_theme_pale" type="search" value="How do I shoot web">
<input class="input input_theme_pale" type="email" value="bootstrap@example.com">
<input class="input input_theme_pale" type="url" value="https://ya.ru">
<input class="input input_theme_pale" type="tel" value="1-(555)-555-5555">
<input class="input input_theme_pale" type="password" value="hunter2">
<input class="input input_theme_pale" type="number" value="42">
<input class="input input_theme_pale" type="date" value="2011-08-19">
<input class="input input_theme_pale" type="time" value="13:45:00">
<input class="input input_theme_pale" type="color" value="#563d7c">
```

### Ширина
```html
<input class="input input_width_available input_theme_pale" type="text" value="width available">
```

### Размеры
```html
<input class="input input_size_xs input_theme_pale" type="text" value="size xs">
<input class="input input_size_s input_theme_pale" type="text" value="size s">
<input class="input input_size_m input_theme_pale" type="text" value="size m">
<input class="input input_size_l input_theme_pale" type="text" value="size l">
<input class="input input_size_xl input_theme_pale" type="text" value="size xl">
```
