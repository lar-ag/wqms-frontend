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

const routes = [
  {
    path: '/',
    component: () => import('layouts/Analyser.vue'),
    redirect: '/dashboard',
    meta: { title: 'Status', icon: 'dashboard', permission: [ 'level1' ] },
    children: [
      {
        path: '/dashboard',
        meta: { title: 'Status', icon: 'dashboard', permission: [ 'level1' ] },
        component: () => import('pages/Dashboard.vue')
      },
      {
        path: 'streams',
        meta: { title: 'Stream', icon: '', permission: [ 'level1' ] },
        component: () => import('pages/Streams.vue')
      },
      {
        path: 'stream/:stream',
        component: () => import('pages/Stream.vue'),
        children: [
          {
            path: 'setting',
            component: () => import('pages/StreamSetting.vue')
          },
          {
            path: 'extra',
            component: () => import('pages/StreamExtra.vue')
          }
        ]
      },
      {
        path: 'single/:stream',
        component: () => import('pages/Single.vue'),
        children: [
          {
            path: 'setting',
            component: () => import('pages/SingleSetting.vue')
          },
          {
            path: 'process',
            component: () => import('pages/SingleProcess.vue')
          },
          {
            path: 'archiv',
            component: () => import('pages/SingleSetting.vue')
          }
        ]
      },
      {
        path: 'calibration/:stream',
        component: () => import('pages/Calibration.vue'),
        children: [
          {
            path: 'setting',
            component: () => import('pages/CalibrationSetting.vue')
          },
          {
            path: 'process',
            component: () => import('pages/CalibrationProcess.vue')
          },
          {
            path: 'archiv',
            component: () => import('pages/CalibrationArchiv.vue')
          }
        ]
      },
      {
        path: 'channels/:channel',
        component: () => import('pages/Channel.vue')
      },
      {
        path: 'autosampler',
        component: () => import('pages/Autosampler.vue')
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
        component: () => import('pages/Sensors.vue'),
        children: [
          {
            path: ':sensor/setting',
            component: () => import('pages/SensorSetting.vue')
          }
        ]
      },
      {
        path: 'signals',
        component: () => import('pages/Signals.vue')
      },
      {
        path: 'packages',
        component: () => import('pages/PackageManager.vue')
      },
      {
        path: 'manual',
        redirect: '/manual/user',
        meta: { title: 'Manual', icon: 'manual', permission: [ 'level1' ] },
        children: [
          {
            path: 'user',
            meta: { title: 'User manual', icon: 'manual', permission: [ 'level1' ] },
            component: () => import('pages/UserManual.vue')
          },
          {
            path: 'service',
            meta: { title: 'Service manual', icon: 'manual', permission: [ 'level4' ] },
            component: () => import('pages/ServiceManual.vue')
          }
        ]

      },
       {
        path: 'poweroff',
        component: () => import('pages/PowerOff.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
