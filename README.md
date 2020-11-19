# JSDev
Estudo e afins com Javascript.

<h2> Coerção de tipo </h2>
Alguns dados podem ser convertidos em um outro tipo para completar determinada operação, um exemplo de <strong> coerção de tipo </strong> está no fato da expressão abaixo retornar true.

```js
  if ('1' == 1){
    return true
  } else{
    return false
  }
```

Eis aí a importância de utilizarmos o operador de igualdade estrita " === ".

<h2> Foreach </h2>
O loop foreach aceita até três parâmetros, que na ordem representam valor, índice e array
```javascript
lista = ['item1', 'ABC'];

lista.forEach(function(valor, index, arrei){
    console.log("Valor: " + valor)//Valor: item1 | Valor: ABC
    console.log("Index: " + index)//Index: 0 | Index: 1
    console.log("Array: " + arrei); //Array: ['item1', 'ABC'] | Array: ['item1', 'ABC']
});
```
<h2>getComputedStyle()</h2>
 Method gets all the actual (computed) CSS property and values of the specified element.
 ```javascript
 allStyle = getComputedStyle(document.body)//retorna toda a estilização aplicada na página
 ```
