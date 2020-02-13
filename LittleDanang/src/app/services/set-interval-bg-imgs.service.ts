import { Injectable } from '@angular/core';
import { hostDIR } from '../api-routes/backendURL';
declare let $: any, jQuery: any;

@Injectable({
  providedIn: 'root'
})
export class SetIntervalBgImgsService {

  constructor() {
  }

  setIntervalBgImgs() {
    let images = ["danang2.jpg", "danang3.jpg", "danang4.jpg", "danang5.jpg", "danang6.jpg"];
    $(function () {
      let i = 0;
      $("#dvImage").css({
        "background-image": "url("
          // + "http://localhost:4200"
          // + hostDIR
          + "/assets/imgs/" + images[i] + ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100vh"
        // "background-position" : ""
      });
      console.log(hostDIR);
      setInterval(function () {

        i++;
        if (i == images.length) {
          i = 0;
        }
        jQuery("#dvImage").fadeOut(5, function () {
          $(this).css({
            "background-image": "url("
              // + "http://localhost:4200"
              // + hostDIR
              + "/assets/imgs/" + images[i] + ")",
            "background-size": "100% 100vh"
            // "background-position" : ""
          });
          jQuery(this).fadeIn("fast");
          // console.log("ok");
        });
      }, 60000);
    });
  }
}
