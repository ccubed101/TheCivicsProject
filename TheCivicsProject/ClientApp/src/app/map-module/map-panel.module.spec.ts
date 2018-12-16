import { MapPanelModule } from './map-panel.module';

describe('MapPanelModule', () => {
  let mapPanelModule: MapPanelModule;

  beforeEach(() => {
    mapPanelModule = new MapPanelModule();
  });

  it('should create an instance', () => {
    expect(mapPanelModule).toBeTruthy();
  });
});
