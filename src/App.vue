<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="baseStats">
      <div id=characterName>
        <p>Character name:</p>
        <input v-model="name" placeholder="character name">
      </div>
      <div id=characterRace>
        <p>Character race:</p>
        <dropdown :data="raceOptions" :cbChanged="changed">
        </dropdown>
      </div>
      <div id=characterClass>
        <p>Character class:</p>
        <dropdown :data="classOptions" :cbChanged="changed">
        </dropdown>
      </div>
      <div id=characterLevel>
        <p>Character level:</p>
        <input v-model='level' placeholder="character level">
      </div>
      <div id=ECL>
        <p>ECL: {{ECL}}</p>
      </div>
      <div id=size>
        <p>Size: {{ size}}</p>
      </div>
      <div id=gender>
        <p>Gender:</p>
        <input v-model='gender' placeholder="character gender">
      </div>
      <div id=characterAlignment>
        <p>Character alignment:</p>
        <dropdown :data="alignmentOptions" :cbChanged="changed">
        </dropdown>
      </div>
      <div id=characterReligion>
        <p>Character religion/ patron diety:</p>
        <dropdown :data="religionOptions" :cbChanged="changed">
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
      <div id=looks>weight
        <p>Looks:</p>
        <input v-model='looks' placeholder="character looks">
      </div>
    </div>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'A character creator, created for your pleasure',
      name: 'Butt Stallion',
      level: '',
      size: 'large',
      gender: '',
      ECL: 1,
      height: '',
      weight: '',
      looks: '',
      characterClass: 'Barbarian',
      raceOptions: [{
                  label: 'Human',
                  value: 1
                }, {
                  label: 'Half-Orc',
                  value: 2
                }, {
                  label: 'Elf',
                  value: 3
                }, {
                  label: 'Half-Elf',
                  value: 4
                }],
      classOptions: [{
                  label: 'Barbarian',
                  value: 1
                }, {
                  label: 'Ranger',
                  value: 2
                }, {
                  label: 'Fighter',
                  value: 3
                }, {
                  label: 'Rogue',
                  value: 4
                }],
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
}
#baseStats {
  flex-direction: row;
}
</style>


