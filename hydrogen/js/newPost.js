function queNaoVaiDarOQue() {

    var link = document.getElementById("imageLink").value;
    var texto = document.getElementById("depoimento").value;
    var tags = document.getElementById("tag").value;
    var nome = document.getElementById("Name").innerText;

    var item = document.createElement("div");
    item.className = "item";
    var ab = document.createElement("div");
    ab.className = "animate-box bounceIn animated";

    
    var html = '<a href="'+link+'" class="image-popup fh5co-board-img"><img src="'+ link +'" alt="Free HTML5 Bootstrap template"></a>' +
        '<div class="fh5co-desc" > <b>' + nome + '</b><br>' + texto +'<br><sub>'+tags.replace(","," ")+'</sub> <div><i onclick="clickCounter(this)"   class="fa fa-thumbs-o-up"></i></div>  </div >';
    ab.innerHTML = html;
    item.appendChild(ab);

    salvattore.prependElements(document.getElementById("fh5co-board"),[item]);
}