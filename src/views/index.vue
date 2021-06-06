<template>
  <div>
    <el-alert title="温馨提示" type="success" class="wxts">
      <slot>
        x-vue-tool 开发小工具集合web版， 项目地址：https://gitee.com/xwintop/xVueTool 如果此工具能够帮助您，烦请给本项目点个 star 谢谢。<br/>
      </slot>
    </el-alert>

    <el-row :gutter="20" class="flex-wrap">
      <el-col :sm="12" :md="6" class="mb20">
        <el-card>
          <div class="tj-card">
            <i class="fa fa-paper-plane fa-3x color-ll"></i>
            <div class="item">
              <div class="item-title">今日浏览</div>
              <div class="item-desc">387</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="12" :md="6" class="mb20">
        <el-card>
          <div class="tj-card">
            <i class="fa fa-users fa-3x color-yh"></i>
            <div class="item">
              <div class="item-title">新用户</div>
              <div class="item-desc">86</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-for="(menus) in menuList" style="margin-bottom: 20px;">
      <el-col v-for="(menu) in menus" :span="6">
        <el-card class="box-card">
          <div slot="header">
            <el-avatar :icon="menu.icon" size='large' style="float: left;margin-right: 18px;"></el-avatar>
            <el-button type="text" @click="clickTag(menu.path)">{{ menu.name }}</el-button>
          </div>
          <div class="text item">
            {{ menu.subTitle }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      menuList: [[
        {
          path: '/code-tools/base64',
          name: 'Base64加密解密',
          subTitle: 'Base64加密解密',
          icon: 'fa fa-table'
        }, {
          path: '/code-tools/md5',
          name: 'md5加密',
          subTitle: 'md5加密',
          icon: 'fa fa-table'
        }, {
          path: '/code-tools/time-tool',
          name: '时间转换',
          subTitle: '时间转换',
          icon: 'fa fa-table'
        }, {
          name: '代码编辑器',
          subTitle: '代码编辑器',
          icon: 'fa fa-code',
          path: 'editor/code'
        }], [
        {
          name: 'markdown',
          subTitle: 'markdown',
          icon: 'dd markdown',
          path: 'editor/markdown'
        },
        {
          name: 'json编辑器',
          subTitle: 'json编辑器',
          icon: 'fa fa-code',
          path: 'editor/jsoneditor'
        },
        {
          name: 'xml编辑器',
          subTitle: 'xml编辑器',
          icon: 'fa fa-code',
          path: 'editor/xmleditor'
        },
        {
          name: 'Cron编辑器',
          subTitle: 'Cron编辑器',
          icon: 'fa fa-code',
          path: 'editor/crontab'
        }
      ]]
    }
  },
  mounted () {
  },
  methods: {
    clickTag (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.wxts {
  margin-bottom: 20px;

  a {
    color: #67c23a;
  }
}

.tj-card {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .color-ll {
    color: #34bfa3;
  }

  .color-yh {
    color: #d633ad;
  }

  .color-el {
    color: #d65e0e;
  }

  .color-sr {
    color: #f5c802;
  }

  .item {
    .item-title {
      padding: 10px;
      color: #909399;
    }

    .item-desc {
      padding: 10px;
      font-size: 28px;
      font-weight: bolder;
    }
  }
}
</style>
