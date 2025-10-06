<template>
  <div>
    <p>index: {{ index }}</p>
    <button @click="incrementIndex">increment index</button>

    <p>계산된 값: {{ computedValue }}</p>
    <button @click="incrementCount">increment count</button>
  </div>
</template>

<script>
export default {
    name: "DemoPage",
    data() {
        return {
            index: 0,
            count: 0,
        };
    },
    computed: {
        computedValue() {
            return this.count * 2;
        },
    },
    watch: {
        count(newValue, oldValue) {
            console.log(`count 변화 감지: ${oldValue} -> ${newValue}`);
        },
        index(newValue, oldValue) {
            console.log(`index 변화 감지: ${oldValue} -> ${newValue}`);
        },
    },
    methods: {
        incrementCount() {
            this.count += 1;
        },
        incrementIndex() {
            this.index++;
        }
    },
    
};
</script>

<style>

</style>