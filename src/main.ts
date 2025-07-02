import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ToastService } from 'ngx-toastr-notifier';
@Component({
  selector: 'app-root',
  template: `
  <h1> Hello from {{name}} </h1>
  <p>
    Start editing to see some magic happen :)
  </p>
  
  <button (click)="showSuccess()">Success</button>
  <button (click)="showError()">Error</button>
  <button (click)="showInfo()">Info</button>
  <button (click)="showWarning()">Warning</button>
  `,
})
export class App {
  name = 'Angular 20';
  constructor(private toastr: ToastService){}

  showSuccess(){
   this.toastr.success('everything is broken', 'Major Error', {
  duration: 3000,
});
  }
  showError(){
   this.toastr.error('everything is broken', 'Major Error', {
    duration: 3000,
});
  }
   showInfo(){
   this.toastr.info('everything is broken', 'Major Error', {
    duration: 3000,
});
  }
   showWarning(){
   this.toastr.warning('everything is broken', 'Major Error', {
    duration: 3000,
});
  }
}

bootstrapApplication(App);
