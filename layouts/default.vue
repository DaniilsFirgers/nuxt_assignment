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
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
