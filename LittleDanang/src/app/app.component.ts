import { Component, OnInit } from '@angular/core';
import { SetIntervalBgImgsService } from './services/set-interval-bg-imgs.service';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LittleDanang';

  // constructor(private setIntervalBgImg: SetIntervalBgImgsService) { }
  constructor(
    private setIntervalBgImg: SetIntervalBgImgsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setIntervalBgImg.setIntervalBgImgs();
  }
}
