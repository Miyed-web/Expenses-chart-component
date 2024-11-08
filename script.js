


async function data() {
   let res = await fetch('./data.json')
   let data = await res.json()
   
   
   fetchData(data)
}
data()

//sh()

function fetchData(data){
   
   for(const obj of data ){
      let h = (obj.amount)*2.85
      let a = obj.amount
      
      let b = document.querySelector(`#${obj.day}`)
      let d = b.parentElement.querySelector(".num").innerHTML = `$${obj.amount}`
      
        
        b.style.setProperty("--j",`${(h)}px`)
        b.dataset.text =`$${a}`
   }
}



const currdayindx = (new Date().getDay()-1 +7) %7;

console.log(currdayindx)
const currDay = document.querySelectorAll(".bar")[currdayindx]


currDay.style.backgroundColor='hsl(186, 34%, 60%)'



