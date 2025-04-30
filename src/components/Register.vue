<template>
     <div class="min-h-full flex flex-row">
        <div class="flex col-6 col-sm-12">
            <div class="container px-3 py-4">
                <form @submit.prevent="register" class="flex flex-col align-items-center">
                    <div class="flex flex-row justify-center mt-10">
                         <img src="/logo.png" class="h-10 w-15"/>
                    </div>
                    <div class="flex flex-row justify-center mt-3">
                        <h2 class="font-bold text-2xl text-primary">Sign up for account</h2>
                    </div>
                    <div class="flex flex-row justify-center mt-2">
                        <span class="">Create a new account</span>
                    </div>
                    <div class="flex flex-row justify-center mt-7">
                        <div class="flex flex-col justify-center mt-10">
                            <label class="font-semi-bold">Enter First name</label>
                            <input  v-model="firstName" placeholder="" style="border: 2px solid #9343be;" class="mt-1 w-30 h-10 rounded-xl  border px-3"  />
                        </div>
                    </div>
                    <div class="flex flex-row justify-center mt-4">
                        <div class="flex flex-col justify-center">
                            <label class="font-semi-bold">Enter Last name</label>
                            <input  v-model="lastName" placeholder="" style="border: 2px solid #9343be;" class="mt-1 w-30 h-10 rounded-xl  border px-3"  />
                        </div>
                    </div>
                    <div class="flex flex-row justify-center mt-4">
                        <div class="flex flex-col justify-center">
                            <label class="font-semi-bold">Enter email</label>
                            <input  v-model="email" placeholder="" style="border: 2px solid #9343be;" class="mt-1 w-30 h-10 rounded-xl  border px-3"  />
                        </div>
                    </div>
                    <div class="flex flex-row justify-center mt-4">
                        <div class="flex flex-col justify-center">
                            <label class="font-semi-bold">Enter Password</label>
                            <input  v-model="password" placeholder="" style="border: 2px solid #9343be;" class="mt-1 w-30 h-10 rounded-xl border px-3"  />
                        </div>
                    </div>
                    <div class="flex flex-row justify-center mt-6">
                        <button typpe="submit" class="btn btn-primary rounded-3xl w-30 h-7"> Continue </button>
                    </div>
                    
                    <div class="flex flex-row justify-center mt-6">
                       <a class="text-primary" href="/login"> Already have an account ? </a>
                    </div>
                </form>
            </div>
        </div>
        <div class="flex col-6 desktop-menu">
           <div class="container h-screen w-screen px-2 py-2">
            <img class="h-full w-full rounded-3xl" src="../assets/images/register.jpg" />
 
            </div>
        </div>
    </div>
</template>
<script>
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        await updateProfile(userCredential.user, {
          displayName: `${this.firstName} ${this.lastName}`
        });
        this.$toast.success('Registration successful!');
        this.$router.push('/login');
      } catch (error) {
        this.$toast.error(error.message);
      }
    }
  }
}
</script>