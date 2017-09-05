const endpoint = 'https://gist.githubusercontent.com/liyuechun/f00bb31fb8f46ee0a283a4d182f691b4/raw/3ea4b427917048cdc596b38b67b5ed664605b76d/TangPoetry.json';
const poetrys = [];
fetch(endpoint).then(function (response) {
    /*console.log(response);*/
    return response.json();//将获得的数据转化为json
}).then(data=>{
    console.log(data);
    poetrys.push(...data); //...data是将数据一一存进poetrys
    /*console.log(poetrys);*/
});

const objSearch=document.querySelector(".search");
const objSuggestions=document.querySelector(".suggestions");

objSearch.addEventListener("change",displayMatch);
objSearch.addEventListener("keyup",displayMatch);

function findMatch(findReg,poetrys) {
    return poetrys.filter(poet=>{
        const regex =new RegExp(findReg,"gi");
        const author=poet.detail_author.join(",");
        return poet.detail_text.match(regex) || poet.title.match(regex) || author.match(regex);
    })
}

function displayMatch() {
    const matches=findMatch(this.value,poetrys);
    console.log(matches);
    const regex=new RegExp(this.value,"gi");
    console.log(regex);
    const html=matches.map(poet1=>{
        console.log(poet1);
        const text=poet1.detail_text.replace(regex,`<span class="hl">${ this.value }</span>`);
        const title=poet1.title.replace(regex,`<span class="hl">${ this.value }</span>`);
        const detail_author=poet1.detail_author[0].replace(regex,`<span class="hl">${ this.value }</span>`);
        return `
       <li>
        <span class="poet">${ text }</span>
        <span class="title">${ title } - ${ detail_author }</span>
      </li>
    `;
    }).join("");
    console.log(html);
    objSuggestions.innerHTML=html;
}




