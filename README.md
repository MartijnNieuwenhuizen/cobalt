
# Cobalt


Cobalt is a developers framework i use to build my webprojects.
The taskrunner that is used is Gulp and Sass is intergrated.

## Grid and Typography
The grid and Typography are build with the golden-scale ratio(1.618).
This means that every object is 1.618 bigger/smaller than the child/parrent object.

## The Sass Stucture
### utilities: vars that support the main application
- global-vars
- mixins

### base: Basic parts of the main application
- layout
- typography
- colors
- grid
- animations

### components: Parts I often reuse
- blockquote
- button
- pagination

### modules: Significant parts of the main application
- header
- footer
- create your own
 

## The Used Gulp Plugins
- browser-sync
- autoprefixer
- clean
- file-incloude
- imagemin
- minify-html
- rename
- sass
- uglify
- run-sequence

# Usage
1. Open cobalt in your terminal and run ```$ npm install```
2. Run ```$ gulp server``` and your good to go!
