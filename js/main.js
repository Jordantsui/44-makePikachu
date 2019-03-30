!function(){
  var duration = 50
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    //把重要的数据写到data里
    //jquery.attr(attribute,value)    用于设置该元素的属性
    //若没有value，用于返回该元素的属性
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    //jquery.siblings()是个选择器，选择满足条件的兄弟元素（这里去掉.active也可以，但必须保留括号）
    switch(speed){
      case 'slow':
        duration = 100
        break
        //如果没有break，只能一次调速，不能再改
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      //注意，run的作用域只在run(){}里面
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)   //中断只需一次clearTimeout
      }else{
        fn && fn.call()
        //如果有fn，则调用fn
      }
    }, duration)
    //这里的setTimeout一开始是setInterval，容易想到，调节速度，可以调节
    //setInterval的duration，但是实际上，setInterval只会在一开始的时候读取一下
    //duration，之后，即使再改，也没用了。
    //所以可以把setInterval改成setTimeout，因为setTimeout是通过反复调用run函数
    //实现的，改掉duration，会影响到setTimeout的调用
  }
  let code = `/*
 * 首先，先画出皮卡丘的脸
 */
.preview{
  background: #FEE433;
}
/*
 * 接下来，是鼻子
 */
.nose{
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
}
/*
 * 然后，画眼睛
 */
.eye{
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
}
/*
 * 眼珠子
 */
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top:-1px;
  border: 2px solid #000;
}
/*
 * 左眼
 */
.eye.left{
  right: 50%;
  margin-right: 90px;
}
/*
 * 右眼在右边
 */
.eye.right{
  left: 50%;
  margin-left: 90px;
}
/*
 * 画脸蛋
 */
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
}
/*
 * 将脸蛋放到正确的位置
 */
.face.left{
  right: 50%;
  margin-right: 116px;
}
.face.right{
  left: 50%;
  margin-left: 116px;
}
/*
 * 上嘴唇
 */
.upperLip{
  height: 25px;
  width: 80px;
  border: 2px solid black;
  position: absolute;
  top: 50px;
  background: #FDE348;
}
.upperLip.left{
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right{
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/*
 * 下嘴唇
 */
.lowerLip-wrapper{
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 110px;
  overflow: hidden;
  width: 300px;
}
.lowerLip{
  height: 3500px;
  width: 300px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
 * 舌头
 */
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: -20px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}
/*
 * 皮卡丘画好了
 */
`
  writeCode('',code)

}.call()
