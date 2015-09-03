var input = document.getElementsByClassName('input')[0],
    output = document.getElementsByClassName('output')[0],
    voc = {
        name: 'Sorax',
        title: 'JavaScript Tuts',
        resource: 'Youtube'
    };
input.addEventListener('keyup', function(){
    output.innerHTML = this.value.replace(/\{\{(\w*)\}\}/g, "$1");
}, false);