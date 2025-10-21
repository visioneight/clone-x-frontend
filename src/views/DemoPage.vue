<template>
  <div>
    <button @click="fruit.removeFirstItem">Remove First Item</button>
    <button @click="fruit.removeLastItem">Remove Last Item</button>
    <ul>
      <ItemComponent
        v-for="item in fruit.fruitList"
        :key="item.id"
        :item="item"
      />
    </ul>
    <div>Total: {{ fruit.getFruitListLength }}</div>
    <div>With A: {{ fruit.getFruitByNameWithA.map(f => f.name).join(', ') }}</div>
  </div>
</template>

<script>
import ItemComponent from '@/components/ItemComponent.vue';
import { useFruitStore } from '@/store/fruit.js';

export default {
  name: 'DemoPage',
  components: { ItemComponent },
  data() {
    return {
      fruit: useFruitStore(),
    };
  },
};
</script>