<template>
  <dir>
    <h4>Base64加密、解密</h4>
    <el-input v-model="input" rows="10" @input="inputChange" placeholder="请输入需要编码的字符" type="textarea">
    </el-input>
    <el-row style="margin-top: 10px; margin-bottom: 10px;">
      <el-radio v-model="encryptType" label="1" border size="medium" @change="jiami">加密</el-radio>
      <el-radio v-model="encryptType" label="2" border size="medium" @change="jiemi">解密</el-radio>
      <!--      <el-button round type="primary" @click="jiami">加密</el-button>-->
      <!--      <el-button round type="primary" @click="jiemi">解密</el-button>-->
      <el-button round type="success" @click="jiaohuanneirong">交换内容</el-button>
      <el-button @click="output='',input=''" type="danger" round>清空结果
      </el-button>
      <el-select style="margin-left: 10px; width: 10%;" v-model="select" placeholder="编码">
        <el-option label="UTF-8" value="1">
        </el-option>
        <el-option label="GB2312" value="2">
        </el-option>
      </el-select>
    </el-row>
    <el-input v-model="output" rows="10" placeholder="转换后的内容" type="textarea">
    </el-input>
  </dir>
</template>
<script>
  import Base64 from 'crypto-js/enc-base64';
  import Utf8 from 'crypto-js/enc-utf8';

  export default {
    data() {
      return {
        encryptType: '1',
        input: '',
        output: '',
        select: 'UTF-8',
      }
    },
    methods: {
      inputChange() {
        if (this.encryptType == '1') {
          this.jiami();
        } else {
          this.jiemi();
        }
      },
      jiami() {
        try {
          this.output = Base64.stringify(Utf8.parse(this.input));
        } catch (e) {
          this.$message('加密失败！' + e.toString());
        }
      },
      jiemi() {
        try {
          this.output = Utf8.stringify(Base64.parse(this.input));
        } catch (e) {
          this.$message('解密失败！' + e.toString());
        }
      },
      jiaohuanneirong() {
        let s = this.input;
        this.input = this.output;
        this.output = s;
        this.$message('内容交换成功！');
      }
    },
  };
</script>
