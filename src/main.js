import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
  players: mock,
  team: [],
  teamFull: false,
  addToTeam(player) {
    if (this.team.length < 5) {
      if (!this.team.map(x => x.id).includes(player.id)) {
        this.team.push(player);
      }
      if (this.team.length === 5) {
        this.teamFull = true;
      }
    }
  },
  removeFromTeam(player) {
    let index = -1;
    for (let i = 0; i < this.team.length; i++) {
      if (this.team[i].id === player.id) {
        index = i;
        break;
      }
    }
    this.team.splice(index, 1);
    if (this.team.length < 5) {
      this.teamFull = false;
    }
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')