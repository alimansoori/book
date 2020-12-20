const path = require("path");

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withSass({
    cssModules: true,
}));

// module.exports = {
//     trailingSlash: true,
//     webpackDevMiddleware: (config) => {
//         config.watchOptions = {
//             poll: 1000,
//             aggregateTimeout: 300,
//         };

//         return config;
//     },
//     sassOptions: {
//         includePaths: [path.join(__dirname, "styles")],
//     },
// };