import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular';

  sub!: Subscription;
  subArray!: Subscription;

  ngOnInit(): void {
    this.sub = of(2, 4, 6, 8).subscribe((item) =>
      console.log('Value from of:', item)
    );
    this.subArray = of([2, 4, 6, 8]).subscribe((item) =>
      console.log('Value from of array:', item)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
  }
}
