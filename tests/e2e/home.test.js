import baseURL from './helpers/base-url';
import selectors from './helpers/selectors.js';

fixture('Home Page').page(baseURL);

test('Check heading is exist on home page!', async t => {
  await t
    .expect(selectors.heading.innerText)
    .eql('台灣新冠肺炎(COVID-19)疫情數據')
    .expect(selectors.navbar.visible)
    .ok();
});
