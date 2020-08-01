import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})
export class ListUserComponentComponent implements OnInit {
  public allClient: [];
  public id;
  public path;
  constructor(
    private service:ClientService,
    private routerParams: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let userLogged = localStorage.getItem('login')
    if (userLogged == 'true'){
      this.path = this.routerParams.snapshot.url[0].path;
      if (this.path == 'delete'){
        this.id = this.routerParams.snapshot.paramMap.get('id');
        this.removeClient();
      }else{
        this.listAllClients();
      }   
    }else{
      this.router.navigate(['/list']);
    }
  }

  listAllClients(){
    console.log("Llego a la funcion correctamente")
    this.service.getAllClients().subscribe((res : any) => {
      if (res.statusCode == 200){
        this.allClient = res.dataUsers
      }else{

      }
    })
  }
  removeClient(){
    this.service.removeClient(this.id).subscribe ( (res : any) => {
      if(res.statusCode == 200){
        alert(res.message);
        this.router.navigate(['/login']);
      }else{
        alert(res.message);
      }
    } )
  }
}
