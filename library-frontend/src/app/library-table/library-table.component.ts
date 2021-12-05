import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UserroleService } from '../userrole.service';

@Component({
  selector: 'app-library-table',
  templateUrl: './library-table.component.html',
  styleUrls: ['./library-table.component.css']
})
export class LibraryTableComponent implements OnInit, OnChanges {
  @Input() rows = [];
  @Input() columns = [];
  @Input() showPagination = true;
  @Input() showActions = true;
  @Input() showEdit = true;
  @Input() showDelete = true;
  @Input() showView = true;
  @Input() isScroll = false;
  @Input() showSelection = false;
public currentPage:any;
public showRole: boolean = false;
public dropdownSettings = {
  singleSelection: false,
  idField: '',
  textField: '',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 20,
  allowSearchFilter: true
};
public selectAll = false;

@Output() editDataChange = new EventEmitter();
@Output() deleteDataChange = new EventEmitter();
@Output() checkboxChange = new EventEmitter();
@Output() viewDataChange = new EventEmitter();
@Output() rowDataEdited = new EventEmitter();
itemsPerPageList = [5, 10, 20, 50];
itemsPerPage = 10;
isDesc = true;
column:any;
direction:any;
filteredData:any;

constructor(private userRole:UserroleService) { 
  this.usertally();
}

ngOnInit() {
  this.usertally();
  if (!this.showPagination) {
    this.itemsPerPage = this.rows.length;
  }
}

usertally(){
  var access = this.userRole.userrole;
  if(access === 'admin'){
    this.showRole = true;
  }
  else{
    this.showRole = false;
  }
}

ngOnChanges() {
  this.filteredData = this.rows;
  this.columns.forEach(columnData => {
    
  });
}

sort(col: any) {
  this.isDesc = !this.isDesc;
  this.column = col.name;
  this.direction = !this.isDesc ? 1 : -1;
}

filterData(columnName: any, searchValue: any, columns: any) {

  let isMulti = false;
  columns.forEach((item: any) => {
    if (columnName === item.name) {
      item.columnSearchValue = searchValue;
    }
    if (item.columnSearchValue !== undefined && item.columnSearchValue !== '' && !isMulti) {
      this.iterateArray(this.rows, item.name, item.columnSearchValue);
      isMulti = true;
    } else if (isMulti) {
      this.iterateArray(this.filteredData, item.name, item.columnSearchValue);
    }
  });
  if (!isMulti) {
    this.filteredData = this.rows;
  }
  let isAllSelect = true;
  this.filteredData.forEach(element => {
    if (!element.isSelected) {
      isAllSelect = false;
    }
  });
  if (!isAllSelect) {
    this.selectAll = false;
  }
}

iterateArray(iterateList: any, columnName: any, searchValue: any) {
  this.filteredData = [];
  iterateList.forEach((item: any) => {
    if (item[columnName].toString().toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
      this.filteredData.push(item);
    }
  });
}

checkAll(event:any) {
  if (event.target.checked) {
    this.filteredData.forEach(item=> {
      item.isSelected = true;
    });
  } else {
    this.filteredData.forEach(item => {
      item.isSelected = false;
    });
  }
}

checkedRow(checked:any) {
  if (checked) {
    this.filteredData.forEach(item => {
      if (item.isSelected) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    });
  } else {
    this.selectAll = false;
  }
}

editData(rowData: any) {
  this.editDataChange.emit(rowData);
}

deleteData(rowData: any) {
  this.deleteDataChange.emit(rowData);
}

checkbox(rowData: any) {
  this.checkboxChange.emit(rowData);
}

viewData(rowData: any) {
  this.viewDataChange.emit(rowData);
}

editedRowData(editedData: any) {
  this.rowDataEdited.emit(editedData);
}


}
