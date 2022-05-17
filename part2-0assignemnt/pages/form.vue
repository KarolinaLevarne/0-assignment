<template>
<div>
     <form  @submit.prevent="submit">
        <input v-model="theForm.name" type="text" placeholder="name">
        <input v-model="theForm.surname" type="text" placeholder="surname">
        <input v-model="theForm.email" type="text" placeholder="email">
       
       <button type="submit">
         Submit
       </button>
    </form>
    <p>{{message}}</p>
</div>
</template>

<script>
export default {
            data(){
                return{theForm: {
                    name: '',
                    surname: '',
                    email: ''
                },
                message: this.$store.state.formData

                }
                
            },

            methods: {
                submit: function(){
                    this.$store.dispatch("echo", {
                        formData: this.theForm});
                }
            }

        }
</script>
