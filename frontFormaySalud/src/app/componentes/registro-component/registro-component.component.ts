import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../service/client.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro-component.component.html',
  styleUrls: ['./registro-component.component.css']
})
export class RegistroComponentComponent implements OnInit {
  public client: Client;
  constructor(
    private service: ClientService,
  ) {
    this.client = new Client();
   }
   clientRegister(){
     this.service.registerClient(this.client).subscribe( ( res:any ) => {
      console.log(res);
     })
   }

  ngOnInit(): void {
  }

}
