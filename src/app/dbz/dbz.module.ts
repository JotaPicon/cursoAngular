import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainDbzComponent} from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  exports:[
    MainDbzComponent
  ],
  declarations: [
    MainDbzComponent,
    ListComponent,
    FormComponent

  ],
  imports: [

    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
 