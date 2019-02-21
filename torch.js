
document.body.addEventListener('mousemove',function(e){
  var top = e.pageY;
  var left = e.pageX;
  var torch = document.getElementById('torch');
  torch.style.clip = "rect("+(top-300)+"px,"+left+"px,"+top+"px,"+(left-300)+"px)";
  console.log(top);
  console.log(left);
});