import { LauncherService } from './launcher.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prioritizePipe' })
export class PrioritizePipe implements PipeTransform {
  constructor(private launcherService: LauncherService) {}
  transform(allPlanes) {
    let arr = [...allPlanes];
    //     ● Passenger aircraft have priority over cargo aircraft.
    //     ● Large aircraft have priority over small aircraft.
    //     ● Aircraft of the same size and type must respect a FIFO priority.

    arr.sort((a, b) => {
      if (a.type === b.type && b.size === b.size) {
        return a.created_date - b.created_date;
      } else {
        return 1;
      }
    });

    arr.sort((a, b) => {
      if (a.size === 'Large' && b.size === 'Small') {
        return -1;
      } else {
        return 0;
      }
    });
    arr.sort((a, b) => {
      if (a.type === 'Passenger' && b.type === 'Cargo') {
        return -1;
      } else {
        return 0;
      }
    });

    this.launcherService.setAircraft(arr);
    return [...arr];
  }
}
