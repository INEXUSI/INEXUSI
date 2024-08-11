const popupFunctions = {
    createAndShowPopup: function() {
        const popupHtml = `
            <div id="popupOverlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 999;">
                <div id="layerPopup" class="popupbox" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);z-index: 1000;">
                    <div class="popupcontent">
                        <div class="putitle">
                            <h2>제2기 INI 최고경영자과정</h2>
                            <p>9.12 - 11.28(국내일정)</p>
                        </div>
                        <div class="pudesc">
                            <br>
                            <p>매주 목요일 오후 8시 20분 수업이 시작됩니다.</p>
                            <p>아래 수업 입장하기를 눌러 수업에 입장해주세요.</p>
                            <p>입장 코드는 현장에서 안내해드립니다.</p>
                            <br>
                            <p>*10월 첫째 주 수업은 공휴일로 인해 10월 2일 수요일로 변경되었습니다.</p>
                        </div>
                    </div>
                    
                    <button class="puenter">
                        <a href="./enter.html" target="_blank">수업 입장하기</a>
                    </button>
                    <div class="popupclose">
                        <button id="hidePopupToday" class="puc-l">
                            오늘 하루 보지 않기
                        </button>
                        <button id="closePopup" class="puc-r">
                            닫기
                        </button>
                    </div>
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
        if (!this.checkPopupHidden()) {
            this.createAndShowPopup();
        }
        // if (!this.checkPopupHidden() && this.isWednesdayOrThursday()) {
        //     this.createAndShowPopup();
        // }
            // this.createAndShowPopup();
    }
};

window.onload = function() {
    popupFunctions.initPopup();
};