import { Component, OnInit } from '@angular/core';
import { InitinfoService } from '../../services/initinfo.service';
import { BackendApisService } from '../../services/backend-apis.service';
declare var $: any;

@Component({
  selector: 'app-form-and-gallery',
  templateUrl: './form-and-gallery.component.html',
  styleUrls: ['./form-and-gallery.component.css']
})
export class FormAndGalleryComponent implements OnInit {
  invalidForm: any;
  view_width: number;

  constructor(private initinfo: InitinfoService,
    private backend_api: BackendApisService) {
    this.invalidForm = {
      agreeTerm: false,
      type_of_visa: false,
      passport_code: false,
      date_of_arrivals: false,
      airport: false,
      email: false,
      passport_img_field: false,
      payment_feedback: false
    };
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.view_width = window.innerWidth;
  }

  ngOnInit() {
    this.initinfo.initinfo();
    this.backend_api.deleteOverdatedSession();
  }

  submittingHandle() {
    // console.log(document.getElementById("file").files);
    //** get value of each field. */
    let agreeTerm = document.getElementById("agreeTerm").innerHTML,
      type_of_visa = document.getElementById("type_of_visa").innerText.replace(/[\r\n]+/gm,', price: '),
      // passport_code = (<HTMLInputElement>document.getElementById("numOfIDs")).value,
      date_of_arrivals = (<HTMLInputElement>document.getElementById("dateOfArrivals")).value,
      airport = document.getElementById("airport").innerHTML,
      email = (<HTMLInputElement>document.getElementById("email")).value,
      passport_img_field = document.getElementById("passport_img_field").innerHTML,
      payment_feedback = document.getElementById("payment_feedback").innerHTML;

    // console.log(type_of_visa);

    //** render value (Object<boolean>) for invalidForm */
    if (agreeTerm != "Agree") {
      this.invalidForm.agreeTerm = true;
    } else {
      this.invalidForm.agreeTerm = false;
    }
    if (type_of_visa == "Type of visa: *") {
      this.invalidForm.type_of_visa = true;
    } else {
      this.invalidForm.type_of_visa = false;
    }
    if (date_of_arrivals.length == 0 || new Date(date_of_arrivals).getTime() <= new Date().getTime()) {
      this.invalidForm.date_of_arrivals = true;
    } else {
      this.invalidForm.date_of_arrivals = false;
    }
    if (airport == "Arrival airport: *") {
      this.invalidForm.airport = true;
    } else {
      this.invalidForm.airport = false;
    }
    if (email.length == 0 || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      this.invalidForm.email = true;
    } else {
      this.invalidForm.email = false;
    }
    if (passport_img_field != "file choosen") {
      this.invalidForm.passport_img_field = true;
    } else {
      this.invalidForm.passport_img_field = false;
    }
    if (payment_feedback == "Ready for payment? *") {
      this.invalidForm.payment_feedback = true;
    } else {
      this.invalidForm.payment_feedback = false;
    }
    // console.log(date_of_arrivals.length);

    //**  render value (boolean) if the form is submitable*/
    let submitable = true;
    for (let attr in this.invalidForm) {
      // console.log(attr);
      if (this.invalidForm[attr]) {
        submitable = false;
      }
    }

    //** if the form is submitable call service backend_apis */
    if (submitable) {
      // if (true) { //delete this line when complete
      let form_datas = new FormData();

      form_datas.append("type_of_visa", type_of_visa);
      // form_datas.append("passport_code", passport_code);
      form_datas.append("date_of_arrivals", date_of_arrivals);
      form_datas.append("airport", airport);
      form_datas.append("email", email);
      form_datas.append("passport_img", (<HTMLInputElement>document.getElementById("file")).files[0]);
      form_datas.append("payment_feedback", payment_feedback);
      form_datas.append("method_to_DB", "create");
      // console.log(form_datas.get("passport_img"));

      this.backend_api.add(form_datas).then((resolve) => {
        alert("Your infos were sent ");
      });
    }

  }

}
