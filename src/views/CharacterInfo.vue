<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{$route.params}}</h3>
  </div>
</template>

<script>

export default {
    name:'CharacterInfo',
    created() {
    console.log('Params: ', this.$route.params);
}
}
</script>
