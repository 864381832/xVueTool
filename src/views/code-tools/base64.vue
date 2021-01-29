<template>
  <dir>
    <h4>Base64加密、解密</h4>
    <el-input id="uploadInputId" v-model="input" rows="10" @input="inputChange" placeholder="请输入需要编码的字符或拖动文件至此"
              type="textarea">
    </el-input>
    <el-row style="margin-top: 10px; margin-bottom: 10px;">
      <el-radio v-model="encryptType" label="1" border size="medium" @change="jiami">加密</el-radio>
      <el-radio v-model="encryptType" label="2" border size="medium" @change="jiemi">解密</el-radio>
      <el-button round type="success" icon="el-icon-document-copy" @click="copy">复制结果</el-button>
      <el-button round type="success" icon="el-icon-sort" @click="jiaohuanneirong">交换内容</el-button>
      <el-button @click="output='',input=''" type="danger" round icon="el-icon-delete">清空</el-button>
      <el-select style="margin-left: 10px; width: 10%;" filterable allow-create default-first-option v-model="select" placeholder="编码">
        <el-option label="UTF-8" value="1">
        </el-option>
        <el-option label="GB2312" value="2">
        </el-option>
        <el-option label="GB18030" value="3">
        </el-option>
        <el-option label="IOS-8859" value="4">
        </el-option>
      </el-select>
    </el-row>
    <el-input v-model="output" rows="10" placeholder="转换后的内容" type="textarea">
    </el-input>
    <el-card style="margin-top: 10px">
      <h2>Base64编码说明</h2>
      <p>Base64编码要求把3个8位字节（3*8=24）转化为4个6位的字节（4*6=24），之后在6位的前面补两个0，形成8位一个字节的形式。
        如果剩下的字符不足3个字节，则用0填充，输出字符使用'='，因此编码后输出的文本末尾可能会出现1或2个'='。</p>
      <p>为了保证所输出的编码位可读字符，Base64制定了一个编码表，以便进行统一转换。编码表的大小为2^6=64，这也是Base64名称的由来。</p>
      <h3>Base64编码表</h3>
      <table>
        <tbody>
        <tr>
          <th scope="col">码值</th>
          <th scope="col">字符</th>
          <td rowspan="18">&nbsp;</td>
          <th scope="col">码值</th>
          <th scope="col">字符</th>
          <td rowspan="18">&nbsp;</td>
          <th scope="col">码值</th>
          <th scope="col">字符</th>
          <td rowspan="18">&nbsp;</td>
          <th scope="col">码值</th>
          <th scope="col">字符</th>
        </tr>
        <tr>
          <td>0</td>
          <td>A</td>
          <td>16</td>
          <td>Q</td>
          <td>32</td>
          <td>g</td>
          <td>48</td>
          <td>w</td>
        </tr>
        <tr>
          <td>1</td>
          <td>B</td>
          <td>17</td>
          <td>R</td>
          <td>33</td>
          <td>h</td>
          <td>49</td>
          <td>x</td>
        </tr>
        <tr>
          <td>2</td>
          <td>C</td>
          <td>18</td>
          <td>S</td>
          <td>34</td>
          <td>i</td>
          <td>50</td>
          <td>y</td>
        </tr>
        <tr>
          <td>3</td>
          <td>D</td>
          <td>19</td>
          <td>T</td>
          <td>35</td>
          <td>j</td>
          <td>51</td>
          <td>z</td>
        </tr>
        <tr>
          <td>4</td>
          <td>E</td>
          <td>20</td>
          <td>U</td>
          <td>36</td>
          <td>k</td>
          <td>52</td>
          <td>0</td>
        </tr>
        <tr>
          <td>5</td>
          <td>F</td>
          <td>21</td>
          <td>V</td>
          <td>37</td>
          <td>l</td>
          <td>53</td>
          <td>1</td>
        </tr>
        <tr>
          <td>6</td>
          <td>G</td>
          <td>22</td>
          <td>W</td>
          <td>38</td>
          <td>m</td>
          <td>54</td>
          <td>2</td>
        </tr>
        <tr>
          <td>7</td>
          <td>H</td>
          <td>23</td>
          <td>X</td>
          <td>39</td>
          <td>n</td>
          <td>55</td>
          <td>3</td>
        </tr>
        <tr>
          <td>8</td>
          <td>I</td>
          <td>24</td>
          <td>Y</td>
          <td>40</td>
          <td>o</td>
          <td>56</td>
          <td>4</td>
        </tr>
        <tr>
          <td>9</td>
          <td>J</td>
          <td>25</td>
          <td>Z</td>
          <td>41</td>
          <td>p</td>
          <td>57</td>
          <td>5</td>
        </tr>
        <tr>
          <td>10</td>
          <td>K</td>
          <td>26</td>
          <td>a</td>
          <td>42</td>
          <td>q</td>
          <td>58</td>
          <td>6</td>
        </tr>
        <tr>
          <td>11</td>
          <td>L</td>
          <td>27</td>
          <td>b</td>
          <td>43</td>
          <td>r</td>
          <td>59</td>
          <td>7</td>
        </tr>
        <tr>
          <td>12</td>
          <td>M</td>
          <td>28</td>
          <td>c</td>
          <td>44</td>
          <td>s</td>
          <td>60</td>
          <td>8</td>
        </tr>
        <tr>
          <td>13</td>
          <td>N</td>
          <td>29</td>
          <td>d</td>
          <td>45</td>
          <td>t</td>
          <td>61</td>
          <td>9</td>
        </tr>
        <tr>
          <td>14</td>
          <td>O</td>
          <td>30</td>
          <td>e</td>
          <td>46</td>
          <td>u</td>
          <td>62</td>
          <td>+</td>
        </tr>
        <tr>
          <td>15</td>
          <td>P</td>
          <td>31</td>
          <td>f</td>
          <td>47</td>
          <td>v</td>
          <td>63</td>
          <td>/</td>
        </tr>
        </tbody>
      </table>
    </el-card>
  </dir>
</template>
<script>
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'

export default {
  data () {
    return {
      encryptType: '1',
      input: '',
      output: '',
      select: 'UTF-8'
    }
  },
  mounted: function () {
    let uploadInputElement = document.getElementById('uploadInputId')
    uploadInputElement.addEventListener('drop', (ev) => {
      ev.preventDefault()// 取消事件的默认动作。
      let fileReader = new FileReader()
      let file = ev.dataTransfer.files[0]
      fileReader.onload = e => {
        this.input = fileReader.result
        this.jiami()
      }
      // fileReader.readAsText(file, 'utf-8');
      fileReader.readAsText(file)
    }, false)
  },
  methods: {
    inputChange () {
      if (this.encryptType === '1') {
        this.jiami()
      } else {
        this.jiemi()
      }
    },
    jiami () {
      try {
        this.output = Base64.stringify(Utf8.parse(this.input))
      } catch (e) {
        this.$message('加密失败！' + e.toString())
      }
    },
    jiemi () {
      try {
        this.output = Utf8.stringify(Base64.parse(this.input))
      } catch (e) {
        this.$message('解密失败！' + e.toString())
      }
    },
    copy () {
      this.$copyText(this.output).then((e) => {
        this.$message('已成功复制到剪切板')
      }, (e) => {
        this.$message('复制到剪切板失败！' + e.toString())
      })
    },
    jiaohuanneirong () {
      let s = this.input
      this.input = this.output
      this.output = s
      this.$message('内容交换成功！')
    }
  }
}
</script>
<style>
</style>
