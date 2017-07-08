# form

Используется для описания формы.

## Элементы блока

| Элемент | Описание |
|-------------|----------|
| `form__fieldset` | Нужен для группировки нескольких полей и лейблов. |
| `form__legend` | Название группы полей. |
| `form__field` | Нужен для группировки элементов каждого поля. |
| `form__label` | Указатель на поле ввода. |
| `form__control` | Поле ввода. |
| `form__hint` | Поясняющий текст для поля. |
| `form__message` | Сообщение для поля (ошибка, успех, предупреждение). |

## Модификаторы элемента `field`

| Элемент | Описание |
|-------------|----------|
| `form__field_valid_error` | Ошибка валидации поля. |
| `form__field_valid_success` | Валидация успешна. |
| `form__field_valid_warning` | Предупреждение в валидации поля. |

## Примеры

```html
<form class="form form_theme_pale" action="" method="post" name="form" id="form" autocomplete="on" enctype="multipart/form-data" novalidate>
  <fieldset class="form__fieldset fieldset">
    <legend class="form__legend legend">Subscribe to the Newsletter</legend>

    <div class="form__field">
      <label class="form__label label label_block" for="">Name</label>
      <input class="form__control input" type="text" placeholder="Text" required>
      <div class="form__hint">Little hint for field</div>
      <div class="form__message">Something happened!</div>
    </div>

    <div class="form__field">
      <label class="form__label label label_block" for="">Email</label>
      <input class="form__control input" type="email" placeholder="Email" required>
      <div class="form__hint">Little hint for field</div>
      <div class="form__message">Something happened!</div>
    </div>
  </fieldset>

  <div class="form__field">
    <button class="button" type="submit">Submit</button>
  </div>
</form>
```
