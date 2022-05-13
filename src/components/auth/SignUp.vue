<template>
    <main class="form-signin">
        <div class="card">
               <div class="card-body">
                    <form>
                        <h2 class="h3 mb-3 fw-normal text-center">Please sign up</h2>

                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control form-control-lg" v-model="name" placeholder="Nom complet" autofocus/>
                        </div>

                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control form-control-lg" v-model="email" placeholder="Adresse Email" />
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Mot de passe"/>
                        </div>  

                        <div class="form-group">
                            <label>Confirm password</label>
                            <input type="password" class="form-control form-control-lg" v-model="password_confirmation" placeholder="Confirmer le mot de passe"/>
                        </div>                      

                        <!-- <router-link class="w-100 btn btn-lg btn-primary" type="submit" to="/signin">Sign up</router-link> -->
                        <button class="w-100 btn btn-lg btn-primary" type="button" @click="register()" >Sign In</button>
                    </form>
                </div>
        </div>  
        <p class="mt-3 mb-3 text-muted text-center">© 2S Kollect 2022</p>
    </main>      
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {}
        },
        methods: {
            register(){
                axios.post('http://localhost:8000/api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                .then(res => {
                    alert(res.data.message);
                })
                .catch(error =>{
                    alert(error);
                })
            }
        }
    }
</script>

<style lang="css" scoped>
    body {
        display: flex;
        padding-top: 60px;
        padding-bottom: 60px;        
        align-items: center;
        background-color: #f6f6f6;
    }
    .form-signin {
        width: 100%;
        max-width: 450px;
        margin: auto;
    }
    label {
        font-weight: 600;
    }
</style>