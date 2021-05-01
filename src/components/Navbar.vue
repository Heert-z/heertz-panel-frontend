<!--
  - Heertz Bot - A multifunctional bot for Discord
  -  Copyright (C) 2021 RedsTom
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU General Public License
  - along with this program.  If not, see <https://www.gnu.org/licenses/>.
  -->

<template>
  <nav>
    <v-app-bar clipped-right flat app height="75" elevation="5" style="z-index: 9999;">
      <v-toolbar-title class="text-uppercase grey--text">
        <v-btn text height="60" color="primary">
          <v-img
            alt="Vuetify Logo"
            class="shrink flex align-center mr-3"
            contain
            src="../assets/logo.png"
            transition="scale-transition"
            min-width="50"
            max-width="50"
          />
          <span class="text--secondary font-weight-bold">Heert'z</span>
          <span class="text--secondary">bot</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer/>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="text--primary"/>
    </v-app-bar>

    <v-navigation-drawer
      app
      absolute
      right
      v-model="drawer"
      clipped
      :style="{top: $vuetify.application.top + 'px', zIndex: 4}">
      <template v-slot:prepend>
        <v-list-item v-if="ls.loginCookie">
          <v-list-item-avatar>
            <v-img alt="PP"
                   src="https://images.photowall.com/products/60869/azores-mountain-landscape-1.jpg?h=699&q=85"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="ls.loginCookie"/>
        <v-list
          nav
          flat
          dense>
          <div
            class="list-item"
            v-for="item in links"
            :key="item.title">
            <v-list-item
              :to="item.path || '/'"
              :color="item.color || 'primary'"
              v-if="(item.anonymous ? true : !!ls.loginCookie) && !item.title.includes('divider')"
              link>
              <v-list-item-icon>
                <v-icon>mdi-{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="item.title.includes('divider')"/>
          </div>
        </v-list>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => {
    return {
      ls: {},
      drawer: false,
      links: [
        {
          icon: 'home',
          title: 'Home',
          anonymous: true
        },
        {
          icon: 'view-dashboard',
          title: 'Dashboard'
        },
        {
          title: 'divider-1'
        },
        {
          icon: 'logout',
          title: 'Log Out',
          color: 'red'
        }
      ]
    }
  },
  mounted () {
  },
  created () {
    this.ls = localStorage
  }
}
</script>

<style scoped lang="scss">
.v-divider {
  $m: 5px;
  margin-top: $m;
  margin-bottom: $m;
}

.list-item {
  $m: 5px;
  margin-top: $m;
  margin-bottom: 5px;
}
</style>
