import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LaunchesService } from 'src/app/services/launches.service';
import { Launch, query } from 'src/app/model';
@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {

  launches!: any[]
  totalLaunches!: number
  hasNextPage!: boolean
  hasPrevPage!: boolean
  searchForm!: FormControl
  start!: FormControl
  end!: FormControl
  isChecked = false

  options = {
    offset: 0,
    limit: 20,
    sort: 'date_utc'
  }

  query: query = {
    name: '',
    success: true,
    date_utc: {
      $gte: '',
      $lte: ''
    }
  }

  constructor(private launchesService: LaunchesService) { }

  ngOnInit(): void {
    this.getLaunches()
    this.searchForm = new FormControl('')
    this.start = new FormControl('')
    this.end = new FormControl('')
    delete this.query.name
    delete this.query.success
    delete this.query.date_utc

  }

  getLaunches(query?: any) {
    this.launchesService.getLaunches(this.options, query).subscribe(
      data => {
        this.launches = data.docs
        this.totalLaunches = data.totalDocs
        this.hasNextPage = data.hasNextPage
        this.hasPrevPage = data.hasPrevPage
      },
      error => console.log(error)
    )
  }

  loadMore() {
    this.options.offset += 20
    this.getLaunches(this.query)
  }

  loadLess() {
    this.options.offset -= 20
    this.getLaunches(this.query)
  }

  search() {
    if (this.searchForm.value) {
      this.query.name = this.searchForm.value
    } else {
      delete this.query.name
    }

    if (this.isChecked) {
      this.query.success = true
    } else {
      delete this.query.success
    }

    if (this.start.value && this.end.value) {
      this.query.date_utc!.$gte = new Date(this.start.value).toISOString()
      this.query.date_utc!.$lte = new Date(this.end.value).toISOString()
    } else {
      delete this.query.date_utc
    }

    this.options.offset = 0
    this.getLaunches(this.query)
  }

}
