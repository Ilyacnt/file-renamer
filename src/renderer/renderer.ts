const infoNode = document.getElementById('info')
const imageNode = document.getElementById('image')

console.log(window.versions.node())

const getBase64Image = async () => {
    // @ts-ignore
    const response = await window.versions.ping()
    console.log(response)
    return response
}

const setImageToNode = async () => {
    const imageBase64 = await getBase64Image()
    //@ts-ignore
    imageNode.src = `data:image/png;base64,${imageBase64}`
}

setImageToNode()
