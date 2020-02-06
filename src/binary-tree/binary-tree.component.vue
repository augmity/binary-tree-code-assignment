<template>
  <div class="binary-tree">
    <BinaryTreeNodeComponent v-bind:node="root" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BinaryTreeNode } from './BinaryTreeNode';
import BinaryTreeNodeComponent from './binary-tree-node.component.vue';

@Component({
  components: {
    BinaryTreeNodeComponent
  }
})
export default class BinaryTree extends Vue {
  @Prop() private root!: BinaryTreeNode<number>;
}
</script>


<style scoped>
.binary-tree {
  display: inline-block;
}
</style>
