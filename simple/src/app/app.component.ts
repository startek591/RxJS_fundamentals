import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, Subscription, from, fromEvent, map } from 'rxjs';

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

    this.subApples = apples2$
      .pipe(map((a) => ({ ...a, color: 'red' })))
      .subscribe((x) => console.log('Apple type:', x));

    this.sub2 = of(2, 4, 6)
      .pipe(map((item) => item * 2))
      .subscribe((item) => console.log('Map x2:', item));
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
  }
}
