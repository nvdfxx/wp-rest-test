<template>
  <div id="app">
        <input type="number" min="9" max="10" step="1" v-model.number="pushInfo.lvl">
        <input type="number" min="0" step="100" v-model.number="pushInfo.avgDmg">
        <input type="number" min="20" max="100" step="1" v-model.number="pushInfo.wins">
        <input type="number" min="1" step="100" v-model.number="pushInfo.battleCount">
        <button @click="pushTank(pushInfo.lvl, pushInfo.avgDmg, pushInfo.wins, pushInfo.battleCount)">PUSH</button>
        <div>{{ avgLvl }}</div>
        <div class="list">
            <ul>
                <li v-for="(tank, index) in tanks">
                    {{ tank.lvl }}, {{ tank.avgDmg }}, {{ tank.wins }}, {{ tank.battleCount }} 
                    <button @click="deleteTank(index)">Delete</button>
                </li>
            </ul>
        </div>
        <div>
            <button @click="allNames()" >All names</button>
            <ul>
                <li v-for="name in names">
                    {{ name }}
                 </li>
            </ul>
        </div>
  </div>
</template>

<script>
import  axios from 'axios';

export default {
    name: 'app',
    data () {
        return {
            info: null,
            error: null,
            names: [],
            pushInfo: {
                lvl: 10,
                avgDmg: 2500,
                wins: 55,
                battleCount: 200
            },

            tanks: [
                {
                    lvl: 10,
                    avgDmg: 2700,
                    wins: 57,
                    battleCount: 350,
                },
                {
                    lvl: 10,
                    avgDmg: 3000,
                    wins: 77,
                    battleCount: 2350,
                }
            ]
        }
    },
    mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.info = response.data))
      .catch(error =>(console.log(error)))
    },
    
    computed: {

        jsonParcer: function() {
            console.log(JSON.stringify(this.info,null,4));
            return JSON.stringify(this.info,null,4);
        },

        avgLvl: function() {
            var sumLvl = 0;
            this.tanks.forEach(function(el){
                sumLvl += el.lvl;
                console.log(sumLvl)
            });

            return sumLvl / this.tanks.length
        }
    },
    methods: {
        pushTank: function(lvl, avgDmg, wins, battleCount) {
            this.tanks.push({lvl: lvl , avgDmg: avgDmg, wins: wins, battleCount: battleCount});
            console.log(this.tanks);
        },
        deleteTank: function(index) {
            this.tanks.splice(index, 1)
        },
        allNames: function() {
            for (var i = 0; i < this.info.length; i++) {
                this.names.push(this.info[i].name)
            }
                
            
        }
    }

}
</script>

<style>

body, html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background: url(assets/bg.jpg) no-repeat center / cover;
}

</style>
