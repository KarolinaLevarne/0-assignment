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
</div>
</template>