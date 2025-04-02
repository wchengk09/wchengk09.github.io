const metal = ['H','K','Na','NH4','Ba','Ca','Mg','Al','Mn','Zn','Fe','Fe','Cu','Ag'];
const metal_jia = [1,1,1,1,2,2,2,3,2,2,2,3,2,1];
const acid = ['OH','NO3','Cl','SO4','CO3'];
const acid_jia = [1,1,1,2,2];
let list = [];

function gcd(a,b){
    if (b === 0)return a;
    return gcd(b,a % b);
}

function lcm(a,b){
    return a / gcd(a,b) * b;
}

function gen(){
    let m,a;
    while (1){
        m = Math.floor(Math.random() * metal.length);
        a = Math.floor(Math.random() * acid.length);
        if (m === 0 && a === 0)continue;
        if (m === metal.length - 1 && a === 0)continue;
        if (m === metal.length - 3 && a === 4)continue;
        if (m == 7 && a === 4)continue;
        break;
    }
    let l = lcm(metal_jia[m],acid_jia[a]);
    let j1 = l / metal_jia[m],j2 = l / acid_jia[a];
    let name = '';
    if (metal[m] === 'NH4' && j1 !== 1)name += '(';
    name += metal[m];
    if (metal[m] === 'NH4' && j1 !== 1)name += ')';
    if (j1 !== 1)name += j1;
    if (acid[a] !== 'Cl' && j2 !== 1)name += '(';
    name += acid[a];
    if (acid[a] !== 'Cl' && j2 !== 1)name += ')';
    if (j2 !== 1)name += j2;
    let sol;
    if (a === 1)sol = true;
    else if (a === 2)sol = (m !== 13);
    else if (a === 3)sol = (m !== 13 && m !== 4);
    else if (a === 0)sol = (m <= 3);
    else sol = (m <= 4);
    return {name: name, sol: sol};
}

function initGrid() {
    for (let i = 0;i < 10;i ++)console.log(gen());
    
    const container = document.querySelector('.grid-container');
    
    // 创建5个长条形单元格
    for(let i = 0; i < 5; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        
        const content = document.createElement('div');
        content.className = 'cell-content';
        cell.appendChild(content);

        // 带节流的点击处理
        let lastTap = 0;
        cell.addEventListener('click', function() {
            const now = Date.now();
            // if (now - lastTap < 300) return;
            
            if (!content.textContent) {
                content.textContent = getRandomContent();
                cell.classList.add('has-text');
            } else {
                content.textContent = '';
                cell.classList.remove('has-text');
            }
            lastTap = now;
        });

        container.appendChild(cell);
    }
}

function getRandomContent() {
    const contents = [
        '⭐ 特别推荐', 
        '🚀 快速启动', 
        '🔑 密钥管理', 
        '🎯 精准定位', 
        '💡 创意灵感'
    ];
    return contents[Math.floor(Math.random() * contents.length)];
}

document.addEventListener('DOMContentLoaded', initGrid);