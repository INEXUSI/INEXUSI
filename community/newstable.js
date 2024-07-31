const itemContainer = document.querySelector('.item-container');
const itemDB = [
    {num : "1", onoff:"on",date : "2023/11/17", title : "ESG 활동 선도하는 윤태근 회장, 사회 지도자들과의 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F18aa1ea1-53b4-427a-8c67-cecc769463fa%2FUntitled.png?table=block&id=43806de4-47ff-4035-860c-74ed6c6d04d7&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=630&userId=&cache=v2"},
    {num : "2", onoff:"on",date : "2023/12/01", title : "몽골 국방부 장관(Gursediin Saikhanbayar)과의 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F3075c1c3-2522-4f1f-b560-70d99785b4dd%2FUntitled.png?table=block&id=296df04c-20de-4565-a6d5-855d620bed47&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=630&userId=&cache=v2"},
    {num : "3", onoff:"off",date : "2023/12/01", title : "박상철 국회 입법 조사처장과 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F02300b00-87b1-4c44-9e5e-3d26f5669c4e%2FUntitled.png?table=block&id=c6317c5a-e376-4988-b19b-51d90041e087&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=630&userId=&cache=v2"},
]
const reversedItemDB = itemDB.slice().reverse();
reversedItemDB.forEach(item => {
    if (item.img === "") {return;}

    const itemElement = document.createElement('a');
        itemElement.href = item.link;
        itemElement.classList.add('item', 'box-type-3');
        // a
    const itemLeft = document.createElement('div');
        itemLeft.classList.add('item-l');
        // a>.item-l
    const imgElement = document.createElement('img');
        imgElement.src = item.img;
        imgElement.alt = "product thumbnail";
        imgElement.classList.add('item-img');
        itemLeft.appendChild(imgElement);
        //a>.item-l>.item-img
    const itemRight = document.createElement('div');
        itemRight.classList.add('item-r');
        // a>.item-r
    

    const itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = `${item.num}. ${item.title}`;
        //.item-name
        itemRight.appendChild(tagContainer);
        itemRight.appendChild(itemName);

        itemElement.appendChild(itemLeft);
        itemElement.appendChild(itemRight);

        itemContainer.appendChild(itemElement);
});

// 랜덤한 색상을 생성하는 함수
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    color = color + 'a1';
    return color;
}


/* <a href="https://s.click.aliexpress.com/e/_DmgVial" class="item box-type-3">
    <div class="item-l">
        <img src="./img/thumb/002.jpg" alt="product thumbnail" class="item-img"></img>
    </div>
    <div class="item-r">
        <div class="tag-container">
            <div class="tag">이게바로</div>
            <div class="tag" style="background-color: rgb(252, 195, 178);">공간절약</div>
            <div class="tag" style="background-color: rgb(255, 98, 0); color:#fff;">알리</div>
        </div>
        <span class="item-name">002. 공간절약 건조기</span>
    </div>
</a> */