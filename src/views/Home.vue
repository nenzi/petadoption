<template>
  <div class="home">
    <div class='container'>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to my website App"/>
    <p>i am a highly competent IT Professional and web Application developer. I have strong
techincal skills as well as excellent interpersonal skills, enabling me to interact witha wide range
of clients. I am eager to be challenged in order to grow and further improve my IT and development
skills. My greatest passion is using my Technical skills to benefit other people and Oragisations</p>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
