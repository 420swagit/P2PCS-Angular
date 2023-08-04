import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { WhoWeAre } from './who-we-are.component'

const routes = [
  {
    path: '',
    component: WhoWeAre,
  },
]

@NgModule({
  declarations: [WhoWeAre],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [WhoWeAre],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WhoWeAreModule {}
