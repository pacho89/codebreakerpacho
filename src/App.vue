  
<template>
  <div id="app">
    <h1>CodeBreaker</h1>
    <translateIn v-on:formSubmit="translateText" />
    <translateOut v-text="this.text"/>
    <translateGuest v-on:formSubmit="translateGuest" />
    <translateGuestOut v-text="this.text2"/>
  </div>
</template>

<script>
import translateIn from './components/translateIn.vue'
import translateOut from './components/translateOut.vue'
import translateGuest from './components/translateGuest.vue'
import translateGuestOut from './components/translateGuestOut.vue'

export default {
  name: 'app',
  components: { 
    translateIn,
    translateOut,
    translateGuest,
    translateGuestOut,

  },
  data: function () {
    return {
      text:'',
      text2:''
    }
  }
  , methods: {
    translateText:function(text) {
      this.$http.get('http://localhost:3000/setsecret/'+text)
      .then((response) => {
        console.log(this.text);
        this.text = response.body.message
      });
    },
    translateGuest:function(text2) {
      this.$http.get('http://localhost:3000/guess/'+text2)
      .then((response2) => {
        console.log(this.text2);
        this.text2 = response2.body.result
      });
    },
  }, 
  printText(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>