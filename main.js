$(document).ready(function () {
  var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  var tb = $("table");
  var bt1 = $("#bt1");
  var bt2 = $("#bt2");
  function prep() {
	var $table = $("#table");
	$("p").show();
    $table.html("");
    $table.html(`<table>
<tr>
 	<td id="1" class="position"></td>
 	<td id="2" class="position"></td>
 	<td id="3" class="position"></td>
</tr>
<tr>
 	<td id="4" class="position"></td>
 	<td id="5" class="position"></td>
 	<td id="6" class="position"></td>
</tr>
<tr>
 	<td id="7" class="position"></td>
 	<td id="8" class="position"></td>
 	<td id="9" class="position"></td>
</tr>
</table>
`);
    for (var i = 1; i < 10; i++) {
      arr[i - 1] = i + 10;
      $("#" + i).text("" + i);
      arr[i] = i + 10;
      $("#" + i).attr("value", arr[i]);
	}
	$("td").click(function (e) {
		console.log("td")
	  if (wins(arr) == "draw") {
		var x = e.target.innerHTML;
		console.log(arr);
		time();
		play(x);
	  } else {
		res = wins(arr);
		$("body").append("<div>" + res + "</div>");
		$("div").attr("class", "final");
		$("p").hide();
	  }
	});
  }

  prep();
  function clickX(x) {
    var box = document.getElementById(x);
    $("#" + x).addClass("x");
    box.textContent = "X";
  }

  function clickO(x) {
    var box = document.getElementById(x);
    $("#" + x).addClass("o");
    box.textContent = "O";
  }
  bt1.click(prep);
  bt2.click(time);

  function time() {
    var counter = 20;
    function ber() {
      counter--;
      var res = counter + "";
      $("#times").text(res);
      if (counter == 0) {
        clearInterval(myvar);
      }
      $("td").click(function () {
        clearInterval(myvar);
      });
    }
    var myvar = setInterval(ber, 1000);
  }

  function wins(arr) {
    if (
      (arr[0] == arr[1] && arr[1] == arr[2]) ||
      (arr[0] == arr[3] && arr[3] == arr[6]) ||
      (arr[0] == arr[4] && arr[4] == arr[8])
    ) {
      if (arr[0] === 0) {
        return "player X win";
      } else {
        return "player O win";
      }
    } else if (
      (arr[6] == arr[7] && arr[7] == arr[8]) ||
      (arr[6] == arr[4] && arr[4] == arr[2])
    ) {
      if (arr[6] === 0) {
        return "player X win";
      } else {
        return "player O win";
      }
    } else if (arr[8] == arr[5] && arr[5] == arr[2]) {
      if (arr[8] === 0) {
        return "player X win";
      } else {
        return "player O win";
      }
    } else if (arr[1] == arr[4] && arr[4] == arr[7]) {
      if (arr[1] === 0) {
        return "player X win";
      } else {
        return "player O win";
      }
    } else if (arr[3] == arr[4] && arr[4] == arr[5]) {
      if (arr[3] === 0) {
        return "player X win";
      } else {
        return "player O win";
      }
    } else {
      return "draw";
    }
  }
  function find() {
    var res = {};
    res[0] = [];
    res[1] = [];
    res.cal0 = cal0;
    res.cal1 = cal1;
    return res;
  }
  function cal0(arr) {
    for (var h = 0; h < arr.length; h++) {
      if (arr[h] == 0) {
        this[0].push(h);
      }
    }
  }
  function cal1(arr) {
    for (var h = 0; h < arr.length; h++) {
      if (arr[h] == 1) {
        this[1].push(h);
      }
    }
  }
  var data = find();

  function play(x) {
    if (x !== "O" && x !== "X") {
      if (bol) {
        clickX(x);
        arr[Number(x) - 1] = 0;
        data.cal0(arr);
        console.log(arr);
      } else {
        clickO(x);
        arr[Number(x) - 1] = 1;
        data.cal1(arr);
        console.log(arr);
      }
    }
    bol = !bol;
  }

  var bol = true;

  
});
