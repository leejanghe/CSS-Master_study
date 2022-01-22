## grid - auto-fill & auto-fit

`auto-fill` 과 `auto-fit`은 전부 repeat()함수 안에서만 동작합니다. 이 둘을 이용하면 반응형 웹사이트를 손쉽게 만들수 있으며 minmax와 같이 활용하면 금상첨화 입니다!! 

<br />

### auto-fill

정해준 크기 안에서 가능한 많은 빈 column(row)를 만들어 줍니다. (남는 공간을 빈 cell로 가득 채움)

<br />

### auto-fit

현재 elemnet를 stretch해서 column(row) 딱 맞게 (fit) 해줍니다.

<br />

### 사용예제

```html
<div class="bg">
        auto-fill
        <div class="grid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
        </div>
        auto-fit
        <div class="grid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
        </div>
    </div>
```

```css
.grid {
    /* background: grey; */
    color: rgb(176, 72, 72);
    display: grid;
    gap: 5px;
    grid-template-rows: 100px;
    margin-bottom: 30px;
  }

  .item:nth-child(odd){
    background-color: #2ecc71;
  }
  .item:nth-child(even) {
    background-color: #3498db;
  }

.grid:nth-child(1){
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}

.grid:nth-child(2){
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```