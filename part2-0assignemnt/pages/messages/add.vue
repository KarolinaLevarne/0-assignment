<script>
export default{
    methods: {
    addMessages: function() {
      this.$store.commit('addMessage', {
          message: this.messages
      })
    }
    },
 data(){
    return {
      messages: ''
    }
  }
}
</script>

<template>
<div>
<input v-model="messages">
<!-- <p>Message is: {{ messages }}</p> -->
<button @click="addMessages">Add message</button>
<NuxtLink to="/messages/read"> Read </NuxtLink>
</div>
</template>