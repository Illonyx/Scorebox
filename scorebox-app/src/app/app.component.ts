import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //Rules
  MATCH_NEEDED_SETS_WIN = 2;
  PLAYERS_NUMBER=5;
  team_red_name = "Sang Royale";
  team_blue_name = "Something";
  inEdition=true;

  //Team players
  team_red = [
	{"name":"p1", "score" : 0},{"name":"p2", "score" : 0},{"name":"p3", "score" : 0},{"name":"p4", "score" : 0},{"name":"p5", "score" : 0}
  ];
  team_blue = [
	{"name":"b1", "score" : 0},{"name":"b2", "score" : 0},{"name":"b3", "score" : 0},{"name":"b4", "score" : 0},{"name":"b5", "score" : 0}
  ];

 options = [1, 2, 3, 4, 5];
 optionSelected: any;

 onOptionSelected(event){
 	this.optionSelected=event
 }

 updateRed(value: number) { this.team_red[this.optionSelected-1].score = value; }
 updateBlue(value: number) { this.team_blue[this.optionSelected-1].score = value; }

 giveGlobalScore(teamName : string){
 	var globalscore:number = 0
 	var team = [];
 	if(teamName=="red") team=this.team_red
 	else team=this.team_blue
 	for(var i=0;i<team.length;i++){
 		if(team[i].score == this.MATCH_NEEDED_SETS_WIN) globalscore++;
 	}
 	return globalscore;
 }


}
