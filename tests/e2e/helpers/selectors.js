import { Selector } from 'testcafe';

class Page {
  constructor() {
    this.brand = Selector('.navbar-brand').withText('COVID-19');
    this.navbar = Selector('.navbar');
    this.heading = Selector('h1');
  }
}

export default new Page();
