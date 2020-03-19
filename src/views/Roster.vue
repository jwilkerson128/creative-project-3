<template>
<div class="wrapper">
  <div v-if="team.length>0">
    <TeamList :team="team" />
  </div>
  <div>
    <PlayerList :players="players" />
  </div>
  <div v-if="team.length==5">
    <button type="button" id="play">
      <router-link to="/game">Play Game!</router-link>
    </button>
  </div>
</div>
</template>

<script>
import PlayerList from "../components/PlayerList.vue"
import TeamList from "../components/TeamList.vue"
export default {
  name: 'Roster',
  components: {
    PlayerList,
    TeamList
  },
  computed: {
    players() {
      return this.$root.$data.players;
    },
    team() {
      return this.$root.$data.team;
    }
  }
}
</script>

<style scoped>
#play {
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
}
</style>
