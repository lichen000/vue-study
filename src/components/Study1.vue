<template>
  <div class="study1">
    <div id="app1">
      {{ message }}
    </div>
    <div id="app-2">
      <span v-bind:title="message2">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
    <div id="app-3">
      <p v-if="seen">现在你看到我了</p>
    </div>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div id="app-5">
      <p>{{ message3 }}</p>
      <button v-on:click="reverseMessage">逆转消息</button>
    </div>
    <div id="app-6">
      <p>{{ message4 }}</p>
      <input v-model="message4">
    </div>
    <span v-once>这个将不会改变: {{ message4 }}</span>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <div v-bind:id="dynamicId"></div>
    <button v-bind:disabled="isButtonDisabled">Button</button><br>
    <a :href="url">超链接1</a>
    <a @click="doSomething">Click me</a>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <div id="demo">{{ fullName }}</div>
    <div class="static"
         v-bind:class="{ active: isActive, 'text-danger': hasError }">XXXX
    </div>
    <div v-bind:class="classObject">YYYY</div>
    <div v-bind:class="classObject2">ZZZZ</div>
    <div v-bind:class="[activeClass, errorClass]">WWWWW</div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">VVVVVV</div>
    <div v-bind:class="[{ activeClass: isActive }, errorClass]">uuuuuu</div>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">TTT</div>
    <div v-bind:style="styleObject">ssssss</div>
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </template>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>

  </div>
</template>

<script>
  export default {
    name: 'Study1',
    data() {
      return {
        message: 'Hello world',
        message2: '页面加载于 ' + new Date().toLocaleString(),
        message3: 'Hello Vue.js!',
        message4: 'Hello Vue!',
        seen: true,
        todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
        ],
        rawHtml: '<span style="color:red">This should be red</span>',
        dynamicId: 'div1',
        isButtonDisabled: true,
        url: 'http://www.baidu.com/',
        firstName: 'Foo',
        lastName: 'Bar',
        isActive: true,
        hasError: false,
        classObject: {
          active: true,
          'text-danger': true
        },
        error: null,
        activeClass: 'active',
        errorClass: 'text-danger',
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
          color: 'red',
          fontSize: '13px'
        },
        ok: true,
        type: 'A',
        loginType: "username"
      }
    },
    created: function () {
      // `this` 指向 vm 实例
      console.log('message is: ' + this.message);
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('');
      },
      fullName: function () {
        return this.firstName + ' ' + this.lastName;
      },
      classObject2: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      },

    },
    methods: {
      reverseMessage: function() {
        this.message3 = this.message3.split('').reverse().join('');
      },
      doSomething: function() {
        alert("aaaaaa");
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .active {
    font-style: italic;
  }

  .text-danger {
    color: red;
  }

</style>
