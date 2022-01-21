## grid place-content

- items는 각각의 cell을 의미한다면 content는 그리드 전체를 의미한다.
- jusitfy(align)-items은 각각의 셀 내부에서 그리드 요소를 움직이는 것이고
- justify(align)-content은 즉 그리드 전체를 움직이게 된다.

<br />

### align이랑 jusitfy값을 전부 건드릴 수 있는 속성
- place-items: y(align) x(justify);
- place-content: y(align) x(justify);

* 참고로 justify(align)(place)-content(s)를 다룰 떄, stretch 속성은 먹히지 않는다! 이럴때는 그리드 콘테이너에 height을 주고 각 cell에 fr을 쓰면 얼추 비슷하게 된다

<br />

### 사용 예제 

```html
<div class="grid">
        <div class="header">header</div>
        <div class="content">content</div>
        <div class="nav">nav</div>
        <div class="footer">footer</div>
        <div class="header">header</div>
        <div class="content">content</div>
        <div class="nav">nav</div>
        <div class="footer">footer</div>
        <div class="header">header</div>
        <div class="content">content</div>
        <div class="nav">nav</div>
        <div class="footer">footer</div>
        <div class="header">header</div>
        <div class="content">content</div>
        <div class="nav">nav</div>
        <div class="footer">footer</div>
      </div>
```

```css
.grid {
    background: grey;
    color: white;
    display: grid;
    gap: 5px;
    height: 130vh;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 100px);
    place-content: end center;
  }
  
  .header {
    background-color: #2ecc71;
  }
  .content {
    background-color: #3498db;
  }
  .nav {
    background-color: #8e44ad;
  }
  .footer {
    background-color: #f39c12;
  }
```