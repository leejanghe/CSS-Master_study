## auto columns & rows

### child에만 적용돠는 property
- align-self
- justify-self
- place-self: (수직) (수평);

<br />

### grid-auto-rows: (크기);
- 만들어놓은 row보다 더 많은 content가 있으면, 자동으로 row를 만들어라.

<br />

### grid-auto-flow: (방향); [기본값: row]
- flex-direction과 비슷하다.
- row가 끝날 때 새로운 row를 만들지, 새로운 column을 만들지 결정한다.

- grid-auto-columns: (크기);
- grid-auto-flow: column;일때 작동한다.

<br />

## 사용 예제

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
    color: white;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 100px);
    grid-auto-flow:column;
    grid-auto-columns: 100px;
  }
  
  .item:nth-child(odd){
    background-color: #2ecc71;
  }
  .item:nth-child(even) {
    background-color: #3498db;
  }
```