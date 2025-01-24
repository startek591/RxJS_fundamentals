import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  of,
  Subscription,
  from,
  fromEvent,
  map,
  tap,
  filter,
  timer,
  take,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular';

  // Obseravbles examples
  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subStrings!: Subscription;
  subEvent!: Subscription;
  subKey!: Subscription;

  // RxJS operators examples
  subApples!: Subscription;
  sub2!: Subscription;
  subApples2!: Subscription;
  sub3!: Subscription;
  subFilter!: Subscription;
  subTimer!: Subscription;

  ngOnInit(): void {
    // Observable examples
    this.sub = of(2, 4, 6, 8).subscribe((item) =>
      console.log('Value from of:', item)
    );
    this.subArray = of([2, 4, 6, 8]).subscribe((item) =>
      console.log('Value from of array:', item)
    );
    this.subFrom = from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log('Form item:', item),
      error: (error) => console.log('From error:', error),
      complete: () => console.log('From complete'),
    });
    this.subStrings = of('Apple1', 'Apple2', 'Apple3').subscribe({
      next: (apple) => console.log('Apple emitted:', apple),
      error: (error) => console.log('Error occurred:', error),
      complete: () => console.log('No more apples, go home'),
    });
    this.subEvent = fromEvent(document, 'click').subscribe({
      next: (ev) => console.log('Click event:', ev.target),
      error: (err) => console.log('Error occurred:', err),
      complete: () => console.log('No more clicks'),
    });
    const keys: string[] = [];
    this.subKey = fromEvent(document, 'keydown').subscribe((ev) => {
      keys.push((ev as KeyboardEvent).key);
      console.log('Key array:', keys);
    });

    // RxJS operators examples
    const apples2$ = from([
      { id: 1, type: 'macintosh' },
      { id: 2, type: 'gala' },
      { id: 3, type: 'fuji' },
    ]);
    const apples3$ = from([
      { id: 1, type: 'macintosh' },
      { id: 2, type: 'gala' },
      { id: 3, type: 'fuji' },
    ]);

    this.subApples = apples2$
      .pipe(map((a) => ({ ...a, color: 'red' })))
      .subscribe((x) => console.log('Apple type:', x));

    this.sub2 = of(2, 4, 6)
      .pipe(map((item) => item * 2))
      .subscribe((item) => console.log('Map x2:', item));

    this.subApples2 = apples3$
      .pipe(
        map((a) => ({ ...a, color: 'red' })),
        tap((a) => console.log('Apple:', a))
      )
      .subscribe();

    this.sub3 = of(2, 4, 6)
      .pipe(
        map((item) => item * 2),
        tap((item) => console.log('Map x2:', item))
      )
      .subscribe();

    this.subFilter = of(2, 3, 4, 5, 6)
      .pipe(
        filter((x: number) => x % 2 === 0),
        tap((x) => console.log('Even:', x))
      )
      .subscribe();

    this.subTimer = timer(0, 1000)
      .pipe(take(5))
      .subscribe({
        next: (item) => console.log('Timer:', item),
        error: (error) => console.log('Timer error occurred:', error),
        complete: () => console.log('No more ticks'),
      });
  }

  ngOnDestroy(): void {
    // Obserables examples
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subEvent.unsubscribe();
    this.subKey.unsubscribe();

    // RxJS operators examples
    this.subApples.unsubscribe();
    this.subApples2.unsubscribe();
    this.sub2.unsubscribe();
    this.subApples2.unsubscribe();
    this.sub3.unsubscribe();
    this.subFilter.unsubscribe();
    this.subTimer.unsubscribe();
  }
}
