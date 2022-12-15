import { Component, OnInit } from '@angular/core';
import { CreatetypeService } from './createtype.service';

@Component({
  selector: 'app-createtype',
  templateUrl: './createtype.component.html',
  styleUrls: ['./createtype.component.scss'],
})

export class CreatetypeComponent implements OnInit {
    public types:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }

    constructor (
        private createtypeService: CreatetypeService,
    ) { }

    ngOnInit() {
        this.types.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createtypeService.GpCreate(this.types).subscribe((data:any) => {
            this.types.name = ''
 	 	this.types.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}