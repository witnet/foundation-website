<template>
  <div>
    <Header />
    <main>
      <Mission />
      <AboutWitnet />
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Mission from '~/components/Mission'
import AboutWitnet from '~/components/AboutWitnet'
import Contact from '~/components/Contact'
import Footer from '~/components/Footer'
export default {
  components: { Footer, Contact, AboutWitnet, Mission, Header },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Patua+One&family=Roboto:ital,wght@0,300;0,700;1,300&display=swap');

html {
  background: white;
  font-family: 'Roboto', sans-serif;
}

main {
  margin: 0 auto;
  max-width: 100vw;
  padding: 0;
  width: 1000px;
}

section,
aside {
  max-width: 700px;
  padding: 25px 25px 35px 25px;
}

section > header > h2 {
  background: yellow;
  color: #444;
  display: inline;
  font-size: 1em;
  font-weight: 700;
  left: -15px;
  letter-spacing: 0.2em;
  padding: 13px 15px 8px 15px;
  position: relative;
  text-transform: uppercase;
}

section > p,
aside > p {
  color: #4d4d4d;
  font-size: 1.1em;
  line-height: 1.5em;
  margin: 20px 0;
}

section > p:last-of-type {
  margin-bottom: 0;
}

section > p > a {
  color: #122135;
}
</style>
