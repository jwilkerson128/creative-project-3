<template>
<div class="wrapper">
  <h1>Your Team:</h1>
  <div id="team">
    <div class="player" v-for="player in team" :key="player.id">
      <div class="info">
        <h2>{{player.name}}</h2>
      </div>
      <div class="image-container">
        <img :src="'/images/players/'+player.image">
      </div>
      <div class="remove">
        <button class="auto" @click="removeFromTeam(player)">Remove from Team</button>
      </div>
    </div>
    <div v-if="team.length==5">
      <button type="button" id="play">
        <router-link to="/game">Play Game!</router-link>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TeamList',
  props: {
    team: Array
  },
  methods: {
    removeFromTeam(player) {
      this.$root.$data.removeFromTeam(player);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#play {
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
}

#team {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 5px solid #DCE997;
  margin: 0px 10px;
}

#team img {
  width: inherit;
  height: inherit;
  object-position: center;
  object-fit: cover;
}

.info {
  background-color: #A497E9;
  padding: 3px;
}

.player {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 110px;
  height: 210px;
  margin: 10px;
}

.image-container {
  width: inherit;
  height: 110px;
  object-position: center;
  object-fit: cover;
}

h2 {
  diplay: flex;
  font-size: 15px;
  height: 40px;
  align-self: center;
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
