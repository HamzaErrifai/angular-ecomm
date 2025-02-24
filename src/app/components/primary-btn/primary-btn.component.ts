import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  imports: [],
  template: `
    <button
      class="bg-blue-500 text-white w-full cursor-pointer mt-3 px-5 py-2 rounded-xl shadow-md hover:opacity-90"
      (click)="btnClicked.emit()"
    >
      <div [class]="svgIconSrc() ? 'flex' : ''">
        @if (svgIconSrc()) {
        <img src="{{ svgIconSrc() }}" class="flex h-6 w-6" alt="" srcset="" />
        }
        <span></span>
        {{ label() }}
      </div>
    </button>
  `,
  styles: ``,
})
export class PrimaryBtnComponent {
  label = input('');
  svgIconSrc = input('');

  btnClicked = output();
}
