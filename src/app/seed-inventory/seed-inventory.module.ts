import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// modules
import { SharedModule } from '../shared/shared.module';

// services
import { SeedService } from './seed.service';

// components
import { InventoryComponent } from './inventory/inventory.component';
import { SeedFormComponent } from './seed-form/seed-form.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: InventoryComponent,
  },
  // {
  //   path: 'seed/:sid',
  //   component: GridComponent,
  // },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [InventoryComponent, SeedFormComponent],
  entryComponents: [SeedFormComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule, FormsModule, ReactiveFormsModule],
  providers: [SeedService],
})
export class SeedInventoryModule {}
