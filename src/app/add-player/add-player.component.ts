import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../Models/Player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:Player=new Player();
  
  constructor(private playerService:PlayerService,private router:Router) { }

  ngOnInit(): void {
  }

  ajouterPlayer(){
    this.playerService.addPlayer(this.player).subscribe({
      next:()=>this.router.navigateByUrl('/list')
    })
  }

  


}
