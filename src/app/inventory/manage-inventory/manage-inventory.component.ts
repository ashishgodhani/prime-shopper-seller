import { Component, OnInit } from "@angular/core";
import { ManageInventory } from "src/app/classes/ManageInventory";
import { DataService } from "src/app/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-manage-inventory",
  templateUrl: "./manage-inventory.component.html",
  styleUrls: ["./manage-inventory.component.css"],
})
export class ManageInventoryComponent implements OnInit {
  manageInventorys: Array<any> = [];
  constructor(private http: DataService, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.setTitle("Manage-inventory");
    this.loadManageInventory();
  }

  loadManageInventory() {
    this.http.products().subscribe(
      (result: any) => {
        this.manageInventorys = result.data;
      },
      (error) => {
        this.dataService.showAlert("error", "Error", error);
      }
    );
  }

  redirectUrl(id: any, variation1: any, variation2: any) {
    let var1val = variation1 && variation1.value ? variation1.value : null;
    let var2val = variation2 && variation2.value ? variation2.value : null;
    return (
      "https://justcliq.co.in/product/" + id + "/" + var1val + "/" + var2val
    );
  }

  // updateUrl(id: any, var1: any, var2: any){
  //   let var1val = var1 ? var1 : null
  //   let var2val = var2 ? var2 : null
  //   return '/inventory/product/add?id='+ id + '&var1=' + var1val + '&var2=' + var2val;
  // }

  updateUrl(id: any, variation1: any, variation2: any) {
    let var1val = variation1 && variation1.value ? variation1.value : null;
    let var2val = variation2 && variation2.value ? variation2.value : null;
    this.router.navigate(["inventory/product/add"], {
      queryParams: { id, var1val, var2val },
    });
  }
}
