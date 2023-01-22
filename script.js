const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)




function add() {

const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
const dayExists = nlwSetup.dayExists(today)
 
if (dayExists) {


return
}

nlwSetup.addDay(today)


}


function save() {


  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))

}



//const data = { 
 //   workout: ['01-21', '01-22', '01-26', '01-27', '01-28', '01-29'], 
  //  water: ['01-24', '01-25'],
 //   pills: ['01-21', '01-23'],
  //}

  const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
  nlwSetup.setData(data)
  nlwSetup.load()








