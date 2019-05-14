Frontend
====



Router path
----

`@/router.js`




----

```javascript
/**
 * Async Route object：
 *
 **/
 {
  redirect: noredirect,
  name: 'router-name',
  hidden: true,
  meta: {
    title: 'title',
    icon: 'a-icon',
    keepAlive: true,
    hiddenHeaderContent: true,
  }
}
```



`{ Route }` Object

| Prop     | Function                                  | Type    | Default |
| -------- | ----------------------------------------- | ------- | ------- |
| hidden   | sidebar                                   | boolean | falase  |
| redirect | Redirect                                  | string  | -       |
| name     | Display name                              | string  | -       |
| meta     | Extra property                            | object  | {}      |



`{ Meta }` Object

| Property            | Description                                                  | Type    | Val    |
| ------------------- | ------------------------------------------------------------ | ------- | ------ |
| title               |                                                              | string  | -      |
| icon                |                                                              | string  | -      |
| keepAlive           |                                                              | boolean | false  |
| hiddenHeaderContent | * [PageHeader](https://github.com/sendya/ant-design-pro-vue/blob/master/src/components/layout/PageHeader.vue#L14) | boolean | false  |
| permission          | Access level                                                 | array   | []     |


Async route example
----

```ecmascript 6
const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'Basic layout },
    redirect: '/dashboard/analysis',
    children: [
      {
        path: '/dashboard',
        component: Layout,
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        meta: {title: 'Basic layout, icon: 'dashboard', permission: ['dashboard']},
        children: [
          {
            path: '/dashboard/analysis',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: {title: 'Analysis', permission: ['dashboard']}
          },
          {
            path: '/dashboard/monitor',
            name: 'Monitor',
            hidden: true,
            component: () => import('@/views/dashboard/Monitor'),
            meta: {title: '', permission: ['dashboard']}
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: {title: '', permission: ['dashboard']}
          }
        ]
      },

      // result
      {
        path: '/result',
        name: 'result',
        component: PageView,
        redirect: '/result/success',
        meta: { title: '', icon: 'check-circle-o', permission: [ 'result' ] },
        children: [
          {
            path: '/result/success',
            name: 'ResultSuccess',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
            meta: { title: '', hiddenHeaderContent: true, permission: [ 'result' ] }
          },
          {
            path: '/result/fail',
            name: 'ResultFail',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
            meta: { title: '', hiddenHeaderContent: true, permission: [ 'result' ] }
          }
        ]
      },
      ...
    ]
  },
]
```

> 1. `component: () => import('..') ` [Vue lazy loading](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)
> 2. '/' (index) 路由的 `children` 内
> 3. `permission`[src/store/modules/permission.js#L10](https://github.com/sendya/ant-design-pro-vue/blob/master/src/store/modules/permission.js#L10)


