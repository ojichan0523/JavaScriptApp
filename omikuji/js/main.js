'use strict'

{
  const btn = document.getElementById('btn')
  btn.addEventListener('click', () => {
    const n = Math.random()
    if (n < 0.2) {
      btn.textContent = '大吉' // 20%
      btn.classList.add('circle')
    } else if (n < 0.4) {
      btn.textContent = '中吉' // 20%
      btn.classList.add('circle')
    } else if (n < 0.7) {
      btn.textContent = '吉' // 30%
      btn.classList.add('circle')
    } else if (n < 0.9) {
      btn.textContent = '凶' // 30%
      btn.classList.add('circle')
    } else {
      btn.textContent = '大凶' // 10%
      btn.classList.add('circle')
    }
  })
}
