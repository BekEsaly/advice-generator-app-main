const btn=document.querySelector('.card button');
const adviceID=document.querySelector('.advice-id');
const advice=document.querySelector('.advice');
const URL='https://api.adviceslip.com/advice';

btn.addEventListener('click', ()=>{
    fetchData();
})
const fetchData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
 // console.log(data.slip.id);
  //console.log(data.slip.advice)
  adviceID.innerText=data.slip.id;
  advice.innerText=data.slip.advice;
}
