# touch.js
新一代的移动端手势库，It's Silky and Active!!!!
# What makes it special?
1. 无缝衔接JS原生语法document.addEventListener并且在此基础上进行扩展，无需学习新的函数和API接口，降低用户的心智负担
2. 优秀的code提示，在VSCode中引用该库后，只要是使用引入的魔改版document去进行DOM操作获得的DOM元素例如，会获得对应的移动端事件的提示
__JS As What the pic below shows__
![image](https://user-images.githubusercontent.com/69229785/216831435-bba28b06-4b10-4fa8-9343-70e579f11df6.png)
![image](https://user-images.githubusercontent.com/69229785/216831497-7bfa7b5f-47dc-46df-bf58-05dcdfbfd931.png)

3. 完善的扩展，只要使用该库提供的魔改版document对象去操作DOM，内部会对其产生的DOM元素进行接管和扩展，在其基础上添加必要的属性和函数，但是绝不会影响原来其他属性的使用！
4. 完美的兼容性，完全不会影响原生对象的行为。
5. 迷你小巧，加载速度极快

# How To Use It?
## Case One
```js
import document from "touch.js"
let div  = document.createElement("div")
div.addEventListener("singleTap",(e) => {
  console.log("the singleTap event has been emitted")
})
```

## Case Two
```js
import document from "touch.js"
let div  = document.getElementById("demo")
div.addEventListener("doubleTap",(e) => {
  console.log("the doubleTap event has been emitted")
})
```

__So,如果你是一位原生JS库的开发者，这将十分适合你；还等什么？Talk is cheap , let's try it!!!__
