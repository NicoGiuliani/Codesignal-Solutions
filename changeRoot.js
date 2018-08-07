// 8/16/2018

function changeRoot(A, root) {
    let B = [], L = A.length;
    for (let i = 0; i < L; i++) {
        if (A[i] == root) B[i] = root;
        else B[i] = null;
    }  
    B[root] = root;
    while (B.includes(null)) {
        B[A[root]] = root;
        for (let i = 0; i < L; i++) {
            if (A[i] == A[root] && B[i] == null) { 
                B[i] = A[i];
                for (let j = 0; j < L; j++) if (A[j] == i && B[j] == null) B[j] = A[j];
            }    
        }
        root = A[root];
        if (A[root] == root) {
            for (let i = 0; i < L; i++) if (B[i] == null) B[i] = A[i];
            return B;
        }
    } 
}