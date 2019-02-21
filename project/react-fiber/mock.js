var queue = []
ReacDOM.render = function(root, container) {
  queue.push(root)
  updateFiberAndView()
}
function getVdomFormQueue() {
  return queue.shift()
}
/**
 * fiber有 return 指向父 sibling指向右侧兄弟 child指向子, 三叉链表
 */
function Fiber(vnode) {
  for (var i in vnode) {
    this[i] = vnode[i]
  }
  this.uuid = Math.random()
}
//我们简单的Fiber目前来看，只比vdom多了一个uuid属性
function toFiber(vnode) {
  if (!vnode.uuid) {
    return new Fiber(vnode)
  }
  return vnode
}

function updateFiberAndView() {
  var now = new Date() - 0
  var deadline = new Date() + 100
  updateView() //更新视图，这会耗时，因此需要check时间
  // do while循环，每一次都是小心翼翼进行计时，时间不够就将来不及处理的节点放进列队
  if (new Date() < deadline) {
    var vdom = getVdomFormQueue()
    var fiber = vdom,
      firstFiber
    var hasVisited = {}
    do {
      //深度优先遍历
      var fiber = toFiber(fiber) //A处
      if (!firstFiber) {
        fibstFiber = fiber
      }
      if (!hasVisited[fiber.uuid]) {
        hasVisited[fiber.uuid] = 1
        //根据fiber.type实例化组件或者创建真实DOM
        //这会耗时，因此需要check时间
        updateComponentOrElement(fiber)
        if (fiber.child) {
          //向下转换
          if (newDate - 0 > deadline) {
            queue.push(fiber.child) //时间不够，放入栈
            break
          }
          fiber = fiber.child
          continue //让逻辑跑回A处，不断转换child, child.child, child.child.child
        }
      }
      //如果组件没有children，那么就向右找
      if (fiber.sibling) {
        fiber = fiber.sibling
        continue //让逻辑跑回A处
      }
      // 向上找
      fiber = fiber.return
      if (fiber === fibstFiber || !fiber) {
        break
      }
    } while (1)
  }
  if (queue.length) {
    setTimeout(updateFiberAndView, 40)
  }
}

function updateComponentOrElement(fiber) {
  var { type, stateNode, props } = fiber
  if (!stateNode) {
    if (typeof type === 'string') {
      fiber.stateNode = document.createElement(type)
    } else {
      var context = {} //暂时免去这个获取细节
      fiber.stateNode = new type(props, context)
    }
  }
  if (stateNode.render) {
    //执行componentWillMount等钩子
    children = stateNode.render()
  } else {
    children = fiber.childen
  }
  var prev = null //这里只是mount的实现，update时还需要一个oldChildren, 进行key匹配，重复利用已有节点
  for (var i = 0, n = children.length; i < n; i++) {
    var child = children[i]
    child.return = fiber
    // fiber的child是其children中的第一个, 每个child都有右兄弟指向, 且return指向共同的父
    if (!prev) {
      fiber.child = child
    } else {
      prev.sibling = child
    }
    prev = child
  }
}

/**
 * requestIdleCallback(callback[,options])
 * callback 空闲时调用的回调
 *      deadline入参
 *         timeRemaining 返回一个相当于前文 new Date - deadline (时间片剩余时间)的函数
 *         didTimeout 布尔值, 空闲时间callback调用则为false,其他情况如第二个参数options.timeout到期后执行则为true
 * options
 *      timeout 浏览器调用callback的最后期限,毫秒
 */
// 加了时间调度的
function updateFiberAndView(dl) {
  updateView() //更新视图，这会耗时，因此需要check时间
  if (dl.timeRemaining() > 1) {
    var vdom = getVdomFormQueue()
    var fiber = vdom,
      firstFiber
    var hasVisited = {}
    do {
      //深度优先遍历
      var fiber = toFiber(fiber) //A处
      if (!firstFiber) {
        fibstFiber = fiber
      }
      if (!hasVisited[fiber.uuid]) {
        hasVisited[fiber.uuid] = 1
        //根据fiber.type实例化组件或者创建真实DOM
        //这会耗时，因此需要check时间
        updateComponentOrElement(fiber)
        if (fiber.child) {
          //向下转换
          if (dl.timeRemaining() > 1) {
            queue.push(fiber.child) //时间不够，放入栈
            break
          }
          fiber = fiber.child
          continue //让逻辑跑回A处，不断转换child, child.child, child.child.child
        }
      }
      //....略
    } while (1)
  }
  if (queue.length) {
    requetIdleCallback(updateFiberAndView, {
      timeout: new Date() + 100
    })
  }
}

// ---------
var isBatching = false
function batchedUpdates(callback, event) {
  let keepbook = isBatching
  isBatching = true
  try {
    return callback(event)
  } catch (e) {
  } finally {
    isBatching = keepbook
    if (!isBatching) {
      requetIdleCallback(updateFiberAndView, {
        timeout: new Date() + 1
      })
    }
  }
}
function updateView() {
  if (isBatching) {
    return
  }
  //更新视图
}
