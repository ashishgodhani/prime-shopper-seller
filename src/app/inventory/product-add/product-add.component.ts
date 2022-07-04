import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";
import { DataService } from "../../data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  constructor(
    private http: DataService,
    private auth: AuthService,
    private router: Router,
    private elementRef: ElementRef,
    private route: ActivatedRoute
  ) {}

  @ViewChild("mainDiv")
  mainDiv!: ElementRef;

  datas: any;
  newData: any;
  newData1: any;
  newData2: any;
  newData3: any;
  newData4: any;
  viewList = false;
  viewList1 = false;
  viewList2 = false;
  viewList3 = false;
  viewList4 = false;
  spinner = false;

  selectedId: any;
  selectedName: any;
  parentId: any;

  updateProductId: any;
  updateVar1: any;
  updateVar2: any;
  updateVariationId: any;
  updateProductData: any = {
    category: "",
    parentId: "",
    seller: "",
    brand_name: "",
    variations1: {
      var_type: "",
      var_theme_type: "",
      data: [],
    },
    variations2: {
      var_type: "",
      var_theme_type: "",
      data: [],
    },
    variations: {
      banner: "",
      variation1: {
        var_title: "",
        value: "",
      },
      variation2: {
        var_title: "",
        value: "",
      },
      quantity: 0,
      images: [],
      dimensions: {
        item_length: "",
        item_width: "",
        item_height: "",
        item_weight: "",
      },
      price: {
        price_in_india: 0,
        price_in_unitedkingdom: 0,
        price_in_france: 0,
        price_in_germany: 0,
        price_in_netherland: 0,
        price_in_switzerland: 0,
        price_in_italy: 0,
        price_in_canada: 0,
        price_in_unitedstate: 0,
      },
      sellingPrice: {
        selling_price_in_india: 0,
        selling_price_in_unitedkingdom: 0,
        selling_price_in_france: 0,
        selling_price_in_germany: 0,
        selling_price_in_netherland: 0,
        selling_price_in_switzerland: 0,
        selling_price_in_italy: 0,
        selling_price_in_canada: 0,
        selling_price_in_unitedstate: 0,
      },
      bullet_point: ["", "", "", "", "", "", ""],
      title: "",
      sku: "",
      description: "",
      status: "",
      productStatus: "Active",
      slug: "",
      productOtherDetails: [],
      external_product_id: "",
      external_product_id_type: "",
      part_number: "",
      max_shelf_life: "",
      material_type_free: [],
      material_composition: "",
      is_waterproof: false,
      manufacturer: "",
      packer_details: "",
      importer_details: "",
      number_of_boxes: "",
      country_of_origin: "",
      product_information: "",
      fulfillment_latency: "",
      max_order_quantity: "",
      safety_information: "",
      indications: "",
      directions: "",
      legal_disclaimer: "",
    },
  };

  ngOnInit(): void {
    this.spinner = true;
    this.http.uploded_product_list_data().subscribe(
      (result: any) => {
        console.log("datas", result.data);

        this.datas = result.data;
        this.spinner = false;
      },
      (error) => {
        this.spinner = false;
        this.http.showAlert("error", "Error", error);
      }
    );

    let id = this.route.snapshot.queryParams.id;
    let val1 = this.route.snapshot.queryParams.var1val;
    let val2 = this.route.snapshot.queryParams.var2val;
    this.updateProductId = id ? id : null;
    this.updateVar1 = val1 ? val1 : null;
    this.updateVar2 = val2 ? val2 : null;

    if (this.updateProductId) {
      this.http.product(this.updateProductId).subscribe(
        (result: any) => {
          let allVariations = result.data;

          if (allVariations && allVariations.variations.length) {
            let checkItem;

            if (this.updateVar1 && this.updateVar2) {
              checkItem = allVariations.variations.find(
                (el: any, i: number) => {
                  return (
                    this.updateVar1 == el.variation1.value &&
                    this.updateVar2 == el.variation2.value
                  );
                }
              );
            } else if (this.updateVar1) {
              checkItem = allVariations.variations.find(
                (el: any, i: number) => {
                  return this.updateVar1 == el.variation1.value;
                }
              );
            } else if (this.updateVar2) {
              checkItem = allVariations.variations.find(
                (el: any, i: number) => {
                  return this.updateVar2 == el.variation2.value;
                }
              );
            }
            console.log("checkItem::", checkItem);
            console.log(
              "checkCond",
              checkItem,
              allVariations.parentId,
              allVariations.parentId.id,
              allVariations.category
            );

            if (
              checkItem &&
              allVariations.parentId &&
              allVariations.parentId.id &&
              allVariations.category
            ) {
              this.updateVariationId = checkItem._id;
              this.updateProductId = allVariations.id;
              let mergeProduct = allVariations;
              mergeProduct.variations = checkItem;
              this.updateProductData = mergeProduct;
              console.log("mergeProduct", mergeProduct);
            }
          }

          this.spinner = false;
        },
        (error) => {
          this.spinner = false;
          this.http.showAlert("error", "Error", error);
        }
      );
    }
  }

  viewChild(index: any, id: any) {
    this.newData = this.datas[index].children;
    if (this.newData.length > 0) {
      this.viewList = true;
    } else {
    }
    this.viewList1 = false;
    this.viewList2 = false;
    this.viewList3 = false;
    this.viewList4 = false;
    this.selectedId = "";
    // this.parentsArray = this.getPath(this.datas[0], id);
    // this.parentsArray.push(id);
  }
  viewChild1(index: any, id: any) {
    this.newData1 = this.newData[index].children;
    if (this.newData1.length > 0) {
      this.viewList1 = true;
    } else {
      this.viewList1 = false;
    }
    this.viewList2 = false;
    this.viewList3 = false;
    this.viewList4 = false;
    this.selectedId = "";

    // this.parentsArray = this.getPath(this.datas[0], id);
    // this.parentsArray.push(id);
  }
  viewChild2(index: any, id: any) {
    this.newData2 = this.newData1[index].children;
    if (this.newData2.length > 0) {
      this.viewList2 = true;
    } else {
      this.viewList2 = false;
    }
    this.viewList3 = false;
    this.viewList4 = false;
    this.selectedId = "";

    // this.parentsArray = this.getPath(this.datas[0], id);
    // this.parentsArray.push(id);
  }
  viewChild3(index: any, id: any) {
    this.newData3 = this.newData2[index].children;
    if (this.newData3.length > 0) {
      this.viewList3 = true;
    } else {
      this.viewList3 = false;
    }
    this.viewList4 = false;
    this.selectedId = "";

    // this.parentsArray = this.getPath(this.datas[0], id);
    // this.parentsArray.push(id);
  }
  viewChild4(index: any, id: any) {
    this.newData4 = this.newData3[index].children;
    if (this.newData4.length > 0) {
      this.viewList4 = true;
    } else {
      this.viewList4 = false;
    }
    this.selectedId = "";

    // this.parentsArray = this.getPath(this.datas[0], id);
    // this.parentsArray.push(id);
  }

  showChild(id: any) {
    let childData = this.datas.find((x: { id: any }) => x.id == id).children;

    if (childData.length > 0) {
      let list = "";
      for (let i = 0; i < childData.length; i++) {
        list =
          list +
          `<li><span>` +
          childData[i].data.name +
          ' </span><span class="buttonC" (click)="showChild(data.id)">></span></li>';
      }
      let matcard = `<ul>${list}</ul>`;
      this.mainDiv.nativeElement.insertAdjacentHTML("beforeend", matcard);
    }

    let el = this.elementRef.nativeElement.querySelector(".buttonC");
    if (el) {
      el.addEventListener("click", console.log("works"));
    }
  }

  addData(id: any, data: any, i: number = -1) {
    if (!data.children.length) {
      this.selectedId = id;
      this.selectedName = data.data.name;
    }
    this.datas.map((el: any) => {
      let path = this.getPath(el, id);
      if (path !== undefined) {
        this.parentId = path[0].id;
      }
    });

    if (i == 0) {
      this.viewList = false;
      this.viewList1 = false;
      this.viewList2 = false;
      this.viewList3 = false;
      this.viewList4 = false;
    }
    if (i == 1) {
      this.viewList1 = false;
      this.viewList2 = false;
      this.viewList3 = false;
      this.viewList4 = false;
    }
    if (i == 2) {
      this.viewList2 = false;
      this.viewList3 = false;
      this.viewList4 = false;
    }
    if (i == 3) {
      this.viewList3 = false;
      this.viewList4 = false;
    }
    if (i == 4) {
      this.viewList4 = false;
    }
  }

  getPath(model: any, id: any) {
    var path,
      item = { id: model.id };

    if (!model || typeof model !== "object") return;

    if (model.id === id) return [item];

    (model.children || []).some(
      (child: any) => (path = this.getPath(child, id))
    );
    return path && [item, ...path];
  }

  p_image = "";
  b_image = "";

  bannerImage(event: any) {
    this.b_image = event.target.files[0];
  }

  urls: any = [];
  productImg(event: any) {
    this.p_image = event.target.files;
  }

  addproduct(product_data: any) {
    const send_data = new FormData();
    send_data.append(
      "brand_name",
      product_data.brand_name ? product_data.brand_name : ""
    );
    send_data.append("title", product_data.title ? product_data.title : "");
    send_data.append("Colour", product_data.Colour ? product_data.Colour : "");
    send_data.append("sku", product_data.sku ? product_data.sku : "");
    send_data.append(
      "quantity",
      product_data.quantity ? product_data.quantity : ""
    );
    send_data.append(
      "description",
      product_data.description ? product_data.description : ""
    );
    send_data.append("status", product_data.status ? product_data.status : "");
    send_data.append(
      "external_product_id",
      product_data.external_product_id ? product_data.external_product_id : ""
    );
    send_data.append(
      "external_product_id_type",
      product_data.external_product_id_type
        ? product_data.external_product_id_type
        : ""
    );
    send_data.append(
      "part_number",
      product_data.part_number ? product_data.part_number : ""
    );
    send_data.append(
      "bullet_point",
      product_data.bullet_point1 ? product_data.bullet_point1 : ""
    );
    send_data.append(
      "bullet_point",
      product_data.bullet_point2 ? product_data.bullet_point2 : ""
    );
    send_data.append(
      "bullet_point",
      product_data.bullet_point3 ? product_data.bullet_point3 : ""
    );
    send_data.append(
      "bullet_point",
      product_data.bullet_point4 ? product_data.bullet_point4 : ""
    );
    send_data.append(
      "bullet_point",
      product_data.bullet_point5 ? product_data.bullet_point5 : ""
    );
    send_data.append(
      "bullet_point",
      product_data.bullet_point6 ? product_data.bullet_point6 : ""
    );
    send_data.append(
      "bullet_point",
      product_data.bullet_point7 ? product_data.bullet_point7 : ""
    );
    send_data.append(
      "max_shelf_life",
      product_data.max_shelf_life ? product_data.max_shelf_life : ""
    );
    send_data.append(
      "material_type_free",
      product_data.material_type_free1 ? product_data.material_type_free1 : ""
    );
    send_data.append(
      "material_type_free",
      product_data.material_type_free2 ? product_data.material_type_free2 : ""
    );
    send_data.append(
      "material_type_free",
      product_data.material_type_free3 ? product_data.material_type_free3 : ""
    );
    send_data.append(
      "material_composition",
      product_data.material_composition ? product_data.material_composition : ""
    );
    send_data.append(
      "is_waterproof",
      product_data.is_waterproof ? product_data.is_waterproof : ""
    );
    send_data.append(
      "manufacturer",
      product_data.manufacturer ? product_data.manufacturer : ""
    );
    send_data.append(
      "packer_details",
      product_data.packer_details ? product_data.packer_details : ""
    );
    send_data.append(
      "importer_details",
      product_data.importer_details ? product_data.importer_details : ""
    );
    send_data.append(
      "number_of_boxes",
      product_data.number_of_boxes ? product_data.number_of_boxes : ""
    );
    send_data.append(
      "country_of_origin",
      product_data.country_of_origin ? product_data.country_of_origin : ""
    );
    send_data.append(
      "product_information",
      product_data.product_information ? product_data.product_information : ""
    );
    send_data.append(
      "fulfillment_latency",
      product_data.fulfillment_latency ? product_data.fulfillment_latency : ""
    );
    send_data.append(
      "max_order_quantity",
      product_data.max_order_quantity ? product_data.max_order_quantity : ""
    );
    send_data.append(
      "safety_information",
      product_data.safety_information ? product_data.safety_information : ""
    );
    send_data.append(
      "indications",
      product_data.indications ? product_data.indications : ""
    );
    send_data.append(
      "directions",
      product_data.directions ? product_data.directions : ""
    );
    send_data.append(
      "legal_disclaimer",
      product_data.legal_disclaimer ? product_data.legal_disclaimer : ""
    );
    send_data.append(
      "relationship_type1",
      product_data.relationship_type1 ? product_data.relationship_type1 : ""
    );
    send_data.append(
      "variation_theme1",
      product_data.variation_theme1 ? product_data.variation_theme1 : ""
    );
    send_data.append(
      "variation_Value1",
      product_data.variation_Value1 ? product_data.variation_Value1 : ""
    );
    send_data.append(
      "relationship_type2",
      product_data.relationship_type2 ? product_data.relationship_type2 : ""
    );
    send_data.append(
      "variation_theme2",
      product_data.variation_theme2 ? product_data.variation_theme2 : ""
    );
    send_data.append(
      "variation_Value2",
      product_data.variation_Value2 ? product_data.variation_Value2 : ""
    );
    send_data.append(
      "item_length",
      product_data.item_length ? product_data.item_length : ""
    );
    send_data.append(
      "item_width",
      product_data.item_width ? product_data.item_width : ""
    );
    send_data.append(
      "item_height",
      product_data.item_height ? product_data.item_height : ""
    );
    send_data.append(
      "item_weight",
      product_data.item_weight ? product_data.item_weight : ""
    );
    send_data.append(
      "price_in_india",
      product_data.price_in_india ? product_data.price_in_india : ""
    );
    send_data.append(
      "price_in_unitedkingdom",
      product_data.price_in_unitedkingdom
        ? product_data.price_in_unitedkingdom
        : ""
    );
    send_data.append(
      "price_in_france",
      product_data.price_in_france ? product_data.price_in_france : ""
    );
    send_data.append(
      "price_in_germany",
      product_data.price_in_germany ? product_data.price_in_germany : ""
    );
    send_data.append(
      "price_in_netherland",
      product_data.price_in_netherland ? product_data.price_in_netherland : ""
    );
    send_data.append(
      "price_in_switzerland",
      product_data.price_in_switzerland ? product_data.price_in_switzerland : ""
    );
    send_data.append(
      "price_in_italy",
      product_data.price_in_italy ? product_data.price_in_italy : ""
    );
    send_data.append(
      "price_in_canada",
      product_data.price_in_canada ? product_data.price_in_canada : ""
    );
    send_data.append(
      "price_in_unitedstate",
      product_data.price_in_unitedstate ? product_data.price_in_unitedstate : ""
    );
    send_data.append(
      "selling_price_in_india",
      product_data.selling_price_in_india
        ? product_data.selling_price_in_india
        : ""
    );
    send_data.append(
      "selling_price_in_unitedkingdom",
      product_data.selling_price_in_unitedkingdom
        ? product_data.selling_price_in_unitedkingdom
        : ""
    );
    send_data.append(
      "selling_price_in_france",
      product_data.selling_price_in_france
        ? product_data.selling_price_in_france
        : ""
    );
    send_data.append(
      "selling_price_in_germany",
      product_data.selling_price_in_germany
        ? product_data.selling_price_in_germany
        : ""
    );
    send_data.append(
      "selling_price_in_netherland",
      product_data.selling_price_in_netherland
        ? product_data.selling_price_in_netherland
        : ""
    );
    send_data.append(
      "selling_price_in_switzerland",
      product_data.selling_price_in_switzerland
        ? product_data.selling_price_in_switzerland
        : ""
    );
    send_data.append(
      "selling_price_in_italy",
      product_data.selling_price_in_italy
        ? product_data.selling_price_in_italy
        : ""
    );
    send_data.append(
      "selling_price_in_canada",
      product_data.selling_price_in_canada
        ? product_data.selling_price_in_canada
        : ""
    );
    send_data.append(
      "selling_price_in_unitedstate",
      product_data.selling_price_in_unitedstate
        ? product_data.selling_price_in_unitedstate
        : ""
    );

    if (this.updateProductData && this.updateProductData.id) {
      send_data.append("category", this.updateProductData.category);
      send_data.append("parentId", this.parentId);
      send_data.append("_id", this.updateProductData._id);
      send_data.append("varientId", this.updateProductData.variations._id);

      if (this.b_image) {
        send_data.append("banner", this.b_image);
      } else {
        send_data.append("noBanner", "true");
      }

      if (this.p_image.length) {
        for (let i = 0; i < this.p_image.length; i++) {
          send_data.append("images", this.p_image[i]);
        }
      } else {
        send_data.append("noImages", "true");
      }

      // send_data.append("parentId", this.parentId);
      this.http.update_product(send_data).subscribe(
        (result: any) => {
          this.http.showAlert(
            "success",
            "Success",
            "Product update successful"
          );
          // return this.router.navigate(["/inventory/manage/inventory"]);
        },
        (error) => {
          this.http.showAlert("error", "Error", error);
        }
      );
    } else {
      send_data.append("banner", this.b_image);

      for (let i = 0; i < this.p_image.length; i++) {
        send_data.append("images", this.p_image[i]);
      }
      send_data.append("category", this.selectedId);
      send_data.append("parentId", this.parentId);
      this.http.add_product(send_data).subscribe((result: any) => {
        this.http.showAlert("success", "Success", "Product add successful");
        return this.router.navigate(["/inventory/manage/inventory"]);
      },
      (error)=>{
        this.http.showAlert('error','Error',error)
      });
    }
  }

  checkValue(data: any) {
    let checkdata = `${data}` ? `${data}` : "";
    return checkdata;
  }

  checkMaterialFreeType(data: any, index: number) {
    let value = data && data.length && data[index] ? data[index] : "";
    return value;
  }
}
