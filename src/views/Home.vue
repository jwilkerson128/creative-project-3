<template>
<div class="home">
  <h1>Welcome to the Zoo Basketball Group!</h1>
  <p> Even though COVID-19 has shut down the NBA, March Madness, and even high school
    basketball, there is one basketball stronghold left: Zoo Basketball! The critters
    are excited to face off. It's up to you to choose the strongest team you can to
    win the game. </p>
  <p> All you have to do is choose 5 players to make up your team. The computer will
    also choose 5 characters to create a team to face yours. After players are
    selected, choose "Play Game!" and the computer will run a simulation of the match.
    You will be taken to the results screen and can then see how your team did.</p>
  <button type="button">
    <router-link to="/roster">Create Roster</router-link>
  </button>

</div>
</template>

<script>
</script>

<style scoped>
.home {
  padding: 10px;
}

p {
  text-align: left;
}
</style>
