import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { AiToolsComponent } from './components/ai-tools/ai-tools.component';
import { PhotoGlobeComponent } from './components/photo-globe/photo-globe.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-portal', component: AboutComponent },
  { path:'flip-card', component: FlipCardComponent },
  { path: 'ai-tools', component: AiToolsComponent },
  { path: 'photo-glope', component: PhotoGlobeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent ,}
];