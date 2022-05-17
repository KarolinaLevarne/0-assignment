<script>
export default{
    data() {
                return {
                    message: this.$store.state.messages

                }
            }
}
</script>

<template>
<div>
<p>{{message}}</p>
<NuxtLink to="/messages/add"> Add </NuxtLink>
</div>
</template>