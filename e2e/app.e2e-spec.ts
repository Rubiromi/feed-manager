import { FeedManagerPage } from './app.po';

describe('feed-manager App', function() {
  let page: FeedManagerPage;

  beforeEach(() => {
    page = new FeedManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
