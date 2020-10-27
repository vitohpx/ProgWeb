function counter(n) {
    let contador = n;
    function resultado() {
      contador++;
      return contador;
    }
    return resultado;
};

let incrementar = counter(1)
console.log('Primeira chamada ' + incrementar());
console.log('Segunda chamada ' + incrementar());
console.log('Terceira chamada ' + incrementar());