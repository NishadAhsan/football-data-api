import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FootballDataService {
	baseURL = 'http://api.football-data.org/v1/';
	reqOpts: RequestOptions;
  constructor(@Inject('config') private token: string, private http: Http) { 
  	console.log(token);
    	this.reqOpts = new RequestOptions({
  		headers: new Headers({
  		'X-Auth-Token': token,
  		'X-Response-Control': 'full'
  		})
  	});
  }

  getLeagues(season: string = ''){
  	return this.http.get(this.baseURL + 'competitions/?season=' + season, this.reqOpts);
  }

  getLeague(leagueID: number){
  	return this.http.get(this.baseURL + 'competitions/' + leagueID, this.reqOpts);
  }

  getLeagueTable(leagueID: number){
  	return this.http.get(this.baseURL + 'competitions/' + leagueID + '/leagueTable', this.reqOpts);
  }

  getLeagueFixtures(
  	leagueID: number,
  	timeFrame: string = '',
  	matchday: string = ''){
  	return this.http.get(
  		this.baseURL + `competitions/${leagueID}/fixtures/?timeFrame=${timeFrame}&matchday=${matchday}`,
  		this.reqOpts);
  }

  getTeams(leagueID: number){
  	return this.http.get(this.baseURL + `competitions/${leagueID}/teams`, this.reqOpts);
  }

  getTeam(teamID: number){
  	return this.http.get(this.baseURL + `teams/${teamID}`, this.reqOpts);
  }

  getPlayers(teamID: number){
  	return this.http.get(this.baseURL + `teams/${teamID}/players`, this.reqOpts);
  }

  getTeamFixtures(
		  	teamID: number, 
		  	timeFrame: string = '',
		  	venue: string = '',
		  	season: string = ''
		  	)
  	{
  		return this.http.get(
  			this.baseURL + `teams/${teamID}/fixtures/?season=${season}&timeFrame=${timeFrame}&venue=${venue}`,
  			this.reqOpts);
  	}

  getFixtures(timeFrame: string = ''){
  	return this.http.get(this.baseURL + `fixtures/?timeFrame=${timeFrame}`, this.reqOpts);
  }

  getFixture(fixtureID: number, head2head: string = ''){
  	return this.http.get(this.baseURL + `fixtures/${fixtureID}/?head2head=${head2head}`, 
  				this.reqOpts);
  }

}
