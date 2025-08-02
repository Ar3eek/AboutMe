const routes = [
    { path: '/', component: () => import('./pages/StronaGlowna.vue') },
    { path: '/Omnie', component: () => import('./pages/Omnie.vue') },
    { path: '/Kontakt', component: () => import('./pages/Kontakt.vue') },
]

export default routes;