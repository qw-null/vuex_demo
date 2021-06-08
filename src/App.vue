<template>
  <div id="app">
    <addtion></addtion>
    <p>----------------------------------------</p>
    <subtraction></subtraction>
  </div>
</template>

<script>
import Addtion from './components/Addtion';
import Subtraction from './components/Subtraction';

export default {
  name: 'App',
  components: {
    'addtion':Addtion,
    'subtraction':Subtraction
  }
}
</script>
