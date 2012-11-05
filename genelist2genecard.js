var b = document.createElement('button');
b.id = "b";
b.textContent = "Get it!";
document.body.appendChild(b);

var di1 = document.createElement('div');
di1.id = 'di1';
di1.innerHTML = "<h2>RB1</h2>";
document.body.appendChild(di1);

var di2 = document.createElement('div');
di2.id = 'di2';
di2.innerHTML = "<h2>TP53</h2>";
document.body.appendChild(di2);

$(document).ready(function() {
  $("#b").click(function(){
    $("#di1").load("/cgi-bin/carddisp.pl?gene=RB1");
    $("#di2").load("/cgi-bin/carddisp.pl?gene=TP53");
	});
});
  
