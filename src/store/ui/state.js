export default {
  drawerState: true,
  menuList: [
    {
      link: '/',
      name: 'status',
      icon: 'dashboard',
      label: 'Status'
    },
    {
      link: '/uv/archiv',
      name: 'archiv',
      icon: 'date_range',
      label: 'Archiv'
    },
    {
      link: '/uv/logbook',
      name: 'logbook',
      icon: 'view_day',
      label: 'Logbook'
    },
    {
      link: '/uv/airflow',
      name: 'airflow',
      icon: 'blur_linear',
      label: 'Airflow'
    },
    {
      link: '/uv/monitoring',
      name: 'monitoring',
      icon: 'border_inner',
      label: 'Monitoring'
    },
    {
      link: '/uv/update',
      name: 'update',
      icon: 'system_update',
      label: 'Update'
    },
    {
      link: '/uv/service',
      name: 'service',
      icon: 'build',
      label: 'Service'
    },
    {
      link: '/uv/setting',
      name: 'settings',
      icon: 'settings',
      label: 'Settings'
    },
    {
      link: '/uv/poweroff',
      name: 'poweroff',
      icon: 'power_settings_new',
      label: 'Power off'
    }
  ],
  dashboard: {
    airflow: true,
    humidity: true,
    pressure: true,
    sensors: {
      ndir1: true,
      ndir2: true,
      no: true,
      zirox: true,
    },
    uv_lamp: true,
    autosampler: false
  }
}
