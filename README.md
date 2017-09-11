# Football-data.org for Angular 2/4

This is a Angular 2/4 library for [Football-data.org](http://www.football-data.org)

Get your API Key [here](http://www.football-data.org/client/register)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

What things you need to install the software and how to install them

```
npm
```

### Installing

A step by step series of examples that tell you have to get a development env running

Just install the library with npm

```
npm install --save football-data
```



## Using

```
import { FootballDataModule } from 'football-data';

export function footballDataConfig(): string{
	return 'Your API_KEY here';
}
```

Add this line in the imports array
```
FootballDataModule.forRoot(footballDataConfig);
```
Then, in your service/component
```
import { FootballDataService } from 'football-data';
```

We use [SemVer](http://semver.org/) for versioning.

###API

```
getLeagues(season?)
getLeague(leagueID)
getLeagueTable(leagueID)
getLeagueFixtures(leagueID, timeFrame?, matchday?)

getTeams(leagueID)
getTeam(teamID)
getPlayers(teamID)

getTeamFixtures(teamID, timeFrame?,	venue?, season?)
getFixtures(timeFrame?)
getFixture(fixtureID, head2head?)
```

## Authors

* **Nazmul Ahsan** - *Initial work* - [nishad0963](https://github.com/nishadahsan)