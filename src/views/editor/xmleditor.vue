<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="11" :sm="11">
        <div id="treeEditor" :style="contentStyleObj"></div>
      </el-col>
      <el-col class="mc-ui-flex-center" style="width: 110px;">
        <el-row align="middle" justify="center">
          <el-checkbox-group v-model="checkedCities">
            <el-col style="margin-bottom: 20px; margin-top: 40px;" :xs="24">
              <el-tooltip effect="dark" content="格式化" placement="top">
                <el-checkbox label="格式化" size="mini" @change="convertRight" border></el-checkbox>
              </el-tooltip>
            </el-col>
            <el-col style="margin-bottom: 20px; margin-top: 20px;" :xs="24">
              <el-tooltip effect="dark" content="压缩" placement="top">
                <el-checkbox label="压缩" size="mini" @change="convertLeft" border></el-checkbox>
              </el-tooltip>
            </el-col>
          </el-checkbox-group>
          <el-col style="margin-bottom: 20px; margin-top: 20px;" :xs="24">
            <el-tooltip effect="dark" content="两边内容交换" placement="top">
              <el-button icon="el-icon-sort" style="transform: rotate(90deg);" circle @click="convertContent"
                         type="info">
              </el-button>
            </el-tooltip>
          </el-col>
          <el-col style="margin-top: 20px; margin-bottom: 20px;" :xs="24">
            <el-tooltip effect="dark" content="生成没有子元素的元素作为完整标记对<a></a>而不是自闭标签<a/>" placement="top">
              <el-checkbox v-model="syncData" label="fullTag" size="mini" border></el-checkbox>
            </el-tooltip>
          </el-col>
          <el-col style="margin-top: 20px; margin-bottom: 20px;" :xs="24">
            <el-tooltip effect="dark" content="拷贝左边内容至剪切板" placement="top">
              <el-button @click="copy" circle type="success" icon="el-icon-document-copy">
              </el-button>
            </el-tooltip>
          </el-col>
          <el-col style="margin-top: 20px; margin-bottom: 20px;" :xs="24">
            <el-select v-model="theme" placeholder="请选择" @change="setTheme">
              <el-option label="白色" value="vs"></el-option>
              <el-option label="黑色" value="vs-dark"></el-option>
            </el-select>
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
  import * as monaco from 'monaco-editor';
  import 'jsoneditor/dist/jsoneditor.min.css'
  import convert from 'xml-js';

  export default {
    data() {
      return {
        codeEditor: null,
        treeEditor: null,
        syncData: true,
        checkedCities: ["格式化"],
        theme: "vs-dark",
        contentStyleObj: {
          height: ''
        }
      }
    },
    mounted: function () {
      let treeEditorElement = document.getElementById('treeEditor')
      let codeEditorElement = document.getElementById('codeEditor')
      let xml = "<sites>\n" +
        "    <site>\n" +
        "        <name>追风的博客</name>\n" +
        "        <url>https://www.xwintop.com</url>\n" +
        "    </site>\n" +
        "    <site>\n" +
        "        <name>xJavaFxTool</name>\n" +
        "        <url>https://gitee.com/xwintop/xJavaFxTool</url>\n" +
        "    </site>\n" +
        "    <site>\n" +
        "    <name>xVueTool</name>\n" +
        "        <url>https://gitee.com/xwintop/xVueTool</url>\n" +
        "    </site>\n" +
        "</sites>";
      let treeOptions = {
        value: xml,
        language: 'xml',  // 这里以sql为例
        theme: "vs-dark",
      };
      this.treeEditor = monaco.editor.create(treeEditorElement, treeOptions);
      this.codeEditor = monaco.editor.create(codeEditorElement, treeOptions);
      this.treeEditor.onDidChangeModelContent((e) => {
          if (this.checkedCities.length > 0) {
            if (this.checkedCities[0] == "格式化") {
              this.convertRight();
            } else {
              this.convertLeft();
            }
        }
      });
      // this.treeEditor.dispose(); // 使用完后销毁
    },
    methods: {
      convertRight() {
        if (this.checkedCities.length > 1) {
          this.checkedCities.shift();
        }
        // this.codeEditor.setValue(this.treeEditor.getValue());
        try {
          let xmlJs = convert.xml2js(this.treeEditor.getValue(), {compact: true});
          this.codeEditor.setValue(convert.js2xml(xmlJs, {
            compact: true,
            spaces: 4,
            fullTagEmptyElement: this.syncData
          }));
        } catch (e) {
          this.$message('格式化出错：' + e.toString());
        }
      },
      convertLeft() {
        if (this.checkedCities.length > 1) {
          this.checkedCities.shift();
        }
        // this.treeEditor.setValue(this.codeEditor.getValue());
        try {
          let xmlJs = convert.xml2js(this.treeEditor.getValue(), {compact: true});
          this.codeEditor.setValue(convert.js2xml(xmlJs, {
            compact: true,
            spaces: 0,
            fullTagEmptyElement: this.syncData
          }));
        } catch (e) {
          this.$message('格式化出错：' + e.toString());
        }
      },
      convertContent() {
        let codeEditorJson = this.codeEditor.getValue();
        this.codeEditor.setValue(this.treeEditor.getValue());
        this.treeEditor.setValue(codeEditorJson);
      },
      copy() {
        this.$copyText(this.treeEditor.getValue()).then((e) => {
          this.$message('已成功复制到剪切板');
        }, (e) => {
          this.$message('复制到剪切板失败！' + e.toString());
        })
      },
      setTheme() {
        monaco.editor.setTheme(this.theme);
      },
      getHeight() {
        this.contentStyleObj.height = window.innerHeight - 100 + 'px';
      }
    },
    computed: {},
    created() {
      window.addEventListener('resize', this.getHeight);
      this.getHeight()
    },

    destroyed() {
      window.removeEventListener('resize', this.getHeight)
    }
  }
</script>
