import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-manage-orders",
  templateUrl: "./manage-orders.component.html",
  styleUrls: ["./manage-orders.component.css"],
})
export class ManageOrdersComponent implements OnInit {
  constructor(private http: DataService) {}

  ordersdata: any;
  spinner: boolean = true;
  couriors: any;

  ngOnInit(): void {
    this.http.get_couriers().subscribe(
      (result: any) => {
        this.couriors = result.data;
        console.log("couriors from server", this.couriors);
        this.spinner = false;
      },
      (error) => {
        this.spinner = false;
        this.http.showAlert("error", "Error", error);
      }
    );

    this.http.get_orders().subscribe(
      (result: any) => {
        let alldata = result.data;

        if(alldata && alldata.length){
          
          alldata.map((el: any) => {
            console.log("ok::", el.product.variation && el.product.product.variations.length);
            
            if(el.product.variation && el.product.product.variations.length){
              let currentProduct = el.product.product.variations.find((item: any) => item._id == el.product.variation);
              el['currentProduct'] = currentProduct
            }
          })

          this.ordersdata = alldata;
          
        }
        console.log("data from server", alldata);
        this.spinner = false;
      },
      (error) => {
        this.spinner = false;
        this.http.showAlert("error", "Error", error);
      }
    );
  }

  updateOrderCourior(updatedata: any, orderId: string): void {
    console.log(updatedata.value);
    let couriorId = updatedata.value.id;
    let trackingId = updatedata.value.trackingId;

    if (couriorId && trackingId.trim() && orderId) {
      this.http.update_order({orderId, couriorId, trackingId}).subscribe(
        (result: any) => {
          this.ordersdata = result.data;

          // console.log("data from server", this.ordersdata);
          this.spinner = false;
        },
        (error) => {
          this.spinner = false;
          this.http.showAlert("error", "Error", error);
        }
      );
    }
  }
}
