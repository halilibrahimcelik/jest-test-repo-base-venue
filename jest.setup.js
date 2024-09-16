// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
// polyfill necessary for jsdom test environment
// reference: https://stackoverflow.com/a/68468204
import '@testing-library/jest-dom/extend-expect';
import { server } from './__tests__/__mocks__/msw/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
