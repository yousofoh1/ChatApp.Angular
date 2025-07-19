import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatappAngular } from './chatapp-angular';

describe('ChatappAngular', () => {
  let component: ChatappAngular;
  let fixture: ComponentFixture<ChatappAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatappAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatappAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
