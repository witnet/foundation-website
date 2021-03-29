<template>
  <section>
    <header>
      <h2>{{ $t('mission.title') }}</h2>
    </header>
    <blockquote class="statement">{{ $t('mission.statement') }}</blockquote>
  </section>
</template>

<script>
export default {
  name: 'Mission',
}
</script>

<style scoped>
.statement {
  color: #4d4d4d;
  font-size: 1.5em;
  font-style: italic;
  font-weight: 300;
  line-height: 1.5em;
  margin-top: 20px;
  padding-left: 40px;
  position: relative;
}
.statement::before {
  color: #ccc;
  content: '"';
  position: absolute;
  font-family: 'Patua One', cursive;
  font-size: 2em;
  left: -10px;
  top: 15px;
}
</style>
