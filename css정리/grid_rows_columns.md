## grid Rows & Columns

그리드 구간을 나눌때 `grid-template-area`보다 더 나은 방법이 있습니다. 바로 row와 columns를 활용해서 나누는 방법입니다. 사용법은 간단합니다. 시작과 끝 값을 설정하면 됩니다. tip이 있다면 `grid-row-end` 같은 end를 사용 할 때 그 끝 수 전까지 설정한다고 생각하면 편합니다.

<br />

### 사용 예시

```html
    <div class="grid">
        <div class="header"></div>
        <div class="content"></div>
        <div class="nav"></div>
        <div class="footer"></div>
    </div>
```

```css
.grid {
   display: grid;
   grid-template-columns: repeat(4,100px);
   grid-template-rows: repeat(4, 100px);
   gap:10px;
  }
  
 
  .header {
    background-color: #2ecc71;
    grid-column-start: 1;
    grid-column-end: 5;
  }
  .content {
    background-color: #3498db;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }
  .nav {
    background-color: #8e44ad;
    grid-row-start: 2;
    grid-row-end: 4;
    
  }
  .footer {
    background-color: #f39c12;
    grid-column-start: 1;
    grid-column-end: 5;
  }
```