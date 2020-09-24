<template>
  <div class="-shadow">
      <span class="eyebrow"> @{{ user.id }} </span>
      <h4 class="title">
        {{ user.id }}
      </h4>
      <span>{{ user.id }} attending</span>
    </div>
</template>
<script>
export default {
  props: {
    event: Object
  },
}
</script>
