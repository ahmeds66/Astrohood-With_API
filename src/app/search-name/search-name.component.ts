import { Component, OnInit } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { RocketService } from '../Service/rocket.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.css']
})
export class SearchNameComponent implements OnInit {
  rockets!: Rockets[];
  allRockets!: Rockets[];
  searchTerm!: string;

  constructor(public authService: AuthService,
              private rocketService: RocketService) { }

  ngOnInit(): void {
    this.rocketService.listRockets().subscribe( rockets => {
      this.rockets = rockets;
      this.allRockets = rockets;
    });
  }
  deleteRocket(r: Rockets)
{
  //console.log(r);
  let conf = confirm("You Confirme you like to delete this element ?");
  if(conf)
    this.rocketService.deleteRocket(r.idRocket!).subscribe( () => {
      console.log("Rocket deleted");
      this.deleteRocketFromList(r);
}
);
}
deleteRocketFromList(r: Rockets){
  this.rockets.forEach((cur, index) => {
    if(cur.idRocket === r.idRocket){
      this.rockets.splice(index,1);
    }
    });
  }
onKeyUp(filtertext: string) {
  this.rockets = this.allRockets.filter((r => r.name!.toLowerCase().indexOf(filtertext.toLowerCase()) !== -1));
}
}
