const itemDB = [
    {num : "1", onoff:"on",date : "2023/11/17", title : "ESG 활동 선도하는 윤태근 회장, 사회 지도자들과의 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F68f480b4-2299-484f-b3c1-59dc4020f02b%2FUntitled.png?table=block&id=8beee839-8e21-4ec4-a1f4-8d81119ed938&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "2", onoff:"on",date : "2023/12/01", title : "몽골 국방부 장관(Gursediin Saikhanbayar)과의 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2Fa23254c3-d069-4050-9644-e1be660630f5%2FUntitled.png?table=block&id=5bdbc90d-c44b-4b03-959b-06755fa9779e&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "3", onoff:"on",date : "2023/12/01", title : "박상철 국회 입법 조사처장과 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F6b9019e2-da53-46d3-b7ac-688d526d2aaf%2FUntitled.png?table=block&id=00d70257-f0ea-463f-a295-a68b25343aec&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "4", onoff:"on",date : "2023/12/02", title : "제 17 전투 비행단 방문 - 정상화 전 공군참모총장, 권영해 전 국방부 장관과의 만남", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F016ff1a0-89b7-4359-be87-9e7001186a7f%2FUntitled.png?table=block&id=2c647f3e-954f-4d27-8d27-152782d623f4&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=640&userId=&cache=v2"},
    {num : "5", onoff:"on",date : "2023/12/04", title : "대구보건대 인당박물관 전시회 방문", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F5d320ccf-f5d4-445a-8cbd-66f8e791c156%2FUntitled.png?table=block&id=4942b661-c31a-411a-8295-dbd94cde7a54&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "6", onoff:"on",date : "2023/12/05", title : "저출산 등 여성인권의 대표 기관, 경기도 여성단체협의회", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2Fc17370b1-c992-4036-b411-3e7b4130679c%2FUntitled.png?table=block&id=b42dcdf7-0ae5-4e6d-b7a9-2c2bd777590d&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "7", onoff:"on",date : "2023/12/12", title : "김동연 경기 도지사, 이금자 여성단체협의회장과 함께 여성협회교류와 여성의 사회적 역할 논의", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F75a83b40-1bd1-4311-84b9-b234be6c84f8%2FUntitled.png?table=block&id=34e219f5-d6d2-4cf9-ada6-b51ed1662fdd&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "8", onoff:"on",date : "2023/12/13", title : "노보경 화백의 이승만 초대 대통령 초상화 기증식", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F8982e985-9a55-4ed4-a9c4-9e56b4faeb0d%2FUntitled.png?table=block&id=1559125b-4de5-4630-b8a7-5e714ee1fc26&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "9", onoff:"on",date : "2023/12/17", title : "민간외교에 대한 신원식국방장관의 답례", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F358bff24-7a7a-466a-8ef3-820c749bac68%2FUntitled.png?table=block&id=9411bd60-73be-4707-a507-50099fd81369&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "10", onoff:"on",date : "2024/04/07", title : "제 1기 INI 최고경영자 과정 오프닝 세레모니 행사", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F9013f7b1-e932-4c7f-bc85-1ff17cbca143%2FUntitled.png?table=block&id=d6370865-484d-4b3f-8d79-5fbb2d5d0a04&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=2000&userId=&cache=v2"},
    {num : "15", onoff:"on",date : "2024/05/09", title : "인사이트넥서스연구원과 중원대학교 업무협약서 체결", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2F06a6dfa5-26b3-4b89-a156-17da8e7852e1%2FUntitled.png?table=block&id=ab0bec2f-b316-47a5-abe0-8cf8b5b179d2&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1240&userId=&cache=v2"},
    {num : "18", onoff:"on",date : "2024/05/16", title : "인사이트넥서스연구원과 월드비전 업무협약서 체결식", img : "https://inexusi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32%2Fc91f37c0-159d-4da2-b109-a6e155a9273d%2FUntitled.png?table=block&id=620fb8c5-6280-4050-88d2-ca454ab9c5c8&spaceId=c31b3a0f-b3c5-4eed-8dbc-3f8e396e6c32&width=1420&userId=&cache=v2"},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
    {num : "", onoff:"off",date : "", title : "샘플", img : ""},
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
