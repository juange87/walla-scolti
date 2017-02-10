import { WallaScoltiPage } from './app.po';

describe('walla-scolti App', function() {
  let page: WallaScoltiPage;

  beforeEach(() => {
    page = new WallaScoltiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
