## grid template

grid template을 사용하면 택스트를 그림처럼 활용해 전체적인 구조를 만들기 쉽습니다. 중요 포인트는 fr입니다. fr은 fraction의 약자로 사용 가능한 공간을 의미합니다. 또한 fr은 전역으로 결정되는 것이 아닌 grid container에서 결정됩니다. 따라서 fr을 쓰기 위해서는 grid container에서 height를 명시해야 합니다. 더이상 px등의 절대 단위를 사용하지 않게 해주는 좋은 단위 이다.

<br />

### 사용 예제

```html
<div class="grid">
        <div class="content1">
            <span>1</span>
        </div>
        <div class="content2">
            <span>2</span>
        </div>
        <div class="content3">
            <span>3</span>
        </div>
        <div class="content4">
            <span>4</span>
        </div>
    </div>
```

```css
.grid {
    display: grid;
    height: 100vh;
    grid-template:
    "content1 content1 content1 conten1t" 1fr
    "content2 content2 content2 content2" 1fr
    "content3 content3 content3 content3" 1fr
    "content4 content4 content4 content4" 1fr / 1fr 1fr 1fr 1fr;
    font-size: 4rem;
   }
   
  
   .content1 {
     background-color: #2ecc71;
     grid-area: content1;
     /* grid-column: 1/3;
     grid-row: 1/3; */
     grid-column: span 2;
     grid-row: span 2;
     display: flex;
     align-items: center;
     justify-content: center;
   }
   .content2 {
     background-color: #3498db;
     grid-area: content2;
     /* grid-column: 3/5;
     grid-row: 1/3; */
     grid-column: span 2;
     grid-row: span 2;
     display: flex;
     align-items: center;
     justify-content: center;
   }
   .content3 {
     background-color: #8e44ad;
     grid-area: content3;
     /* grid-column: 1/3;
     grid-row: 3/5; */
     grid-column: span 2;
     grid-row: span 2;
     display: flex;
     align-items: center;
     justify-content: center;
   }
   .content4{
     background-color: #f39c12;
     grid-area: content4;
     /* grid-column: 3/5;
     grid-row: 3/5; */
     grid-column: span 2;
     grid-row: span 2;
     display: flex;
     align-items: center;
     justify-content: center;
   }
```