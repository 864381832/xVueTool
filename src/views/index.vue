<template>
  <div>
    <el-alert title="温馨提示" type="success" class="wxts">
      <slot>
        本后台模板为静态模板，所有数据均为测试数据，均未与后台交互。如果此模板能够帮助您，烦请给本项目点个 star 谢谢。<br />
        github 地址：
        <a href="https://github.com/dongdong-cloud/dd-admin" target="_blank">https://github.com/dongdong-cloud/dd-admin</a> &nbsp;&nbsp;&nbsp;
        码云地址：
        <a href="https://gitee.com/dongdong-cloud/dd-admin" target="_blank">https://gitee.com/dongdong-cloud/dd-admin</a>
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
import echarts from "echarts";
import china from "echarts/map/json/china.json";
echarts.registerMap("china", china);
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
