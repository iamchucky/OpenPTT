import { OpenpttPage } from './app.po';

describe('openptt App', function() {
  let page: OpenpttPage;

  beforeEach(() => {
    page = new OpenpttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
