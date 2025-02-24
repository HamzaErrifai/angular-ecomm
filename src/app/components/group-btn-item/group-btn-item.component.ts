import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-group-btn-item',
  imports: [],
  template: `
    <a
      href="#"
      class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      (click)="onClickHandler.emit()"
    >
      {{ label() }}
    </a>
  `,
  styles: ``,
})
export class GroupBtnItemComponent {
  label = input('');
  onClickHandler = output();
}
