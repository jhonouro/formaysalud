import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms'
import { ClientService } from './service/client.service'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuMaincomponentComponent } from './componentes/menu-maincomponent/menu-maincomponent.component';
import { FooterMaincomponentComponent } from './componentes/footer-maincomponent/footer-maincomponent.component';
import { HomeComponentComponent } from './componentes/home-component/home-component.component';
import { RegistroComponentComponent } from './componentes/registro-component/registro-component.component';
import { from } from 'rxjs';
import { ListUserComponentComponent } from './componentes/list-user-component/list-user-component.component';
import { UpdateClientComponent } from './componentes/update-client/update-client.component';
import { LoginComponentComponent } from './componentes/login-component/login-component.component';
import { AspirantecomponentComponent } from './componentes/aspirantecomponent/aspirantecomponent.component';

const appRoutes: Routes = [
  {path: '', component:  HomeComponentComponent },
  {path: 'register', component: RegistroComponentComponent},
  {path: 'list', component: ListUserComponentComponent},
  {path: 'update/:id', component: UpdateClientComponent},
  {path: 'delete/:id', component: ListUserComponentComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: 'logout', component: LoginComponentComponent},
  {path: 'aspirante', component: AspirantecomponentComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    MenuMaincomponentComponent,
    FooterMaincomponentComponent,
    HomeComponentComponent,
    RegistroComponentComponent,
    ListUserComponentComponent,
    UpdateClientComponent,
    LoginComponentComponent,
    AspirantecomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ /* Aca se ubican todos los servicios*/
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
