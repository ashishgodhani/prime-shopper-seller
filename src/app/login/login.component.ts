import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private dataService : DataService,
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Login')
  }

  dologin(loginData:any){
    
    this.dataService.__post('/seller/login',loginData.value)
      .subscribe(
        
        (login)=>{
          
          this.dataService.showAlert('','','Successfully Login')
          this.auth.setToken(login.token);
          this.auth.setUser(login);
          this.router.navigateByUrl('')
        },
        (error)=>{
          this.dataService.showAlert('error','Error',error);
          
        }
      )
  }

}
