import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Launch } from 'src/app/model';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-launches-details',
  templateUrl: './launches-details.component.html',
  styleUrls: ['./launches-details.component.scss']
})
export class LaunchesDetailsComponent implements OnInit {

  slideIndex = 0
  photoNumber = 1

  launch!: Launch

  id!: string
  date!: string
  success!: string
  rocketId!: string
  rocket!: any
  launchpadId!: string;
  launchpad!: any;

  constructor(private launchesService: LaunchesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getLaunches()
  }

  getLaunches() {
    this.launchesService.getLaunch(this.id).subscribe(
      data => {
        this.launch = data
        this.date = new Date(this.launch.date_utc).toISOString().slice(0,10)
        this.success = this.launch.success ? "Udany" : "Nieudany"
        this.rocketId = this.launch.rocket
        this.launchpadId = this.launch.launchpad
      },
      error => console.log(error),
      () => {
        this.getRocket()
        this.getLaunchpad()
      }
    )
  }

  getRocket() {
    this.launchesService.getRocket(this.rocketId).subscribe(
      data => {
        this.rocket = data
      },
      error => console.log(error)
    )
  }

  getLaunchpad() {
    this.launchesService.getLaunchpad(this.launchpadId).subscribe(
      data => {
        this.launchpad = data
      },
      error => console.log(error)
    )
  }

  ngAfterViewInit() {
    setTimeout(() => {document.querySelectorAll(".carousel-item")[0].classList.add('active')},200)
  }

  slideRight() {
    document.querySelectorAll(".carousel-item").forEach(a => a.classList.remove('active'))

    if(this.slideIndex < this.launch.links.flickr.original.length-1) {
      this.slideIndex ++
    }
    else {
      this.slideIndex = 0
    }

    document.querySelectorAll(".carousel-item")[this.slideIndex].classList.add('active')
    this.photoNumber = this.slideIndex + 1
  }

  slideLeft() {
    document.querySelectorAll(".carousel-item").forEach(a => a.classList.remove('active'))

    if(this.slideIndex > 0) {
      this.slideIndex --
    }
    else {
      this.slideIndex = 0
    }

    document.querySelectorAll(".carousel-item")[this.slideIndex].classList.add('active')
    this.photoNumber = this.slideIndex + 1
  }

  show(i: number) {
    document.querySelectorAll(".carousel-item").forEach(a => a.classList.remove('active'))
    document.querySelectorAll(".carousel-item")[i].classList.add('active')
    this.photoNumber = i + 1
  }
}
