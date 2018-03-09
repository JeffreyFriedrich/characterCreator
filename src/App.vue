<template>
  <div id="app">
    <img src="./assets/characterSheetTopImage.jpeg">
    <base-stats />
    <ability-scores />
  </div>

</template>

<script>
import BaseStats from './components/BaseStats'
import AbilityScores from './components/AbilityScores'
import { checkServerIdentity } from 'tls';

export default {
  name: 'App',
  components: {
    BaseStats,
    AbilityScores
  }
}
</script>

<style>
</style>


