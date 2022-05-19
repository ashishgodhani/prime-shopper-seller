import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-add-products-via-upload",
  templateUrl: "./add-products-via-upload.component.html",
  styleUrls: ["./add-products-via-upload.component.css"],
})
export class AddProductsViaUploadComponent implements OnInit {
  @Input() "app-add-products-via-upload": any;

  constructor(private http: DataService, private elementRef: ElementRef, private route: ActivatedRoute) {}

  datas: any;

  @ViewChild("mainDiv")
  mainDiv!: ElementRef;
  @ViewChild("fileDiv")
  fileDiv: any;

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.spinner = true;
    this.http.uploded_product_list_data().subscribe(
      (result: any) => {
        this.datas = result.data;
        this.spinner = false;
      },
      (error) => {
        this.spinner = false;
        this.http.showAlert("error", "Error", error);
      }
    );
    
  }

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
  uplodedFile: any;

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
    console.log(id);
    let childData = this.datas.find((x: { id: any }) => x.id == id).children;
    console.log(childData);

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
    // console.log(i);

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

  addFile(e: any) {
    this.uplodedFile = e.target.files[0];
    console.log(this.uplodedFile);
  }

  submitData() {
    let send_datas = new FormData();
    send_datas.append("parentId", this.parentId);
    send_datas.append("id", this.selectedId);
    send_datas.append("csv", this.uplodedFile);

    this.http.upload_svg(send_datas, "/seller/products/csv").subscribe(
      (result) => {
        this.http.showAlert("success", "Success", "Products Upload Successfull");
        this.fileDiv.nativeElement.value = "";
      },
      (error) => {
        this.http.showAlert("error", "Error", error.error.message);
        this.fileDiv.nativeElement.value = "";
      }


    );
  }

  onSearchChange(event: any): void {
    let searchString = event.target.value;
    let getcate: any = [];
    if (searchString) {
      function updateTree(searchString: any, treeData: any) {
        let tree = { ...treeData };
        let checkString = false;
        console.log(tree.data, tree.data.name);

        if (tree.data && tree.data.name) {
          if (tree.data.name == searchString) {
            checkString = true;
          }
          // console.log("item", tree.children);
          tree.children.map(function (item: any) {
            if (item) {
              return updateTree(searchString, item);
            }
          });
        }

        if (checkString) {
          return tree;
        } else {
          return false;
        }
      }

      this.datas.map((el: any) => {
        let data = updateTree(searchString, el);
        if (data) {
          getcate.push(el);
        }
      });
    }
    console.log(getcate);
    // let resultdata = [];
    // getcate.map()
  }
}
