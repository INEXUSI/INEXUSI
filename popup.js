const popupFunctions = {
    createAndShowPopup: function() {
        const popupHtml = `
            <div id="popupOverlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 999;">
                <div id="layerPopup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black; z-index: 1000;">
                    <div>
                        <h2>테스트 팝업</h2>
                        <br>
                        <p>- 매주 수요일, 목요일에만 열리는 팝업.</p>
                        <p>- 팝업이 활성화 되어있을 시 스크롤x</p>
                        <p>- 팝업 외부 클릭 시 닫기</p>
                        <p>- 오늘 하루 그만보기 기능 포함</p>
                        <br>
                    </div>    
                    <button id="closePopup">닫기</button>
                    <button id="hidePopupToday">오늘 하루 그만보기</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', popupHtml);
        document.getElementById('popupOverlay').style.display = 'block';
        document.body.style.overflow = 'hidden'; // 스크롤 막기
        
        document.getElementById('closePopup').addEventListener('click', this.hidePopup);
        document.getElementById('hidePopupToday').addEventListener('click', this.setPopupHidden.bind(this));
        document.getElementById('popupOverlay').addEventListener('click', this.handleOverlayClick.bind(this));
    },
    
    hidePopup: function() {
        document.getElementById('popupOverlay').style.display = 'none';
        document.body.style.overflow = ''; // 스크롤 다시 허용
    },
    
    handleOverlayClick: function(event) {
        if (event.target.id === 'popupOverlay') {
            this.hidePopup();
        }
    },
    
    setPopupHidden: function() {
        const now = new Date();
        const item = {
            value: 'true',
            expiry: now.getTime() + (24 * 60 * 60 * 1000)
        };
        localStorage.setItem('popupHidden', JSON.stringify(item));
        this.hidePopup();
    },
    
    checkPopupHidden: function() {
        const popupHiddenData = localStorage.getItem('popupHidden');
        if (popupHiddenData) {
            const item = JSON.parse(popupHiddenData);
            const now = new Date();
            if (now.getTime() > item.expiry) {
                localStorage.removeItem('popupHidden');
                return false;
            }
            return true;
        }
        return false;
    },
    
    isWednesdayOrThursday: function() {
        const today = new Date().getDay();
        return today === 3 || today === 4; // 3은 수요일, 4는 목요일
    },
    
    initPopup: function() {
        if (!this.checkPopupHidden() && this.isWednesdayOrThursday()) {
            this.createAndShowPopup();
        }
    }
};

window.onload = function() {
    popupFunctions.initPopup();
};