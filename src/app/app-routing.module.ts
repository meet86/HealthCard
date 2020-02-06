import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import {UploadreportComponent} from './uploadreport/uploadreport.component'
``;
import { PatientHomeComponent } from './Patient/patient-home/patient-home.component';
import { PatientGuard } from './Gaurds/patient.guard';

const routes: Routes = [
  { path: "Login", component: LoginComponent },
  { path: "Signup", component: SignupComponent },
  { path: "Signup2", component: Signup2Component },
  { path: "upload", component: UploadreportComponent },
  { path: "Patient/Home",component:PatientHomeComponent, canActivate:[PatientGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}