import { Selector } from 'testcafe';
import baseURL from './helpers/base-url';
import { getPageURL } from './helpers/client-functions';

const url = [baseURL, '/about'].join('');
fixture(`About Page`).page(url);
test('Check heading is exist on about us page! ', async (t) => {
  await t.expect(Selector('.navbar').visible).ok();
});