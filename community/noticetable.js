const itemDB = [
    {num : "1", onoff:"off",date : "", title : " ", img : ""},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
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
