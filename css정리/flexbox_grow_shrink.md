## flexbox grow % shrink

flexbox에서 grow와 shrink shrink라는 속성이 있습니다. 말 그대로 grow는 늘리다. shrink는 줄어든다라고 생각 하면 됩니다.

<br />

### flex-grow

flex-grow의 특징은 남아있는 공간, 여백이 있을때만 grow가 가능합니다. 또 한 화면이 커질 때, 엘리먼트도 같아 커지길 원할때 사용 할 수 있습니다. 기본값은 0이며 정의 되지 않다면 화면이 커져도 각 엘리먼트 크기가 커지지 않고 여백만 늘어 납니다.

<br />

### flex-shrink

flex-shrink는 플렉스박스가 쥐어짤 때 엘리먼트의 행동을 정의합니다. 화면이 작아지면 width가 설정되어 있어도 줄어 듭니다. 여러개의 엘리먼트 중 특정 엘리먼트를 줄일수 있습니다.

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
    justify-content: space-around;
    height: 70vh;
    border: 1px solid black;
    align-items: center;
    width: 50%;
}
  
.box{
    background-color: red;
    width: 150px;
    height: 150px;
    margin-bottom: 2px;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box:nth-child(2){
    /* flex-grow: 1; */
    flex-shrink: 2;
    background-color: black;
}
```