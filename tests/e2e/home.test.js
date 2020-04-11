import { Selector } from 'testcafe';
import baseURL from './helpers/base-url';
import { getPageURL } from './helpers/client-functions';

fixture('Home Page').page(baseURL);

test('Check heading is exist on home page!', async t => {
  await t
    .expect(Selector('h1').innerText)
    .eql('台灣新冠肺炎(COVID-19)疫情數據')
    .expect(Selector('.nav-item-about').visible)
    .ok()
    .click(Selector('.nav-item-about'));

  await t.expect(getPageURL()).contains('/about');
});
