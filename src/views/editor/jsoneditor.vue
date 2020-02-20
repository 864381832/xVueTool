<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="11" :sm="11">
        <div id="treeEditor" :style="contentStyleObj"></div>
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
          <el-col style="margin-bottom: 20px; margin-top: 20px;" :xs="24">
            <el-tooltip effect="dark" content="两边内容交换" placement="top">
              <el-button icon="el-icon-sort" style="transform: rotate(90deg);" circle @click="convertContent" type="info">
              </el-button>
            </el-tooltip>
          </el-col>
          <el-col style="margin-top: 20px; margin-bottom: 20px;" :xs="24">
            <el-tooltip effect="dark" content="两边数据保持同步" placement="top">
              <el-checkbox v-model="syncData" label="同步" size="mini"></el-checkbox>
            </el-tooltip>
          </el-col>
          <el-col style="margin-top: 20px; margin-bottom: 20px;" :xs="24">
            <el-tooltip effect="dark" content="拷贝左边内容至剪切板" placement="top">
              <el-button @click="copy" circle type="success" icon="el-icon-document-copy">
              </el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="11" :sm="11">
        <div id="codeEditor" :style="contentStyleObj"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import 'jsoneditor/dist/jsoneditor.min.css'
  import jsoneditor from 'jsoneditor';

  export default {
    data() {
      return {
        codeEditor: null,
        treeEditor: null,
        syncData: true,
        contentStyleObj:{
          height:''
        }
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
      let treeOptions = {
        mode: 'tree',
        modes: ['code', 'tree'],
        onError: (err) => {
          this.$message(err.toString());
        },
        onChange: () => {
          if (this.syncData) {
            this.convertRight();
          }
        }
      }
      let codeOptions = {
        mode: 'code',
        modes: ['code', 'tree'],
        onError: (err) => {
          this.$message(err.toString());
        },
        onChange: () => {
          if (this.syncData) {
            this.convertLeft();
          }
        }
      }
      this.treeEditor = new jsoneditor(treeEditorElement, treeOptions, json);
      this.codeEditor = new jsoneditor(codeEditorElement, codeOptions, json);
    },
    methods: {
      convertRight() {
        this.codeEditor.update(this.treeEditor.get());
      },
      convertLeft() {
        this.treeEditor.update(this.codeEditor.get());
      },
      convertContent(){
        let codeEditorJson = this.codeEditor.get();
        this.codeEditor.update(this.treeEditor.get());
        this.treeEditor.update(codeEditorJson);
      },
      copy() {
        // let oInput = document.createElement('input');
        // oInput.value = this.treeEditor.getText();
        // document.body.appendChild(oInput);
        // oInput.select(); // 选择对象;
        // document.execCommand("Copy"); // 执行浏览器复制命令
        // oInput.remove();
        this.$copyText(this.treeEditor.getText()).then((e) => {
          this.$message('已成功复制到剪切板');
        }, (e) => {
          this.$message('复制到剪切板失败！' + e.toString());
        })
      },
      getHeight(){
        this.contentStyleObj.height=window.innerHeight-100+'px';
      }
    },
    computed: {},
    created(){
      window.addEventListener('resize', this.getHeight);
      this.getHeight()
    },

    destroyed(){
      window.removeEventListener('resize', this.getHeight)
    }
  }
</script>
