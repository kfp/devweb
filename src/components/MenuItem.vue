<template>
  <div class="menuItem">
    <router-link to="/"><img :src="'../assets/'+imageSrc">{{linkName}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['imageSrc', 'linkName']
}

</script>
