# select

Используется для создания раскрывающегося списка.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `select_width_available` | Максимально допустимая ширина списка. |
| `select_theme_pale` | Для группировки стилевого оформления списков. |
| `select_size_xs`, `select_size_s`, `select_size_m`, `select_size_l`, `select_size_xl` | Размер списка. |

## Примеры

### Ширина
```html
<select class="select select_width_available select_theme_pale">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Размеры
```html
<select class="select select_size_xs select_theme_pale">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<select class="select select_size_s select_theme_pale">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<select class="select select_size_m select_theme_pale">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<select class="select select_size_l select_theme_pale">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<select class="select select_size_xl select_theme_pale">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```
