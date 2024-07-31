const itemDB = [
    {num : "1", onoff:"on",date : "2023/11/17", title : "ESG 활동 선도하는 윤태근 회장, 사회 지도자들과의 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F18aa1ea1-53b4-427a-8c67-cecc769463fa%2FUntitled.png?table=block&id=43806de4-47ff-4035-860c-74ed6c6d04d7&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=630&userId=&cache=v2"},
    {num : "2", onoff:"on",date : "2023/12/01", title : "몽골 국방부 장관(Gursediin Saikhanbayar)과의 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F3075c1c3-2522-4f1f-b560-70d99785b4dd%2FUntitled.png?table=block&id=296df04c-20de-4565-a6d5-855d620bed47&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=630&userId=&cache=v2"},
    {num : "3", onoff:"off",date : "2023/12/01", title : "박상철 국회 입법 조사처장과 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F02300b00-87b1-4c44-9e5e-3d26f5669c4e%2FUntitled.png?table=block&id=c6317c5a-e376-4988-b19b-51d90041e087&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=630&userId=&cache=v2"},
]


const itemContainer = document.querySelector('.item-container');
const reversedItemDB = itemDB.slice().reverse();
const itemsPerPage = 10;
let currentPage = 1;

// "on" 상태인 항목만 필터링
const onItems = reversedItemDB.filter(item => item.onoff === "on");

function displayItems(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = onItems.slice(start, end);

    const itemsHTML = pageItems.map(item => `
        <a href="../page/${item.num}.html" class="nitem">
            <div class="nitem-l">
                <img src="${item.img}" alt="product thumbnail" class="nitem-img">
            </div>
            <div class="nitem-r">
                <p class="nitem-title">${item.title}</p>
                <p class="nitem-date">${item.date}</p>
            </div>
        </a>
    `).join('');

    itemContainer.innerHTML = itemsHTML;
}

function createPagination() {
    const pageCount = Math.ceil(onItems.length / itemsPerPage);
    let paginationHTML = '<div class="pagination">';
    
    // 이전 페이지 버튼
    paginationHTML += `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>이전</button>`;
    
    // 페이지 번호 버튼
    for (let i = 1; i <= pageCount; i++) {
        paginationHTML += `<button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>${i}</button>`;
    }
    
    // 다음 페이지 버튼
    paginationHTML += `<button onclick="changePage(${currentPage + 1})" ${currentPage === pageCount ? 'disabled' : ''}>다음</button>`;
    
    paginationHTML += '</div>';
    
    // 기존 페이지네이션 제거 후 새로 추가
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }
    itemContainer.insertAdjacentHTML('afterend', paginationHTML);
}

function changePage(page) {
    const pageCount = Math.ceil(onItems.length / itemsPerPage);
    if (page < 1 || page > pageCount) return;
    
    currentPage = page;
    displayItems(currentPage);
    createPagination();
}

const boardInfo = document.querySelector('.boardinfo');
function updateBoardInfo() {
    boardInfo.innerHTML = `전체 ${onItems.length}건`;
}

// 초기 표시
updateBoardInfo();
displayItems(currentPage);
createPagination();
