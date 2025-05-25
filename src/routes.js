const routes = [
    { path: '/Omnie', component: () => import('./pages/Omnie.vue') },    // https://router.vuejs.org/guide/advanced/lazy-loading.html
    { path: '/', component: () => import('./pages/Homem.vue') },
    { path: '/', component: () => import('./pages/Kontakt.vue') },    // https://router.vuejs.org/guide/advanced/lazy-loading.html
        // https://router.vuejs.org/guide/advanced/lazy-loading.html
]

export default routes;