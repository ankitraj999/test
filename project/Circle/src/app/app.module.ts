import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterComponent } from './Components/register/register.component';
import { OrgLoginComponent } from './componentsOrg/org-login/org-login.component';
import { OrgSignupComponent } from './componentsOrg/org-signup/org-signup.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { AboutComponent } from './components/about/about.component';
import { AddeducationComponent } from './Components/addeducation/addeducation.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { MyNetworkComponent } from './Components/my-network/my-network.component';
import { RecommendationComponent } from './Components/my-network/recommendation/recommendation.component';
import { InvitationsComponent } from './Components/my-network/invitations/invitations.component';
import { FriendlistComponent } from './Components/my-network/friendlist/friendlist.component';
import { ChatComponent } from './Components/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UserJobsComponent } from './Components/user-jobs/user-jobs.component';
import { OrgAddjobComponent } from 'src/app/componentsOrg/org-addjob/org-addjob.component';
import { OrgDashboardComponent } from 'src/app/componentsOrg/org-dashboard/org-dashboard.component';
import { OrgHomeComponent } from 'src/app/componentsOrg/org-home/org-home.component';
import { OrgNavbarComponent } from 'src/app/componentsOrg/org-navbar/org-navbar.component';
import { OrgNotificationComponent } from 'src/app/componentsOrg/org-notification/org-notification.component';
import { OrgProfileComponent } from 'src/app/componentsOrg/org-profile/org-profile.component';
import { ViewuserComponent } from './Components/viewuser/viewuser.component';
import { ShowUserProfileComponent } from './Components/show-user-profile/show-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    OrgLoginComponent,
    OrgSignupComponent,
    NavComponent,
    MainComponent,
    DashboardComponent,
    AddExperienceComponent,
    EditProfileComponent,
    CertificationsComponent,
    Footer2Component,
    AboutComponent,
    AddeducationComponent,
    NotificationsComponent,
    MyNetworkComponent,
    RecommendationComponent,
    InvitationsComponent,
    FriendlistComponent,
    ChatComponent,
    SearchPipe,
    UserJobsComponent,
    OrgAddjobComponent,
    OrgDashboardComponent,
    OrgHomeComponent,
    OrgNavbarComponent,
    OrgNotificationComponent,
    OrgProfileComponent,
    ViewuserComponent,
    ShowUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
