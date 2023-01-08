import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePage } from './home.page'
import { SharedModule } from 'src/app/shared/shared.module'
import { CoreModule } from 'src/app/core/core.module'

const routes: Routes = [
  { path: '', component: HomePage }
]

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CoreModule
  ],
  exports: []
})
export class HomeModule {}
