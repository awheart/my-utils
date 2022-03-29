// add an event listener an a selector globally, will not need to add event listener for each new same selector
exports.addGlobalEventListener = (
    type,
    selector,
    callback,
    options,
    parent = document
  ) => {
    parent.addEventListener(
      type,
      e => {
        if (e.target.matches(selector)) callback(e)
      },
      options
    )
  }
  
  // get parent.querySelector(selector) 
  exports.qs = (selector, parent = document) => parent.querySelector(selector)

  // make a copy of parent.querySelectorAll and make it an array (which he isnt normally) so you can use array.functions
  exports.qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)]
  
  // will create an element with all the attribute listed in object options
  exports.createElement = (type, options = {}) => {
    const element = document.createElement(type)
    Object.entries(options).forEach(([key, value]) => {
      if (key === "class") {
        element.classList.add(value)
        return
      }
  
      if (key === "dataset") {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue
        })
        return
      }
  
      if (key === "text") {
        element.textContent = value
        return
      }
  
      element.setAttribute(key, value)
    })
    return element
  }