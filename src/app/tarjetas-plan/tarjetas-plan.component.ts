import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Plan } from '../interfaces/plan.interface';
import { PlansService } from '../services/plan.service';

@Component({
  selector: 'app-tarjetas-plan',
  templateUrl: './tarjetas-plan.component.html',
  styleUrls: ['./tarjetas-plan.component.scss']
})
export class TarjetasPlanComponent implements OnInit {
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
