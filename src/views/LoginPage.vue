<template>

    <div class="logo-containter">
            <img src="@/assets/x-logo.png" class="logo"/>
    </div>
    <div> 
        <!--input type="test" :placeholer="email" v-model="email">
        <input type="password" :placeholer="password" v-mode="password"/-->
        <InputField :type="'text'" :placeholder="'Email'" v-model="email" :errorMsg="'이메일을 입력하세요.'"/>
        <InputField :type="'password'" :placeholder="'Password'" v-model="password" :errorMsg="'비밀번호를 입력하세요.'"/>
        <button class="button" v-on:click="login">로그인하기</button>
    </div>
    <div>
        계정이 없으신가요?
        <router-link class="signup-button" to="/signup">가입하기</router-link>
    </div>

</template>

<script>
import InputField from '@/components/InputField.vue';

export default {
    name: "LoginPage",
    components: {InputField},
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

<style scoped>
    
    .signup-button{
        color: aqua;
        cursor: pointer;
    }
</style>