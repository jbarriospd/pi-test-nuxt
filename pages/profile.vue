<template>
  <v-layout>
    <v-flex class="text-center">
      <profile-card/>
      <waves />
    </v-flex>
  </v-layout>
</template>

<script>
  import ProfileCard from '~/components/ProfileCard.vue';
  import Waves from '~/components/Waves.vue';

  export default {
  components: {
      ProfileCard,
      Waves
    },
  }
</script>