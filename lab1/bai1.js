const game ={
    team1: 'Bayer Munich',
    team2: 'Borrussia Dortmund',
    players:[
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'gorezka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'hummels',
            'akanji',
            'hakimi',
            'weigl',
            'witsel',
            'hazard',
            'brandt',
            'sancho',
            'gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby' , 'Lewandowski' ,'hummels'], 
    date: 'Nov 9th, 2037',
    odds:{
        team1: 11.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const[gk, ...fieldPlayers] =  players1;
console.log(gk, fieldPlayers);

//3
const allPlayers= [...players1,...players2];
console.log(allPlayers);

//4
const playersFinal = [...players1, 'Thiago' ,'Coutinho', 'Perisctic'];
console.log(playersFinal);
//5
const{
    odds: {team1, x: draw, team2}, 
} = game;
console.log(team1, draw, team2);

//6 
const prinGoals = function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);
    prinGoals(...game.scored);
};

//7 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
