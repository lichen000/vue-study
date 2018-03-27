<template>
  <div class="study2">
    <ul id="example-1">
      <li v-for="item of items">{{ item.message }}</li>
    </ul>
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <ul id="v-for-object" class="demo">
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>
    <div v-for="(value, key) in object">
      {{ key }}: {{ value }}
    </div>
    <div v-for="(value, key, index) in object">
      {{ index }}. {{ key }}: {{ value }}
    </div>
    <li v-for="n in evenNumbers">{{ n }}</li>
    <li v-for="n in even(numbers)">{{ n }}</li>
    <div>
      <span v-for="n in 10">{{ n }} </span>
    </div>
    <ul>
      <template v-for="item in items">
        <li>{{ item.message }}</li>
        <li class="divider"></li>
      </template>
    </ul>
    <li v-for="todo in todos" v-if="!todo.isComplete">
      {{ todo }}
    </li>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        {{ todo }}
      </li>
    </ul>
    <p v-else>No todos left!</p>
    <div id="example-100">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <div id="example-200">
      <!-- `greet` 是在下面定义的方法名 -->
      <button v-on:click="greet">Greet</button>
    </div>
    <div id="example-3">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <div id='example-4'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div id="example-5">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div id="example-6">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <div id="example-7">
      <select v-model="selected2" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected2 }}</span>
    </div>
    <select v-model="selected3">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected3 }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Study2',
    data() {
      return {
        parentMessage: 'Parent',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        },
        numbers: [ 1, 2, 3, 4, 5 ],
        todos: [
          {
            isComplete: false
          },
          {
            isComplete: true
          }
        ],
        counter: 0,
        name: 'Vue.js',
        message: "",
        checked: false,
        checkedNames: [],
        picked: 'One',
        selected: '',
        selected2: [],
        selected3: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
      }
    },
    created: function () {

    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0;
        });
      }
    },
    methods: {
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0;
        });
      },
      greet: function(event) {
        // `this` 在方法里指向当前 Vue 实例
        alert('Hello ' + this.name + '!');
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName);
        }
      },
      say: function (message) {
        alert(message);
      },
      warn: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) {
          event.preventDefault();
        }
        alert(message);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

</style>
