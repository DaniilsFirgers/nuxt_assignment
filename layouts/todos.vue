<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/todos">TODO</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
  <footer>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/todos">Todos</NuxtLink></li>
    </ul>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
