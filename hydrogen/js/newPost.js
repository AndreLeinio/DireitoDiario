function queNaoVaiDarOQue() {

    var item = document.createElement("div");
    item.className = "item";
    var ab = document.createElement("div");
    ab.className = "animate-box bounceIn animated";

    
    var html = '<a href="images/img_1.jpg" class="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"><img src="images/img_1.jpg" alt="Free HTML5 Bootstrap template"></a>' +
    '<div class="fh5co-desc" > AAAAAAAAAAAAAAAAAA, consectetur adipisicing elit.Explicabo, eos  </div >';
    ab.innerHTML = html;
    item.appendChild(ab);

    salvattore.prependElements(document.getElementById("fh5co-board"),[item]);
}