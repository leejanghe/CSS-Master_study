## grid basic

grid를 사용할 때 기존 flexbox의 행열이 햇갈릴 때가 있다. grid에서 columns은 가로에 영향 row는 세로에 영향을 준다. 

<br />

### 용어 정리

- grid-template-columns : 각 columns의 크기와 갯수 설정
- grid-template-rows : 각 row의 크기와 개수
- gap : column, row 사이 공간
- columns-gap : columns 사이 공간 크기
- row-gap : gap 사이 공간 크기

<br />

```css
.container{
    display: grid;
    /* 가로 */
    grid-template-columns: 250px 250px 250px;
    columns-gap: 5px;
    /* 세로 */
    grid-template-rows: 250px 150px 300px;
    row-gap:5px;
    /* row, columns 사이 */
    /* gap:10px */
}
  
  
.box{
    background-color: red;
    color: white;
    font-size: 50px;
    display: flex;
    border: 1px solid black;
  }
```