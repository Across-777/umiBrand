export default {
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      // component: '@/layouts/TestB',
      routes: [
        { path: '/option', component: '@/pages/Brand/index' },
        { path: '/option2', component: '@/pages/Brand/components/option2' },
        { path: '/option3', component: '@/pages/Brand/components/option3' },
        { path: '/option4', component: '@/pages/Brand/components/option4' },
      ],
    },
  ],
};
