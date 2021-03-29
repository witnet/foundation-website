<template>
  <aside>
    <i18n path="footer.rights" tag="p">
      <span>{{ year }}</span>
      <a
        href="https://creativecommons.org/publicdomain/zero/1.0/"
        target="_blank"
        >{{ $t('footer.license') }}</a
      >
    </i18n>
  </aside>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    year: new Date().getFullYear(),
  }),
}
</script>

<style scoped>
aside > p {
  font-size: 0.8em;
}
</style>
