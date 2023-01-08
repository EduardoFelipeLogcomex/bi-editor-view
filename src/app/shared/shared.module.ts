import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CardButtonComponent } from './components/card-button/card-button.component'
import { ListComponent } from './components/list/list.component'

const components = [
  CardButtonComponent,
  ListComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule {}
