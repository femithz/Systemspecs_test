import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
