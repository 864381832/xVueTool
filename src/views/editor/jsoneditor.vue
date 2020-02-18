<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="11" :sm="11">
        <div id="treeEditor" style="height: 100%;"></div>
      </el-col>
      <el-col class="mc-ui-flex-center" style="width: 60px;">
        <el-row align="middle" justify="center">
          <el-col style="margin-bottom: 20px; margin-top: 40px;" :xs="24">
            <el-tooltip effect="dark" content="拷贝至右边" placement="top">
              <el-button icon="el-icon-d-arrow-right" circle @click="convertRight" type="info">
              </el-button>
            </el-tooltip>
          </el-col>
          <el-col style="margin-bottom: 20px; margin-top: 20px;" :xs="24">
            <el-tooltip effect="dark" content="拷贝至左边" placement="top">
              <el-button icon="el-icon-d-arrow-left" circle @click="convertLeft" type="info">
              </el-button>
            </el-tooltip>
          </el-col>
          <el-col style="margin-top: 20px; margin-bottom: 20px;" :xs="24">
            <el-tooltip effect="dark" content="拷贝至剪切板" placement="top">
              <el-button @click="copy" circle type="success" icon="el-icon-document-copy">
              </el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="11" :sm="11">
        <div id="codeEditor" style="height: 100%;"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {Message} from 'element-ui';
  import 'jsoneditor/dist/jsoneditor.min.css'
  import jsoneditor from 'jsoneditor';

  export default {
    data() {
      return {
        codeEditor: null,
        treeEditor: null
      }
    },
    mounted: function () {
      let treeEditorElement = document.getElementById('treeEditor')
      let codeEditorElement = document.getElementById('codeEditor')
      let json = {
        "Array": [1, 2, 3],
        "Boolean": true,
        "Null": null,
        "Number": 123,
        "Object": {"a": "b", "c": "d"},
        "String": "Hello World",
      };
      let options = {
        mode: 'tree',
        modes: ['code', 'tree'],
        onError: function (err) {
          Message(err.toString());
          // this.$message('内容交换成功！');
        }
      }
      let options2 = {
        mode: 'code',
        modes: ['code', 'tree'],
        onError: function (err) {
          Message(err.toString());
        }
      }
      this.treeEditor = new jsoneditor(treeEditorElement, options, json);
      this.codeEditor = new jsoneditor(codeEditorElement, options2, json);
    },
    methods: {
      convertRight() {
        this.codeEditor.update(this.treeEditor.get());
      },
      convertLeft() {
        this.treeEditor.update(this.codeEditor.get());
      },
      copy() {
        // let oInput = document.createElement('input');
        // oInput.value = this.treeEditor.getText();
        // document.body.appendChild(oInput);
        // oInput.select(); // 选择对象;
        // document.execCommand("Copy"); // 执行浏览器复制命令
        // oInput.remove();
        this.$copyText(this.treeEditor.getText()).then(function (e) {
          Message('已成功复制到剪切板');
        }, function (e) {
          Message('复制到剪切板失败！' + e.toString());
        })
      }
    },
    computed: {}
  }
</script>
