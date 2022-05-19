import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private dataService : DataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Reset-Password')
  }

  resetPassword(resetPassword:any){
    this.dataService.__post('/seller/reset/password',{seller:this.dataService.sellerID,...resetPassword.value})
    .subscribe(
      (resetpassword)=>{
        this.router.navigateByUrl('/login')
        
      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )

  }

}
