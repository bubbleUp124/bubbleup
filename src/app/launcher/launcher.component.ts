import { IAirplane } from './launcher.model';
import { LauncherService } from './launcher.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css'],
})
export class LauncherComponent implements OnInit {
  constructor(private launcherService: LauncherService) {}
  addAirplane: boolean = false;
  name: string;
  type: string;
  size: string;
  aircraft$: BehaviorSubject<IAirplane[]> = this.launcherService.aircraft$;

  ngOnInit(): void {
    this.launcherService.getAllAircraft();
  }

  launch() {
    this.launcherService.launch();
  }

  add() {
    this.addAirplane = true;
  }

  enqueue() {
    const airplane: IAirplane = {
      id: this.getRandomInt(),
      created_date: new Date(),
      name: this.name,
      type: this.type,
      size: this.size,
    };
    this.launcherService.enqueue(airplane);
    this.reset();
  }
  reset() {
    this.addAirplane = false;
    this.resetValues();
  }

  resetValues() {
    this.name = '';
    this.type = '';
    this.size = '';
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000000000));
  }
}
