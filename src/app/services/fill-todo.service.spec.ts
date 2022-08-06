import { TestBed } from '@angular/core/testing';

import { FillTodoService } from './fill-todo.service';

describe('FillTodoService', () => {
  let service: FillTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
