## Grid template Areas

grid를 주는 방법중 미리 구간을 나누고 `grid-template-areas`속성을 활용해서 구간 설정을 할 수 있습니다. 그리고 반복적인 구간을 repeqt이라는 함수를 통해 그리드 설정이 가능합니다.

<br />

### 예제

`grid-template-areas`속성을 사용할 때 네임은 개별적으로 속성을 부여 할때 이름이 같아야 먹힙니다. 작명해도 상관 없습니다.

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
    grid-template-columns: 250px 250px 250px;
    grid-template-rows: 100px 50px 300px;
    column-gap: 5px;
    row-gap: 10px;
    grid-template-columns: auto 200px;
    grid-template-rows: 100px repeat(2, 200px) 100px;
    grid-template-areas:
      "header header header header"
      "content content content nav"
      "content content content nav"
      "footer footer footer footer";
  }
  
 
  .header {
    background-color: #2ecc71;
    grid-area: header;
  }
  .content {
    background-color: #3498db;
    grid-area: content;
  }
  .nav {
    background-color: #8e44ad;
    grid-area: nav;
  }
  .footer {
    background-color: #f39c12;
    grid-area: footer;
  }
```