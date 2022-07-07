<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >BIENVENIDO</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ingreso por redes sociales</h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            v-model="email"
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            v-model="password"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="teal accent-3" dark @click="login()">Ingresar</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hola</h1>
                        <h5
                          class="text-center"
                        >Ingresa tu información personal para formar parte de nosotros!</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">REGISTRO</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Registrate con Nosotros!</h1>
                        <h5
                          class="text-center"
                        >inicie sesión con su información personal</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Ingreso</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Crear Cuenta</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Registro con redes sociales</h4>
                        <v-form>
                          <v-text-field
                            label="Nombres"
                            name="Name"
                            v-model="firstName"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            label="Apellidos"
                            name="Name"
                            v-model="lastName"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                          />
                          
                          <v-text-field
                            label="Email"
                            name="Email"
                            v-model="email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            v-model="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark @click="register()">Registrarse</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  name: 'HomeView',
  components: {
  },
  data: function() {
    return {
      step:1,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error:false,
      errorMessage:'',
      confirmPassword:'password'
    }
  },
  methods:{
 
    login(){
     let json={
      "email":this.email,
      "password":this.password
     };
    axios.post('http://localhost:3000/users/login',json)
    .then(data=>{
      if(data.data.message==="Unauthorized" || data.data.message==="bad request" ) {
                Swal.fire({
                position: 'center',
                icon: 'error',
                type: 'error',
                title: 'Usuario incorrecto',
                showConfirmButton: false,
                timer: 1500
              })
         
     this.$router.push('/');  
      }else{
             Swal.fire({
                position: 'center',
                icon: 'success',
                type: 'success',
                title: 'Bienvenido',
                showConfirmButton: false,
                timer: 1500
              })
          console.log(data.data.usuario);
             this.$router.push('/users');
      }
      }).catch(e=>{
        console.log(e)
             Swal.fire({
                position: 'center',
                icon: 'error',
                type: 'error',
                title: 'Usuario o contraseña Incorrecto',
                showConfirmButton: false,
                timer: 1500
              })
            this.$router.push('/');
        })
  },
  register(){
    let json={
      "firstName":this.firstName,
      "lastName":this.lastName,
      "email":this.email,
      "password":this.password
    };
    axios.post('http://localhost:3000/users/register',json)
    .then(data=>{
      if(data.data.message=="Unauthorized" || data.data.message=="Bad Request") {
           Swal.fire({
                position: 'center',
                icon: 'error',
                type: 'error',
                title: 'Usuario no encontrado',
                showConfirmButton: false,
                timer: 1500
              })
      this.$router.push('/')
      }else{
        Swal.fire({
                position: 'center',
                icon: 'success',
                type: 'success',
                title: 'Usuario Registrado con exito!',
                showConfirmButton: false,
                timer: 1500
              })
        console.log(data.data.user)
        this.$router.push('/')
      }
    })
    .catch(error=>{
        console.log(error)
      Swal.fire({
                position: 'center',
                icon: 'error',
                type: 'error',
                title: 'Usuario Incorecto',
                showConfirmButton: false,
                timer: 1500
              })
        this.$router.push('/register');
      });
  } 
},
props:{
  source: String
}
}
</script>

