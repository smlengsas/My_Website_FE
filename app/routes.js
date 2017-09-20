const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

     {
      path: '/portfolio',
      name: 'portfolio',
      getComponent(nextState, comMod) {
        import('containers/Portfolio')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },

     {
      path: '/about',
      name: 'about',
      getComponent(nextState, comMod) {
        import('containers/About')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },

    {
     path: '/contact',
     name: 'contact',
     getComponent(nextState, comMod) {
       import('containers/Contact')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
    },

    {
     path: '/signIn',
     name: 'signIn',
     getComponent(nextState, comMod) {
       import('containers/SignIn')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
    },

    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
