<template>
  <v-app>
    <AppBar @toggle-drawer="drawer = !drawer" />
    <SideNav v-model="drawer" />
    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
  <SnackbarHost
    :options="{
      location: 'top right',
      timeout: 3000,
      totalVisible: 10,
      transition: 'slide-y-transition',
      variant: 'tonal',
    }"
  />
  <DialogHost />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppBar from './components/AppBar.vue'
import SideNav from './components/SideNav.vue'
import DialogHost from './plugins/dialog/DialogHost.vue'
import SnackbarHost from './plugins/snackbar/SnackbarHost.vue'
const drawer = ref(false)
</script>

<style scoped></style>
