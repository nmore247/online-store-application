import {AppComponent} from "./app.component";

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent()
  });

  it('should have title e-store', () => {
    expect(fixture.title).toEqual('e-store');
  })
})



