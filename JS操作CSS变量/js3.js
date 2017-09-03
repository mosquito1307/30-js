const inputs=document.querySelectorAll(".controls input");//获取三个input,返回带属性和方法的Nodelist

function update() {
    const unit=this.dataset.sizing||'';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+unit);//改变全局css变量的值
    document.getElementById(`label_${this.name}`).innerText=this.value+unit;
}

inputs.forEach(input=>input.addEventListener('mousemove',update));
inputs.forEach(input=>input.addEventListener('change',update));


