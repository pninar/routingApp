import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/core/services/utility/utility.service';

@Component({
  selector: 'app-lookup-tables',
  templateUrl: './lookup-tables.component.html',
  styleUrls: ['./lookup-tables.component.css']
})
export class LookupTablesComponent implements OnInit {

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.changeCurrentModuleTitle("Lookup Tables");
  }

}
