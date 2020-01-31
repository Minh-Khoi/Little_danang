import { Component, OnInit } from '@angular/core';
import { LookupSessionService } from '../../services/lookup-session.service';
import { backendDirectory } from '../../api-routes/backendURL';
import { Router } from '@angular/router';


@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {
  listOfSessions: any[];
  search_info: string;
  backendDirectory;

  constructor(private lookup: LookupSessionService,
    private router: Router) { }

  ngOnInit() {
    this.backendDirectory = backendDirectory;
    window.onbeforeunload = (ev) => {
      localStorage.removeItem('officer_code');
    }
    // console.log(localStorage.getItem("officer_code"));
    if (localStorage.getItem('officer_code')) {
      this.readByState("pending");
    } else {
      this.router.navigate(['form-and-gallery']);
    }
    // this.deleteByIDs([1, 2]);
  }

  // READ
  readByState(is_done: string) {
    // console.log(!localStorage.getItem('officer_code'));
    let form_datas = new FormData();
    // console.log(is_done);
    form_datas.append("method_to_DB", "read_by_state");
    form_datas.append("is_done", is_done);
    this.lookup.lookupSession(form_datas).then(
      resolve => {
        let resolveDemo: string = <string>resolve; //(typeof resolve == 'string') ? resolve : "";
        let result = JSON.parse(resolveDemo);
        this.listOfSessions = result;
        // console.log(result);
      }
    );
  }


  // DELETE
  deleteByIDs(IDs: any[]) {
    for (let id of IDs) {
      let form_datas = new FormData();
      form_datas.append("method_to_DB", "delete");
      form_datas.append("session_id", id);
      this.lookup.lookupSession(form_datas);
    }
  }

  deleteByState(is_done: string) {
    let form_datas = new FormData();
    form_datas.append("method_to_DB", "delete_by_state");
    form_datas.append("is_done", is_done);

    this.lookup.lookupSession(form_datas);
  }

  // MARK DONE
  markDoneByIDs(IDs: any[]) {
    for (let id of IDs) {
      let form_datas = new FormData();
      form_datas.append("method_to_DB", "mark_done");
      form_datas.append("session_id", id);
      this.lookup.lookupSession(form_datas);
    }
  }

  // EVENT
  makeAllDone() {
    let allDeletedCheckers = document.querySelectorAll("input[data-reference='delete'");
    let allMarkedDoneCheckers = document.querySelectorAll("input[data-reference='mark_done'");
    let arrayOfDeletedIDs = [], arrayOfMarkedDoneIDs = [];

    for (let i in allDeletedCheckers) {
      if ((<HTMLInputElement>allDeletedCheckers[i]).checked)
        arrayOfDeletedIDs.push((<HTMLInputElement>allDeletedCheckers[i]).name);
    }
    // console.log(arrayOfDeletedIDs);
    this.deleteByIDs(arrayOfDeletedIDs);

    for (let i in allMarkedDoneCheckers) {
      if ((<HTMLInputElement>allMarkedDoneCheckers[i]).checked)
        arrayOfMarkedDoneIDs.push((<HTMLInputElement>allMarkedDoneCheckers[i]).name);
    }
    this.markDoneByIDs(arrayOfMarkedDoneIDs);
  }

  filterList() {
    let valueFromRadioBtns = (<HTMLInputElement>document.querySelector("input[name='is_done']:checked")).value;
    this.readByState(valueFromRadioBtns);
  }

  filterTable() { // The Search text field on key up
    // Declare variables
    let input, filter, table, tr, tds;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 0; i < tr.length; i++) {
      tds = tr[i].getElementsByTagName("td");
      let txtValues = [];
      for (let j = 0; j < tds.length; j++) {
        txtValues.push(tds[j].textContent || tds[j].innerText);
      }
      for (let j = 0; j < tds.length; j++) {
        if ((txtValues[j].toUpperCase().indexOf(filter) > -1)) {
          tr[i].style.display = "";
          // console.log(txtValues[j]);
          // console.log(filter);
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  deleteAllOverided() {
    let form_datas = new FormData();
    form_datas.append("method_to_DB", "delete_by_state");
    form_datas.append("is_done", "overided");
    this.lookup.lookupSession(form_datas);
  }

  deleteAllDone() {
    let form_datas = new FormData();
    form_datas.append("method_to_DB", "delete_by_state");
    form_datas.append("is_done", "done");
    this.lookup.lookupSession(form_datas);
  }
}
