import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../service/client.service';
import { Client  } from '../../models/client';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public client: Client;
  public path;

  constructor(
    private service: ClientService,
    private routerParams: ActivatedRoute,
    private router: Router
  ) { 
    this.client = new Client();
  }

  ngOnInit(): void {
    this.routerParams.snapshot.url[0].path;
    console.log('llego el logout')
    if(this.path == 'logout'){
      localStorage.removeItem('login');
    }
  }
  login(){
    this.service.login(this.client).subscribe( ( res:any ) => {
      switch( res.statusCode ){
        case 204:
          alert ('Los datos no coinciden')
          break;
        case 200:
          alert('Bienvenido');
          if(res.dataClient.typeUser == 'Administrador'){
            this.router.navigate(['/list']);
          }else{
            this.router.navigate(['/aspirante'])
          }       
          localStorage.setItem('login', 'true')
          this.service.userLogged = localStorage.getItem('login');
          break;
        case 400:
          alert('El usuario no existe');
          break;
        default:
        alert('Ocurrio un error');
      }
     })
  }
  
}
