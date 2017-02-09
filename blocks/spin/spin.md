# spin

Используется для индикации выполнения какого-либо процесса.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `spin_visible` | Активация индикатора. |
| `spin_size_xs`, `spin_size_s`, `spin_size_m`, `spin_size_l`, `spin_size_xl` | Размеры индикатора. |


## Примеры

### Размеры
```html
<svg class="spin spin_size_xs spin_visible" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
  <circle class="spin__path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>

<svg class="spin spin_size_s spin_visible" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
  <circle class="spin__path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>

<svg class="spin spin_size_m spin_visible" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
  <circle class="spin__path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>

<svg class="spin spin_size_l spin_visible" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
  <circle class="spin__path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>

<svg class="spin spin_size_xl spin_visible" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
  <circle class="spin__path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>
```
