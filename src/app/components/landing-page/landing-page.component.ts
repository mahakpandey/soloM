import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', '../../../styles.scss']
})
export class LandingPageComponent implements OnInit {
  btnValue:number=1;
  contactForm!:FormGroup;
  submitted:boolean = false;
  light:boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr : ToastrService,
    ){
    this.contactForm = this.fb.group({
      fullName:['', Validators.required  ],
      email: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@gmail\.com$')]],
      subject: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      message:[''],
    });
  }

  ngOnInit() {
    
  }
  openContact(){
    console.log('clicked');
    this.router.navigate(['/contact']);
  }
  btnClick(value:number){
    this.btnValue=value;
  }
  gotClicked(){
    console.log('gotClicked!');
  }
  changeTheme(){
    this.light= !this.light;
  }
  response(){
    console.log("contact form clicked",this.contactForm);
    
    this.submitted=true;
    if(this.contactForm.valid){
      this.toastr.success("The form has been submitted!")
  }
}
}