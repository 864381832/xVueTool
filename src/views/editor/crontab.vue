<template>
  <div>
    <el-row style="margin-top: 10px; margin-bottom: 10px;">
      <el-input v-model="expression" placeholder class="inp"></el-input>
      <el-button type="primary" @click="showDialog">复制 cron</el-button>
    </el-row>
    <vcrontab @hide="showCron=false" @fill="crontabFill" :expression="expression"></vcrontab>
  </div>
</template>

<script>
  import vcrontab from "@/components/crontab/Crontab.vue";

  export default {
    components: {vcrontab},
    data() {
      return {
        input: "",
        expression: "* * * * * ?",
        showCron: false
      };
    },
    methods: {
      crontabFill(value) {
        this.expression = value;
      },
      showDialog() {
        this.$copyText(this.expression).then((e) => {
          this.$message('已成功复制到剪切板');
        }, (e) => {
          this.$message('复制到剪切板失败！' + e.toString());
        })
      }
    }
  };
</script>

<style>
  .inp {
    width: 300px !important;
    margin-right: 20px;
  }
</style>




