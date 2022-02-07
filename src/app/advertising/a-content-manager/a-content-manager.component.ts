import { Component, OnInit } from '@angular/core';
import { AContentManger } from 'src/app/classes/AContentManger';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-a-content-manager',
  templateUrl: './a-content-manager.component.html',
  styleUrls: ['./a-content-manager.component.css']
})
export class AContentManagerComponent implements OnInit {
aContentManagers:Array<AContentManger> = []
  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('A+ Content Manager')
    this.loadAContentManager()
  }


  loadAContentManager(){
    this.dataService.__post('',{})
    .subscribe(
      (aContentManagers:Array<any>)=>{
        aContentManagers.map((aContentManager:any)=>{
          this.aContentManagers.push(new AContentManger({
            _id:aContentManager._id,
            contentName: aContentManager.name,
            contentType: aContentManager.type,
            language: aContentManager.language,
            asins: aContentManager.asins,
            lastModified: aContentManager.lastModified,
            contentStatus: aContentManager.contentStatus
          }))
        })

      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
  }
  

}
