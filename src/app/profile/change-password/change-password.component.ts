import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private authData:AuthService,private dataservices:DataService,private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  updateData(Data:any)
  {
    this.dataservices.updatepassword(Data).subscribe((result:any)=>{
      console.warn(result);
    })
  }

}
