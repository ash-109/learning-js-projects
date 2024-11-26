const testedWord = document.getElementById("testedWord");
const btnCheck = document.getElementById("btnCheck");
const btnReset=document.getElementById("btnReset");
btnReset.style.display="none"
btnCheck.addEventListener("click", () => {
  test(testedWord.value.trim());
    resultMessage.style.visibility='visible'

btnReset.style.display="block"

  if (testedWord.value === "") {
    resultMessage.textContent = "";
btnReset.style.display="none"
  }


});

let resultMessage = document.getElementById("resultMessage");
function test(str) {
  let str2 = str.split("").reverse().join("");
  if (str == str2) {
    resultMessage.textContent = `${testedWord.value} is a palindrome`;
  } else {
   resultMessage.textContent = `${testedWord.value} is not a palindrome`;
  }
}

  // RESET BUTTON

btnReset.addEventListener('click',()=>{
  testedWord.value=""
  resultMessage.textContent=""
  
})

