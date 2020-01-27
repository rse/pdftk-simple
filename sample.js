
;(async () => {
    const PDFTk = require(".")
    const pdftk = new PDFTk()
    await pdftk.exec("sample1.pdf", "sample2.pdf", "cat", "output", "sample.pdf")
})().catch((err) => {
    console.log(`ERROR: ${err}`)
})

