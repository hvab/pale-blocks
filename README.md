# pale-blocks

[![GitHub Release](https://img.shields.io/github/release/palegrow/pale-blocks.svg?style=flat)](https://github.com/palegrow/pale-blocks/releases)

> Библиотека готовых визуальных компонентов (блоков) для построения интерфейсов. Сверстано по методологии [БЭМ](//bem.info). Можно использовать для точечной нормализации стилей, а-ля normalize.css.

## Блоки

* [attach](blocks/attach/attach.md)
* [button](blocks/button/button.md)
* [checkbox](blocks/checkbox/checkbox.md)
* [clearfix](blocks/clearfix/clearfix.md)
* [container](blocks/container/container.md)
* [content](blocks/content/content.md)
* [embed](blocks/embed/embed.md)
* [fieldset](blocks/fieldset/fieldset.md)
* [form](blocks/form/form.md)
* [grid](blocks/grid/grid.md)
* [icon](blocks/icon/icon.md)
* [image](blocks/image/image.md)
* [input](blocks/input/input.md)
* [label](blocks/label/label.md)
* [legend](blocks/legend/legend.md)
* [link](blocks/link/link.md)
* [media](blocks/media/media.md)
* [page](blocks/page/page.md)
* [print](blocks/print/print.md)
* [radio](blocks/radio/radio.md)
* [select](blocks/select/select.md)
* [spin](blocks/spin/spin.md)
* [table](blocks/table/table.md)
* [text](blocks/text/text.md)
* [textarea](blocks/textarea/textarea.md)

## Поддерживаемые браузеры

`>1%, last 2 versions`

## Использование

Скачать последнюю версию репозитория и скопировать в свой проект.

В сборке можно использовать так:

```js
const builder = bundleBuilder({
  levels: [
    'pale-blocks/blocks',
  ],
  techMap: {
    css: ['post.css', 'css']
  }
});
```

### Обязательные плагины PostCSS при сборке

* [`postcss-nested`](https://github.com/postcss/postcss-nested#readme)
* [`autoprefixer`](https://github.com/postcss/autoprefixer#readme)

## Разработка

Запуск разработки

```sh
npm start
```

Создание ванильных css-файлов

```sh
gulp buildCss
```

Сборка документации

```sh
npm run build
```
