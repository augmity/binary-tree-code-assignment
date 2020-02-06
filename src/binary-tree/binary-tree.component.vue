<template>
  <div class="hello">
    binary tree
    <pre v-if="root">{{ root | json }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BinaryTreeNode } from './BinaryTreeNode';

@Component
export default class BinaryTree extends Vue {
  @Prop() private root!: BinaryTreeNode<number>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
