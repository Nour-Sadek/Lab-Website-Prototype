
const getElement = (selector) => {
  const element = document.querySelector(selector);
  if(element) return element
  throw Error(
    'there is no ${selector} class'
  )
}

const links = getElement('.allnavlinks')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click',()=>{
  links.classList.toggle('show-links')
})