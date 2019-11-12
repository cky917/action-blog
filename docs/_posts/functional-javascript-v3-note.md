---
title: functional-javascript-v3学习笔记
date: 2019-11-11 17:21:50 +0800
tag: Javascript学习笔记
---


这是我在frontend-masters上学习Kyle Simpson的课程[functional-javascript-v3](https://frontendmasters.com/courses/functional-javascript-v3/)的学习笔记。这个大佬就是《You don't know JS》的作者，

<!-- more -->

## 为什么要用函数式编程

### 命令式vs声明式

命令式的告诉了我们怎么做，而声明式告诉了我们结果是什么。

命令式的缺点是，维护者必须读完整段代码，在脑海里模拟执行之后才能了解这段代码的意图，然而人脑和电脑相比是很不擅长计算执行的，命令式让维护变得困难。

注释并不是告诉代码意图的最佳途径，一些坏的、过时的注释还不如不要存在。一段好的代码应该是能清晰地讲述一个stroy，而注释不应该和代码表现的意图重复，
比如`i++ // 增加i`，注释应该注重在`why`而不是`what`。

如果一段代码能够很清晰的表明`what`，我们就根本不需要注释了，这就是声明式。命令式和声明式不是绝对的，而是相对的概念。如果你长期使用函数式编程之后看到`for`循环，你会说 这是命令式。而当你长期使用一种很底层的编程语言，然后你看到`for`循环，你可能会说 这是声明式。

## function

> Function: the semantic relationship between input and computed output

函数是对于输入和输出（经过计算的）的一个语义化的关系的表现。

### 副作用

会产生副作用的操作：

- I/O (console, files)
- Database Storage
- Network Calls
- DOM
- Timestamps
- Random Numbers
- CPU Heat
- CPU Time Delay

不是要“完全没有副作用”，而是尽量避免它们，或者单独提出来让它们变得很容易辨别。因为正如我们没有必要去验证`1 + 1 = 2`一样，函数式的代码我们很容易确保输入输出的正确性，如果程序出了bug，排除了函数式代码，那大部分Bug原因来自于副作用的代码，让副作用代码更明显，有助于我们排除问题。

### 纯函数

纯函数的关键不在于函数的定义，而在于函数的调用方式。

```js
var z = 1;
function addTwo(x, y) {
  return x + y
}

function addAnother(x, y) {
  return addTwo(x, y) + z
}

addAnother(20, 21) //42
```

这段代码的问题不是`z`是否是`const` 还是`var`，而是执行`addAnother`函数的时候，每次都会去检测调用时`z`以上的所有代码，判断z的值是否被改变了，然后才能计算出结果。如果是纯函数，则可以在一个隔离的情况下运行，而且也不担心会影响到外部。

```js
function addAnother(z) {
  return function addTwo(x, y) {
    return x + y + z
  }
}

addAnother(1)(20, 21) // 42
```

```js
function getId(obj) {
  return obj.id
}
```

这不是一个纯函数，因为纯函数的定义是相同的输入一定会返回相同的输出。

函数的纯度：能决定你对你代码自信的程度。尽可能的使用纯函数。

### 提取不纯的部分

```js
function addComment(userID, comment) {
  const record = {
    id: uniqueID(),
    userID,
    text: comment
  }
  const elem = buildCommentElement(record)
  commentList.appendChild(elem)
}

addComment(42, 'This is my first comment')
```

这不是一个纯函数，包含了生成`uniqueID`以及DOM操作这2种副作用操作。提取副作用之后：

```js
function newComment(userID, commentID, comment) {
  const record = {
    id: commentID,
    userID,
    text: comment
  }
  return buildCommentElement(record)
}

const commentID = uniqueID()
const elem = newComment(
  42,
  commentID,
  'This is my first comment'
)

commentList.appendChild(elem)
```

### 包含不纯部分

如果实在无法避免一些有副作用的操作，尽量操作副本避免影响入参或者别的地方。

## Arguments

首先明确一下 `parameters`和`arguments`的区别

```js
function a(x, y) {
  return x + y
}

a(3, 5)
```

这里的`x`和`y`是`parameters`，而`3`和`5`则是`arguments`。`parameters`指的是函数定义时的参数变量，而`arguments`是指调用时传进去的值。

一元一次函数: 一个输入对应一个输出

```js
function increment(x) {
  return sum(x, 1)
}
```

二元一次函数: 两个输入对应一个输出

```js
function sun(x, y) {
  return x + y
}
```

这其实是描述一个函数的形状，为什么我们需要了解一个函数的形状呢，因为当我们像拼积木一样拼接函数时，我们需要保证每个连接点的凸起和凹陷都能准确对上。

### Arguments shape adapter

我们也可以写一些`adapter`作为中间件，让函数的“形状”变成我们想要的。

```js
// unary adapter
function unary(fn) {
  return function one(arg) {
    return fn(arg)
  }
}
// binary adapter
function binary(fn) {
  return function two(arg1, arg2) {
    return fn(arg1, arg2)
  }
}

function f(...args) {
  return args
}

const g = unary(f)
const h = binary(f)

g([1,2,3,4]) // [1]
h([1,2,3,4]) // [1,2]
```

```js
// reverse adapter
function reverseArgs(fn) {
  return function reversed(...args) {
    return fn(...args.reverse())
  }
}
function fn(...args) {
  return args
}
const g = reverseArgs(fn)
g(1,2,3,4) // 4,3,2,1
```

## Equational Reasoning

### point free

`point free`是指一个函数在定义时，不需要指明它的入参。

```js
getPerson(function onPerson(person) {
  return renderPerson(person)
})
```

因为`onPerson`和`renderPerson`的入参个数是一致的，也就是'形状'一致，所以它们是可互换(interchangeable)的。所以可以这样：

```js
getPerson(renderPerson)
```

### shape

```js
function isOdd(v) {
  return v % 2 === 1
}
function isEven(v) {
  return !isOdd(v)
}
isEven(4) // true
```

`isEven`虽然也可以用`return v % 2 === 0` 来返回，但是这样写能够明确表示两个函数的关系：`isEven`和`isOdd`是相反的。而`isEven`和`isOdd`的形状是一致的，所以也可以写成：

```js
function not(fn) {
  return function negated(...args) {
    return !fn(...args)
  }
}
function isOdd(v) {
  return v % 2 === 1
}
const isEven = not(isOdd)

isEven(4) // true
```

## Advanced point free

```js
function mod(y) {
  return function forX(x) {
    return x % y
  }
}
function eq(y) {
  return function forX(x) {
    return x === y
  }
}
const mod2 = mod(2)
const eq1 = eq(1)

function isOdd(x) {
  return eq1(mod2(x))
}
```

上面还没把`isOdd`彻底`point free`，我们可以引入`compose`方法：

```js
const mod2 = mod(2)
const eq1 = eq(1)

function compose(fn2, fn1) {
  return funciton composed(v) {
    return fn2(fn1(v))
  }
}

const isOdd = compose(eq1, mod2)
```

再简化掉2个函数的声明

```js
const isOdd = compose(eq(1), mod(2))
```

## Closure

> Closure is when a function 'remembers' the variables around it even when that function is executed elsewhere.

```js
function unary(fn) {
  return function(v) {
    return fn(v)
  }
}

function addAnother(z) {
  return function(x, y) {
    return x + y + z
  }
}
```

```js
// impure
function strBuilder(str) {
  return function next(v) {
    if (typeof v === 'string') {
      str += v
      return next();
    }
    return str
  }
}

// pure
function strBuilder(str) {
  return function next(v) {
    if (typeof v === 'string') {
      return strBuilder(str + v);
    }
    return str
  }
}
```

### lazy or eager

```js
// lazy
function repeater(count) {
  return function allTheAs() {
    return ''.padStart(count, 'A')
  }
}

// eager
function repeater(count) {
  const str = ''.padStart(count, 'A')
  return function allTheAs() {
    return str
  }
}
var A = repeater(10)

A() // 'AAAAAAAAAA'
A() // 'AAAAAAAAAA'
```

这2种形式都都各有优劣，要根据实际情况选择。比如如果会多次被调用的情况，选择`eager`模式，可以只计算一次。如果调用几率小，可以用`lazy`模式，按需计算。

### Memoization

但是如果我们既希望耗时的计算只计算一次，又希望它在第一次被调用的时候才执行呢？

```js
function repeater(count) {
  let str
  return function allTheAs() {
    if (str === undefined) {
      str = ''.padStart(count, 'A')
    }
    return str
  }
}
```

上面这种写法很好，完全可以实现我们的需求，但是函数内部看上去有些不纯，因为它改变了`str`。我们有一个更加声明式的工具函数`memoize`，将看似不纯的地方提出来，让我们更关注重点的部分：

```js
function repeater(count) {
  return memoize(function allTheAs() {
    return ''.padStart(count, 'A')
  })
}
```

`memorize`是一个`adapter`。什么时候适合使用它呢？当input常常不一致时，不适合，因为会占用太多内存去缓存，反之则适合。

### Referential Transparency

“纯的函数调用(pure function call)”可以被解释为：如果我可以把调用的结果用函数调用去代替，不会有任何别的影响，则说明这个函数调用是“纯”的。比如上面的`AAAAAAAAAA`可以用`A()`代替，效果是一样的。这个用术语描述就是 ___Referential Transparency___

### Generalized to Specialized

将一段代码提取成函数，并不一定是为了方便多次调用，即使这段代码只执行一次，函数名本身也是一个可以描述这段代码意图的信息，让代码更具有语义，对于代码阅读者更加友好。

```js
function ajax(url, data, cb) { /* ...*/ }
ajax(CUSTOMER_API, { id: 42 }, renderCustomer)

function getCustomer(data, cb) {
  return ajax(CUSTOMER_API, data, cb)
}

getCustomer({ id: 42 }, renderCustomer)

function getCurrentCustomer(cb) {
  return getCustomer({ id: 42 }, cb)
}

getCurrentCustomer(renderCustomer)
```

函数参数的顺序：通用的 -> 专有的

#### Partial Application

```js
function ajax(url, data, cb) { /* ...*/ }

const getCustomer = partial(ajax, CUSTOMER_API)
const getCurrentCustomer = partial(getCustomer, { id: 42 })

getCustomer({ id: 42 }, renderCustomer)
getCurrentCustomer(renderCustomer)
```

#### Currying

```js
const ajax = curry(
  3,
  function ajax(url, data, cb) { /* ...*/ }
)

const getCustomer = ajax(CUSTOMER_API)
const getCurrentCustomer = getCustomer({ id: 42 })
```

`curry`的写法比`partial`的写法更少调用工具函数

#### Partial Application vs Currying

1. 他们都是将函数专有化的工具
2. `Partial Application`预设了一些参数，等待剩余的参数在下一次调用时传入。
3. `curry`没有预设任何参数，它同时接收每个参数。

### Changing Function Shape with Curry

```js
function add(x, y) {
  return x + y
}
[0, 2, 4, 6, 8].map(function addOne(v) {
  return add(1, v)
})
// [1, 3, 5, 7, 9]
```

`map`的回调函数的形状和`add`的形状不一致，我们不能直接替换。但是我们可以用`curry`改变`add`的形状

```js
function add(x, y) {
  return x + y
}
add = curry(add)
[0, 2, 4, 6, 8].map(add(1))

// [1, 3, 5, 7, 9]
```

## Composition

__抽象__ 的意图并不是将函数内容互相隐藏，重点是让函数内容互相分离。让分析和理解每个函数的内容变得更加容易。

```js
function minus2(x) { return x + 2 }
function triple(x) { return x * 3 }
function increment(x) { return x + 1 }

totalCost =
  basePrice +
  minus2(triple(increment(4)))
```

我们可以用一个组合函数来组合这个操作

```js
function composeThree(fn3, fn2, fn1) {
  return function composed(v) {
    fn3(fn2(fn1(v)))
  }
}
function minus2(x) { return x + 2 }
function triple(x) { return x * 3 }
function increment(x) { return x + 1 }

const shippingRate = composeThree(minus2, triple, increment)

totalCost =
  basePrice +
  shippingRate(4)
```

### compose vs pipe

compose: 执行顺序 right to left

pipe: 执行顺序 left to right

```js
function compose(...fns) {
  return function composed(...args) {
    return fns.reduceRight((prev, cur) => {
      return cur(...([].concat(prev)))
    }, args)
  }
}

function pipe(...fns) {
  return function composed(...args) {
    return fns.reduce((prev, cur) => {
      return cur(...([].concat(prev)))
    }, args)
  }
}
```

#### Associativity(结合律)

```js
const f = composeTwo(
  a,
  composeTwo(b, c)
)
const g = composeTwo(
  composeTwo(a, b)
  c,
)

f == g
```

#### composion with curry

```js
function sum(x, y) { return x + y }
function triple(x) { return x * 3 }
function divBy(x, y) { return x / y }

divBy(2, triple( sum(3 + 5) ) )

sum = curry(2, sum)
divBy = curry(2, divBy)

compose(
  divBy(2),
  triple,
  sum(3)
)(5)
```

在`composion`中使用`curry` 可以让函数的形状都变成`unary`

## Immutability

`Immutability`不是始终不变，而是不要有意料之外的改变，所有的改变应该都在我们的掌控之中。

### const的不变性

英语中，`const`的意思是一个事物不会改变，而js中的`const`表示的是这个变量不会被重新`assign`。当我们使用`const`定义一个数组或对象时，我们通常会无法保证这个数组或对象不被外界改变，当改变发生时，`const`这个关键字则可能会让别人感到疑惑。

### value的不变性

value的不变是另一个更重要的问题，我们遇到的99%关于value不变性的问题都是关于value被改变了，只有1%是来自值被重新赋值了。
当我们把一个对象或数组传进一个函数时，我们不能保证这个值不会被函数改变，也就可能导致bug的产生。这也是为什么函数式编程对于“value的不变性”如此重视，因为函数之间总是各种值的传递，如果是基本类型的还好，JavaScript本身会保护它不会被改变，但是对象和数组则不一定。

### readonly的值

```js
let orderDetails = {
  orderId : 42,
  total: (basePrice + shipping)
}

processOrder(Object.freeze(orderDetails))
```

我们用`Object.freeze`可以让`orderDetails`变得只读，虽然它只是浅层的只读，但是它的意义更多是告诉代码的阅读者这里是`readonly`的。

当然一个程序是不可能全是不变的值的，我们经常需要通过操作改变一些值，再储存到数据库里。

```js
function processOrder(order) {
  if (!("status" in order)) {
    order.status = "completed"
  }
  saveToDatabase(order)
}
```

这样的代码可能会产生各种Bug。作为函数的开发者，你 __必须__ 假设所有传进来的值都是不可以更改的。你应该永远操作的是值的副本

```js
function processOrder(order) {
  const processedOrder = { ...order }
  if (!("status" in order)) {
    processedOrder.status = "completed"
  }
  saveToDatabase(processedOrder)
}
```

### Immutable Data Structure

当你需要改变一个值时，你需要的是`Immutable Data Structure`。也就是你得到的永远是这个值改变后的副本。然而如果我们需要改变一个很大的对象，每次都返回一个新对象的拷贝，我们的cpu可能会受不了。这就是`Immutable Data Structure`的强大之处，它返回的是改变的值和以前值的引用的集合，有点类似于`git`，diff了前后差异后，返回了最后的结果。

当然目前js没有内置这种结构，目前有类似的提案，但短时间还不会实现。我们可以使用[immutable.js](https://github.com/immutable-js/immutable-js)。

```js
const items = Immutable.List.of(
  textbook,
  supplies
)

const updatedItems = items.push(calculator)
items === updatedItems // false
items.size // 2
updatedItems.size // 3
```

> Immutable Data Structure is something __need__ to change, and need to change in a controlled way

## recursion (递归)

```js
function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char)
}

function countVowels(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count++
    }
  }
  return count
}
countVowels(
  'The quick brown fox jumps over the lazy dog'
)
// 11
```

上面是一段典型的命令式代码，我们必须阅读完整个代码并在脑海里模拟执行才能理解这段代码的意图。
这里我们想采用递归来解决这个问题（当然闭包不是唯一的解决手段），我们首先想一下我们需要解决的是什么问题，可以理解为：需要获取一个字符串第一个字符是元音的个数加上剩余字符的元音个数，这个for循环的`index`字段其实就是用来实现这个意图的。

所以我们可以这样实现：

```js
function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char)
}

function countVowels(str) {
  if (str.length === 0) return 0
  const first = isVowel(str[0]) ? 1 : 0
  return first + countVowels( str.slice(1) )
}
countVowels(
  'The quick brown fox jumps over the lazy dog'
)
// 11
```

当你能把一个问题像这样拆解得很小，你就可以用递归来实现它了，这能让一个问题变成比较小的声明式。

```js
function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char)
}

function countVowels(str) {
  const first = isVowel(str[0]) ? 1 : 0
  if (str.length <= 1) return first
  return first + countVowels( str.slice(1) ) // 不是尾部调用，因为first等待了countVowels的返回结果
}
countVowels(
  'The quick brown fox jumps over the lazy dog'
)
// 11
```

### Stack Frames && Memeory Limit

在生产环境中，我们比较少用到递归，因为它经常会在执行大量数据时产生堆栈溢出等问题。

当一个函数A调用函数B时，系统会保存函数A的运行环境，同理函数B调用函数C时也会保存函数B的运行环境。我们称之为调用栈，函数A的则在栈的底部。当顶部的函数结束了这个调用，会从这个调用栈顶部开始依次`pop`清除这些调用的缓存。

平常的开发中，函数调用栈通常层级不会很深，所以缓存也不是很大。但使用递归时，可能会有成千上百函数调用都保存在调用栈中，最终导致堆栈溢出。

在数学理论上，递归是一个很好的解决手段，但在实际使用中，递归仍然受限于运行内存的大小。

### Optimization：tail calls

在ES6中已经落地的一个标准`PTC(proper tail calls)`，这是一个JavaScript的引擎优化，意味着在JavaScript中，尾部调用的内存占用会被引擎优化。

```js
'use strict'

function diminish(x) {
  if (x > 90) {
    return diminish(Math.trunc(x / 2)) // 最后单纯返回了一个函数的结果，是一个合适的尾部调用
  }
  return x - 3
}

diminish(367)
```

使用PTC，首先需要有 `use strict`声明，然后需要一个函数包含了`return`，并且没有需要在函数执行后还有计算的操作。

让我们用`PTC`重构一下之前的代码

```js
`use strict`
function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char)
}

function countVowels(count, str) {
  count += isVowel(str[0]) ? 1 : 0
  if (str.length <= 1) return count
  return countVowels(count, str.slice(1)) // 尾部调用
}
countVowels(
  0,
  'The quick brown fox jumps over the lazy dog'
)
// 11
```

再进化一下

```js
`use strict`

const countVowels = curry(2, function countVowels(count, str) {
  count += isVowel(str[0]) ? 1 : 0
  if (str.length <= 1) return count
  return countVowels(count, str.slice(1))
})(0)

countVowels(
  'The quick brown fox jumps over the lazy dog'
)
// 11
```

## Fusion

我们经常能看到一些`map`、`filter`、`reduce`等进行链式操作来处理数据，每个函数能做一个职责，这其实是个好事。但是当我们处理的是很多数据时，从性能层面考虑，这样链式调用就不行了。因为每一次执行其实都是在拷贝一次这个数组，当我们需要遍历1000项数据时，我们要遍历n*1000次。

在函数式编程中，相对于一个很长的链式操作，我们更倾向于`composition`的形式。

```js
function add1(v) { return v + 1 }
function mul2(v) { return v * 2 }
function div3(v) { return v / 3 }

var list = [2, 5, 8, 11, 14, 17, 20]

// list
//   .map(add1)
//   .map(mul2)
//   .map(div3)
// [2, 4, 6, 8, 10, 12, 14]

list
  .map(compose(div3, mul2, add1))
```

### transducing

（这是很难的一个部分, 建议参考阅读这篇文章：[Transducers: JavaScript 中高效的数据处理 Pipeline（第 18 部分）](https://juejin.im/post/5c337b50f265da61746501bf)）

```js
function add1(v) { return v + 1 }
function isOdd(v) { return v % 2 === 1 }
function sum(total, v) { return total + v }

var list = [2, 5, 8, 11, 14, 17, 20]

list
  .map(add1)
  .filter(isOdd)
  .reduce(sum)

```

我们虽然可以compose一些函数，但是像这样形状不同的函数，我们该怎么办呢。

```js
list
.reduce(function allAtOnce(total, v) {
  v = add1(v)
  if (isOdd(v)) {
    total = sum(total, v)
  }
  return total
}, 0)
```

如上面所示，我们其实是想用reduce将`map`和`filter`的功能结合起来，但是上面的代码不够声明化，我们可以用`transduce`工具来处理。

```js
const transudcer = compose(
  mapReducer(add1),
  filterReducer(isOdd)
)

transduce(
  transducer,
  sum,
  0,
  [1, 3, 4, 6, 9, 12, 13, 21]
)
```

我们来详细地说明一下上面的代码，先看下面这段代码

```js
function mapWithReduce(arr, mappingFn) {
  return arr.reduce(function reducer(list, v) {
    list.push(mappingFn(v))
    return list
  }, [])
}

function filterWithReduce(arr, predicateFn) {
  return arr.reduce(function reducer(list, v) {
    if (predicateFn(v)) {
      list.push(v)
    }
    return list
  }, [])
}

var list = [1, 3, 4, 6, 9, 12, 13, 21]
list = mapWithReduce(list, add1)
list = filterWithReduce(list, isOdd)
list.reduce(sum)
```

在`reduce`里执行操作的函数，可以称之为`reducer`。在上面的代码里，我们执行了3次`reduce`操作，也就是把list复制并循环操作了3次，这其实是一种性能浪费。所以这就引出我们下面的写法：

```js
function mapReducer(mappingFn) {
  return function reducer(list, v) {
    list.push(mappingFn(v))
    return list
  }
}
function filterReducer(predicateFn) {
  return function reducer(list, v) {
    if (predicateFn(v)) {
      list.push(v)
    }
    return list
  }
}

list
  .reduce(mapReducer(add1), [])
  .reduce(filterReducer(isOdd), [])
  .reduce(sum)
```

我们把`mapReducer`和`filterReducer`提取出来，现在这3个`reduce`的形状变得越来越像了。同时我们还可以将他们之中的对于`list`的操作提取出来，同时结合curry

```js
function listCombination(list, v) {
  list.push(v)
  return list
}

const mapReducer = curry(2, function mapReducer(mappingFn, combineFn) {
  return function reducer(list, v) {
    return combineFn(list, mappingFn(v))
  }
})

const filterReducer = curry(2, function filterReducer(predicateFn, combineFn) {
  return function reducer(list, v) {
    if (predicateFn(v)) {
      return combineFn(list, v)
    }
    return list
  }
})

list
  .reduce(mapReducer(add1)(listCombination), [])
  .reduce(filterReducer(isOdd)(listCombination), [])
  .reduce(sum)
```

这样`mapReducer`和`filterReducer`都变成了unary函数，所以可以演变成下面的代码：

```js
var transducer = compose(mapReducer(add1), filterReduer(isOdd)
)
list
  .reduce(transducer(listCombination), [])
  .reduce(sum)
```

最后我们可以进一步变成最开始我们的完整代码

```js
var transducer = compose(mapReducer(add1), filterReduer(isOdd)
)
// normal
list
  .reduce(transducer(sum), 0)

// 函数式编程的工具方法
transduce(
  transducer,
  sum,
  0,
  [1, 3, 4, 6, 9, 12, 13, 21]
)

// or
into(transducer, 0, [1, 3, 4, 6, 9, 12, 13, 21])
```
