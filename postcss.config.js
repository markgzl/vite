import autoprefixer from "autoprefixer";
import px2rem from "postcss-pxtorem";

// postcss.config.js
// 而 Vite 本身内置了 PostCSS，因此可以通过 PostCSS 配置接入 Tailwind CSS
// 注意: Vite 配置文件中如果有 PostCSS 配置的情况下会覆盖掉 post.config.js 的内容!
module.exports = {
  plugins: {
    autoprefixer,
    pxtorem: px2rem({ replace: true }),
  },
};
