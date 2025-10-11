// 画像情報の配列（URL とリンク先）
const imageData = [
{ imageUrl: "https://m.media-amazon.com/images/I/61Xi4QbyddL._SY425_.jpg", linkUrl: "https://amzn.to/4jvCYxi"},
{ imageUrl: "https://m.media-amazon.com/images/I/71WYOwQeWWL._SY466_.jpg", linkUrl: "https://amzn.to/4lyUJO3"},
{ imageUrl: "https://m.media-amazon.com/images/I/715D+IRyNKL._SY425_.jpg", linkUrl: "https://amzn.to/4i7rxdT"},
{ imageUrl: "https://m.media-amazon.com/images/I/51P0tkSiRkL._SY445_SX342_.jpg", linkUrl: "https://amzn.to/4llLAbj"},
{ imageUrl: "https://m.media-amazon.com/images/I/71sk2pKuMiL._SY425_.jpg", linkUrl: "https://amzn.to/4iZVLkl"},
{ imageUrl: "https://m.media-amazon.com/images/I/51F7pSJu01L._SY445_SX342_.jpg", linkUrl: "https://amzn.to/4jqeRzI"},
{ imageUrl: "https://m.media-amazon.com/images/I/71sbidl1DQL._SY522_.jpg", linkUrl: "https://amzn.to/3EiuAlC"},
{ imageUrl: "https://m.media-amazon.com/images/I/712H+N3vR-L._SY425_.jpg", linkUrl: "https://amzn.to/3Y2BJxh"},
{ imageUrl: "https://m.media-amazon.com/images/I/81zvJrZ1W5L._SY425_.jpg", linkUrl: "https://amzn.to/3XZwYEI"},
{ imageUrl: "https://m.media-amazon.com/images/I/61gXrZZWObL._SY466_.jpg", linkUrl: "https://amzn.to/3RSBcu9"},
{ imageUrl: "https://m.media-amazon.com/images/I/416yw11FlaL._SY445_SX342_.jpg", linkUrl: "https://amzn.to/3RXgcCo"},
{ imageUrl: "https://m.media-amazon.com/images/I/71Uf23prC5L._SY466_.jpg", linkUrl: "https://amzn.to/42MIDct"},
{ imageUrl: "https://m.media-amazon.com/images/I/71G+wlH1OqL._SY425_.jpg", linkUrl: "https://amzn.to/4jf2iI9"},
{ imageUrl: "https://m.media-amazon.com/images/I/71aMloW6CbL._SY522_.jpg", linkUrl: "https://amzn.to/4jaQ6b7"},
{ imageUrl: "https://m.media-amazon.com/images/I/61cABpgSGHL._SY522_.jpg", linkUrl: "https://amzn.to/44vFrDs"},
{ imageUrl: "https://m.media-amazon.com/images/I/71Uf23prC5L._SY522_.jpg", linkUrl: "https://amzn.to/42vsUx9"},
{ imageUrl: "https://m.media-amazon.com/images/I/71Gop9CPTpL._SY522_.jpg", linkUrl: "https://amzn.to/4cBu5Qd"},
{ imageUrl: "https://m.media-amazon.com/images/I/81w2qplWQWL._SY522_.jpg", linkUrl: "https://amzn.to/3Euf1Yb"},
{ imageUrl: "https://m.media-amazon.com/images/I/81bJS4fNyIL._SY522_.jpg", linkUrl: "https://amzn.to/4cClUU0"},
{ imageUrl: "https://m.media-amazon.com/images/I/71LXQaX5PTL._SY522_.jpg", linkUrl: "https://amzn.to/4cy8Tuw"},
{ imageUrl: "https://m.media-amazon.com/images/I/81T-DxrRiOL._SY522_.jpg", linkUrl: "https://amzn.to/3RjOVKr"},
{ imageUrl: "https://m.media-amazon.com/images/I/71AI3D0Ey9L._SY522_.jpg", linkUrl: "https://amzn.to/4lApkKQ"},
{ imageUrl: "https://m.media-amazon.com/images/I/71uQVPeynWL._SY522_.jpg", linkUrl: "https://amzn.to/3EyK595"},
{ imageUrl: "https://m.media-amazon.com/images/I/51Ih6FaeArL._SY445_SX342_.jpg", linkUrl: "https://amzn.to/3RRyRzB"},
{ imageUrl: "https://m.media-amazon.com/images/I/81PCAluAwEL._SY522_.jpg", linkUrl: "https://amzn.to/4imjDO6"},
{ imageUrl: "https://m.media-amazon.com/images/I/51ft8oFLZvL._SY445_SX342_.jpg", linkUrl: "https://amzn.to/3RXkXvK"},
{ imageUrl: "https://m.media-amazon.com/images/I/71IbAyjfMHL._SY522_.jpg", linkUrl: "https://amzn.to/4cz3HGK"},
{ imageUrl: "https://m.media-amazon.com/images/I/81DoNyB2JqL._SY522_.jpg", linkUrl: "https://amzn.to/4lEOFna"},
{ imageUrl: "https://m.media-amazon.com/images/I/71XJV4nRq4S._SY522_.jpg", linkUrl: "https://amzn.to/43WDbVJ"},
{ imageUrl: "https://m.media-amazon.com/images/I/71s8+fXBAtL._SY522_.jpg", linkUrl: "https://amzn.to/4luc9uZ"},
{ imageUrl: "https://m.media-amazon.com/images/I/71q1fqSHylL._SY522_.jpg", linkUrl: "https://amzn.to/4cyF9xz"},
{ imageUrl: "https://m.media-amazon.com/images/I/71yrgpIBi-L._SY522_.jpg", linkUrl: "https://amzn.to/4cyaosE"},
{ imageUrl: "https://m.media-amazon.com/images/I/71-8m+TJl-L._SY522_.jpg", linkUrl: "https://amzn.to/3Rosuno"},
{ imageUrl: "https://m.media-amazon.com/images/I/A1mpjdf6lNL._SY522_.jpg", linkUrl: "https://amzn.to/43SttUf"},
{ imageUrl: "https://m.media-amazon.com/images/I/819xjaqtnYL._SY522_.jpg", linkUrl: "https://amzn.to/3G9HL92"},
{ imageUrl: "https://m.media-amazon.com/images/I/81Xj6c4wbmL._SY522_.jpg", linkUrl: "https://amzn.to/3EaUPdW"},
{ imageUrl: "https://m.media-amazon.com/images/I/71uP0Xn86UL._SY522_.jpg", linkUrl: "https://amzn.to/42vvcwf"},
{ imageUrl: "https://m.media-amazon.com/images/I/41jVuZOim2L.jpg", linkUrl: "https://amzn.to/4jmcU8c"},
{ imageUrl: "https://m.media-amazon.com/images/I/51Dflu00EAL.jpg", linkUrl: "https://amzn.to/3Eymk0U"},
{ imageUrl: "https://m.media-amazon.com/images/I/61ITByTTBKL._SY522_.jpg", linkUrl: "https://amzn.to/3ErtPXu"},
{ imageUrl: "https://m.media-amazon.com/images/I/61N6B8eS67L._SY522_.jpg", linkUrl: "https://amzn.to/3Esx694"},
{ imageUrl: "https://m.media-amazon.com/images/I/71bJRozFedL._SY522_.jpg", linkUrl: "https://amzn.to/4ilgNZo"},
{ imageUrl: "https://m.media-amazon.com/images/I/51eXur1f-zL._SY522_.jpg", linkUrl: "https://amzn.to/4cLGfq4"},
{ imageUrl: "https://m.media-amazon.com/images/I/81oSXOzT+UL._SY522_.jpg", linkUrl: "https://amzn.to/3Gdg7rS"},
{ imageUrl: "https://m.media-amazon.com/images/I/71sk2pKuMiL._SY522_.jpg", linkUrl: "https://amzn.to/3GpZOI5"},
{ imageUrl: "https://m.media-amazon.com/images/I/71PLX+hY8SL._SY522_.jpg", linkUrl: "https://amzn.to/42fAD3F"},
{ imageUrl: "https://m.media-amazon.com/images/I/81kz+YvItzL._SY522_.jpg", linkUrl: "https://amzn.to/4lutd41"},
{ imageUrl: "https://m.media-amazon.com/images/I/81qGik5MtRL._SY522_.jpg", linkUrl: "https://amzn.to/42hPj2h"},
{ imageUrl: "https://m.media-amazon.com/images/I/81z-V21qkWL._SY522_.jpg", linkUrl: "https://amzn.to/3Edd16H"},
{ imageUrl: "https://m.media-amazon.com/images/I/61gei7Yx8tL._SY522_.jpg", linkUrl: "https://amzn.to/4imyPL6"},
{ imageUrl: "https://m.media-amazon.com/images/I/8162bhAT-GL._SY522_.jpg", linkUrl: "https://amzn.to/3Gdzj8Z"},
{ imageUrl: "https://m.media-amazon.com/images/I/81hKjpzaGOL._SY522_.jpg", linkUrl: "https://amzn.to/4lAIksO"},
{ imageUrl: "https://m.media-amazon.com/images/I/81ezhjEZuiL._SY522_.jpg", linkUrl: "https://amzn.to/3YyEDtC"},
{ imageUrl: "https://m.media-amazon.com/images/I/81RrNHvYTGL._SY522_.jpg", linkUrl: "https://amzn.to/4jht2HU"},
{ imageUrl: "https://m.media-amazon.com/images/I/71K2cd6VfjL._SY522_.jpg", linkUrl: "https://amzn.to/4lBup5Q"},
{ imageUrl: "https://m.media-amazon.com/images/I/81+qZ58yYNL._SY522_.jpg", linkUrl: "https://amzn.to/42EPK5K"},
{ imageUrl: "https://m.media-amazon.com/images/I/81zE7cVeF1L._SY522_.jpg", linkUrl: "https://amzn.to/3RRTYSn"},
{ imageUrl: "https://m.media-amazon.com/images/I/71lXIpy9FTL._SY522_.jpg", linkUrl: "https://amzn.to/43YVj14"},
{ imageUrl: "https://m.media-amazon.com/images/I/712gaUXyMuL._SY522_.jpg", linkUrl: "https://amzn.to/3EsB0ie"},
{ imageUrl: "https://m.media-amazon.com/images/I/81rVF1kxwrL._SY522_.jpg", linkUrl: "https://amzn.to/42Nb5ei"},
{ imageUrl: "https://m.media-amazon.com/images/I/811gg3YZB6L._SY522_.jpg", linkUrl: "https://amzn.to/42lP5Y4"},
{ imageUrl: "https://m.media-amazon.com/images/I/71ti+-H7FYL._SY522_.jpg", linkUrl: "https://amzn.to/4jfoCRX"},
{ imageUrl: "https://m.media-amazon.com/images/I/612CmJyQF6L._SY522_.jpg", linkUrl: "https://amzn.to/42iV7sr"},
{ imageUrl: "https://m.media-amazon.com/images/I/611cqJW+yvL._SY522_.jpg", linkUrl: "https://amzn.to/3RZO69D"},
{ imageUrl: "https://m.media-amazon.com/images/I/A1kxxmKJgpL._SY522_.jpg", linkUrl: "https://amzn.to/44t8N5m"},
{ imageUrl: "https://m.media-amazon.com/images/I/81pAW3UnTnL._SY522_.jpg", linkUrl: "https://amzn.to/3GsAzVy"},
{ imageUrl: "https://m.media-amazon.com/images/I/81tqtw9kE5L._SY522_.jpg", linkUrl: "https://amzn.to/4ilXoaW"},
{ imageUrl: "https://m.media-amazon.com/images/I/81CLU1I07BL._SY522_.jpg", linkUrl: "https://amzn.to/3RoXqno"},
{ imageUrl: "https://m.media-amazon.com/images/I/71VQbaPG4dL._SY522_.jpg", linkUrl: "https://amzn.to/4j8QdEd"},
{ imageUrl: "https://m.media-amazon.com/images/I/81w8YJcK5ZL._SY522_.jpg", linkUrl: "https://amzn.to/3RR2SzA"},
{ imageUrl: "https://m.media-amazon.com/images/I/61GvTx50KUL._SY522_.jpg", linkUrl: "https://amzn.to/4jD9Lk2"},
{ imageUrl: "https://m.media-amazon.com/images/I/71ZqHAYCJkL._SY522_.jpg", linkUrl: "https://amzn.to/4lPbogq"},
{ imageUrl: "https://m.media-amazon.com/images/I/71L8SYvrmoL._SY522_.jpg", linkUrl: "https://amzn.to/3GbWWhY"},
{ imageUrl: "https://m.media-amazon.com/images/I/71TbMwPQuOL._SY522_.jpg", linkUrl: "https://amzn.to/3Y5sM6i"},
{ imageUrl: "https://m.media-amazon.com/images/I/71hvmiz+pjL._SY522_.jpg", linkUrl: "https://amzn.to/4cyCN1K"},
{ imageUrl: "https://m.media-amazon.com/images/I/51Nh2ueIJzL._SY445_SX342_.jpg", linkUrl: "https://amzn.to/3Ebna3O"},
{ imageUrl: "https://m.media-amazon.com/images/I/510eOe3PF5L.jpg", linkUrl: "https://amzn.to/3Ggv2S7"},
{ imageUrl: "https://m.media-amazon.com/images/I/71VPiXRZqFL._SY522_.jpg", linkUrl: "https://amzn.to/3Y327XI"},
{ imageUrl: "https://m.media-amazon.com/images/I/71QM42Vkh3L._SY522_.jpg", linkUrl: "https://amzn.to/42Bu6zd"},
{ imageUrl: "https://m.media-amazon.com/images/I/71F5kr37UNL._SY522_.jpg", linkUrl: "https://amzn.to/3EyzBXi"},
{ imageUrl: "https://m.media-amazon.com/images/I/81q5SH3JZpL._SY522_.jpg", linkUrl: "https://amzn.to/42Ga7PZ"},
{ imageUrl: "https://m.media-amazon.com/images/I/71m1h1FBn3L._SY522_.jpg", linkUrl: "https://amzn.to/3Rp59Sq"},
{ imageUrl: "https://m.media-amazon.com/images/I/81JIIVypuYL._SY522_.jpg", linkUrl: "https://amzn.to/3RmrfVD"},
{ imageUrl: "https://m.media-amazon.com/images/I/71hDiMsmq7L._SY522_.jpg", linkUrl: "https://amzn.to/4iqax2O"},
{ imageUrl: "https://m.media-amazon.com/images/I/71p86ZDd8DL._SY522_.jpg", linkUrl: "https://amzn.to/4jbvCPr"},
{ imageUrl: "https://m.media-amazon.com/images/I/71ANg6Bi6EL._SY522_.jpg", linkUrl: "https://amzn.to/4iksLm4"},
{ imageUrl: "https://m.media-amazon.com/images/I/71HKYNjz3zL._SY522_.jpg", linkUrl: "https://amzn.to/3GrQLGD"},
{ imageUrl: "https://m.media-amazon.com/images/I/71OJowOYfAL._SY522_.jpg", linkUrl: "https://amzn.to/4jFdSfj"},
{ imageUrl: "https://m.media-amazon.com/images/I/71qd75LPHkL._SY522_.jpg", linkUrl: "https://amzn.to/44spT3g"},
{ imageUrl: "https://m.media-amazon.com/images/I/710j4i8o36L._SY522_.jpg", linkUrl: "https://amzn.to/4iihseb"},
{ imageUrl: "https://m.media-amazon.com/images/I/81Jj0UB0xDL._SY522_.jpg", linkUrl: "https://amzn.to/3Rp0znk"},
{ imageUrl: "https://m.media-amazon.com/images/I/71hhtVZXpDL._SY522_.jpg", linkUrl: "https://amzn.to/42uWjHW"},
{ imageUrl: "https://m.media-amazon.com/images/I/61LL-huBP0L._SY522_.jpg", linkUrl: "https://amzn.to/3G8Fafx"},
{ imageUrl: "https://m.media-amazon.com/images/I/41Br4tbu4aL.jpg", linkUrl: "https://amzn.to/3YBT2Fv"},
{ imageUrl: "https://m.media-amazon.com/images/I/51NwAIiTXLL.jpg", linkUrl: "https://amzn.to/3Y3YdxS"},
{ imageUrl: "https://m.media-amazon.com/images/I/81+cvJiFNeL._SY522_.jpg", linkUrl: "https://amzn.to/4jGv7Nt"},
{ imageUrl: "https://m.media-amazon.com/images/I/81QHcKtF1QL._SY522_.jpg", linkUrl: "https://amzn.to/4lyIFvV"}
    

];
        
// 画像をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
        
// シャッフルした画像を表示
const shuffledImages = shuffleArray([...imageData]);
const gallery = document.getElementById('imageGallery');
        
shuffledImages.forEach(item => {
    // リンク要素を作成
    const link = document.createElement('a');
    link.href = item.linkUrl;
    link.className = 'image-gallery-link';
    link.target = '_blank'; // 新しいタブでリンクを開く（必要に応じて削除可能）
            
    // 画像コンテナを作成
    const container = document.createElement('div');
    container.className = 'image-gallery-container';
            
    // 画像を作成
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = 'ギャラリー画像';
            
    // 要素を組み立てる
    container.appendChild(img);
    link.appendChild(container);
    gallery.appendChild(link);
});