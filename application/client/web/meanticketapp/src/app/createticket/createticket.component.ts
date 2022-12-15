import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    severityitemArray: any = [];
    typesitemArray: any = [];
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        callername: '',
        types: '',
        severity: '',
    }

    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
    }
    severityGpGetAllValues() {
        this.createticketService.severityGpGetAllValues().subscribe((data:any) => {
            this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.createticketService.typesGpGetAllValues().subscribe((data:any) => {
            this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketService.GpCreate(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.callername = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}