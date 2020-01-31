import { Injectable } from '@angular/core';
import { backendURL, deleteOverdatedSessionURL } from '../api-routes/backendURL';
declare let $: any;


@Injectable({
  providedIn: 'root'
})
export class BackendApisService {

  constructor() { }

  add(form_datas: FormData) {

    // backendURL = "http://localhost:8888/LittleDanangServerSide/index.php";
    let request = new Request(backendURL, {
      method: 'POST',
      body: form_datas
    });

    console.log(backendURL);
    return fetch(request).then(
      (resolved) => {
        // console.log(resolved instanceof Response);
        return resolved.text();
      },
      (reject) => console.log(reject)
    ).then(resolved => console.log((resolved)));

  }

  deleteOverdatedSession() {
    // let fDatas = new FormData();
    fetch(deleteOverdatedSessionURL);
  }

}
