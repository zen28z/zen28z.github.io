document.addEventListener('DOMContentLoaded', () => {
    // DOM要素の取得
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const playerList = document.getElementById('player-list');
    const nightModeSwitch = document.getElementById('night-mode-switch');
    const shareBtn = document.getElementById('share-btn');
    const voteForm = document.getElementById('vote-form');
    const salaryInput = document.getElementById('salary-input');

    let currentPlayerId = 1; // 初期表示する選手のID
    let playersData = [];
    let voteChart = null;

    // --- 初期化処理 ---
    const init = async () => {
        // ナイトモードの初期設定
        if (localStorage.getItem('nightMode') === 'true') {
            document.body.classList.add('dark-mode');
            nightModeSwitch.checked = true;
        }
        await loadPlayers();
        await loadPlayerData(currentPlayerId);
        setupEventListeners();
    };

    // --- イベントリスナーの設定 ---
    const setupEventListeners = () => {
        hamburgerBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);
        nightModeSwitch.addEventListener('change', toggleNightMode);
        shareBtn.addEventListener('click', sharePage);
        voteForm.addEventListener('submit', handleVoteSubmit);
    };

    // --- メニューの開閉 ---
    const toggleMenu = () => {
        sideMenu.classList.toggle('open');
        menuOverlay.classList.toggle('show');
    };

    // --- ナイトモード切替 ---
    const toggleNightMode = () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('nightMode', nightModeSwitch.checked);
        // グラフを再描画してテーマを適用
        loadPlayerData(currentPlayerId);
    };

    // --- 選手リストの読み込みと表示 ---
    const loadPlayers = async () => {
        try {
            const response = await fetch('api/players.json');
            playersData = await response.json();
            
            playerList.innerHTML = '';
            playersData.forEach(player => {
                const li = document.createElement('li');
                li.textContent = player.name;
                li.dataset.id = player.id;
                li.addEventListener('click', () => {
                    currentPlayerId = player.id;
                    loadPlayerData(currentPlayerId);
                    toggleMenu();
                });
                playerList.appendChild(li);
            });
        } catch (error) {
            console.error('選手リストの読み込みに失敗しました:', error);
        }
    };
    
    // --- 特定の選手のデータ読み込みと表示 ---
    const loadPlayerData = async (playerId) => {
        try {
            const response = await fetch(`api/get_data.php?id=${playerId}`);
            const data = await response.json();
            
            updateProfile(data.player);
            updateStatistics(data.stats);
            renderChart(data.chartData);

        } catch (error) {
            console.error('選手データの読み込みに失敗しました:', error);
            // エラー時の表示リセットなど
        }
    };
    
    // プロフィール更新
    const updateProfile = (player) => {
        document.getElementById('player-image').src = player.image || 'images/default.png';
        document.getElementById('player-image').alt = player.name;
        document.getElementById('player-name').textContent = player.name;
        document.getElementById('player-team').textContent = player.team;
    };
    
    // 統計情報更新
    const updateStatistics = (stats) => {
        const salary = stats.median !== null ? `${stats.median.toLocaleString()} 万円` : 'データ不足';
        document.getElementById('estimated-salary').innerHTML = salary;
        document.getElementById('valid-votes').textContent = stats.validVoteCount;
        document.getElementById('total-votes').textContent = stats.totalVoteCount;
    };

    // --- グラフ描画 ---
    const renderChart = (chartData) => {
        const ctx = document.getElementById('vote-chart').getContext('2d');
        const isDarkMode = document.body.classList.contains('dark-mode');
        const textColor = isDarkMode ? '#e0e0e0' : '#333';
        const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

        if (voteChart) {
            voteChart.destroy();
        }

        if (!chartData || chartData.labels.length === 0) {
            // データがない場合の処理
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = textColor;
            ctx.textAlign = 'center';
            ctx.fillText('投票データがまだありません。', ctx.canvas.width / 2, ctx.canvas.height / 2);
            return;
        }

        voteChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: '投票分布 (正規分布近似)',
                    data: chartData.data,
                    borderColor: isDarkMode ? '#0cf' : '#007bff',
                    backgroundColor: isDarkMode ? 'rgba(0, 204, 255, 0.2)' : 'rgba(0, 123, 255, 0.2)',
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false
                    },
                    x: {
                        ticks: {
                            color: textColor,
                            callback: function(value, index, values) {
                                // 目盛りを間引いて表示
                                if (index === 0 || index === values.length - 1 || index === Math.floor(values.length / 2)) {
                                    return this.getLabelForValue(value) + '万円';
                                }
                                return '';
                            }
                        },
                        grid: {
                            color: gridColor
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: (context) => `${context[0].label} 万円`,
                            label: (context) => `相対度数: ${context.raw.toFixed(4)}`
                        }
                    }
                }
            }
        });
    };
    
    // --- 投票処理 ---
    const handleVoteSubmit = async (event) => {
        event.preventDefault();
        const salary = parseInt(salaryInput.value, 10);
        if (isNaN(salary) || salary <= 0) {
            alert('有効な金額を入力してください。');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('id', currentPlayerId);
            formData.append('salary', salary);
            
            const response = await fetch('api/submit_vote.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                alert('投票ありがとうございます！');
                salaryInput.value = '';
                await loadPlayerData(currentPlayerId); // データを再読み込みして表示を更新
            } else {
                throw new Error(result.message || '投票に失敗しました。');
            }
        } catch (error) {
            alert(error.message);
            console.error('投票エラー:', error);
        }
    };

    // --- 共有機能 ---
    const sharePage = () => {
        const player = playersData.find(p => p.id === currentPlayerId);
        const shareData = {
            title: `【年俸予測】${player.name}の年俸は？`,
            text: `みんなで${player.name}選手の年俸を予測しよう！`,
            url: window.location.href
        };
        if (navigator.share) {
            navigator.share(shareData)
                .catch(err => console.error('共有に失敗しました', err));
        } else {
            // Web Share APIが使えない場合のフォールバック
            alert('お使いのブラウザは共有機能に対応していません。');
        }
    };

    // 初期化実行
    init();
});