import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private toaster: ToastrService,
    
  ){}

ngOnInit(): void {
  
}
  title = 'soloM';
}
