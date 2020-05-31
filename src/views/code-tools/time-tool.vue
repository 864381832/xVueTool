<template>
  <dir>
    <h4>时间转换</h4>
    <el-row :gutter="30" style="margin-top: 20px; margin-bottom: 20px;">
      <el-col :span="12">
        <el-input placeholder="" v-model="nowTime" readonly>
          <template slot="prepend">当前时间戳</template>
          <el-button @click="tingzhi()"
                     style="background-color: rgb(95, 184, 120); color: rgb(255, 255, 255);" slot="append"
                     icon="el-icon-document-copy">{{ nowTimeButton }}
          </el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="" v-model="nowTimeFormat" readonly>
          <template slot="prepend">格式化</template>
          <el-button @click="copy(nowTimeFormat)"
                     style="background-color: rgb(95, 184, 120); color: rgb(255, 255, 255);" slot="append"
                     icon="el-icon-document-copy">复制
          </el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="30" style="margin-top: 20px; margin-bottom: 20px;">
      <el-col :span="10">
        <el-input placeholder="" v-model="timeString" @input="convertDateToString">
          <template slot="prepend">时间戳</template>
          <el-button @click="copy(timeString)"
                     style="background-color: rgb(95, 184, 120); color: rgb(255, 255, 255);" slot="append"
                     icon="el-icon-document-copy">复制
          </el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="timeFormatValue" filterable
                   allow-create
                   default-first-option placeholder="请选择" @change="convertDateToString">
          <el-option
            v-for="item in timeFormatOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <el-input placeholder="" v-model="timeStringFormat" @input="convertStringToDate">
          <template slot="prepend">格式化</template>
          <el-button @click="copy(timeStringFormat)"
                     style="background-color: rgb(95, 184, 120); color: rgb(255, 255, 255);" slot="append"
                     icon="el-icon-document-copy">复制
          </el-button>
        </el-input>
      </el-col>
    </el-row>
    <div class="layui-col-md9" style="margin-top: 200px">
      <fieldset class="layui-elem-field layui-field-title site-title">
        <legend><h1 name="grid">各种语言 · 获取当前时间戳</h1></legend>
      </fieldset>
      <div class="site-text">
        <div class="layui-text ">
          <table class="layui-table">
            <tbody>
            <tr>
              <td rowspan="4">Java</td>
              <td>1. System.currentTimeMillis() / 1000 <em>[ 最快 ]</em></td>
            </tr>
            <tr>
              <td>2. new Date().getTime() / 1000</td>
            </tr>
            <tr>
              <td>3. Calendar.getInstance().getTimeInMillis() / 1000</td>
            </tr>
            <tr>
              <td rowspan="3">JavaScript</td>
              <td> Math.round(new Date().getTime()/1000)</td>
            </tr>
            <tr>
              <td> Math.round(+new Date() / 1000)</td>
            </tr>
            <tr>
              <td> Math.round(Date.now() / 1000) <em>[ 其实都是一种方法 ]</em></td>
            </tr>
            <tr>
              <td>Microsoft .NET / C#</td>
              <td>epoch = (DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 10000000</td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td>SELECT unix_timestamp(now())</td>
            </tr>
            <tr>
              <td>Perl</td>
              <td>time</td>
            </tr>
            <tr>
              <td>PHP</td>
              <td>time()</td>
            </tr>
            <tr>
              <td>PostgreSQL</td>
              <td>SELECT extract(epoch FROM now())</td>
            </tr>
            <tr>
              <td>Python</td>
              <td><span>先</span> import time <span>然后</span> time.time()</td>
            </tr>
            <tr>
              <td>Ruby</td>
              <td><span>获取Unix时间戳：</span>Time.now <span>或</span> Time.new<br> <span>显示Unix时间戳：</span>Time.now.to_i</td>
            </tr>
            <tr>
              <td>SQL Server</td>
              <td>SELECT DATEDIFF(s, '1970-01-01 00:00:00', GETUTCDATE())</td>
            </tr>
            <tr>
              <td>Unix / Linux</td>
              <td>date +%s</td>
            </tr>
            <tr>
              <td>VBScript / ASP</td>
              <td>DateDiff("s", "01/01/1970 00:00:00", Now())</td>
            </tr>
            <tr>
              <td> Swift</td>
              <td>NSDate().timeIntervalSince1970</td>
            </tr>
            <tr>
              <td>Go</td>
              <td>import (<br> &nbsp;&nbsp;"time"<br> )<br> int32(time.Now().Unix())</td>
            </tr>
            <tr>
              <td> 其他操作系统<br> <span style="font-weight:normal;font-size:12px;">(如果Perl被安装在系统中)</span></td>
              <td><span>命令行状态：</span>perl -e "print time"</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <fieldset class="layui-elem-field layui-field-title site-title">
        <legend><h1 name="grid">如何在不同编程语言中实现Unix时间戳(<i>Unix timestamp</i>) → 普通时间？</h1></legend>
      </fieldset>
      <div class="site-text">
        <div class="layui-text ">
          <table class="layui-table">
            <tbody>
            <tr>
              <td>Java</td>
              <td>String date = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(new java.util.Date(<u>Unix
                timestamp</u> * 1000))
              </td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td><span>先</span> var unixTimestamp = new Date(<u>Unix timestamp</u> * 1000) <span>然后</span> commonTime =
                unixTimestamp.toLocaleString()
              </td>
            </tr>
            <tr>
              <td>Linux</td>
              <td>date -d @<u>Unix timestamp</u></td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td>from_unixtime(<u>Unix timestamp</u>)</td>
            </tr>
            <tr>
              <td>Perl</td>
              <td><span>先</span> my $time = <u>Unix timestamp</u> <span>然后</span> my ($sec, $min, $hour, $day, $month,
                $year) = (localtime($time))[0,1,2,3,4,5,6]
              </td>
            </tr>
            <tr>
              <td>PHP</td>
              <td>date('r', <u>Unix timestamp</u>)</td>
            </tr>
            <tr>
              <td>PostgreSQL</td>
              <td>SELECT TIMESTAMP WITH TIME ZONE 'epoch' + <u>Unix timestamp</u>) * INTERVAL '1 second';</td>
            </tr>
            <tr>
              <td>Python</td>
              <td><span>先</span> import time <span>然后</span> time.gmtime(<u>Unix timestamp</u>)</td>
            </tr>
            <tr>
              <td>Ruby</td>
              <td>Time.at(<u>Unix timestamp</u>)</td>
            </tr>
            <tr>
              <td>SQL Server</td>
              <td>DATEADD(s, <u>Unix timestamp</u>, '1970-01-01 00:00:00')</td>
            </tr>
            <tr>
              <td>VBScript / ASP</td>
              <td>DateAdd("s", <u>Unix timestamp</u>, "01/01/1970 00:00:00")</td>
            </tr>
            <tr>
              <td> 其他操作系统<br> <span style="font-weight:normal;font-size:12px;">(如果Perl被安装在系统中)</span></td>
              <td><span>命令行状态：</span>perl -e "print scalar(localtime(<u>Unix timestamp</u>))"</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <fieldset class="layui-elem-field layui-field-title site-title">
        <legend><h1 name="grid">如何在不同编程语言中实现普通时间 → Unix时间戳(<i>Unix timestamp</i>)？</h1></legend>
      </fieldset>
      <div class="site-text">
        <div class="layui-text ">
          <table class="layui-table">
            <tbody>
            <tr>
              <td>Java</td>
              <td>long epoch = new java.text.SimpleDateFormat("<u>dd/MM/yyyy HH:mm:ss</u>").parse("01/01/1970
                01:00:00");
              </td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>var commonTime = new Date(Date.UTC(<u>year</u>, <u>month</u> - 1, <u>day</u>, <u>hour</u>,
                <u>minute</u>, <u>second</u>))
              </td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td> SELECT unix_timestamp(<u>time</u>)<br> <span>时间格式: YYYY-MM-DD HH:MM:SS 或 YYMMDD 或 YYYYMMDD</span>
              </td>
            </tr>
            <tr>
              <td>Perl</td>
              <td><span>先</span> use Time::Local <span>然后</span> my $time = timelocal($sec, $min, $hour, $day, $month,
                $year);
              </td>
            </tr>
            <tr>
              <td>PHP</td>
              <td>mktime(<u>hour</u>, <u>minute</u>, <u>second</u>, <u>month</u>, <u>day</u>, <u>year</u>)</td>
            </tr>
            <tr>
              <td>PostgreSQL</td>
              <td>SELECT extract(epoch FROM date('<u>YYYY-MM-DD HH:MM:SS</u>'));</td>
            </tr>
            <tr>
              <td>Python</td>
              <td><span>先</span> import time <span>然后</span> int(time.mktime(time.strptime('<u>YYYY-MM-DD HH:MM:SS</u>',
                '%Y-%m-%d %H:%M:%S')))
              </td>
            </tr>
            <tr>
              <td>Ruby</td>
              <td>Time.local(<u>year</u>, <u>month</u>, <u>day</u>, <u>hour</u>, <u>minute</u>, <u>second</u>)</td>
            </tr>
            <tr>
              <td>SQL Server</td>
              <td>SELECT DATEDIFF(s, '1970-01-01 00:00:00', <u>time</u>)</td>
            </tr>
            <tr>
              <td>Unix / Linux</td>
              <td>date +%s -d"Jan 1, 1970 00:00:01"</td>
            </tr>
            <tr>
              <td>VBScript / ASP</td>
              <td>DateDiff("s", "01/01/1970 00:00:00", <u>time</u>)</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </dir>
</template>
<script>
  import dateFormat from 'date-format';

  export default {
    data() {
      return {
        nowTime: 0,
        nowTimeFormat: '',
        nowTimeButton: '停止',
        nowTimeIntId: null,
        timeString: new Date().getTime(),
        timeStringFormat: dateFormat.asString("yyyy-MM-dd hh:mm:ss", new Date()),
        timeFormatOptions: [{
          value: "yyyy-MM-dd hh:mm:ss",
          label: "yyyy-MM-dd hh:mm:ss"
        }, {
          value: "yyyy-MM-dd hh:mm:ss.SSS",
        }, {
          value: "yyyy年MM月dd日hh时mm分ss秒",
        }, {
          value: "yyyy-MM-dd",
        }, {
          value: "yyyy年MM月dd日",
        }, {
          value: "hh:mm:ss",
        }],
        timeFormatValue: 'yyyy-MM-dd hh:mm:ss'
      }
    },
    mounted: function () {
      this.startNowTime();
    },
    methods: {
      tingzhi() {
        if ('停止' == this.nowTimeButton) {
          clearInterval(this.nowTimeIntId);
          this.nowTimeButton = '开始';
        } else {
          this.startNowTime();
          this.nowTimeButton = '停止';
        }
      },
      convertDateToString() {
        try {
          this.timeStringFormat = dateFormat.asString(this.timeFormatValue, new Date(parseInt(this.timeString)));
        } catch (e) {
          this.$message('格式化转换异常：' + e.toString());
        }
      },
      convertStringToDate() {
        try {
          this.timeString = dateFormat.parse(this.timeFormatValue, this.timeStringFormat).getTime();
        } catch (e) {
          this.$message('格式化转换异常：' + e.toString());
        }
      },
      startNowTime() {
        this.nowTimeIntId = setInterval(() => {
          let nowDate = new Date();
          this.nowTime = nowDate.getTime();
          this.nowTimeFormat = dateFormat.asString("yyyy-MM-dd hh:mm:ss", nowDate);
        }, 1000);
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
  .site-text {
    position: relative;
  }
  .layui-table {
    width: 100%;
    background-color: #fff;
    color: #666;
  }
  .layui-table, .layui-table-view {
    margin: 10px 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .layui-text {
    line-height: 22px;
    font-size: 14px;
    color: #666;
  }
  .layui-table tr {
    transition: all .3s;
    -webkit-transition: all .3s;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .layui-table td, .layui-table th {
    position: relative;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 14px;
  }

</style>
