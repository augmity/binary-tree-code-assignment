<template>
  <ul>
    <li v-for="item in items" v-bind:key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Log extends Vue {
  @Prop() private items!: Array<string | number>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 8px;
}

</style>
