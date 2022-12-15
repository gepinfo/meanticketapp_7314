import { Component, OnInit } from '@angular/core';
import { GetallticketService } from './getallticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallticket',
  templateUrl: './getallticket.component.html',
  styleUrls: ['./getallticket.component.scss'],
})

export class GetallticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'callername', field: 'callername'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private getallticketService: GetallticketService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallticketService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updatetickets'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}