<template>
  <div>
    <el-alert title="温馨提示" type="success" class="wxts">
      <slot>
        x-vue-tool 开发小工具集合web版， 项目地址：https://gitee.com/xwintop/xVueTool 如果此工具能够帮助您，烦请给本项目点个 star 谢谢。<br />
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
  </div>
</template>

<script>
// import elCol from "@/components/el-col";
export default {
  //  components: { elCol },
  data() {
    return {};
  },
  mounted() {
    this.initLineChart();
  },
  methods: {
    initLineChart: function() {
    },
  }
};
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
