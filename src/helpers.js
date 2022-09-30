
function choice(items) {
    const rand = Math.floor(Math.random() * items.length)
    const item = items[rand]
    return item

}

function remove(items, item) {
    const index = items.indexOf(item)
    if(index) {
        items.splice(index,1)
        return item
    } else {
        return undefined
    }
}

export {choice, remove} 