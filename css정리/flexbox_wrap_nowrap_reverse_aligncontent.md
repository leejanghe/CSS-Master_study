## flex box _ wrap & nowrap & align-content & reverse

flexbox는 width보다 '같은 줄'에 있도록 하는 것을 우선시 하기때문에 종종 width가 깨지는 현상이 나타납니다. 이때 해결 할 수 있는 css 속성이 wrap 입니다. 

<br />

### flex-wrap

child의 사이즈를 유지하기 위해 씁니다. flex-wrap의 기본값은 nowrap입니다. 이때 width의 길이가 깨질수가 있습니다.

<br />

### reverse

말그대로 뒤집어 줍니다. 예를 들어 숫자가 순서대로 1~5가 있습니다. 만약 css속성을 `flex-direction:row-reverse`를 주게 되면 오른쪽부터 1이 시작 됩니다. 그외 `column-reverse` `wrap-reverse` 등 reverse를 활용해 표현 할 수 있습니다!

<br />

### align-content

`justify-content`와 비슷하지만 line에 관한 것입니다 즉 각 block이 여러 행에 걸쳐 나올 때, 행간 공백을 얼마나 할 것인지 지정 해줄수 있습니다. (ex) align-content:flex-start, align-content:space-around

<br />

### tip

부모 자식태그를 모두 flex설정을 하고 css속성을 적용하면 글자가 중앙에 위치하게 할 수 있습니다.

<br />

### 실습예제(복붙해서 조작도 해보자!)

```html
<div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
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
    flex-wrap: wrap;
    /* flex-wrap: wrap-reverse;
    align-content: center;
    flex-direction: column-reverse; */
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
```