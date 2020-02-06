<template>
  <div id="app">
    <h3>Binary Tree</h3>
    <BinaryTree v-bind:root="binaryTreeData" class="binary-tree" />

    <p>Choose a travesal method:</p>

    <div>
      <button @click="traverseInOrder">In-Order</button>
      <button @click="traversePreOrder">Pre-Order</button>
      <button @click="traversePostOrder">Post-Order</button>
    </div>

    <h4 v-if="log">Results</h4>

    <Log v-bind:items="log" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BinaryTree from './binary-tree/binary-tree.component.vue';
import Log from './components/log.component.vue';

import { binaryTreeData, traverseInOrder, traversePostOrder, traversePreOrder } from './binary-tree';

//
// The App component puts all the other component together,
// but the "business logic" (traversing functions, data, etc.) is kept outside of the App component, in the '/binary-tree' dir.
//
// For this example I've used TypeScript (for data type-checking) and class-style components (easier to read the code, allows intellisense, etc.)
//
@Component({
  components: {
    BinaryTree,
    Log,
  },
})
export default class App extends Vue {

  // The tree data is imported from a file here, but could be also loaded from the server, etc.
  binaryTreeData = binaryTreeData;
  @Prop() private log?: number[];

  // When the user clicks a button, a new log is generated and presented back to the user
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

@media (min-width: 550px) { 
  #app {
    width: 500px;
    margin: 0 auto;
  }
}

.binary-tree {
  margin-bottom: 16px;
}
</style>
