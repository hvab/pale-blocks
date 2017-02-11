# textarea

Используется для создания текстовой области.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `textarea_width_available` | Максимально допустимая ширина текстовой области. |
| `textarea_theme_pale` | Для группировки стилевого оформления текстовых областей. |
| `textarea_size_xs`, `textarea_size_s`, `textarea_size_m`, `textarea_size_l`, `textarea_size_xl` | Размер текстовой области. |

## Примеры

### Ширина
```html
<textarea class="textarea textarea_width_available textarea_theme_pale" rows="3">width available</textarea>
```

### Размеры
```html
<textarea class="textarea textarea_size_xs textarea_theme_pale">size xs</textarea>

<textarea class="textarea textarea_size_s textarea_theme_pale">size s</textarea>

<textarea class="textarea textarea_size_m textarea_theme_pale">size m</textarea>

<textarea class="textarea textarea_size_l textarea_theme_pale">size l</textarea>

<textarea class="textarea textarea_size_xl textarea_theme_pale">size xl</textarea>
```
