const ABSTRACTSEQ = []
const REALITYSEQ = []

for (let i = 0; i < 169; i++) {
    ABSTRACTSEQ.push(require('./abstract-seq/ABSTRACT' + i.toString().padStart(3, "0") + ".webp"))
    
}
for (let i = 170; i < 338; i++) {
    REALITYSEQ.push(require('./reality-seq/ABSTRACT' + i + ".webp"))
    
}

export {
    ABSTRACTSEQ,
    REALITYSEQ
}