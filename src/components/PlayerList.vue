<template>
<div class="wrapper">
  <h1>Players Available:</h1>
  <div id="players">
    <div class="player" v-for="player in players" :key="player.id">
      <div class="info">
        <h2>{{player.name}}</h2>
        <ol class="stats">
          <li>2 pt %: {{player.shooting_two_percent}}</li>
          <li>3 pt %: {{player.shooting_three_percent}}</li>
          <li>3 pt selection %: {{player.select_three_point}}</li>
          <li>Steal/Block %: {{player.steal_block_percent}}</li>
        </ol>
      </div>
      <div class="image-container">
        <img :src="'/images/players/'+player.image">
      </div>
      <div class="selection">
        <button class="auto" @click="addToTeam(player)">Add to Team</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayerList',
  props: {
    players: Array
  },
  methods: {
    addToTeam(player) {
      this.$root.$data.addToTeam(player);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#players {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
}

#players img {
  width: inherit;
  height: inherit;
  object-position: center;
  object-fit: cover;
}

.player {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 500px;
  margin: 10px;
}

.image-container {
  width: inherit;
  height: 300px;
  object-position: center;
  object-fit: cover;
}

.stats {
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: inherit;
}

.info {
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
