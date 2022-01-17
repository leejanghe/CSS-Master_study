## Flex box 핵심 

flexbox를 사용하기전 상자를 나란히 놓을 때 `display-inline-block` 을 하면 된다. 하지만 flex 박스를 사용하면 편하게 할 수 있다.
우선 flexbox를 사용하려면 플렉스 컨테이너 안에 넣어야 사용 할 수 있습니다. 또 한 flex box는 플렉스 컨테이너에 적용해야 됩니다.


```html
 <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
    </div>
```

```css
.container{
    display:flex;
}

.box{
    background-color: red;
    width: 100px;
    height: 100px;
    margin-bottom: 2px;
}
```

<br />

### justify-content 와 align-items 차이

flex box는 기본값으로 row 즉 가로(열)가 기본 방향입니다. 여기서 중요한 점은 flex를 했을 때 사용할 수 있는 대표적인 속성이 `justify-content` 와 `align-items`가 있습니다. 이둘의 차이점은 `justify-content` 은 가로기준에 영향 `align-items`는 세로기준에 영향을 준다라고 생각하면 됩니다. 

<br />

### flex-direction:column

기본적으로 flex box는 flex-direction:row 가 기본값입니다. 하지만 `column` 이라는 속성을 주게 되면 위에 말한 `justify-content` 와 `align-items`이 반대 개념이 됩니다. `justify-content`는 세로기준에 영향, `align-items`은 가로기준에 영향을 줍니다. 

```html
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
    </div>
    <div class="container1">
        <div class="box1">1</div>
        <div class="box1">2</div>
        <div class="box1">3</div>
    </div>
```

```css
/*  flexbox 기본 값 main axios */
.container{
    display:flex;
    /* main axios */
    justify-content: space-around;
    /* cross axios */
    align-items: center;
    height: 50vh;
    border: 1px solid black;
}
  
  
.box{
    background-color: red;
    width: 100px;
    height: 100px;
    margin-bottom: 2px;
    color: white;
  }


  /* column을 준경우 cross axios */
  .container1{
    display:flex;
    flex-direction: column;
    /* main axios */
    justify-content: space-around;
    /* cross axios */
    align-items: center;
    height: 50vh;
    border: 1px solid black;
}
  
  
.box1{
    background-color: red;
    width: 100px;
    height: 100px;
    margin-bottom: 2px;
    color: white;
  }
```