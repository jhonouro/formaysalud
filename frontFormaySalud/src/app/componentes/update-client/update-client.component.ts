import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Client } from '../../models/client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  public client: Client;
  public id;
  constructor(
    private service: ClientService,
    private routerParams: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.routerParams.snapshot.paramMap.get('id');
    this.getDataClient();
    console.log("Parametros obetenidos", this.id);
  }
  clientUpdate(){
    this.service.updateClient(this.client).subscribe( (res : any) =>{
      if (res.statusCode == 200){
        alert(res.message);
        this.router.navigate(['/list']);
      }else{
        alert(res.message);
      }
    } )
  }
  getDataClient(){
    this.service.getClient(this.id).subscribe( (res : any) => {
      this.client = res.dataClient
    } )
  }
}
