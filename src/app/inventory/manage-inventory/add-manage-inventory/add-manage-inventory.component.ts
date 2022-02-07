import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-manage-inventory',
  templateUrl: './add-manage-inventory.component.html',
  styleUrls: ['./add-manage-inventory.component.css']
})
export class AddManageInventoryComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }


  postManageInventory(addManageInventory:any){
    

  }

  goBack(){
    this.location.back()

  }

}
