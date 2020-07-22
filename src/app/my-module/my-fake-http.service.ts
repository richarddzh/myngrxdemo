import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MyFakeHttpService {
  getQueryResult(): Observable<string[]> {
    let count = Math.round(Math.random()*2) + 1;
    var result: string[] = [];
    for (var i = 0; i < count; i++) {
      result[i] = Math.round(1000000 * Math.random()).toString(36);
    }
    return of(result).pipe(delay(count * 500));
  }
}
