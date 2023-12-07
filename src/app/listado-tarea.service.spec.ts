import { TestBed } from '@angular/core/testing';

import { ListadoTareaService } from './listado-tarea.service';

describe('ListadoTareaService', () => {
  let service: ListadoTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
