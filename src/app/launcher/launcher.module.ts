import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LauncherRoutingModule } from './launcher-routing.module';
import { LauncherComponent } from './launcher.component';
import { LauncherService } from './launcher.service';
import { FormsModule } from '@angular/forms';
import { PrioritizePipe } from './prioritize.pipe';

@NgModule({
  declarations: [LauncherComponent, PrioritizePipe],
  imports: [CommonModule, FormsModule, LauncherRoutingModule],
  providers: [LauncherService],
})
export class LauncherModule {}
