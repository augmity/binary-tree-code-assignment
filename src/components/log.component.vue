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
  padding: 2px 4px;
}

li:nth-child(even) {
  background-color: #eee;
}

</style>
