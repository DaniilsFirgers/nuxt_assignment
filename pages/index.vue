<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">TODO</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Home</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      aperiam deleniti nulla, minus inventore labore mollitia ab rerum. Maxime
      maiores fuga libero sunt debitis laboriosam minima, tempora consequatur
      sequi veniam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      aperiam deleniti nulla, minus inventore labore mollitia ab rerum. Maxime
      maiores fuga libero sunt debitis laboriosam minima, tempora consequatur
      sequi veniam!
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 30px 0px;
}
</style>
