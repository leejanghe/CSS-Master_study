## grid minmax

minmax는 반응형 디자인 할때 많이 사용하는 속성중 하나입니다. 꼭 숙지! 사용법은 간단합니다. 
- grid-template-columns : repeat(10,minmax(100px, 1fr)); 일 경우 최대는 1fr로 설정하고 최소 100px 너비를 갖게 됩니다. 아래 예제를 통해 실험하기!

<br />

### 사용예제

```html
<div class="grid">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
        <div class="item">11</div>
        <div class="item">12</div>
        <div class="item">13</div>
        <div class="item">14</div>
        <div class="item">15</div>
        <div class="item">16</div>
        <div class="item">17</div>
        <div class="item">18</div>
        <div class="item">19</div>
        <div class="item">20</div>
      </div>
```

```css
.grid {
    /* background: grey; */
    color: rgb(176, 72, 72);
    display: grid;
    gap: 5px;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    grid-template-rows: repeat(4, 100px);
    /* grid-auto-flow:column; */
    grid-auto-columns: 100px;
  }

  .item:nth-child(odd){
    background-color: #2ecc71;
  }
  .item:nth-child(even) {
    background-color: #3498db;
  }
  ```