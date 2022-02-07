import { Component, OnInit } from '@angular/core';
import { ManageInventory } from 'src/app/classes/ManageInventory';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.css']
})
export class ManageInventoryComponent implements OnInit {
  manageInventorys :Array<ManageInventory> = []
  constructor(
    private dataService : DataService
) { }

  ngOnInit(): void {
    this.dataService.setTitle('Manage-inventory')
    this.loadManageInventory()
  }

  loadManageInventory(){
    this.dataService.__post('/products',{})
    .subscribe(
      (inventorys:Array<any>)=>{
        inventorys.map( (inventory:any)=>{
          this.manageInventorys.push({
            _id:inventory._id,
            productName : inventory.name,
            available: inventory.available,
            feePriview: inventory.priview,
            image:inventory.image,
            sku:inventory.sku,
            price: inventory.price,
            businessPrice:inventory.businessPrice,
            lowestPrice: inventory.lowestPrice,
          })
        })
        

      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
  }

}
