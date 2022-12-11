//import { constractor } from './../model/constractor.model';
import { Component, OnInit } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { RocketService } from '../Service/rocket.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-rocket',
  templateUrl: './update-rocket.component.html',
  styles: []
})
export class UpdateRocketComponent implements OnInit {
currentRocket = new Rockets();
//constractor!: constractor[];
updateConstId!: number;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private rocketService: RocketService) { }
updateRocket(){
 // this.currentRocket.constractor = this.rocketService.consultConst(this.updateConstId);
  //this.rocketService.updateRocket(this.currentRocket);
  //this.router.navigate(['rockets']);
  this.rocketService.updateRocket(this.currentRocket).subscribe( r => {
    this.router.navigate(['rockets']);
  },(error) => {
    alert ("Error updating the rocket");
  }
  );
}
  ngOnInit(): void {
    //this.constractor = this.rocketService.listConst();
    //this.currentRocket=
    //this.currentRocket=this.rocketService.consultRocket(this.activatedRoute.snapshot.params['id']);
    //this.updateConstId!= this.currentRocket.constractor?.idC;
    //console
    this.rocketService.consultRocket(this.activatedRoute.snapshot.params['id']).subscribe( r => {
      console.log(r);
      this.currentRocket = r;
    }
    );
  }

}
