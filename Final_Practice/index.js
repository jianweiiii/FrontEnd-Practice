const totalPrice = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy €${ Math.floor(totalPrice * 100) / 100 }`