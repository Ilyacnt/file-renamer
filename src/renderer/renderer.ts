const openFileButton = document.getElementById('btn')
const titleInput = document.getElementById('title') as HTMLInputElement | null

openFileButton &&
    openFileButton.addEventListener('click', () => {
        window.electronAPI.openFile().then((data) => {
            console.log(data)
        })
    })

const counter = document.getElementById('counter')

window.electronAPI.handleCounter((event, value) => {
    const oldValue = Number(counter!.innerText)
    const newValue = oldValue + value
    counter!.innerText = newValue.toString()
    event.sender.send('counter-value', newValue)
})
