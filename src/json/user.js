const user = {
  userName: 'admin',
  password: 'admin',
  roles: [],
  routers: [
    {
      path: '/',
      name: 'Home',
      enName: 'Home',
      component: 'home',
      redirect: 'index',
      children: [
        {
          id: 1,
          path: 'index',
          name: '首页',
          enName: 'Home',
          icon: 'el-icon-s-home',
          parentId: 0,
          fixed: true,
          component: 'index',
          meta: {fixed: true}
        }
      ]
    },
    {
      id: 5,
      path: '/code-tools',
      name: '编码工具',
      enName: 'codeTools',
      icon: 'fa fa-cogs',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 501,
          path: 'base64',
          name: 'Base64加密解密',
          enName: 'Base64Tool',
          icon: 'fa fa-table',
          parentId: 5,
          component: 'code-tools/base64'
        }, {
          id: 502,
          path: 'md5',
          name: 'md5加密',
          enName: 'md5Tool',
          icon: 'fa fa-table',
          parentId: 5,
          component: 'code-tools/md5'
        }, {
          id: 503,
          path: 'time-tool',
          name: '时间转换',
          enName: 'TimeTool',
          icon: 'fa fa-table',
          parentId: 5,
          component: 'code-tools/time-tool'
        }
      ]
    },
    {
      id: 9,
      path: '/editor',
      name: '编辑器',
      enName: 'Editor',
      icon: 'fa fa-pencil-square',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 901,
          path: 'code',
          name: '代码编辑器',
          enName: 'Code',
          icon: 'fa fa-code',
          parentId: 9,
          component: 'editor/code'
        },
        {
          id: 902,
          path: 'markdown',
          name: 'markdown',
          enName: 'markdown',
          icon: 'dd markdown',
          parentId: 9,
          component: 'editor/markdown'
        },
        {
          id: 903,
          path: 'jsoneditor',
          name: 'json编辑器',
          enName: 'jsonEditor',
          icon: 'fa fa-code',
          parentId: 9,
          component: 'editor/jsoneditor'
        },
        {
          id: 904,
          path: 'xmleditor',
          name: 'xml编辑器',
          enName: 'xmlEditor',
          icon: 'fa fa-code',
          parentId: 9,
          component: 'editor/xmleditor'
        },
        {
          id: 905,
          path: 'crontab',
          name: 'Cron编辑器',
          enName: 'CronTab',
          icon: 'fa fa-code',
          parentId: 9,
          component: 'editor/crontab'
        }
      ]
    },
    {
      id: 16,
      path: '/settings',
      name: 'Settings',
      enName: 'Settings',
      icon: 'fa fa-cog',
      parentId: 0,
      component: 'home',
      type: 'click',
      children: [
        {
          id: 17,
          path: 'settings',
          name: '系统设置',
          enName: 'Settings',
          icon: 'fa fa-cog',
          parentId: 16,
          type: 'click'
        }
      ]
    },
    {
      id: 20,
      path: '/error',
      name: '错误页面',
      enName: 'Error Page',
      icon: 'fa fa-bug',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 21,
          path: '401',
          name: '401 页面',
          enName: '401 Page',
          icon: 'fa fa-table',
          parentId: 20,
          component: 'error/401'
        },
        {
          id: 22,
          path: '404',
          name: '404 页面',
          enName: '404 Page',
          icon: 'fa fa-wpforms',
          parentId: 20,
          component: 'error/404'
        },
        {
          id: 23,
          path: '500',
          name: '500 页面',
          enName: '500 Page',
          icon: 'fa fa-wpforms',
          parentId: 20,
          component: 'error/500'
        }
      ]
    },
    {
      id: 30,
      path: 'https://www.xwintop.com',
      name: '链接',
      enName: 'Link',
      icon: 'fa fa-link',
      type: 'external',
      parentId: 0,
      children: [
        {
          id: 31,
          path: 'https://www.xwintop.com',
          name: '追风的博客',
          enName: 'External Link',
          icon: 'fa fa-external-link-square',
          parentId: 30,
          type: 'external'
        }
      ]
    }
  ]
}

export default user
