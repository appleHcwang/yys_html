/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-10-19 14:03:16
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-10-19 14:42:40
 * @FilePath: /yysClient/src/store/ministore.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入vue
// 创建state对象，使用observable让state对象可响应

import Vue from 'vue';

export let state = Vue.observable({
  name: '张三',
  'age': 38
})
// 创建对应的方法
export let mutations = {
  changeName(name) {
    state.name = name
  },
  setAge(age) {
    state.age = age
  }
}
 