const {defineConfig} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    use:{
        basURL: 'http://localhost:3000',
        headless: false,
        viewport:{
            width:1280,
            height:720,
        },
    },
});