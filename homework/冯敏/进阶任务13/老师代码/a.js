console.log('haha');

$('.change').addEventListener('click', function(){

    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://b.jrg.com:8080/getNews', true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            appendHtml( JSON.parse(xhr.responseText) )
        }
    }

});
function appendHtml(news){
    var html = '';
    for( var i=0; i<news.length; i++){
        html += '<li>' + news[i] + '</li>';
    }
    console.log(html);
    $('.news').innerHTML = html;

}


function $(id){
    return document.querySelector(id);
}