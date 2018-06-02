# link

Используется для создания различных типов ссылок.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `link_pseudo` | Псевдоссылка. Отличается от обычной ссылки тем, что при клике по ссылке переход на новую страницу не осуществляется. |
| `link_disabled` | Неактивное состояние. |
| `link_size_s`, `link_size_m`, `link_size_l` | Размер блока. |
| `link_view_minor`, `link_view_external`, `link_view_text`, `link_view_ghost`, `link_view_strong` | Тип визуального выделения ссылки. |


## Примеры

```html
<a href="#" class="link link_view_text">Text</a>

<a href="#" class="link link_pseudo">Pseudo</a>

<a href="#" class="link link_disabled">Disabled</a>
```
