import { ClientFunction } from 'testcafe';

export const getPageURL = ClientFunction(() => window.location.href);
