import { NoLazyLoadModule } from './no-lazy-load.module';

describe('NoLazyLoadModule', () => {
  let noLazyLoadModule: NoLazyLoadModule;

  beforeEach(() => {
    noLazyLoadModule = new NoLazyLoadModule();
  });

  it('should create an instance', () => {
    expect(noLazyLoadModule).toBeTruthy();
  });
});
