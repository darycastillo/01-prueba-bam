import { Injectable } from '@angular/core';
import { MedicRepository } from './medic.repostiory';
import { MedicModel } from '../domain/medic.model';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UseCase } from '../../shared/interfaces/usecase.interface';

@Injectable({
  providedIn: 'root',
})
export class MedicUseCase implements UseCase<MedicModel> {
  constructor(private medic: MedicRepository) {}
  update(id: number, user: Partial<MedicModel>): Observable<MedicModel> {
    return this.medic.update(id, user);
  }

  getByPage(page: number): Observable<Page<MedicModel>> {
    return this.medic.getByPage(page);
  }

  delete(id: number) {
    return this.medic.delete(id);
  }

  list() {
    return this.medic.list();
  }

  insert(medic: Partial<MedicModel>): Observable<MedicModel> {
    return this.medic.insert(medic);
  }
}
