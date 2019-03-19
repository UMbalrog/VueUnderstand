<template>
  <div class="wrap">
    这是测试页
  </div>
</template>

<script>

export default {
  name: 'index',
  data(){
    return {

    }
  },
  created(){
    var Person = {};
    var timer = 'null';
    Object.defineProperty(Person, 'name', {
      //属性描述符
      value:'jack',
      writable:true,    //默认为false不可修改
      //存取描述符不可和value、writable一起用
      // get:function(){      
      //   return timer
      // },
      // set:function(val){
      //   timer = val
      // },
      //配置
      configurable:true,   //是否可配置 默认false不可以
      enumerable:false     //是否可枚举 默认false不可以
    })
    // Object.defineProperty(Person, 'name', {
    //   value: 'rose'
    // })

    Object.preventExtensions(Person);  //禁止扩展 但可通过Object.defineProperty修改
    
    // Object.defineProperty(Person,'name',{
    //   value:'23'
    // })

    Object.seal(Person);   //密封对象 Object.defineProperty也不可修个，他是再调用Object.preventExtensions的基础上，再将原有属性的configurable:false

    Object.freeze(Person);  //冻结，将writable:false
    // Person.name = 'rose'
    // console.log(Person.name);

    this.dome1();
  },
  methods:{
    dome1(){
      'use strict'
      let proto = Object.defineProperties({},{
        foo:{
          value:'a',
          writable:false,
          configurable:true
        }
      });
      // console.log(proto);
      let obj = Object.create(proto);
      // console.log(obj.__proto__ == proto);
      obj.foo == 'hello';
      
      Object.defineProperty(obj,'foo',{
        value:'bbb'
      });
      console.log(obj.__proto__.foo);
      console.log(proto.foo);
    },
    dome2(){
      var obj = {};
      obj.name = 'jack';
      //等同于
      var obj = {};
      Object.defineProperty(obj,'name',{
        value:'jack',
        writable:true,
        configurable:true,
        enumerable:true
      });

      var ________ = 0;


      var obj = {};
      Object.defineProperty(obj,'name',{
        value:'jack'
      });
      //等同于
      var obj = {};
      Object.defineProperty(obj,'name',{
        value:'jack',
        writable:false,
        configurable:false,
        enumerable:false
      });

    }
  }
}
</script>

<style>
.wrap {}
</style>
