import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class SetIntervalBgImgsService {

  constructor() { }

  setIntervalBgImgs() {
    let images = ["danang2.jpg", "danang3.jpg", "danang4.jpg", "danang5.jpg", "danang6.jpg"];
    $(function () {
      let i = 0;
      $("#dvImage").css({
        "background-image": "url(/assets/imgs/" + images[i] + ")",
        "background-repeat": "no-repeat",
        "background-size": "100% 100vh"
        // "background-position" : ""
      });
      setInterval(function () {
        i++;
        if (i == images.length) {
          i = 0;
        }
        $("#dvImage").fadeOut(5, function () {
          $(this).css({
            "background-image": "url(/assets/imgs/" + images[i] + ")",
            "background-size": "100% 100vh"
            // "background-position" : ""
          });
          $(this).fadeIn("fast");
          // console.log("ok");
        });
      }, 60000);
    });
  }
}
