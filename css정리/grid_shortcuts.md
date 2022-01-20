## grid shortcuts

`grid-column`와 `grid-row` 를 활용해서 start 값과 end값을 넣어 그리드 작성을 할 수 있습니다. 하지만 간단한 문법만 알면 굳이 start 값과 end값을 주지 않아도 충분히 그리드 표현이 가능합니다.

<br />

### shortcuts 문법

- grid-column : (start) / (end);
- grid-row: (start) / (end);

추가적으로 알면 좋은 팁

- -1, -2, -3 => 끝에서부터 Line세기
- (start) / span `cell 수` => 시작점과 끝점을 적는걸 대신한다.

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
     /* grid-column-start: 1;
     grid-column-end: 5; */
     /* todo 두가지 방법 활용해보기 (둘다가능) */
     grid-column: span 4;
     /* grid-column: 1/-1; */
   }
   .content {
     background-color: #3498db;
     /* grid-column-start: 1;
     grid-column-end: 4;
     grid-row-start: 2;
     grid-row-end: 4; */
    /* todo 두가지 방법 활용해보기 (둘다가능) */
     grid-column: 1/4;
     grid-row: 2/4;
     /* grid-column: span 3;
     grid-row: 2/span 2; */
   }
   .nav {
     background-color: #8e44ad;
     /* grid-row-start: 2;
     grid-row-end: 4; */
     /* todo 두가지 방법 활용해보기 (둘다가능) */
     grid-row: span 2;
     /* grid-row: 2/4; */
     
   }
   .footer {
     background-color: #f39c12;
     /* grid-column-start: 1;
     grid-column-end: 5; */
     /* todo 두가지 방법 활용해보기 (둘다가능) */
     grid-column: 1/5;
     /* grid-column: span 4; */
   }
```