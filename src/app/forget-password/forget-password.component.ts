import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(
    private dataService : DataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Forget-Password')
  }
  doForgetPassword(forgetpasswordData:any){
    this.dataService.__post('/seller/forgot/password',forgetpasswordData.value)
    .subscribe(
      (forgetpassword)=>{
        this.dataService.sellerID = forgetpassword.id        
        this.router.navigateByUrl('/reset/password')
      }
    )
  }

}
