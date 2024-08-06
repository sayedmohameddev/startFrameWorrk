import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component:HomeComponent, pathMatch:'full'},
    {path: 'about', component:AboutComponent, pathMatch:'full'},
    {path: 'portfolio', component:PortfolioComponent, pathMatch:'full'},
    {path: 'contact', component:ContactComponent, pathMatch:'full'},
    {path: 'gallary', component:GallaryComponent, pathMatch:'full'},
    {path: '**', component:NotfoundComponent, pathMatch:'full'}
];
