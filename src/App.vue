<template>
  <div class="bg-gray-600 min-h-full">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(location.href)
  },
};
</script>
