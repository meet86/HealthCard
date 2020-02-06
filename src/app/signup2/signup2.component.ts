import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RegisterService } from "../register.service";
import { ToastrService } from "ngx-toastr";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Subscription } from "rxjs";

@Component({
  selector: "app-signup2",
  templateUrl: "./signup2.component.html",
  styleUrls: ["./signup2.component.css"]
})
export class Signup2Component implements OnInit {
  public fname: string;
  public lname: string;
  public password: string;
  public blood: string;
  public user: string;
  public dob: string;
  public userId: string;
  public address: string;
  public contact: string;
  public email: string;
  public selectedItems: any[];
  public dropdownList = [];
  public specialities: any[] = [
    {
      speciality: ""
    }
  ];

  private sub1: Subscription;
  public dropdownSettings: IDropdownSettings;

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private Toastr: ToastrService,
    private register: RegisterService
  ) {}
  
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Full Blood Examination' },
      { item_id: 2, item_text: 'Iron studies' },
      { item_id: 3, item_text: 'TSH (Thyroid Stimulating Hormone) Quantification' },
      { item_id: 4, item_text: 'Urinalysis' },
      { item_id: 5, item_text: 'INR (International Normalized Ratio)' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Full Blood Examination' },
   ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
    //  allowSearchFilter: true
    };
   

  
    var basicForm = history.state;
    console.log(JSON.stringify(basicForm));
    this.fname = basicForm.fname;
    this.lname = basicForm.lname;
    this.password = basicForm.password;
    this.address = basicForm.address;
    this.contact = basicForm.contact;
    this.blood = basicForm.blood;
    this.user = basicForm.user;
    this.email = basicForm.email;
    this.dob = basicForm.dob;
    this.address = basicForm.address;
    this.email = basicForm.email;
    this.contact=basicForm.contact;
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.userId = this.fname + "_" + this.lname;
    this.register.getSpecialityArray();
    this.sub1 = this.register.getSpecList().subscribe((list: []) => {
      this.dropdownList = list;
    });

    // this.dropdownList = this.register.getSpecialityArray();
    // Uncomment after ready getId ready in register.service.ts
    // this.userId = this.register.getId(
    //   this.fname,
    //   this.lname,
    //   this.user,
    //   this.dob
    // );
  }
 
  registerLab(form) {
    if(this.user == "lab")
    {
    
    var licence =form.licence.value;
    var labname = form.lab_name.value;
    var DOE=form.DOE.value;
    var lab_address=form.address.value;
  //  var l=form.l1.value;
console.log("selected",this.selectedItems);
    //qvar contact = form.contact.value;
    //console.log(licence, shopname);
    this.register.register(
      this.password,
      this.fname,
      this.lname,
      this.email,
      this.blood,
      this.dob,
      this.contact,
      this.address,
      this.user,
      licence,
      labname,
      DOE,
      lab_address,
      this.selectedItems

   );
    }
    if(this.user == "medic")
    {
      var licence =form.licence.value;
    var labname = form.lab_name.value;
    var DOE=form.DOE.value;
    var shop_address=form.address.value;
      console.log("medic")
      this.register.registermedic(
        this.password,
        this.fname,
        this.lname,
        this.email,
        this.blood,
        this.dob,
        this.contact,
        this.address,
        this.user,
        licence,
        labname,
        DOE,
        shop_address,  
     );

    }
  }
  addSpeciality() {
    this.specialities.push({
      speciality: ""
    });
  }

  removeSpeciality(i: number) {
    this.specialities.splice(i, 1);
  }

  // registerMedic(form) {
  //   var licence = form.licence.value;
  //   var shopname = form.shop_name.value;
  //   var contact = form.contact.value;
  //   console.log(licence, shopname);
  //   this.register.register(
  //     licence,
  //     this.fname,
  //     shopname,
  //     contact,
  //     this.password,
  //     this.address,
  //     this.user
  //   );
  // }
  // registerLab(form) {
  //   var licence = form.licence.value;
  //   var shopname = form.lab_name.value;
  //   var contact = form.contact.value;
  //   //  console.log(licence , shopname)
     
   

  registerDoc(form) {
    this.specialities.forEach(spec => {
      this.selectedItems.push(spec.speciality);
    });
    this.register.registeDoc(
      this.fname,
      this.lname,
      this.password,
      this.address,
      this.contact,
      this.dob,
      this.blood,
      this.email,
      this.user,
      form.licence.value,
      form.degree.value,
      this.selectedItems,
      this.specialities,
      form.work_name.value,
      form.work_contact.value,
      form.work_address.value
    );
  }
}
  // registerPatient(form) {
  //   //console.log("In com");
  //   var contact = form.contact.value;
  //   var dob = form.DOB.value;
  //   var blood = form.bloodType.value;
  //   var email = form.email.value;
  //   this.register.registeruser(
  //     this.fname,
  //     this.lname,
  //     this.userId,
  //     this.password,
  //     this.address,
  //     contact,
  //     dob,
  //     blood,
  //     email,
  //     this.user
  //   );
  // }

