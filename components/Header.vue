<template>
  <header>
    <main>
      <h1>
        <nuxt-link to="/">
          <img
            class="logo"
            src="@/assets/logo.svg"
            :alt="$t('header.logoAlt')"
          />
        </nuxt-link>
      </h1>
    </main>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  background: #122135;
  color: white;
  height: 150px;
  margin-bottom: 50px;
}

header h1 {
  padding: 25px;
}

img.logo {
  width: 250px;
  max-width: calc(100vw - 50px);
}
</style>
