import { Injectable } from '@angular/core';
import { backendURL } from '../api-routes/backendURL';

@Injectable({
  providedIn: 'root'
})
export class LookupSessionService {


  constructor() { }

  // read(form_datas) {
  //   let request = new Request(backendURL, {
  //     method: 'POST',
  //     body: form_datas
  //   });

  //   return fetch(request).then(
  //     (resolved) => {
  //       console.log(resolved instanceof Response);
  //       return resolved.text();
  //     },
  //     (reject) => console.log(reject)
  //   );

  // }

  lookupSession(form_datas: FormData): Promise<string | void> {
    let request = new Request(backendURL, {
      method: 'POST',
      body: form_datas
    });

    return fetch(request).then(
      (resolved) => {
        console.log(backendURL);
        // console.log(resolved instanceof Response);
        return resolved.text();
      }
    ).catch((reject) => {
      console.log(reject);
    });

  }
}
