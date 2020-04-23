import baseURL from './helpers/base-url';
import selectors from './helpers/selectors.js';

const url = [baseURL, '/news'].join('');
fixture(`News Page`).page(url);
test('Check heading is exist on news us page! ', async (t) => {
  await t
    .expect(selectors.heading.innerText)
    .eql('COVID-19 News ')
    .expect(selectors.navbar.visible)
    .ok();
});
