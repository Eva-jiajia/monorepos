import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mock, Random } from 'mockjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  getTestData() {
    const data = Array(10)
      .fill(0)
      .map((r) => ({
        'en-name': Random.last(),
        'zh-name': Random.cname(),
        email: Random.email(),
        no: Random.integer(1, 100),
        date: Random.datetime(),
      }));
    return of(data);
  }
}
