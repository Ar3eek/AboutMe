const routes = [
    { path: '/', component: () => import('./pages/Homem.vue') }, // <- dodane
    { path: '/Omnie', component: () => import('./pages/Omnie.vue') },
    { path: '/Homem', component: () => import('./pages/Homem.vue') },
]

export default routes;