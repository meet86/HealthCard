import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import {ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from "../register.service";
import { Subscribable } from 'rxjs';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-uploadreport',
  templateUrl: './uploadreport.component.html',
  styleUrls: ['./uploadreport.component.css']
})
export class UploadreportComponent implements OnInit {
  public images = [];
  public user;
  public obj;
  private alluser:Subscription;
  public users:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  temp =[] 
  selected:any;
  constructor(private http:HttpClient,private register: RegisterService) { }
  keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];
 
 
  selectEvent(item) {
    this.selected=item;
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    console.log(e);
    // do something when input is focused
  }

  

  ngOnInit() {

   
   

  //  var temp =[];
    this.register.getuser();
    this.alluser = this.register.cast9Listener()
    .subscribe(data => {
      
      this.obj = data
      this.users = JSON.parse(this.obj)
      var x=0
      this.users.forEach(element => {
        //this.temp.push(element.email)
        this.temp.push({id:(x+1),name:element.email})
        console.log("proo"+element.email)

      });
      //var u=this.users[0]
      console.log(this.temp)
    })
    this.users = JSON.parse(this.obj)
  }

  onFileSelected(event){
    if (event.target.files.length > 0) {
    //  const file = <File>event.target.files[0];
      this.images = event.target.files;
      
    }

  }
  upload(){
    
    const fd = new FormData();
    for(let img of this.images){
      fd.append('files', img);
    }
   // this.register.uploadreport(fd,this.selected);
    this.http
    .post("http://localhost:8000/upload/"+this.selected.name, fd)
    .subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    console.log("In upload",fd)
  }

}