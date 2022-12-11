import { Component, OnInit } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { RocketService } from '../Service/rocket.service';
//
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-rocket',
  templateUrl: './add-rocket.component.html',
  styleUrls: ['./add-rocket.component.css']
})
export class AddRocketComponent implements OnInit {
newrocket = new Rockets();
//const!: constractor[];
newIdC!: number;
//newconst!: constractor;

  constructor(private rocketService:RocketService,
              private router : Router ) { }
  
  ngOnInit(): void {
    //this.const = this.rocketService.listConst();
  }
  addRocket(){
    //console.log(this.newrocket);
    //this.newconst =
    //this.rocketService.consultConst(this.newIdC);
    //this.newrocket.constractor = this.newconst;
    //this.rocketService.addRocket(this.newrocket);
    //this.router.navigate(['/rockets']);

    this.rocketService.addRocket(this.newrocket).subscribe( r => {
      console.log(r);
    }
    );
    this.router.navigate(['rockets']);
  }
}
