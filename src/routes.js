const routes = [
    { path: '/', component: () => import('./pages/Homem.vue') }, // <- dodane
    { path: '/Omnie', component: () => import('./pages/Omnie.vue') },
    { path: '/Homem', component: () => import('./pages/Homem.vue') },
    { path: '/Technologie', component: () => import('./pages/Technologie.vue') },
    { path: '/Kontakt', component: () => import('./pages/Kontakt.vue') },
]

export default routes;