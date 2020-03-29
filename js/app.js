window.onload = () => {
  const card = document.getElementsByClassName("js--card");
  const colors = ["#626357", "#EDAF28"];
  const randomNumber = Math.floor(Math.random() * 2);

  const searchbar = document.getElementById("js--searchbar");
  const cardList = document.getElementsByClassName("js--card");

  for(let i = 0; i < card.length; i++){
    card[i].style.backgroundColor = colors[randomNumber];
  }

  searchbar.onkeyup = (event) => {
    let filter = event.target.value.toUpperCase();
    for(let i = 0; i < cardList.length; i++){
      let innerHTML = cardList[i].innerHTML.toUpperCase();
      console.log(innerHTML);
      if(innerHTML.indexOf(filter) != -1){
        cardList[i].style.display = "";
      }
      else{
        cardList[i].style.display = "none";
      }
    }
  }


}
