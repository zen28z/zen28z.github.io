const adItems = [
    `<a href="https://px.a8.net/svt/ejp?a8mat=453ENT+4QVG62+1WP2+NXESX" rel="nofollow">
<img border="0" width="250" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=250421753287&wid=002&eno=01&mid=s00000008903004019000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=453ENT+4QVG62+1WP2+NXESX" alt="">`,
    `<a href="https://px.a8.net/svt/ejp?a8mat=453ENT+4POKYI+48D0+6BMG1" rel="nofollow">
<img border="0" width="350" height="240" alt="" src="https://www22.a8.net/svt/bgt?aid=250421753285&wid=002&eno=01&mid=s00000019746001062000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=453ENT+4POKYI+48D0+6BMG1" alt="">`,
    `<a href="https://px.a8.net/svt/ejp?a8mat=453ENT+4NAUJE+5PC8+HVNAP" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=250421753281&wid=002&eno=01&mid=s00000026612003003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=453ENT+4NAUJE+5PC8+HVNAP" alt="">`,
    `<a href="https://px.a8.net/svt/ejp?a8mat=453ENT+2D5122+1WP2+15P77L" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=250421753143&wid=002&eno=01&mid=s00000008903007004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=453ENT+2D5122+1WP2+15P77L" alt="">`,
    `<a href="https://px.a8.net/svt/ejp?a8mat=453ENT+2DQGNU+1WP2+1BNBJL" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=250421753144&wid=002&eno=01&mid=s00000008903008003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=453ENT+2DQGNU+1WP2+1BNBJL" alt="">`,
    `<a href="https://px.a8.net/svt/ejp?a8mat=3ZLYN8+5MFF8A+1WP2+6IHCX" rel="nofollow">
<img border="0" width="180" height="180" alt="" src="https://www28.a8.net/svt/bgt?aid=241209764340&wid=002&eno=01&mid=s00000008903001094000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=3ZLYN8+5MFF8A+1WP2+6IHCX" alt="">`,
    `<a href="https://px.a8.net/svt/ejp?a8mat=453ENT+4M3ZBU+5PC8+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=250421753279&wid=002&eno=01&mid=s00000026612001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=453ENT+4M3ZBU+5PC8+5YZ75" alt="">`

];
// ``

function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function displayItems(items) {
    const grid = document.getElementById('itemGrid');
    grid.innerHTML = '';

    items.forEach((itemHtml) => {
        const square = document.createElement('div');
        square.className = 'image-gallery-container ';

        const content = document.createElement('div');
        content.className = 'square-content';
        
        content.innerHTML = itemHtml;

        square.appendChild(content);
        grid.appendChild(square);
    });
}

function shuffleItems() {
    const shuffledItems = shuffle(adItems);
    displayItems(shuffledItems);
}

window.addEventListener('load', () => {
    shuffleItems();
});

window.addEventListener('beforeunload', () => {});