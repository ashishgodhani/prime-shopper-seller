import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice-cusomer-add',
  templateUrl: './voice-cusomer-add.component.html',
  styleUrls: ['./voice-cusomer-add.component.css']
})
export class VoiceCusomerAddComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  goBack(){
this.location.back()
  }

  postVoiceCustomer(voiceCustomer:any){

  }
   

}
