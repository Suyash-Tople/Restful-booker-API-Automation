import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['list'],
        ['allure-playwright', { outputFolder: 'allure-results' }]
    ],

    use: {
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    },
});
