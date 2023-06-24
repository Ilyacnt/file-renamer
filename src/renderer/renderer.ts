const openFileButton = document.getElementById('btn')
const titleInput = document.getElementById('title') as HTMLInputElement | null

openFileButton &&
    openFileButton.addEventListener('click', () => {
        window.electronAPI.openFile().then((data) => {
            console.log(data)
        })
    })
