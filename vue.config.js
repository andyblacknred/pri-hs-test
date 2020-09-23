module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/pri-hs-test/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "~@/sass/variables.sass"
                    @import "~@/sass/fonts.sass"
                `
            }
        }
    }
};