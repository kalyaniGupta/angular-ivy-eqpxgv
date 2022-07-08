import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [CommonModule, CustomerRoutingModule],
  declarations: [CustomerComponent],
})
export class CustomerModule {}
