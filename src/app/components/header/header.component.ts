import { Component, signal } from '@angular/core';

import { PrimaryBtnComponent } from "../primary-btn/primary-btn.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryBtnComponent],
  template: ` <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
    <span class="text-xl font-bold">My Store</span>
    <app-primary-btn label="Cart" (btnClicked)="showBtnClicked()"/>
  </div> `,
  styles: ``,
})
export class HeaderComponent {


  showBtnClicked(){
    console.log('Button clicked');
  }
}
