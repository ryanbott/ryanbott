module.exports = {
  "use": [
    "stylelint",
    "postcss-import",
    "postcss-custom-properties",
    "postcss-custom-media",
    "postcss-mixins",
    "postcss-nested",
    "lost",
    "postcss-clearfix",
    "autoprefixer",
    "postcss-svg",
    "postcss-svgo",
    "postcss-short"
  ],
  "custom-properties": {
    preserve: true
  },
  "postcss-svg": {
    paths: ['src/images/svgs']
  },
  "stylelint": {
    ignorePath: 'node_modules/**/*.css'
  },
  "local-plugins": true,
  "input": "src/css/main.css",
  "output": "web/public/css/main.css",
  "watch": true
}
