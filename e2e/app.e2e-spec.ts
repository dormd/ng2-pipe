import { Ng2PipePage } from './app.po';

describe('ng2-pipe App', function() {
  let page: Ng2PipePage;

  beforeEach(() => {
    page = new Ng2PipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
