import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-select-custom-content',
  template: `
    <nz-select style="width: 200px;" nzShowSearch nzAllowClear nzPlaceHolder="Select OS" [(ngModel)]="selectedOS">
      <nz-option nzCustomContent nzLabel="Windows" nzValue="windows"><i class="anticon anticon-windows"></i> Windows</nz-option>
      <nz-option nzCustomContent nzLabel="Mac" nzValue="mac"><i class="anticon anticon-apple"></i> Mac</nz-option>
      <nz-option nzCustomContent nzLabel="Android" nzValue="android"><i class="anticon anticon-android"></i> Android</nz-option>
    </nz-select>
  `
})
export class NzDemoSelectCustomContentComponent {
  selectedOS;
}
