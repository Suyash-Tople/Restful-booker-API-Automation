RESTful Booker API Automation:
API automation framework built using Playwright and TypeScript to test the RESTful Booker API. The framework covers positive and negative scenarios for authentication and booking operations, with a focus on reusable and maintainable test design.

🛠️ Framework & Technologies:
Playwright + TypeScript – API automation and assertions
RESTful Booker API – Application under test
JSON – External test data management
Playwright Fixtures – Reusable test setup and dependencies
Allure Reports – Test execution and reporting

The framework follows an API abstraction approach, separating API calls from test cases. Reusable API classes handle authentication and booking operations, while test cases focus on validations and business scenarios.

Test data is maintained in JSON files, and custom fixtures provide reusable API clients across tests.

├── api/          # API abstraction layer
├── fixtures/     # Custom Playwright fixtures
├── tests/        # Test scenarios
├── test-data/    # JSON test data
├── utils/        # Utility methods
└── playwright.config.ts

🧪 Test Coverage & Reporting

The suite covers:
Valid and invalid authentication
Create booking with payloads
Retrieve bookings using valid/invalid IDs
Update bookings
Delete bookings
Authorization and negative scenarios
HTTP status code and response body assertions
Allure Reports provide detailed visibility into test results, execution time, steps, and failures.

npx playwright test
allure generate allure-results --clean
allure open allure-report

🚀 Key Features
API and test-case separation using abstraction
Reusable Playwright fixtures
JSON-based test data
Positive and negative test coverage
TypeScript for maintainable code
Detailed Allure reporting
Scalable and reusable framework structure

This project demonstrates practical API automation best practices with Playwright and TypeScript, focusing on clean architecture, reusability, and maintainability.