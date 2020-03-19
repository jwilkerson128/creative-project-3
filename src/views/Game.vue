<template>
<div class="wrapper">
  <div v-if="team.length==5">
    <GameResults :team="team" />
  </div>
  <div v-else>
    <p>You must choose a team of 5 players to have a game.</p>
    <button type="button" id="roster">
      <router-link to="/roster">Create Roster</router-link>
    </button>
  </div>
</div>
</template>

<script>
import GameResults from "../components/GameResults.vue"
export default {
  name: 'Game',
  components: {
    GameResults,
  },
  computed: {
    team() {
      return this.$root.$data.team;
    }
  }
}
</script>

<style scoped>
#roster {
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
}
</style>
