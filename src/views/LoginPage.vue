<template>

    <div> 
        <input type="test" :placeholer="Email" v-model="email">
        <input type="password" :placeholer="Password" v-mode="password"/>

        <button @click="login">로그인하기</button>
    </div>
    <div>
        계정이 없으신가요?
        <span>가입하기</span>
    </div>

</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            console(this.email, this);
        }
    },
};
</script>

<style>
    
</style>