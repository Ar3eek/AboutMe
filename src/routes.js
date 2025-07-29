const routes = [
    { path: '/', component: () => import('./pages/StronaGlowna.vue') }, // <- dodane
    { path: '/Omnie', component: () => import('./pages/Omnie.vue') },
    { path: '/Stronaglowna', component: () => import('./pages/StronaGlowna.vue') },
    { path: '/Technologie', component: () => import('./pages/Technologie.vue') },
    { path: '/Kontakt', component: () => import('./pages/Kontakt.vue') },
]

export default routes;