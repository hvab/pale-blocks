# hint

Используется для создания всплывающих подсказок (tooltips).

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `hint_size_s`, `hint_size_m`, `hint_size_l` | Размеры. Используется для многострочных подсказок. По-умолчанию однострочные. |
| `hint_top`, `hint_right`, `hint_left` | Направления вверх, вправо, влево. По-умолчанию показывается снизу. |


## Примеры

### Направления
```html
<span class="hint" aria-label="Thank you!">Hint bottom</span>

<span class="hint hint_top" aria-label="Thank you!">Hint top</span>

<span class="hint hint_right" aria-label="Thank you!">Hint right</span>

<span class="hint hint_left" aria-label="Thank you!">Hint left</span>
```

### Размеры
```html
<span class="hint hint_size_s" aria-label="Thank you! Adding a hint--bounce class gives you that...">Hint small</span>

<span class="hint hint_size_m" aria-label="Thank you! Adding a hint--bounce class gives you that...">Hint medium</span>

<span class="hint hint_size_l" aria-label="Thank you! Adding a hint--bounce class gives you that...">Hint large</span>
```
