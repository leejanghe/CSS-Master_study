## flex box align-self and order

flexbox에서 중요한 속성 중하나가 `align-self`와 `order`가 있다. 부모가 아닌 자식 아이템의 위치를 직접 변경하고 싶을 때 사용한다. 이때 유의할 점은 부모의 높이가 설정되어 있어야 한다. 그리고 `align-self`는 `aline-item`과 같이 동작한다. 다시 말해 cross axis방향에 있는 아이템 위치를 바꾸게 된다.

<br />

### order

order의 경우 단어 그대로 순서를 바꾼다. 이때 기본값은 0이라 order를 1로 줄 경우 order을 주지 않은 것 보다 뒤에 위치하게 된다. 고로 html을 통해 순서를 바꾸기 힘들 때 사용하기 유용하다.

<br />

### :nth-child()

`:nth-child()`는 자식 요소를 바꿀 때 사용하다. 알면 유용하기 떄문에 꼭 숙지하자

<br />

### 사용법 예제

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
    height: 50vh;
    border: 1px solid black;
    align-items: center;
}
  
.box{
    background-color: red;
    width: 100px;
    height: 100px;
    margin-bottom: 2px;
    color: white;
  }

.box:nth-child(1){
    align-self: flex-start;
}

.box:nth-child(2){
    order:3;
    align-self: center;
}

.box:nth-child(3){
    align-self: flex-end;
}
```


