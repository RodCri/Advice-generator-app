const advice_id = document.querySelector(".id")
const advice_text = document.querySelector(".text")
const advice__generator = document.querySelector(".advice__generator")

advice__generator.addEventListener("click", async function () {
  this.disabled = true

  const res = await fetch(`https://api.adviceslip.com/advice?_=${Date.now()}`)
  const data = await res.json()

  advice_id.textContent = data.slip.id
  advice_text.textContent = data.slip.advice

  this.disabled = false
})