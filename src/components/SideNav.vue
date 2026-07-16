<template>
  <v-navigation-drawer v-model="open" location="left" width="300">
    <v-list nav>
      <v-list-item to="" prepend-icon="mdi-home" title="Dashboard" />
      <v-list-item to="/aircraft" prepend-icon="mdi-airplane" title="Aircrafts" />
      <v-list-item to="/aircraft-model" prepend-icon="mdi-list-box" title="Aircrafts models" />

      <v-list-item to="/manufacturer" prepend-icon="mdi-factory" title="Manufacturers" />
      <v-divider />
      <v-list-item to="/logout" prepend-icon="mdi-logout" title="Logout" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const open = defineModel({ required: true, type: Boolean })
</script>
