import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: any;
  constructor(private authService: AuthService,private dataservices:DataService) {}

  userData:any;
  ngOnInit(): void {
    this.userName = this.authService.getUser();
    this.dataservices.getProfile().subscribe((result:any)=>{
      console.log(result);
      
      this.userData = result;
    })
  }

  logout() {
    this.authService.logout();
  }
}
