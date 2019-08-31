<template>
    <div id="translateGuest">
        <form  v-on:submit="formSubmit">
            <input id="adivinar" type="text" v-model="textToTranslate" placeholder="Adivine el numero...">
            <input type="submit" value="Break">
        </form>
    </div>
</template>

<script>
export default {
    name: 'translateGuest',
    data() {
        return {
            textToTranslate: '',
        }
    },
    created() {
    },
    methods:{
        formSubmit(e) {
            this.$emit('formSubmit', this.textToTranslate);
            e.preventDefault();
        }
    }
}
</script>

<style>
    p {
        font-size: 30px;
    }
</style>