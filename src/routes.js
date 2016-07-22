function routes(router) {
  router.map({
    '/': {
      component: require('./containers/Layout'),
      subRoutes: {
        '/': {
          component: require('./containers/Home'),
        },
      },
    },
    // 404
    '*': {
      component: require('./containers/NotFound'),
    },
  });
}

export default routes;
