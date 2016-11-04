# table

Используется для создания различных типов таблиц.

## Модификаторы блока

| Модификатор | Описание |
|-------------|----------|
| `table_condensed` | Отступы в ячейках уменьшены наполовину. |
| `table_bordered` | Таблица со всеми рамками между ячейками. |
| `table_striped` | Чередующийся бледно-серый фон у строк. |
| `table_hover` | Строка таблицы выделяется при наведении курсора на любую из её ячеек. |

## Примеры

```html
<table class="table table_bordered table_condensed table_striped table_hover">
  <colgroup>
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
    <col width="25%" />
  </colgroup>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```
