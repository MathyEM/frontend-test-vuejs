module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "/src/assets/scss/variables.scss";`,
                additionalData: `@import "/src/assets/scss/mixins.scss";`
            }
        }
    }
};