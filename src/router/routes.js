// const ultra = {
//   path: '/ultra',
//   component: () => import('layouts/Ultra.vue'),
//   children: [ {
//       path: '',
//       component: () => import('pages/Dashboard.vue')
//     },
//     {
//       path: 'channels/:channel',
//       component: () => import('pages/Channel.vue')
//     },
//     {
//       path: 'streams/:stream',
//       component: () => import('pages/Stream.vue'),
//       children: [{
//           path: 'single',
//           component: () => import('pages/Single.vue')
//         },
//         {
//           path: 'calibration',
//           component: () => import('pages/Calibration.vue')
//         }
//       ]
//     },
//     {
//       path: 'airflow/',
//       component: () => import('pages/Airflow.vue')
//     },
//     {
//       path: 'logbook/',
//       component: () => import('pages/Logbook.vue')
//     },
//     {
//       path: 'archiv/',
//       component: () => import('pages/Archiv.vue')
//     },
//     {
//       path: 'monitoring/',
//       component: () => import('pages/Monitoring.vue')
//     }
//   ]
// }

const uv = {
  path: '/uv',
  component: () => import('layouts/UvLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('pages/Dashboard.vue')
    },
    {
      path: 'streams/:stream',
      component: () => import('pages/Stream.vue'),
      children: [{
        path: 'single',
        component: () => import('pages/Single.vue')
      },
      {
        path: 'single',
        component: () => import('pages/Single.vue')
      }
      ]
    },
    {
      path: 'channels/:channel',
      component: () => import('pages/Channel.vue')
    },
    {
      path: 'calibration/:stream',
      component: () => import('pages/Calibration.vue')
    },
    {
      path: 'airflow',
      component: () => import('pages/Airflow.vue')
    },
    {
      path: 'logbook',
      component: () => import('pages/Logbook.vue')
    },
    {
      path: 'archiv',
      component: () => import('pages/Archiv.vue')
    },
    {
      path: 'monitoring',
      component: () => import('pages/Monitoring.vue')
    },
    {
      path: 'sensors',
      component: () => import('pages/Sensors.vue')
    },
    {
      path: 'update',
      component: () => import('pages/Update.vue')
    },
    {
      path: 'poweroff',
      component: () => import('pages/PowerOff.vue')
    }
  ]
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Index.vue')
    }]
  },
  uv
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
