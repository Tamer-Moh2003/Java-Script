function calculateGrade(grade) {
	if(typeof grade !=="number" || grade<0 || grade>100){
		return "invalid input"}
	else if(grade>=90){
		return "A"}
	else if(grade>=80){
		return "B"}
	else if(grade>=70){
		return "C"}
	else if(grade>=60){
		return "D"}
	else if(grade>=55){
		return "D-"}
	else{
		return "F"}

}
function checkAccess(age,hasTicket){
	if (typeof age!=="nmber" || age<0 ||hasTicket !== "true" && hasTicket !==false)
		return false;
	else if(age>=18 && hasTicket==true){
		return true;}
	else return false; 
}

console.log(calculateGrade(70)); 
console.log(calculateGrade(94)); 
console.log(calculateGrade(90)); 
console.log(calculateGrade(101)); 
console.log(calculateGrade(52));
console.log(calculateGrade(55)); 
console.log(calculateGrade(-54)); 
console.log(checkAccess(23,true)); 
console.log(calculateGrade(18,false)); 
console.log(checkAccess(17,true));
