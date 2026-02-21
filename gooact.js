const Gooact = (()=>{
    let state = []
let stateIndex = 0

let root = null
let currentComponent = null

const createElement = (type, props, ...children) => {
    return { type, props: props || {}, children: children.flat() }
}

const useState = (initialValue)=>{
    const currentIndex = stateIndex

    if(state[currentIndex]===undefined){
        state[currentIndex] = initialValue
    }

    const setState = (newValue)=>{
        state[currentIndex] = newValue
        render(currentComponent,root)
    }

    stateIndex++
    return [state[currentIndex],setState]
}

const render = (component,container)=>{
 root = container
 currentComponent = component
 stateIndex = 0

 container.innerHTML = ''
 container.appendChild(createDOM(component()))
}

const createDOM = (element) => {
    if (typeof element === 'string' || typeof element === 'number') {
        return document.createTextNode(element)
    }

    const dom = document.createElement(element.type)

    Object.entries(element.props || {}).forEach(([name, value]) => {
        if (name.startsWith('on') && typeof value === 'function') {
            dom.addEventListener(name.substring(2).toLowerCase(), value)
        } else if (name === 'style' && typeof value === 'object') {
            Object.assign(dom.style, value)
        } else if (name in dom) {
            dom[name] = value
        } else {
            dom.setAttribute(name, value)
        }
    })

    ;(element.children || []).forEach(child => {
        dom.appendChild(createDOM(child))
    })

    return dom
}

return {createElement,useState,render}

})()