<template>
  <div id='abilityScoreWrapper'>
    <div id='abilityWrapper'>
      <img src='../assets/abilityScoresImage.jpeg' width=42%>
      <div class='abilityLabel'>
        <div id='str' class='abilityLine'>
          <h3>STR</h3>=
          <p>total</p>+
          <p>base score + racial mod</p>+
          <p>enhancement bonuses</p>+
          <p>misc bonuses</p>+
          <p>misc penalties</p>-
          <p>misc penalties</p>
          <p class='modifier'>strength modifier</p>
        </div>
        <div id='dex' class='abilityLine'>
          <h3>DEX</h3>=
          <p>total</p>+
          <p>base score + racial mod</p>+
          <p>enhancement bonuses</p>+
          <p>misc bonuses</p>+
          <p>misc penalties</p>-
          <p>misc penalties</p>
          <p class='modifier'>dexterity modifier</p>
        </div>
        <div id='con' class='abilityLine'>
          <h3>CON</h3>=
          <p>total</p>+
          <p>base score + racial mod</p>+
          <p>enhancement bonuses</p>+
          <p>misc bonuses</p>+
          <p>misc penalties</p>-
          <p>misc penalties</p>
          <p class='modifier'>constitution modifier</p>
        </div>
        <div id='int' class='abilityLine'>
          <h3>INT</h3>=
          <p>total</p>+
          <p>base score + racial mod</p>+
          <p>enhancement bonuses</p>+
          <p>misc bonuses</p>+
          <p>misc penalties</p>-
          <p>misc penalties</p>
          <p class='modifier'>intelligence modifier</p>
        </div>
        <div id='wis' class='abilityLine'>
          <h3>WIS</h3>=
          <p>total</p>+
          <p>base score + racial mod</p>+
          <p>enhancement bonuses</p>+
          <p>misc bonuses</p>+
          <p>misc penalties</p>-
          <p>misc penalties</p>
          <p class='modifier'>wisdom modifier</p>
        </div>
        <div id='cha' class='abilityLine'>
          <h3>CHA</h3>=
          <p>total</p>+
          <p>base score + racial mod</p>+
          <p>enhancement bonuses</p>+
          <p>misc bonuses</p>+
          <p>misc penalties</p>-
          <p>misc penalties</p>
          <p class='modifier'>charisma modifier</p>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import { checkServerIdentity } from 'tls';
import Ability from './Ability'
export default {
  name: 'AbilityScores',
  components: {
    Ability
  },
  data () {
    return {}
  }
}  
</script>

<style>misc penalties
#app {
  font-family: 'Avenir', Helvetica, 'Aria10l', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
#abilityScoreWrapper {
  width: 900px
}
#abilityWrapper {
  width: 830px;
}
.abilityLabel p {
  font-size: 8px;
}
.abilityLabel h3 {
  line-height: 1em;
}
.abilityLine {
  display: grid;
  grid-template-columns: 10% 1% 6% 1% 6% 1% 6% 1% 6% 1% 6% 1% 6% 6%;
}
.abilityLine p {
  border-bottom: 1px solid black;
}
.modifier {
  border: 1px solid black;
  margin-left: 8px;
}
</style>


