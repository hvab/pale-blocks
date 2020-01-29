# text

Вспомогательный блок. Используется для задания различных служебных стилей тексту.

## Примеры

```html
<h1 class="text text_headline_1">Headline 1</h1>
<h2 class="text text_headline_2">Headline 1</h2>
<h3 class="text text_headline_3">Headline 3</h3>
<h4 class="text text_headline_4">Headline 4</h4>
<h5 class="text text_headline_5">Headline 5</h5>
<h6 class="text text_headline_6">Headline 6</h6>
<h6 class="text text_subtitle_1">Subtitle 1</h6>
<h6 class="text text_subtitle_2">Subtitle 2</h6>
<p class="text text_body_1">
  Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
  blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
  quasi quidem quibusdam.
</p>
<p class="text text_body_2">
  Body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
  blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
  quasi quidem quibusdam.
</p>
<div>
  <span class="text text_view_button">
    Button text
  </span>
</div>
<div>
  <span class="text text_view_caption">
    Caption text
  </span>
</div>
<div>
  <span class="text text_view_overline">
    Overline text
  </span>
</div>
<div class="text text_truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</div>
<p class="text text_align_left">Left aligned text on all viewport sizes.</p>
<p class="text text_align_center">Center aligned text on all viewport sizes.</p>
<p class="text text_align_right">Right aligned text on all viewport sizes.</p>
<div class="text text_wrap_yes" style="width: 6rem;">
  This text should wrap.
</div>
<div class="text text_wrap_no" style="width: 8rem;">
  This text should overflow the parent.
</div>
<p class="text text_wrap_break">
  mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
</p>
<p>
  Muted text with a <a href="#" class="text text_color_reset">reset link</a>.
</p>
<a href="#" class="text text_decoration_no">Non-underlined link</a>
```
