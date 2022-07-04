function changeFontSize(type) {
  let ids = ['#h', '#p']

  let h = document.querySelector('#h')
  let p = document.querySelector('#p')

  ids.forEach(id => {
    let el = document.querySelector(id)

    let fontSize = window
      .getComputedStyle(el, null)
      .getPropertyValue('font-size')

    fontSize = parseFloat(fontSize)

    if (type === 'increase') {
      el.style.fontSize = fontSize + 5 + 'px'
    } else if (type === 'decrease') {
      el.style.fontSize = fontSize - 5 + 'px'
    } else {
      //document.location.reload(true)
      h.style.fontSize = 35 + 'px'
      p.style.fontSize = 25 + 'px'
    }
  })
}
