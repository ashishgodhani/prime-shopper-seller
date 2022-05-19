import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/classes/products';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  files: File[] = [];
  subcategoryName: any;
  tabline: number = 2;
  subCategorys: Array<any> = [];
  productActive: boolean = false;
  addProductForm:any
  categoryProductID: any;
  file: any;
  categories: Array<any> = [];
  constructor(
    private router: Router,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.dataService.setTitle('Product-Create');
    this.getProducts();
  }

  postproduct(newPrdouct: any) {
    console.log(newPrdouct.value);

    var product: any = new FormData();

    Object.keys(newPrdouct.value).map((key) => {
      product.append(key, newPrdouct.value[key]);
    });

    this.files.map((file: any) => {
      product.append('images', file);
    });

    product.append('banner', this.file);

    this.dataService.__post('/seller/product/add', product).subscribe(
      (productNew) => {
        this.router.navigateByUrl('/catalogue/products');
      },
      (error) => {
        this.dataService.showAlert('error', 'Error', error);
      }
    );
  }

  getProducts() {
    this.dataService.__post('/categories', {}).subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        this.dataService.showAlert('error', 'Error', error);
      }
    );
  }

  loadSubCategory(subCategory: any) {
    this.subcategoryName = subCategory.name;
    if (subCategory._id.trim() == '') {
      this.dataService.showAlert('error', 'Error', 'Please Select SubCategory');
      return;
    }
    this.dataService
      .__post('/getSubCategories', { category: subCategory._id })
      .subscribe(
        (categories) => {
          this.subCategorys = categories;
          this.tabline = 3;
        },
        (error) => {
          this.dataService.__post('error', 'Error', error);
        }
      );
  }

  OpenAddproductForm(addCategory: any) {
    this.categoryProductID = addCategory._id;
    this.tabline = 1;
  }

  productCategoryAdd(productDetalis: any) {
console.log(productDetalis.value);


    if (this.productActive == false) {
      if (
        productDetalis.value.title.trim() == '' ||
        productDetalis.value.price.trim() == '' ||
        productDetalis.value.sellingPrice.trim() == ''
      ) {
        this.dataService.showAlert('error', 'Error', 'Please Enter value');
        return;
      } else {
        
        this.productActive = true
        console.log(productDetalis.value.banner);
        
      if(productDetalis.value.banner.trim() == ''){
        this.dataService.showAlert('error', 'Error', 'Please Enter value');
        return
      }
          
          this.dataService
          .__post('/get/forms', { category: this.categoryProductID })
          .subscribe(
            (form) => {
              
              console.log(form);
              
              this.addProductForm = form
            },
            (error) => {
              this.dataService.showAlert('error', 'Error', error);
            }
          );
          
        
      }
    }
  }

 
 
  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  fileChange(data: any) {
    let file = data.target.files;
    this.file = file[0];
  }

  goBack() {
    this.location.back();
  }
}
