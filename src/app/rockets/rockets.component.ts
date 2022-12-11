import { Component, OnInit } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { AuthService } from '../Service/auth.service';
import { RocketService } from '../Service/rocket.service';
//import { constractor } from '../model/constractor.model';
@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets?:Rockets[];
  constructor(private rocketService:RocketService,
              public authService : AuthService) { 
  //this.rockets=rocketService.listRockets();
}
/*deleteRocket(r: Rockets)
{
  //console.log(r);
  let conf = confirm("You Confirme you like to delete this element ?");
  if(conf)
    //this.rocketService.deleteRocket(r);
}*/

  ngOnInit(): void {
    this.rocketService.listRockets().subscribe( rocks => {
      console.log(rocks);
      this.rockets = rocks;
    });
  }

  deleteRocket(r: Rockets){
    let conf = confirm("You Confirme you like to delete this element ?");
    if(conf)
      this.rocketService.deleteRocket(r.idRocket!).subscribe( () => {
        console.log("Rocket deleted");
        this.deleteRocketFromList(r);
      }
      );  
  }
  deleteRocketFromList(r: Rockets){
    this.rockets?.forEach((cur, index) => {
      if(cur.idRocket === cur.idRocket){
        this.rockets?.splice(index,1);
      }
      });
    }

}
