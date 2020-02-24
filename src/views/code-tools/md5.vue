<template>
  <dir>
    <h4>md5加密</h4>
    <el-input v-model="input" rows="10" @input="inputChange" placeholder="请输入需要加密的字符串" type="textarea">
    </el-input>
    <el-row style="margin-top: 20px; margin-bottom: 20px;">
      <el-button @click="zhantie" type="success" round icon="el-icon-s-order">粘贴内容</el-button>
      <el-button @click="input='',outputMd5_32_u='',outputMd5_32_l='',outputMd5_16_u='',outputMd5_16_l=''" type="danger"
                 round icon="el-icon-delete">清空结果
      </el-button>
    </el-row>
    <el-row :gutter="30" style="margin-top: 20px; margin-bottom: 20px;">
      <el-col :span="12">
        <el-input placeholder="" v-model="outputMd5_32_u">
          <template slot="prepend">MD5(32位)大写</template>
          <el-button @click="copy(outputMd5_32_u)"
                     style="background-color: rgb(95, 184, 120); color: rgb(255, 255, 255);" slot="append"
                     icon="el-icon-document-copy">复制
          </el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="" v-model="outputMd5_32_l">
          <template slot="prepend">MD5(32位)小写</template>
          <el-button @click="copy(outputMd5_32_l)"
                     style="background-color: rgb(95, 184, 120); color: rgb(255, 255, 255);" slot="append"
                     icon="el-icon-document-copy">复制
          </el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="30" style="margin-top: 20px; margin-bottom: 20px;">
      <el-col :span="12">
        <el-input placeholder="" v-model="outputMd5_16_u">
          <template slot="prepend">MD5(16位)大写</template>
          <el-button @click="copy(outputMd5_16_u)"
                     style="background-color: rgb(95, 184, 120); color: rgb(255, 255, 255);" slot="append"
                     icon="el-icon-document-copy">复制
          </el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="" v-model="outputMd5_16_l">
          <template slot="prepend">MD5(16位)小写</template>
          <el-button @click="copy(outputMd5_16_l)"
                     style="background-color: rgb(95, 184, 120); color: rgb(255, 255, 255);" slot="append"
                     icon="el-icon-document-copy">复制
          </el-button>
        </el-input>
      </el-col>
    </el-row>
  </dir>
</template>
<script>
  import CryptoJS from 'crypto-js'

  export default {
    data() {
      return {
        encryptType: '1',
        input: '',
        outputMd5_32_u: '',
        outputMd5_32_l: '',
        outputMd5_16_u: '',
        outputMd5_16_l: '',
      }
    },
    methods: {
      zhantie() {
        if (window.clipboardData) {
          let clipboardText = window.clipboardData.getData('Text');
          this.input = clipboardText;
          this.jiami();
        } else if (window.navigator) {
          // const text = navigator.clipboard.readText();
          navigator.clipboard.readText()
            .then(text => {
              this.input = text;
              this.jiami();
              // console.log('Pasted content: ', text);
            }).catch(err => {
            this.$message("粘贴内容失败：" + err.toString());
            console.error('Failed to read clipboard contents: ', err);
          });
        }
      },
      inputChange() {
        this.jiami();
      },
      jiami() {
        if (this.input == '') {
          this.outputMd5_32_u = "";
          this.outputMd5_32_l = "";
          this.outputMd5_16_u = "";
          this.outputMd5_16_l = "";
        }else {
          try {
            this.outputMd5_32_u = CryptoJS.MD5(this.input).toString().toUpperCase();
            this.outputMd5_32_l = CryptoJS.MD5(this.input).toString().toLowerCase();
            this.outputMd5_16_u = this.outputMd5_32_u.substring(8, 24);
            this.outputMd5_16_l = this.outputMd5_32_l.substring(8, 24);
          } catch (e) {
            this.$message('加密失败！' + e.toString());
          }
        }
      },
      copy(output) {
        this.$copyText(output).then((e) => {
          this.$message('已成功复制到剪切板');
        }, (e) => {
          this.$message('复制到剪切板失败！' + e.toString());
        })
      },
    },
  };
</script>
<style>
</style>
