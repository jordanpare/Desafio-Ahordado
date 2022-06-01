let palabras1 = [];
let palabra1 = document.getElementById('letra1');
let agregar = document.getElementById("btn3");
agregar.addEventListener("click", () => {
  i=0;
  palabras1.push(palabra1.value);
  localStorage.setItem("palabraG",palabra1.value );
  palabra1.value = "";
  palabra1.focus();
  console.log(palabras1);
});
