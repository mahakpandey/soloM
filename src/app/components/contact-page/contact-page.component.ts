import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToasterService, Toast } from 'angular2-toaster';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss','../../../styles.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private toasterService: ToasterService) { }
  ngOnInit(): void {
    
  }
  checkboxValue!: boolean;

  // updateCheckbox(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //  this.checkboxValue = target.checked;
  // }
  
  showToast() {
    const toast: Toast = {
      type: 'success',
      title: 'Hello, toaster!'
    };
    // this.toasterService.pop(toast);
  }
}
