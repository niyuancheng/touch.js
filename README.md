# touch.js
新一代的移动端手势库，It's Silky and Active!!!!
# What makes it special?
1. 无缝衔接JS原生语法document.addEventListener并且在此基础上进行扩展，无需学习新的函数和API接口，降低用户的心智负担
2. 优秀的code提示，在VSCode中引用该库后，只要是使用引入的魔改版document去进行DOM操作获得的DOM元素例如，会获得对应的移动端事件的提示
```js
let div = document.createElement("div")
div.addEventListener("singleTap",(e)=>{})
```
3. 完善的扩展，只要使用该库提供的魔改版document对象去操作DOM，内部会对其产生的DOM元素进行接管和扩展，在其基础上添加必要的属性和函数，但是绝不会影响原来其他属性的使用！
