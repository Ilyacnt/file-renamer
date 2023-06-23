const infoNode = document.getElementById('info')
const imageNode = document.getElementById('image')

console.log(versions)

const getBase64Image = async () => {
    const response = await window.versions.ping()
    console.log(response)
    return response
}

const setImageToNode = async () => {
    const imageBase64 = await getBase64Image()
    imageNode.src = `data:image/png;base64,${imageBase64}`
}

setImageToNode()
