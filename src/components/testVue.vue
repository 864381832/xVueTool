<template>
  <div class="main-container">
    <div class="form-horizontal">
      <template v-for='(subject,subjectIndex) in question'>
        <div class="form-group">
          <label class="col-sm-1 control-label">选题:</label>
          <label class="col-sm-2 control-label red remove-pad" v-if='$index>0' @click='deleteSubjectFun(subjectIndex)'>删除选题</label>
        </div>
        <div class="form-group">
          <label class="col-sm-1 control-label">标题:</label>
          <div class="col-sm-2">
            <input type="text" class="form-control" placeholder="未填写" v-model='subject.title'>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-1 control-label">正确答案:</label>
          <div class="col-sm-1">
            <input type="text" class="form-control answer" placeholder="未填写" readonly="true" v-model='subject.answer'>
          </div>
          <span class="prompting-message">请在以下选项中,勾选出正确答案</span>
        </div>
        <div class="form-group">
          <label class="col-sm-1 control-label">分值:</label>
          <div class="col-sm-1">
            <input type="number" min="1" max="100" class="form-control" v-model='subject.score' @keyup='scoreFun(subjectIndex)'>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-1 control-label">选项:</label>
        </div>
        <div class="form-group">
          <div class="col-sm-3 mg1">
            <ul class="upper-latin">
              <template v-for='(opdt,opdtIndex) in subject.optionsData'>
                <li>
                  <!--<input type="checkbox" class="checkbox-answer" v-model='subject.answer' value='{{opdt.id}}'>-->
                  <input type="checkbox" class="checkbox-answer" v-model='subject.answer'>
                  <div class="options-div">
                    <input type="text" class="form-control options-input" placeholder="未填写" v-model='opdt.options'>
                    <label class="control-label blue remove-pad" v-if='opdtIndex==subject.optionsData.length-1' @click='addNewOptionsFun(subjectIndex,opdtIndex)'>新增选项</label>
                    <label class="control-label red remove-pad" v-if='opdtIndex>0' @click='deleteOptionsFun(subjectIndex,opdtIndex)'>删除选项</label>
                  </div>
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-1 col-sm-4">
            <button class="blue boder" @click='addNewSubjectFun(subjectIndex)'>新增选题</button>
          </div>
        </div>
        <div class='split-line'></div>
      </template>
      <div class="form-group">
        <div class="col-sm-offset-1 col-sm-4">
          <button class="btn btn-primary" @click='saveQuestionFun'>提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'test-vue',
    components: {
    },
    props: {},
    methods: {
      // 新增选题
      addNewSubjectFun: function(index) {
        var subjectDataMes = {};
        subjectDataMes.id = index+2;
        subjectDataMes.title = '';
        subjectDataMes.answer =[];
        subjectDataMes.score = 10;
        subjectDataMes.optionsData = [{
          id: 'A',
          options: ''
        }];
        this.question.push(subjectDataMes);
      },
      // 判断每个题目的分值不能小于零且不能大于一百
      scoreFun:function(index){
        if(this.question[index].score<0){
          this.question[index].score=10;
          this.$root.tipStr = '选题"'+this.question[index].title+'"的分值不能小于零';
        }else if(this.question[index].score>100){
          this.question[index].score=10;
          this.$root.tipStr = '选题"'+this.question[index].title+'"的分值不能大于一百';
        }
      },
      // 删除选题
      deleteSubjectFun: function(index) {
        this.question.splice(index, 1);
      },
      // 新增选项
      addNewOptionsFun: function(subjectIndex, opdtIndex) {
        var optionsDataMes = {};
        optionsDataMes.id =String.fromCharCode(64 + (opdtIndex+2)); //将id从数字转换成大写字母.
        optionsDataMes.options = '';
        var subjectDataMes = this.question[subjectIndex].optionsData;
        subjectDataMes.push(optionsDataMes);
      },
      // 删除选项
      deleteOptionsFun: function(subjectIndex, opdtIndex) {
        var subjectDataMes = this.question[subjectIndex].optionsData;
        subjectDataMes.splice(opdtIndex, 1);
      },
      saveQuestionFun:function(){
        this.question;debugger;
      }
    },
    ready: function() {
    },
    data() {
      return {
        question: [{
          id: 1,
          title: '',
          answer: [],
          score:10,
          optionsData: [{
            id: 'A',
            options: ''
          }],
        }],
      }
    }
  }
</script>
<style>
  .mg1 {
    padding: 8px 0 0 113px;
  }
  .upper-latin {
    list-style-type: upper-latin;
  }
  input.form-control.options-input {
    display: inline-block;    /*width: 499.16px;*/
    width: 100%;
  }
  .boder {
    border: 1px solid;
    background-color: #fff;
    border-radius: 4px;
    line-height: 34px;
    padding: 0 15px;
  }

  .blue {
    color: #2689cd;
    text-align: center;
  }

  label.red {
    color: #c9302c;
  }

  label.remove-pad {
    /*padding: 10px 20px 10px 15px;*/
    line-height: 34px;
    text-align: left;
  }

  .split-line {
    height: 10px;
    border-top: 2px dashed #E7E8EC;
    width: 900px;
  }
  .prompting-message {
    line-height: 34px;
  }
  .options-div {
    margin-left: 26px;
    margin-top: -25px;
    padding-bottom: 25px;
  }
</style>
