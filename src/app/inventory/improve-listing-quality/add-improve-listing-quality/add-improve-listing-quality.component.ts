import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-improve-listing-quality',
  templateUrl: './add-improve-listing-quality.component.html',
  styleUrls: ['./add-improve-listing-quality.component.css'],
})
export class AddImproveListingQualityComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  postimproveListingQuality(addImproveListingQuality: any) {}

  goBack() {
    this.location.back();
  }
}
