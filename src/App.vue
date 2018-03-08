<template>
  <div id="app">
    <img src="./assets/characterSheetTopImage.jpeg">
    <!--TODO break two sides of this image up, put black background behind them, will be able to expand and contract image the, to fit all screen-->
    <div id="baseStats">
      <div id='firstLine'>
        <div id=characterName>
          <!-- <p>Character name:</p> -->
          <input v-model="name" placeholder="character name">
        </div>
        <div id=playerName>
          <!-- <p>Player name:</p> -->
          <input v-model="playerName" placeholder="player name">
        </div>
      </div>
  <br>
      <div id='secondLine'>
          <div id=characterClass>
            <dropdown :data="classOptions" placeholder='Class' :width=200>
            </dropdown>
          </div>
          <div id=characterLevel>
            <!-- <p>Character level:</p> -->
            <input v-model='level' placeholder="character level">
          </div>
          <div id=ECL>
            <p>ECL: {{ECL}}</p>
          </div>
          <div id=characterRace>
            <!-- <p>Character race:</p> -->
            <dropdown :data="raceOptions" placeholder='Race' :width=110 :cbChanged='changed'>
            </dropdown>
          </div>
          <div id=size>
            <p>Size: {{size}}</p>
          </div>
          <div id=gender>
            <!-- <p>Gender:</p> -->
            <input v-model='gender' placeholder="character gender">
          </div>
      </div>
  <br>
    <div id='thirdLine'>
        <div id=characterAlignment>
          <!-- <p>Character alignment:</p> -->
          <dropdown :data="alignmentOptions" placeholder='Alignment' :width=155>
          </dropdown>
        </div>
        <div id=characterReligion>
          <!-- <p>Character religion/ patron diety:</p> -->
          <dropdown :data="religionOptions" placeholder='Religion' :width=200>
          </dropdown>
        </div>
        <div id=height>
          <!-- <p>Height:</p> -->
          <input v-model='height' placeholder=" height">
        </div>
        <div id=weight>
          <!-- <p>Weight:</p> -->
          <input v-model='weight' placeholder="weight">
        </div>
        <div id=looks>
          <!-- <p>Looks:</p> -->
          <input v-model='looks' placeholder="character looks">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const _ = require('underscore');
const d20class = require('../resources/d20class.js').default.d20class;
const race = require('../resources/race.js').default.race;
const deity = require('../resources/deity.js').default.deity
const characterMaster = require('../resources/characterMaster').default.characterMaster;

import HelloWorld from './components/HelloWorld'
import { checkServerIdentity } from 'tls';

var d20classArray = objToArr(d20class);
var raceArray = objToArr(race);
var deityArray = objToArr(deity);
function objToArr(data) {
  var arr = [];
  _.each(data, (d20class, i) => {
    arr.push({
      label: d20class.name,
      value: i
    })
  })
  return arr
}

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'A character creator, created for your pleasure',
      name: '',
      playerName: '',
      level: '',
      size: '',
      gender: '',
      ECL: 1,
      height: '',
      weight: '',
      looks: '',
      characterClass: '',
      raceOptions: raceArray,
      classOptions: d20classArray,
      alignmentOptions: [{
                  label: 'Chaotic Evil',
                  value: 1
                }, {
                  label: 'Chaotic Good',
                  value: 2
                }, {
                  label: 'Chaotic Neutral',
                  value: 3
                }, {
                  label: 'True Neutral',
                  value: 4
                }],
      religionOptions: deityArray
    }
  },
  methods: {
    changed(selected) {
      var selectedRace = selected[0].label;

      if(race[name].size === 0) {
        this.size = 'fine';
      } else if (race[name].size === 1) {
        this.size = 'tiny';
      } else if (race[name].size === 3) {
        this.size = 'small';
      } else if (race[name].size === 4) {
        this.size = 'medium';
      } else if (race[name].size === 5) {
        this.size = 'large';
      } else if (race[name].size === 6) {
        this.size = 'huge';
      } else if (race[name].size === 7) {
        this.size = 'gargantuan';
      } else {
        this.size = 'colossal'
      }
      } 

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Aria10l, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* width: 864px; */
  width: 880px;
  margin-top: 10px;
  -webkit-box-flex:1;
  -webkit-flex:1;
  -ms-flex:1;
  flex:1;
}

#baseStats {
  margin-top: 15px;
  display: grid;
}

#firstLine {
  display:grid;
  grid-template-columns: 35% 60%;
}
#characterName {  margin-bottom: auto;
  border-bottom: 1px solid black;
  margin-right: 20px;
  height: 20px;
  font-size: 25px;
}
#playerName {
  border-bottom: 1px solid black;
}  
#firstLine input {
  width: 100%;
  display:grid;
  border: none;
}

#secondLine {
  display: grid;
  grid-template-columns: 25% 15% 15% 15% 15% 15%;
}
#secondLine input {
  padding: 5px;
  width: 100% ;
  display:grid;
  border: none;
}
#characterClass {
  min-width:40%;
  border-bottom: 1px solid black;
  margin-right: 20px;
}
#characterLevel {
  min-width:40%;
  border-bottom: 1px solid black;
  margin-right: 20px;
}
#ECL {
  border-bottom: 1px solid black;
  margin-right: 20px;
  font-size: 12px;
}
#characterRace {
  border-bottom: 1px solid black;
  margin-right: 20px;
}
#size {
  border-bottom: 1px solid black;
  margin-right: 20px;
  font-size: 12px;
}
#gender {
  border-bottom: 1px solid black;
  margin-right: 20px;
}

#thirdLine {
  display: grid;
  grid-template-columns: 20% 25% 10% 10% 35%;
}

#thirdLine input {
  padding: 5px;
  width: 100% ;
  display:grid;
  border: none;
}

#characterAlignment {
  border-bottom: 1px solid black;
  margin-right: 20px;
}

#characterReligion {
  border-bottom: 1px solid black;
  margin-right: 20px;
}

#height {
  border-bottom: 1px solid black;
  margin-right: 20px;
}
#weight {
  border-bottom: 1px solid black;
  margin-right: 20px;
}
#looks {
  border-bottom: 1px solid black;
  margin-right: 20px;
}

</style>


