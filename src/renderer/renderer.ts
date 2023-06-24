const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title') as HTMLInputElement | null

setButton &&
    setButton.addEventListener('click', () => {
        if (!titleInput) return
        const title = titleInput.value
        window.electronAPI.setTitle(title)
    })
