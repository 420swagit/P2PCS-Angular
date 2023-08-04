import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Header } from './header/header.component'

@NgModule({
  declarations: [Header],
  imports: [CommonModule, RouterModule],
  exports: [Header],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
