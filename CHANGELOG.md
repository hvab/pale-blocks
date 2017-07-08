# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Add block `form`

### Changed
- Improve `content` styles
- Move `margin: 0` from basic `page` to themed

### Removed
- Remove `min-height` from themed `page`
- Remove `background-color` from themed `page`
- Remove `font-family` quotes from themed `page`

## [0.5.1] - 2017-04-28
### Added
- Add building files for distribute.
- Add box-sizing to `textarea`.

## [0.5.0] - 2017-02-17
### Added
- Add GitHub Release image to README.md.
- Add linters `.htmlhintrc`, `.stylelintrc`.
- Add simple `grid` based on flexbox.
- Add modifier `button_view_plain`.
- Add modifiers `link_view_minor`, `link_view_text`, `link_view_strong`.
- Add `min-height` in themed `page`.
- Add block `print`.
- Add block `embed`.
- Add block `spin`.
- Add block `input`.
- Add block `textarea`.
- Add block `select`.
- Add block `checkbox`.
- Add block `radio`.
- Add block `attach`.
- Add block `label`.
- Add block `fieldset`.
- Add block `legend`.

### Changed
- Move autoprefixer to package.json.
- In `button` `font` changed to `font-family` and `font-size`.
- Rewrite `media` from `display: table` to `display: flex`.
- Rewrite font-sizes from px to rem.
- Improve `button`.
- Update linters.

## [0.3.2] - 2016-12-19
### Changed
- Rename all files with suffix `.post.css`.

### Removed
- Remove pxtorem postcss plugin.

## [0.3.1] - 2016-12-17
### Added
- Add change log.
- Add common rules for basic html-template.

## [0.3.0] - 2016-12-17
### Added
- Add .editorconfig.
- Add pxtorem postcss plugin.

### Changed
- Refactored all blocks.

### Removed
- Remove blocks `button-group`, `normalize`.

## [0.2.0] - 2016-12-10
- Move all SCSS files to PostCSS.

## [0.1.0] - 2016-11-05
- Initial release.
