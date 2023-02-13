import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../Models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  apiUrl:string="http://localhost:3000/players"
  constructor(private http:HttpClient) { }

  getPlayers(){
    return this.http.get<Player[]>(this.apiUrl)
  }
  addPlayer(player:Player){
    return this.http.post(this.apiUrl,player)
  }
  updatePlayer(player:Player){
    return this.http.put<Player>(this.apiUrl+"/"+player.id,player)
  }
}
