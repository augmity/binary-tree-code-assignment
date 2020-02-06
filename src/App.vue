<template>
  <div id="app">
    <h3>Binary Tree</h3>
    <BinaryTree v-bind:root="binaryTreeData" />
    <div>
      <button @click="traverseInOrder">In-Order</button>
      <button @click="traversePreOrder">Pre-Order</button>
      <button @click="traversePostOrder">Post-Order</button>
    </div>
    <Log v-bind:items="log" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BinaryTree from './binary-tree/binary-tree.component.vue';
import Log from './components/log.component.vue';

import { binaryTreeData, traverseInOrder, traversePostOrder, traversePreOrder } from './binary-tree';

@Component({
  components: {
    BinaryTree,
    Log,
  },
})
export default class App extends Vue {

  @Prop() private log?: number[];
  binaryTreeData = binaryTreeData;

  traverseInOrder() {
    this.log = traverseInOrder(binaryTreeData);
  }

  traversePostOrder() {
    this.log = traversePostOrder(binaryTreeData);
  }

  traversePreOrder() {
    this.log = traversePreOrder(binaryTreeData);
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
</style>
