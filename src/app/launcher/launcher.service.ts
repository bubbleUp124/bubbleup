import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAirplane } from './launcher.model';

@Injectable()
export class LauncherService {
  constructor() {}
  private generate = () => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({
        id: i + 1,
        created_date: new Date(),
        name: 'name' + (i + 1),
        size: i % 5 === 0 ? 'Large' : 'Small',
        type: i % 2 === 0 ? 'Cargo' : 'Passenger',
      });
    }
    return arr;
  };
  aircraft$: BehaviorSubject<IAirplane[]> = new BehaviorSubject([]);

  // Launches the highest priority aircraft in the queue.
  launch() {
    this.aircraft$.next([
      ...this.aircraft$
        .getValue()
        .filter((x) => x.id !== this.aircraft$.getValue()[0].id),
    ]);
  }

  // Adds a single aircraft to the queue in priority
  enqueue(aircraft: IAirplane) {
    this.aircraft$.next([...this.aircraft$.getValue(), aircraft]);
  }

  getAllAircraft() {
    this.aircraft$.next(this.generate());
  }

  setAircraft(newValue) {
    this.aircraft$.next([...newValue]);
  }
}
