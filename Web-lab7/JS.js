var el;
var zona = document.getElementById("zona");
function square(){
    for (var i = 0; i < document.getElementById("inp").value; i++) {
       el = document.createElement("div");
       el.className = 'squ';
       el.style.width = getRandom(300)+"px";
       el.style.height = el.style.width;
       el.style.marginLeft = getRandom(1100)+"px";
       el.style.marginTop = getRandom(500)+"px";
       document.body.appendChild(el);
    }
    $(document).ready(function(){
        $(".squ").dblclick(function(event){
        $("").html(event.target.style.display = 'none');});
        $(".squ").click(function(event){
        $("").html(event.target.style.backgroundColor = 'rgba(255,255,0,0.6)');});
    }); 
}
function triangle(){
for (var i = 0; i < document.getElementById("inp").value; i++) {
       el = document.createElement("div");
       el.className = 'tri';
       el.style.marginLeft = getRandom(1100)+"px";
       el.style.marginTop = getRandom(500)+"px";
       document.body.appendChild(el);
    }
    $(document).ready(function(){
        $(".tri").dblclick(function(event){
        $("").html(event.target.style.display = 'none');});
        $(".tri").click(function(event){
        $("").html(event.target.style.borderBottom = '100px solid rgba(255,255,0,0.6)');});
    }); 
}
function circle(){
for (var i = 0; i < document.getElementById("inp").value; i++) {
       el = document.createElement("div");
       el.className = 'cir';
       el.style.width = getRandom(300)+"px";
       el.style.height = el.style.width;
       el.style.borderRadius = "150px";
       el.style.marginLeft = getRandom(1100)+"px";
       el.style.marginTop = getRandom(500)+"px";
       document.body.appendChild(el);
    }
    $(document).ready(function(){
        $(".cir").dblclick(function(event){
        $("").html(event.target.style.display = 'none');});
        $(".cir").click(function(event){
        $("").html(event.target.style.backgroundColor = 'rgba(255,255,0,0.6)');});
    }); 
}
function getRandom(z) {
  return Math.random() * z;
}