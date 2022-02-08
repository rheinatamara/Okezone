<template>
  <div class="home">
      <header class="hero">
      <div id="navbar" class="navbar top">
        <h1 class="logo">
          <span class="text-primary"><i class="fas fa-book-open"></i> Edge</span
          >Ledger
        </h1>
        <!-- <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#cases">Cases</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav> -->
      </div>

      <div class="content">
        <h1>Aksi Warga Belgia Protes Pembatasan COVID hingga Bentrok dengan Polisi</h1>
        <p>30 menit yang lalu</p>
        <a href="#about" class="btn"
          ><i class="fas fa-chevron-right"></i> Read More</a
        >
      </div>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #333;
  color: #fff;
  opacity: 0.8;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  padding: 0 30px;
  transition: 0.5s;
}

.navbar.top {
  background: transparent;
}

.navbar a {
  color: #fff;
  padding: 10px 20px;
  margin: 0 5px;
}

.navbar a:hover {
  border-bottom: #28a745 2px solid;
}

.navbar ul {
  display: flex;
}

.navbar .logo {
  font-weight: 400;
}
  
.hero {
  background: url("../assets/header.jpg") no-repeat center center/cover;
  height: 100vh;
  position: relative;

  color: #fff;
}

.hero .content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 20px;
}

.hero .content h1 {
  font-size: 55px;
}

.hero .content p {
  font-size: 23px;
  max-width: 600px;

  margin: 20px 0 30px;
}
.hero::before {
  content: "";

  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
}

.hero * {
  z-index: 10;
}

</style>
