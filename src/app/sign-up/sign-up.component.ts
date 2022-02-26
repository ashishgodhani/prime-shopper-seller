import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Ragistor')
  }


  doSignUp(signUpData:any){
    this.dataService.__post('/seller/register',signUpData.value)
    .subscribe(
      (signUp)=>{
        console.warn(signUp)
        this.router.navigateByUrl('/login')
      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
  }

}
