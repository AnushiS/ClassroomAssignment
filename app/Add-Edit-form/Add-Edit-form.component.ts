import { Component, OnInit ,Input, Output, EventEmitter,AfterContentInit, ContentChild,
  AfterViewChecked, AfterViewInit, ViewChild,ViewChildren} from '@angular/core';
import {appFetchDataService} from '../Services/appFetch-data.service';

@Component({
  selector: 'app-modifyforms',
  templateUrl: './Add-Edit-form.component.html',
  styleUrls: ['./Add-Edit-form.component.css']
})
export class ModifyoptionsComponent implements OnInit {

  constructor(public fetchDataSvc : appFetchDataService) { 
    
  }

  ngOnInit() {
  }


  @ Input() dataToEdit:any = {};

  @ Output() emitResult : EventEmitter<any> = new EventEmitter();
  
onSubmit(){
  delete this.dataToEdit._id;
    console.log(this.dataToEdit);
    this.fetchDataSvc.modifyListOfProducts(this.dataToEdit)
    .subscribe((result) => { this.successMessage(result)},
    error => {
      console.log(error);
    });
}

  successMessage(result){
  if (result.status = "success" && result.errorMessage == null){
      alert("data has been added succesfully");
      this.emitResult.emit(true);
      this.fetchDataSvc.refreshList(true);
    }
    else{
      alert(result.errorMessage);
    }

    
}
}


