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
            <dropdown :data="classOptions">
            </dropdown>
          </div>
          <div id=characterLevel>
            <p>Character level:</p>
            <input v-model='level' placeholder="character level">
          </div>
          <div id=ECL>
            <p>ECL: {{ECL}}</p>
          </div>
          <div id=characterRace>
            <p>Character race:</p>
            <dropdown :data="raceOptions">
            </dropdown>
          </div>


          <div id=size>
            <p>Size: {{ size}}</p>
          </div>
          <div id=gender>
            <p>Gender:</p>
            <input v-model='gender' placeholder="character gender">
          </div>
      </div>
  <br>
    <div id='thirdLine'>
        <div id=characterAlignment>
          <p>Character alignment:</p>
          <dropdown :data="alignmentOptions">
          </dropdown>
        </div>
        <div id=characterReligion>
          <p>Character religion/ patron diety:</p>
          <dropdown :data="religionOptions">
          </dropdown>
        </div>
        <div id=height>
          <p>Height:</p>
          <input v-model='height' placeholder="character height">
        </div>
        <div id=weight>
          <p>Weight:</p>
          <input v-model='weight' placeholder="character weight">
        </div>
        <div id=looks>
          <p>Looks:</p>
          <input v-model='looks' placeholder="character looks">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const _ = require('underscore');
const d20class = require('../resources/d20class.js');
const race = require('../resources/race.js');
import HelloWorld from './components/HelloWorld'

var d20classArray = objToArr(d20class.default.d20class)
var raceArray = objToArr(race.default.race)
function objToArr(data) {
  var arr = [];
  _.each(data, (d20class, i) => {
    arr.push({
      label: d20class.name,
      value: i
    })
  })
  // console.log(arr)
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
      religionOptions: [{
                  label: 'The jews',
                  value: 1
                }, {
                  label: 'Muslims',
                  value: 2
                }, {
                  label: 'Roman Catholic',
                  value: 3
                }, {
                  label: 'jews',
                  value: 4
                }, {
                  label: '(((them)))',
                  value: 5
                }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  -webkit-box-flex:1;
  -webkit-flex:1;
  -ms-flex:1;
  flex:1;
}
#baseStats {
  /* display: flex; */
  /* align-items: columns; */
  /* margin-left: auto; */
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
}
#firstLine {
  display: flex;
  flex-grow: 1;
  min-width: 25%;
}
#secondLine {
  display: flex;
  flex-grow: 1;
  min-width: 15%;
}
#thirdLine {
  display: flex;
}
#characterName {
  min-width:40%;
  border-bottom: 1px solid black;
  margin-right: 20px;
  height: 20px;
  font-size: 25px;
}
#playerName {
  min-width:50%;
  padding-right: 20px;
  border-bottom: 1px solid black;
}
#firstLine input {
  float: left;
  width: 90% ;
  display:flex;
  border: none;
}
#secondLine input {
  float: left;
  width: 90% ;
  display:flex;
  border: none;
}
#firstLine input {
  float: left;
  width: 90% ;
  display:flex;
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
</style>


