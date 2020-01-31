import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class InitinfoService {

  constructor() { }

  initinfo() {
    if ($('.info_dropdown').length) {
      var dds = $('.info_dropdown');
      dds.each(function () {
        var dd = $(this);
        if (dd.find('ul > li').length) {
          var ddItems = dd.find('ul > li');

          ddItems.each(function () {
            var ddItem = $(this);
            ddItem.on('click', function () {
              // console.log(ddItem.prop('tagName'));
              dd.find('span').html(ddItem.html());
            });

            // if (ddItem.prop('tagName') != "INPUT") {
            // 	ddItem.on('click', function () {
            // 		dd.find('span').text(ddItem.text());
            // 	});
            // } else {
            // 	ddItem.on('click', function (event) {
            // 		// event.stopPropagation();
            // 	});

            // }
          });
          dd.on('click', function (event) {
            if (event.target.tagName != "INPUT") {
              dd.toggleClass('active');
              // console.log(event.target.tagName != "INPUT");
            } else {
              if (event.target.type != 'file') {
                $(event.target).on('focusout', () => {
                  dd.find('span').text(event.target.value);
                  console.log(event.target);
                  dd.toggleClass('active');
                });
              } else {
                $(event.target).on('change', () => {
                  if (event.target.value) dd.find('span').text('file choosen');
                  console.log(event.target);
                  dd.toggleClass('active');
                });
              }
              // console.log(event.target.value);
            }
          });
        }
      });
    }
  }
}
