module.exports = {
  "plugins": {
    // "postcss-import": {},          // 优化 @import 引用方式
    // "postcss-url": {},             // 静态资源打包路径配置
    "postcss-aspect-ratio-mini": {},  // 输出固定宽高比
    "postcss-write-svg": {            // 解决移动端1px问题
      utf8: false
    },
    "postcss-cssnext": {},            // hack css3 新方法
    "postcss-px-to-viewport": {       // px 转 vw
      unitToConvert: 'px',            // 默认要转换的单位
      viewportWidth: 750,             // 视窗的宽度
      viewportHeight: 1334,           // 视窗的高度，也可以不配置
      unitPrecision: 3,               // 指定`px`转换为视窗单位值的小数位数
      viewportUnit: 'vw',             // 转换后的单位
      selectorBlackList: [            // 指定不转换为视窗单位的css样式类名
        '.ignore',
        '.hairlines'
      ],
      minPixelValue: 2,               // 小于或等于`2px`不转换为视窗单位
      mediaQuery: false               // 允许在媒体查询中转换`px`
    },
    "postcss-viewport-units": {},     // Automatically append content property for viewport-units-buggyfill.
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,            // 禁用 autoprefixer，与其他插件重复
      "postcss-zindex": false         // 只要启用了这个插件，z-index的值就会重置为1，因此此项一定设置为false
    }
  }
}
