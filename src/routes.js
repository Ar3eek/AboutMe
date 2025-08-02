const routes = [
    { path: '/StronaGlowna', component: () => import('./pages/StronaGlowna.vue') }, // <- dodane
    { path: '/Omnie', component: () => import('./pages/Omnie.vue') },
    { path: '/Kontakt', component: () => import('./pages/Kontakt.vue') },
]

export default routes;