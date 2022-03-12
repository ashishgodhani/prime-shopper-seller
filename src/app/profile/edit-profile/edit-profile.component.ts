import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor( private authData:AuthService,private dataservices:DataService,private toastr: ToastrService) { }

  userData:any;
  ngOnInit(): void {
    this.dataservices.getProfile().subscribe((result:any)=>{
      this.userData = result;
    })
    
  }

  updateUser(userData:any)
  {
    this.dataservices.update_profile(userData).subscribe((result:any)=>{
      this.userData = result;
      this.toastr.success("Your Profile is Updated..");
    })
  }
}