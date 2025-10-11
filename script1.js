// サンプルデータ（実際にはサーバーから取得するか、静的なデータとして定義します）
const albumData = {
    "2025-02": [
        { src: "https://scream.jp/images/Screenshot_20250211.jpg", info: "2025年2月10日" },
        { src: "https://scream.jp/images/Screenshot_20250213.jpg", info: "2025年2月12日" },
        { src: "https://scream.jp/images/Screenshot_20250214.jpg", info: "2025年2月13日" },
        { src: "https://scream.jp/images/Screenshot_20250215.jpg", info: "2025年2月14日" },
        { src: "https://scream.jp/images/Screenshot_20250218.jpg", info: "2025年2月17日" },
        { src: "https://scream.jp/images/Screenshot_20250219.jpg", info: "2025年2月18日" },
        { src: "https://scream.jp/images/Screenshot_20250220.jpg", info: "2025年2月19日" },
        { src: "https://scream.jp/images/Screenshot_20250221.jpg", info: "2025年2月20日" },
        { src: "https://scream.jp/images/Screenshot_20250222.jpg", info: "2025年2月21日" },
        { src: "https://scream.jp/images/Screenshot_20250226.jpg", info: "2025年2月25日" },
        { src: "https://scream.jp/images/Screenshot_20250227.jpg", info: "2025年2月26日" },
        { src: "https://scream.jp/images/Screenshot_20250228.jpg", info: "2025年2月27日" },
        { src: "https://scream.jp/images/Screenshot_20250301.jpg", info: "2025年2月28日" }
    ],
    "2025-03": [
        { src: "https://scream.jp/images/Screenshot_20250304.jpg", info: "2025年3月3日" },
        { src: "https://scream.jp/images/Screenshot_20250305.jpg", info: "2025年3月4日" },
        { src: "https://scream.jp/images/Screenshot_20250306.jpg", info: "2025年3月5日" },
        { src: "https://scream.jp/images/Screenshot_20250307.jpg", info: "2025年3月6日" },
        { src: "https://scream.jp/images/Screenshot_20250308.jpg", info: "2025年3月7日" },
        { src: "https://scream.jp/images/Screenshot_20250311.jpg", info: "2025年3月10日" },
        { src: "https://scream.jp/images/Screenshot_20250312.jpg", info: "2025年3月11日" },
        { src: "https://scream.jp/images/Screenshot_20250313.jpg", info: "2025年3月12日" },
        { src: "https://scream.jp/images/Screenshot_20250314.jpg", info: "2025年3月13日" },
        { src: "https://scream.jp/images/Screenshot_20250315.jpg", info: "2025年3月14日" },
        { src: "https://scream.jp/images/Screenshot_20250318.jpg", info: "2025年3月17日" },
        { src: "https://scream.jp/images/Screenshot_20250319.jpg", info: "2025年3月18日" },
        { src: "https://scream.jp/images/Screenshot_20250320.jpg", info: "2025年3月19日" },
        { src: "https://scream.jp/images/Screenshot_20250322.jpg", info: "2025年3月21日" },
        { src: "https://scream.jp/images/Screenshot_20250325.jpg", info: "2025年3月24日" },
        { src: "https://scream.jp/images/Screenshot_20250326.jpg", info: "2025年3月25日" },
        { src: "https://scream.jp/images/Screenshot_20250327.jpg", info: "2025年3月26日" },
        { src: "https://scream.jp/images/Screenshot_20250328.jpg", info: "2025年3月27日" },
        { src: "https://scream.jp/images/Screenshot_20250329.jpg", info: "2025年3月28日" },
        { src: "https://scream.jp/images/Screenshot_20250401.jpg", info: "2025年3月31日" }
    ],
    "2025-04": [
        { src: "https://scream.jp/images/Screenshot_20250402.jpg", info: "2025年4月1日" },
        { src: "https://scream.jp/images/Screenshot_20250403.jpg", info: "2025年4月2日" },
        { src: "https://scream.jp/images/Screenshot_20250404.jpg", info: "2025年4月3日" },
        { src: "https://scream.jp/images/Screenshot_20250405.jpg", info: "2025年4月4日" },
        { src: "https://scream.jp/images/Screenshot_20250408.jpg", info: "2025年4月7日" },
        { src: "https://scream.jp/images/Screenshot_20250409.jpg", info: "2025年4月8日" },
        { src: "https://scream.jp/images/Screenshot_20250410.jpg", info: "2025年4月9日" },
        { src: "https://scream.jp/images/Screenshot_20250411.jpg", info: "2025年4月10日" },
        { src: "https://scream.jp/images/Screenshot_20250412.jpg", info: "2025年4月11日" },
        { src: "https://scream.jp/images/Screenshot_20250415.jpg", info: "2025年4月14日" },
        { src: "https://scream.jp/images/Screenshot_20250416.jpg", info: "2025年4月15日" },
        { src: "https://scream.jp/images/Screenshot_20250417.jpg", info: "2025年4月16日" },
        { src: "https://scream.jp/images/Screenshot_20250418.jpg", info: "2025年4月17日" },
        { src: "https://scream.jp/images/Screenshot_20250419.jpg", info: "2025年4月18日" },
        { src: "https://scream.jp/images/Screenshot_20250420.jpg", info: "2025年4月21日" }
        
    ]
};
// グループの順序
const groupOrder = ["2025-02", "2025-03","2025-04"];
// 現在のグループとインデックス
let currentGroup = "2025-04";
let currentIndex = 0;
// 要素
const imageCard = document.getElementById('imageCard');
const albumImage = document.getElementById('albumImage');
const imageInfo = document.getElementById('imageInfo');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const settingsBtn = document.getElementById('settingsBtn');
const settingsPopup = document.getElementById('settingsPopup');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');
const modeToggle = document.getElementById('modeToggle');
const groupSelector = document.getElementById('groupSelector');
const messagePopup = document.getElementById('messagePopup');
const popupMessage = document.getElementById('popupMessage');
const navItems = document.querySelectorAll('.nav-item');
const headerLogo = document.querySelector('.header-logo');
// 初期画像をロード
updateImage();
// タッチ/スワイプの処理
let startX, startY, moveX, moveY;
let isMoving = false;
imageCard.addEventListener('touchstart', handleTouchStart, false);
imageCard.addEventListener('touchmove', handleTouchMove, false);
imageCard.addEventListener('touchend', handleTouchEnd, false);
// マウス操作のための処理（デスクトップ用）
imageCard.addEventListener('mousedown', handleMouseDown, false);
document.addEventListener('mousemove', handleMouseMove, false);
document.addEventListener('mouseup', handleMouseUp, false);
        
function handleTouchStart(e) {
    // タッチイベントがinput要素やスクロール中の要素から始まった場合は、デフォルトのタッチ動作を許可
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || 
        e.target.tagName === 'TEXTAREA' || isScrollableElement(e.target)) {
        return;
    }
    startTouchOrClick(e.touches[0].clientX, e.touches[0].clientY);
    // ここでpreventDefaultを呼び出さないことで、スクロールが可能になる
}
        
// 要素がスクロール可能かどうかをチェックする関数
function isScrollableElement(element) {
    const style = window.getComputedStyle(element);
    return (style.overflowY === 'auto' || style.overflowY === 'scroll') && 
            element.scrollHeight > element.clientHeight;
}
        
function handleMouseDown(e) {
    // 同様に、スクロール可能な要素でのマウスダウンイベントはキャプチャしない
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || 
        e.target.tagName === 'TEXTAREA' || isScrollableElement(e.target)) {
        return;
    }
    startTouchOrClick(e.clientX, e.clientY);
    e.preventDefault(); // マウスイベントの既定の動作を防止
}
        
function startTouchOrClick(x, y) {
    startX = x;
    startY = y;
    isMoving = true;
}
        
function handleTouchMove(e) {
    if (!isMoving) return;
            
    // 縦方向の動きが横方向より大きい場合は、スワイプではなくスクロールとして扱う
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = Math.abs(currentX - startX);
    const diffY = Math.abs(currentY - startY);
            
    if (diffY > diffX) {
        // 縦スクロールの場合は何もしない（デフォルトのスクロール動作を許可）
        isMoving = false;
        return;
    }
            
    // 横スワイプの場合のみ処理
    handleMove(currentX, currentY);
    e.preventDefault(); // 横スワイプの場合は他の動作を防止
}
        
function handleMouseMove(e) {
    if (!isMoving) return;
    handleMove(e.clientX, e.clientY);
    e.preventDefault(); // マウスイベントの既定の動作を防止
}
        
function handleMove(x, y) {
    moveX = x - startX;
    moveY = y - startY;
            
    // 横方向の動きが大きい場合のみ処理
    if (Math.abs(moveX) > Math.abs(moveY)) {
        // 動きに応じて傾きと位置を変更
        const rotate = moveX * 0.2;
        imageCard.style.transform = `translateX(${moveX}px) rotate(${rotate}deg)`;
    }
}
        
function handleTouchEnd(e) {
    if (!isMoving) return;
    finishTouchOrClick();
    // ここでもpreventDefaultを呼び出さない
}
        
function handleMouseUp(e) {
    if (!isMoving) return;
    finishTouchOrClick();
    e.preventDefault(); // マウスイベントの既定の動作を防止
}
        
function finishTouchOrClick() {
    isMoving = false;
            
    // スワイプの判定（50px以上の移動で判定）
    if (moveX > 50) {
        // 左スワイプ（前へ）
        navigateNext();
    } else if (moveX < -50) {
        // 右スワイプ（次へ）
        navigatePrevious();
    }
            
    // 位置をリセット
    imageCard.style.transform = 'translateX(0) rotate(0deg)';
    moveX = 0;
}
// 次の写真へ移動
function navigateNext() {
    const currentImages = albumData[currentGroup];
            
    if (currentIndex < currentImages.length - 1) {
        // 同じグループ内の次の画像
        currentIndex++;
        updateImage();
    } else {
        // 次のグループへ
        const currentGroupIndex = groupOrder.indexOf(currentGroup);
        if (currentGroupIndex < groupOrder.length - 1) {
            const nextGroup = groupOrder[currentGroupIndex + 1];
            currentGroup = nextGroup;
            currentIndex = 0;
            groupSelector.value = currentGroup;
            updateImage();
            showMessage(`${nextGroup.substring(0, 4)}年${nextGroup.substring(5, 7)}月`);
        } else {
            // 最後のグループの最後の画像
            showMessage("これが最後です");
        }
    }
}
// 前の写真へ移動
function navigatePrevious() {
    if (currentIndex > 0) {
        // 同じグループ内の前の画像
        currentIndex--;
        updateImage();
    } else {
        // 前のグループへ
        const currentGroupIndex = groupOrder.indexOf(currentGroup);
        if (currentGroupIndex > 0) {
            const prevGroup = groupOrder[currentGroupIndex - 1];
            currentGroup = prevGroup;
            currentIndex = albumData[prevGroup].length - 1;
            groupSelector.value = currentGroup;
            updateImage();
            showMessage(`${prevGroup.substring(0, 4)}年${prevGroup.substring(5, 7)}月`);
        } else {
            // 最初のグループの最初の画像
            showMessage("これが最初です");
        }
    }
}
// 画像を更新
function updateImage() {
    const image = albumData[currentGroup][currentIndex];
    albumImage.src = image.src;
    imageInfo.textContent = image.info;
}

// メッセージポップアップを表示
function showMessage(message) {
    popupMessage.textContent = message;
    messagePopup.style.display = 'block';
            
    // 1秒後に非表示
    setTimeout(() => {
        messagePopup.style.display = 'none';
    }, 1000);
}

// ハンバーガーメニューの開閉
hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.add('open');
    menuOverlay.classList.add('open');
});

menuCloseBtn.addEventListener('click', () => {
    hamburgerMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
});

menuOverlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
});

// 設定ポップアップの開閉
settingsBtn.addEventListener('click', () => {
    settingsPopup.style.display = 'block';
    menuOverlay.classList.add('open');
});

settingsCloseBtn.addEventListener('click', () => {
    settingsPopup.style.display = 'none';
    menuOverlay.classList.remove('open');
});

// オーバーレイのクリックでポップアップを閉じる
menuOverlay.addEventListener('click', () => {
    settingsPopup.style.display = 'none';
    menuOverlay.classList.remove('open');
});

// モード切り替え
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
            
    if (document.body.classList.contains('light-mode')) {
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// グループ選択
groupSelector.addEventListener('change', () => {
    currentGroup = groupSelector.value;
    currentIndex = 0;
    updateImage();
});

// ボトムナビゲーションの切り替え
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // アクティブクラスを全て削除
        navItems.forEach(nav => nav.classList.remove('active'));
                
        // クリックされた要素にアクティブクラスを追加
        item.classList.add('active');
                
        // タブコンテンツを切り替え
        const tabId = item.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
    });
});