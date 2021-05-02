<template>
  <v-main>
    <v-container fill-height>
      <v-row justify="center" align="center">
        <div id="landing">
          <v-img width="300px" src="../assets/logo.png" alt="heertz-logo"/>
            <v-container class="text-h2 text-uppercase">
              <span class="text--secondary font-weight-bold">Heert'z</span>
              <span class="text--secondary">bot</span>
            </v-container>
          <p>The bot you need !</p>
        </div>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
<style scoped lang="scss">

#landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>
