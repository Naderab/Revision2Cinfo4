import { Component, OnInit } from '@angular/core';
import { Player } from '../Models/Player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPlayers!:Player[];
  playerAffected:number=0;
  playerNotAffected:number=0;
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe({
      next:(data)=>this.listPlayers=data
    })
  }
  getButtonMessage(player:Player):string{
    if(player.etat == true) {return "Désaffecter" } else return "Affecter"
  }
  updateEtat(player:Player){
    player.etat = !player.etat;
    this.playerService.updatePlayer(player).subscribe({
      next: (data)=>{
        let index=this.listPlayers.findIndex((p)=>p.id === player.id)
        this.listPlayers[index] = data
    }})
  }
  calcul(){
    this.playerAffected=0;
    this.playerNotAffected=0;
    this.listPlayers.map((p)=>{
      p.etat === true ? this.playerAffected ++ : this.playerNotAffected ++
    })
  }

}
