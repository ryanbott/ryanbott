module.exports = {
  "use": [
    "postcss-import",
    "postcss-custom-properties",
    "postcss-custom-media",
    "postcss-mixins",
    "postcss-nested",
    "postcss-clearfix",
    "postcss-simple-vars",
    "lost",
    "autoprefixer",
    "postcss-svg",
    "postcss-svgo",
    "postcss-short",
    "cssnano"
  ],
  "custom-properties": {
    preserve: true
  },
  "postcss-svg": {
    paths: ['src/svg_icons']
  },
  "autoprefixer": {
      "browsers": "last 4 versions"
  },
  "cssnano": {
  },
  "map": {
    "inline": false
  },
  "local-plugins": true,
  "input": "src/css/main.css",
  "output": "web/public/css/main.min.css"
}
