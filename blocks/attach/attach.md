# attach

Используется для выбора файла, предназначенного для отправки на сервер.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `attach_width_available` | Максимально допустимая ширина поля. |
| `attach_theme_pale` | Для группировки стилевого оформления. |
| `attach_size_xs`, `attach_size_s`, `attach_size_m`, `attach_size_l`, `attach_size_xl` | Размер поля.  |

## Примеры

### Типы
```html
<input type="file" class="attach attach_theme_pale">
<input type="file" class="attach attach_theme_pale" disabled>
```

### Ширина
```html
<input type="file" class="attach attach_width_available attach_theme_pale">
```

### Размеры
```html
<input type="file" class="attach attach_size_xs attach_theme_pale">
<input type="file" class="attach attach_size_s attach_theme_pale">
<input type="file" class="attach attach_size_m attach_theme_pale">
<input type="file" class="attach attach_size_l attach_theme_pale">
<input type="file" class="attach attach_size_xl attach_theme_pale">
```
