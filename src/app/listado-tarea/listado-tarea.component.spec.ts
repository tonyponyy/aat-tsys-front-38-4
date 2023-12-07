import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTareaComponent } from './listado-tarea.component';

describe('ListadoTareaComponent', () => {
  let component: ListadoTareaComponent;
  let fixture: ComponentFixture<ListadoTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoTareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
