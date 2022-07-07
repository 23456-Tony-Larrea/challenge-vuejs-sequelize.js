<template>
  <nav>
        <v-navigation-drawer  dark app  class="blue " width="100">
        <div class="text-center mt-5">
           <v-btn fab color="#E3F2FD" x-large>
               <v-icon color="black">fa-brands fa-vuejs</v-icon>
           </v-btn> 
        </div>
        <v-list flat  class="mt-5" >
            <v-list-item-group  color="black" >
              
                <v-list-item active-class="border" class="ml-2 my-3" :ripple="false">
                        <b></b>
                        <b></b>
                    <v-list-item-icon>
                      <router-link to="/users">
                        <v-icon  color="white">fas fa-users</v-icon>
                        </router-link>
                    </v-list-item-icon>
               
                    </v-list-item> 
            </v-list-item-group>
          </v-list>
        
        <div style="position: absolute; bottom: 20px;
        margin-left: auto; margin-right: auto; left:0; right: 0; text-align: center;">
                <v-btn text @click="exit()">
            <v-icon >fas fa-sign-out-alt</v-icon>   
                </v-btn>      
  
        </div>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
  name:"HeaderComponent",
  methods:{
    exit(){
      this.$router.push('/');
    }
  }
 
}
</script>

<style>
</style>
