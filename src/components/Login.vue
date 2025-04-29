<template>
    <div class="min-h-full flex flex-row">
        <div class="flex col-6 col-sm-12">
            <form  @submit.prevent="login" class="container px-3 py-4">
                <div class="flex flex-col align-items-center">
                    <div class="flex flex-row justify-center mt-10">
                         <img src="/logo.png" class="h-10 w-15"/>
                    </div>
                    <div class="flex flex-row justify-center mt-3">
                        <h2 class="font-bold text-2xl text-primary">Sign in to your account</h2>
                    </div>
                    <div class="flex flex-row justify-center mt-2">
                        <span class="">Enter your credentials below</span>
                    </div>
                    <div class="flex flex-row justify-center mt-7">
                        <div class="flex flex-col justify-center mt-10">
                            <label class="font-semi-bold">Enter email</label>
                            <input v-model="email" placeholder="" style="border: 2px solid #9343be;" class="mt-1 w-30 h-10 rounded-xl  border px-3"  />
                        </div>
                    </div>
                    <div class="flex flex-row justify-center mt-4">
                        <div class="flex flex-col justify-center">
                            <label class="font-semi-bold">Enter Password</label>
                            <input v-model="password" placeholder="" style="border: 2px solid #9343be;" class="mt-1 w-30 h-10 rounded-xl border px-3"  />
                        </div>
                    </div>
                    <div class="flex flex-row justify-center mt-6">
                        <button type="submit" class="btn btn-primary rounded-3xl w-30 h-7"> Continue </button>
                    </div>
                    
                    <div class="flex flex-row justify-center mt-6">
                       <a class="text-primary" href="/register"> Don't have an account ? </a>
                    </div>
                </div>
            </form>
        </div>
        <div class="flex col-6 desktop-menu">
           <div class="container h-screen w-screen px-2 py-2">
            <img class="h-full w-full rounded-3xl" src="../assets/images/login.jpg" />
 
            </div>
        </div>
    </div>
</template>
<script>
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$toast.success('Logged in successfully!');
        this.$router.push('/');
      } catch (error) {
        this.$toast.error(error.message);
      }
    }
  }
};
</script>