import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PlansService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/interfaces/plan.interface';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  planes!: Plan[];
  constructor(private planesSvc:PlansService) { }

  ngOnInit() {
    this.planesSvc.getPlans().pipe(
      tap((planes:Plan[])=>{
        this.planes = planes
        console.log(this.planes)
      }
      )
    )
    .subscribe();
  }

}
