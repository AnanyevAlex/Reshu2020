module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-color-mod-function'),
    require('postcss-preset-env')({
      stage: 0,
      importFrom: [
        {
          customMedia: {
            '--min-phone': '(min-width: 640px)',
            '--min-tablet': '(min-width: 900px)',
            '--min-desktop': '(min-width: 1200px)',
            '--min-desktop-lg': '(min-width: 1500px)',
            '--max-phone': '(max-width: 639px)',
            '--max-tablet': '(max-width: 899px)',
            '--max-desktop': '(max-width: 1199px)',
            '--max-desktop-lg': '(max-width: 1499px)',
            '--hover': '(hover: hover), (-ms-high-contrast: none), (-ms-high-contrast: active)'
          },
          customProperties: {
            // Paste custom properties here. For example:
            // '--c-black': '#000'
          }
        }
      ]
    })
  ]
}