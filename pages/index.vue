<template>
  <div>
    <profile-card 
    v-for="(user, index) in users"
      :key="index"
      :user="user"
      :data-index="index"    
    />

    <waves/>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import ProfileCard from '~/components/ProfileCard.vue';
import Waves from '~/components/Waves.vue';

export default {
  components: {
    ProfileCard,
    Waves
  },  
  async fetch({ store, error }) {
    try {
      await store.dispatch('users/fetchUsers')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  },

}

</script>

