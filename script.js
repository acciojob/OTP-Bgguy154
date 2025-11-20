//your JS code here. If required.
const inputs=document.queryselectorAll(".code");

inputs[0].focus();
inputs.forEach((input,index)=>{
	 input.addEventListener('input',(e)=>{
		 e.preventDefault();
		 const value=e.target.value;
		 if(value && index<inputs.length-1){
			 inputs[index+1].focus();
		 }
	 })

	input.addEventListener("keydown",(e)=>{
		e.preventDefault();
		if(e.key=="backspace"){
			if(input.value==""){
				if(index>0){
					inputs[index-1].focus();
					inputs[index-1]="";
				}
			}
			else{
				input.value="";
			}
		}
	})
})
