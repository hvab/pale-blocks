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
* [hint](blocks/hint/hint.md)
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

* Firefox (две последние стабильные версии)
* Chrome (две последние стабильные версии)
* Safari (две последние стабильные версии)
* Yandex (две последние стабильные версии)
* Opera 12.1+
* Internet Explorer 10+

## Технологии

* [DEPS](https://ru.bem.info/technology/deps/about/)
* [PostCSS](http://postcss.org/)

## Использование

```sh
npm i pale-blocks
```

В сборке подключить базовый уровень и, опционально, уровень с темой "pale":

```js
const builder = bundleBuilder({
  levels: [
    'node_modules/pale-blocks/blocks',
    'node_modules/pale-blocks/design/blocks'
  ],
  techMap: {
    css: ['post.css', 'css']
  }
});
```

### Dist-поставка

Можно подключить уже собранные файлы

* `node_modules/pale-blocks/bundles/blocks/blocks.css` — только блоки, без дизайна.
* `node_modules/pale-blocks/bundles/blocks/blocks.min.css` — только блоки, без дизайна (сжатые).
* `node_modules/pale-blocks/bundles/pale-blocks/pale-blocks.css` — блоки с дизайном `pale`.
* `node_modules/pale-blocks/bundles/pale-blocks/pale-blocks.min.css` — блоки с дизайном `pale` (сжатые).


### Обязательные плагины PostCSS при сборке

* [`postcss-nested`](https://github.com/postcss/postcss-nested#readme)
* [`postcss-color-function`](https://github.com/postcss/postcss-color-function#readme) (используется в `design/blocks`)
* [`autoprefixer`](https://github.com/postcss/autoprefixer#readme)
