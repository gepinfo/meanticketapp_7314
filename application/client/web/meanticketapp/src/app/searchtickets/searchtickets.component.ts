import { Component, OnInit } from '@angular/core';
import { SearchticketsService } from './searchtickets.service';

@Component({
  selector: 'app-searchtickets',
  templateUrl: './searchtickets.component.html',
  styleUrls: ['./searchtickets.component.scss'],
})

export class SearchticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'callername', field: 'callername'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
    typesitemArray: any = [];
    severityitemArray: any = [];
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
        private searchticketsService: SearchticketsService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
    }
    typesGpGetAllValues() {
        this.searchticketsService.typesGpGetAllValues().subscribe((data:any) => {
            this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.searchticketsService.severityGpGetAllValues().subscribe((data:any) => {
            this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchticketsService.GpSearch(this.tickets).subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.searchticketsService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}