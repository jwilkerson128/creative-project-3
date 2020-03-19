<template>
<div class="wrapper">
  <h1>{{winnerMessage}}</h1>
  <form>
    <label for="overall">Overall</label>
    <input type="radio" id="overall" value="overall" v-model="statsSelected">
    <br>
    <label for="team1">Player's Team Stats</label>
    <input type="radio" id="team1" value="team" v-model="statsSelected">
    <br>
    <label for="team2">Computer's Team Stats</label>
    <input type="radio" id="team2" value="otherTeam" v-model="statsSelected">
  </form>
  <div class="table-container" v-if="statsSelected==='overall'">
    <table>
      <tr>
        <th></th>
        <th>Player's Team</th>
        <th>Computer's Team</th>
      </tr>
      <tr>
        <th>Points</th>
        <td>{{teamPoints}}</td>
        <td>{{otherTeamPoints}}</td>
      </tr>
      <tr>
        <th>2 pt Shot Attempts</th>
        <td>{{team2ptShots}}</td>
        <td>{{otherTeam2ptShots}}</td>
      </tr>
      <tr>
        <th>2 pt Shots Made</th>
        <td>{{team2ptMade}}</td>
        <td>{{otherTeam2ptMade}}</td>
      </tr>
      <tr>
        <th>2 pt %</th>
        <td>{{team2ptPercent}}%</td>
        <td>{{otherTeam2ptPercent}}%</td>
      </tr>
      <tr>
        <th>3 pt Shot Attempts</th>
        <td>{{team3ptShots}}</td>
        <td>{{otherTeam3ptShots}}</td>
      </tr>
      <tr>
        <th>3 pt Shots Made</th>
        <td>{{team3ptMade}}</td>
        <td>{{otherTeam3ptMade}}</td>
      </tr>
      <tr>
        <th>3 pt %</th>
        <td>{{team3ptPercent}}%</td>
        <td>{{otherTeam3ptPercent}}%</td>
      </tr>
      <tr>
        <th>Steals/Blocks</th>
        <td>{{teamStealBlocks}}</td>
        <td>{{otherTeamStealBlocks}}</td>
      </tr>
    </table>
  </div>
  <div class="table-container" v-if="statsSelected!='overall'">
    <table>
      <tr>
        <th></th>
        <th v-for="player in teamSelected" :key="player.id">
          {{player.name}}
        </th>
      </tr>
      <tr>
        <th>Points</th>
        <td v-for="player in teamSelected" :key="player.id">
          {{player.made2*2+player.made3*3}}
        </td>
      </tr>
      <tr>
        <th>2 pt Shot Attempts</th>
        <td v-for="player in teamSelected" :key="player.id">
          {{player.attempts2}}
        </td>
      </tr>
      <tr>
        <th>2 pt Shots Made</th>
        <td v-for="player in teamSelected" :key="player.id">
          {{player.made2}}
        </td>
      </tr>
      <tr>
        <th>2 pt %</th>
        <td v-for="player in teamSelected" :key="player.id">
          {{(player.made2/player.attempts2*100||0).toFixed(1)}}%
        </td>
      </tr>
      <tr>
        <th>3 pt Shot Attempts</th>
        <td v-for="player in teamSelected" :key="player.id">
          {{player.attempts3}}
        </td>
      </tr>
      <tr>
        <th>3 pt Shots Made</th>
        <td v-for="player in teamSelected" :key="player.id">
          {{player.made3}}
        </td>
      </tr>
      <tr>
        <th>3 pt %</th>
        <td v-for="player in teamSelected" :key="player.id">
          {{(player.made3/player.attempts3*100||0).toFixed(1)}}%
        </td>
      </tr>
      <tr>
        <th>Steals/Blocks</th>
        <td v-for="player in teamSelected" :key="player.id">
          {{player.stealBlocks}}
        </td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'GameResults',
  props: {
    team: Array
  },
  data() {
    return {
      otherTeam: [],
      statsSelected: "overall"
    }
  },
  computed: {
    teamSelected() {
      if (this.statsSelected === "overall") return null;
      else if (this.statsSelected === "team") return this.team;
      else return this.otherTeam;
    },
    team2ptShots() {
      return this.team.map(x => x.attempts2).reduce((x, y) => x + y)
    },
    otherTeam2ptShots() {
      return this.otherTeam.map(x => x.attempts2).reduce((x, y) => x + y)
    },
    team3ptShots() {
      return this.team.map(x => x.attempts3).reduce((x, y) => x + y)
    },
    otherTeam3ptShots() {
      return this.otherTeam.map(x => x.attempts3).reduce((x, y) => x + y)
    },
    team2ptMade() {
      return this.team.map(x => x.made2).reduce((x, y) => x + y)
    },
    otherTeam2ptMade() {
      return this.otherTeam.map(x => x.made2).reduce((x, y) => x + y)
    },
    team3ptMade() {
      return this.team.map(x => x.made3).reduce((x, y) => x + y)
    },
    otherTeam3ptMade() {
      return this.otherTeam.map(x => x.made3).reduce((x, y) => x + y)
    },
    teamPoints() {
      return this.team2ptMade * 2 + this.team3ptMade * 3
    },
    otherTeamPoints() {
      return this.otherTeam2ptMade * 2 + this.otherTeam3ptMade * 3
    },
    team2ptPercent() {
      return (this.team2ptMade / this.team2ptShots * 100 || 0).toFixed(1)
    },
    otherTeam2ptPercent() {
      return (this.otherTeam2ptMade / this.otherTeam2ptShots * 100 || 0).toFixed(1)
    },
    team3ptPercent() {
      return (this.team3ptMade / this.team3ptShots * 100 || 0).toFixed(1)
    },
    otherTeam3ptPercent() {
      return (this.otherTeam3ptMade / this.otherTeam3ptShots * 100 || 0).toFixed(1)
    },
    teamStealBlocks() {
      return this.team.map(x => x.stealBlocks).reduce((x, y) => x + y)
    },
    otherTeamStealBlocks() {
      return this.otherTeam.map(x => x.stealBlocks).reduce((x, y) => x + y)
    },
    winnerMessage() {
      if (this.teamPoints > this.otherTeamPoints) {
        return "Player Wins!"
      } else if (this.teamPoints < this.otherTeamPoints) {
        return "Computer Wins!"
      } else {
        return "Tie!"
      }
    }
  },
  methods: {
    simulateGame() {
      this.chooseOtherTeam();
      for (let i = 0; i < 5; i++) {
        this.team[i]["attempts2"] = 0;
        this.team[i]["attempts3"] = 0;
        this.team[i]["made2"] = 0;
        this.team[i]["made3"] = 0;
        this.team[i]["stealBlocks"] = 0;
        this.otherTeam[i]["attempts2"] = 0;
        this.otherTeam[i]["attempts3"] = 0;
        this.otherTeam[i]["made2"] = 0;
        this.otherTeam[i]["made3"] = 0;
        this.otherTeam[i]["stealBlocks"] = 0;
      }
      for (let i = 0; i < 50; i++) {
        this.takeTurn("player");
        this.takeTurn("computer");
      }
    },
    chooseOtherTeam() {
      while (this.otherTeam.length < 5) {
        let playerID = Math.floor(Math.random() * 40 + 1);
        if (!this.team.map(x => x.id).includes(playerID) && !this.otherTeam.map(x => x.id).includes(playerID)) {
          this.otherTeam.push(this.$root.$data.players[playerID - 1]);
        }
      }
    },
    takeTurn(selected) {
      let offender = null;
      let defender = null;
      if (selected == "player") {
        offender = this.team[this.choosePlayerIndex()];
        defender = this.otherTeam[this.choosePlayerIndex()];
      } else {
        offender = this.otherTeam[this.choosePlayerIndex()];
        defender = this.team[this.choosePlayerIndex()];
      }

      let stealVal = this.choosePercentValue();
      if (stealVal < defender.steal_block_percent) {
        defender.stealBlocks++;
      } else {
        let shotSelectVal = this.choosePercentValue();
        let shotPercentVal = this.choosePercentValue();
        if (shotSelectVal < offender.select_three_point) {
          offender.attempts3++;
          if (shotPercentVal < offender.shooting_three_percent) {
            offender.made3++;
          }
        } else {
          offender.attempts2++;
          if (shotPercentVal < offender.shooting_two_percent) {
            offender.made2++;
          }
        }
      }
    },
    choosePlayerIndex() {
      return Math.floor(Math.random() * 5);
    },
    choosePercentValue() {
      return Math.floor(Math.random() * 100);
    }
  },
  beforeMount() {
    this.simulateGame();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  margin: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
td,
th {
  border: 1px solid black;
  padding: 10px;
}

th {
  background-color: #A497E9;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
