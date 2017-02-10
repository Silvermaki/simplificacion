
import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {SdrlComponent} from "./sdrl.component";

export const sdrlRoutes: Routes = [{
  path: '',
  component: SdrlComponent
}];

export const sdrlRouting = RouterModule.forChild(sdrlRoutes);

