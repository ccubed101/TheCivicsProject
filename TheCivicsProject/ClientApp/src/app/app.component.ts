import { Component } from '@angular/core';

import { Observable, of, from, range, pipe } from 'rxjs'
import { filter, catchError, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {

    let observable1: Observable<number> = range(0, 10);
    let observable2 = from([11, 22, 33]);

    observable1
      .pipe(
      reduce((x, y) => { console.log(x); console.log(y); return x + y; })
      )
      .subscribe(
      this.next,
      () => console.log('Error'),
      () => console.log('Done')
    );

  }

  next(x: any) {

      console.log('The number is ' + x);
  }
}
