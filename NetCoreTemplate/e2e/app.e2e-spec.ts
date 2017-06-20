import { NetCoreTemplatePage } from './app.po';

describe('net-core-template App', () => {
  let page: NetCoreTemplatePage;

  beforeEach(() => {
    page = new NetCoreTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
