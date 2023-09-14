type RouteConfigType = {
  [key: string]: {
    path: string;
    // sometimes you want to have a route that is not the same as the path
    // especially when you have nested routes
    route: string;
    menuName: string;
    title: string;
  };
};
export const routes: RouteConfigType = {
  home: {
    path: '/',
    route: '/',
    menuName: 'Home Page',
    title: 'Home Page',
  },
  info: {
    path: '/info/*',

    route: '/info',
    menuName: 'Info Page',
    title: 'Info Page',
  },
};
