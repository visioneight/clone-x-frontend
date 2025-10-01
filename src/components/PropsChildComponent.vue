<template>
  <div>{{  message }}</div>
  {{  toChild }}
</template>
<script>
export default {
    name: "PropsChildComponent",
    data() {
        return {
            message: "저는 자식 컴포넌트 입니다."
        };
    },
    props: {
        toChild:String
    }
};
</script>

<style>

</style>