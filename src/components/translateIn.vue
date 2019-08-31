<template>
    <div id="translateIn">
        <form  v-on:submit="formSubmit">
            <input id="secreto" type="text" v-model="textToTranslate" placeholder="Escriba secreto...">
            <input type="submit" value="Secret">
        </form>
    </div>
</template>

<script>
export default {
    name: 'translateIn',
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