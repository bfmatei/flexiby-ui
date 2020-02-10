import { TestBed, async } from '@angular/core/testing';

import { MessageComponent } from './message.component';

describe('[Modules][Layout] Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(MessageComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
