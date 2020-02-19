var punish = ["無し"];
document.querySelector('.punishment').innerHTML = '<li>' + punish[0] + '</li>';

function Add_Punish() {
  var input_punish = document.getElementById('input_panish').value;
  punish.push(input_punish);

  var stockList = [];　
  for (var i=0; i<punish.length; i++){
  stockList.push('<li>' + punish[i] + '</li>');
}
  document.querySelector('.punishment').innerHTML = stockList.join('');
  console.log(stockList);
}

function Delete_Punish() {
  punish.pop();

  var stockList = [];　
  for (var i=0; i<punish.length; i++){
  stockList.push('<li>' + punish[i] + '</li>');
}
  document.querySelector('.punishment').innerHTML = stockList.join('');
}

document.querySelector('.decision_btn').addEventListener('click',function() {
  document.querySelector('.wrapper').style.display = "none";

  document.querySelector('.hide_wrapper').style.display = "block";
  var random = Math.floor(Math.random() * punish.length);

  document.querySelector('.punish_word').textContent = punish[random];
});

document.querySelector('.new_btn').addEventListener('click', function() {
  punish = ["無し"];
  document.querySelector('.punishment').innerHTML = '<li>' + punish[0] + '</li>';
  document.querySelector('.wrapper').style.display = "block";
  document.querySelector('.hide_wrapper').style.display = "none";
});




document.addEventListener ('keydown',function(e){
  var t = e.target;
  if(t.nodeName=="INPUT" && t.name=="name" && e.keyCode==13){
    t.form.getElementsByTagName("button")[0].click();
    e.preventDefault();
  }
});
