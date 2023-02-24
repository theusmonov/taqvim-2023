const url = 'https://islomapi.uz/api/monthly?region=Toshkent&month=2';
const continer = document.querySelector('.continer')
const select = document.getElementById('select')




function getTodos() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let displaymenu = data.map((item) => {
            return `<div class="qatorlar1">
            <div class="guruh1">${'KUN'}</div>
            <div class="guruh2">${'HAFTA KUNI'}</div>
            <div class="guruh3">${'SANA'}</div>
            <div class="guruh4">${'SAHARLIK'}</div>
            <div class="guruh5">${'IFTORLIK'}</div>
           </div>
    
            <div class="qatorlar2">
            <div class="guruh6">${item.day}</div>
            <div class="guruh7">${item.weekday}</div>
            <div class="guruh8">${item.date}</div>
            <div class="guruh9">${item.times.tong_saharlik}</div>
            <div class="guruh10">${item.times.shom_iftor}</div>
        </div>`
        })
        displaymenu = displaymenu.join('')
        continer.innerHTML = displaymenu
    })  
}
getTodos(url)




select.addEventListener('change',(e) => {
    let url = `https://islomapi.uz/api/monthly?region=${e.target.value}&month=2`
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let displaymenu = data.map((item) => {
            return `<div class="qatorlar1">
            <div class="guruh1">${'KUN'}</div>
            <div class="guruh2">${'HAFTA KUNI'}</div>
            <div class="guruh3">${'SANA'}</div>
            <div class="guruh4">${'SAHARLIK'}</div>
            <div class="guruh5">${'IFTORLIK'}</div>
           </div>
    
            <div class="qatorlar2">
            <div class="guruh6">${item.day}</div>
            <div class="guruh7">${item.weekday}</div>
            <div class="guruh8">${item.date}</div>
            <div class="guruh9">${item.times.tong_saharlik}</div>
            <div class="guruh10">${item.times.shom_iftor}</div>
        </div>`
        })
        displaymenu = displaymenu.join('')
        continer.innerHTML = displaymenu
    }) 
})