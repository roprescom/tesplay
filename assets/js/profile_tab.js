function profileButton(id) {

		 if (id == 0) {
			 document.getElementById('btn0').className = "btn btn-primary myprobutton01 active01";
			 document.getElementById('btn1').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn2').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn3').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn4').className = "btn btn-primary myprobutton01";
		 }

		 else if (id == 1) {
			 document.getElementById('btn1').className = "btn btn-primary myprobutton01 active01";
			 document.getElementById('btn0').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn2').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn3').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn4').className = "btn btn-primary myprobutton01";
		 }

		 else if (id == 2) {
			 document.getElementById('btn2').className = "btn btn-primary myprobutton01 active01";
			 document.getElementById('btn0').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn1').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn3').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn4').className = "btn btn-primary myprobutton01";
		 }

		 else if (id == 3) {
			 document.getElementById('btn3').className = "btn btn-primary myprobutton01 active01";
			 document.getElementById('btn0').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn1').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn2').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn4').className = "btn btn-primary myprobutton01";
		 }

		 else {
			 document.getElementById('btn4').className = "btn btn-primary myprobutton01 active01";
			 document.getElementById('btn0').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn1').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn2').className = "btn btn-primary myprobutton01";
			 document.getElementById('btn3').className = "btn btn-primary myprobutton01";
		 }
}	 