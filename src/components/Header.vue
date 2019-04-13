<template>
  <div id="nav">
    <div class="nav-1">
      <img src="@/assets/DCHQ-small.svg">
      <router-link to="/" :class="{'light-nav' : !isDarkMode, 'dark-nav' : isDarkMode}">Home</router-link>
      <router-link to="/manage">Manage Users</router-link>
      <router-link to="/team">Team</router-link>
    </div>
    <a @click="onClick">Logour <img src="@/assets/logout.svg"></a>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Header",
    computed: {
      isDarkMode() {
        return this.$store.getters.isDakeMode;
      }
    }
  }
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $super-dark-blue;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;
  a {
    font-weight: bold;
    color: $dark-gray;
    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    margin-right: 20px;
  }

  img {
    margin-right: 20px;
  }
}
</style>