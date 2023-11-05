const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })

const generateId = () => {
  return (Math.random() + 1).toString(36).substring(7)
}

export { toBase64, generateId }
