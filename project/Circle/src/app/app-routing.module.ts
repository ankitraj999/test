import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegisterComponent } from './Components/register/register.component';
import { OrgLoginComponent } from './componentsOrg/org-login/org-login.component';
import { OrgSignupComponent } from './componentsOrg/org-signup/org-signup.component';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AboutComponent } from './components/about/about.component';
import { AddeducationComponent } from './Components/addeducation/addeducation.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { MyNetworkComponent } from './Components/my-network/my-network.component';
import { ChatComponent } from './Components/chat/chat.component';
import { UserJobsComponent } from './Components/user-jobs/user-jobs.component';
import { OrgHomeComponent } from 'src/app/componentsOrg/org-home/org-home.component';
import { OrgDashboardComponent } from 'src/app/componentsOrg/org-dashboard/org-dashboard.component';
import { OrgAddjobComponent } from 'src/app/componentsOrg/org-addjob/org-addjob.component';
import { OrgNotificationComponent } from 'src/app/componentsOrg/org-notification/org-notification.component';
import { OrgProfileComponent } from 'src/app/componentsOrg/org-profile/org-profile.component';
import { ViewuserComponent } from './Components/viewuser/viewuser.component';

const routes: Routes = [
   {path:'',component:LandingPageComponent},
   {path:'landing',component:LandingPageComponent},
   {path:'userlogin',component:UserLoginComponent},
   {path:'signup',component:RegisterComponent},
   {path:'orglogin',component:OrgLoginComponent},
   {path:'orgsignup',component:OrgSignupComponent},
   {path:'home', component:MainComponent},
   {path:'dashboard', component:DashboardComponent},
   {path:'add-experience', component:AddExperienceComponent},
   {path:'certifications', component:CertificationsComponent},
   {path:'edit-profile', component:EditProfileComponent},
   {path:'about', component:AboutComponent},
  {path:'add-education', component:AddeducationComponent},
  {path:'notify', component:NotificationsComponent},
  {path:'mynetwork', component:MyNetworkComponent},
  {path:'chat', component:ChatComponent},
  {path:'userjobs', component:UserJobsComponent},
 // {path:'',component:OrgHomeComponent},
  {path:'org_home',component:OrgHomeComponent},
  {path:'org_dashboard',component:OrgDashboardComponent},
  {path:'org_addjob',component:OrgAddjobComponent},
  {path:'org_notify',component:OrgNotificationComponent},
  {path:'org_profile',component:OrgProfileComponent},
  {path:'viewOtherUser',component:ViewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
