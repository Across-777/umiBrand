export default {
  routes: [
    {
      path: '/',
      component: '@/components/MainLayout',
      routes: [
        { path: '/option', component: '@/components/Main' },
        { path: 'option2', component: '@/components/option2' },
        { path: '/option3', component: '@/components/option3' },
      ],
    },
  ],
}
