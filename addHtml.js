let user='';
titles;
information;
finished;

//filPage();
function fillPage(){
    for(i=0;i<titles.length;i++){
        const div = document.createElement('div');
        div.className = 'row';
        div.innerHTML = `<div class="title">
        <h1>java</h1>
        <button class="button-title" data-modal-target="#modal">+</button>
        </div>`;
        document.getElementById('father').appendChild(div);
    }
}