<template>
  <section>
    <header>
      <h2>{{ $t('contact.title') }}</h2>
    </header>
    <i18n path="contact.p1" tag="p">
      <a href="mailto:info@witnet.foundation?subject=About Witnet Foundation"
        >info@witnet.foundation</a
      >
    </i18n>
  </section>
</template>

<script>
export default {
  name: 'Contact',
}
</script>
