<template>
  <div v-if="node">
    <div class="binary-tree-node-value">{{ node.value }}</div>
    <div class="children">
      <binary-tree-node v-if="node.leftNode" v-bind:node="node.leftNode" />
      <binary-tree-node v-if="node.rightNode" v-bind:node="node.rightNode" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BinaryTreeNode } from './BinaryTreeNode';

@Component({
  name: 'binary-tree-node'
})
export default class BinaryTreeNodeComponent extends Vue {
  @Prop() private node!: BinaryTreeNode<number>;
}
</script>

<style scoped>
.binary-tree-node-value {
  margin: 4px 8px;
}

.children {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
