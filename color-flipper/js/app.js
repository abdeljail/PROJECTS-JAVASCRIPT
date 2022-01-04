// create var in button change color
let changeColor = document.getElementById("change-color");

// create var in body
let body = document.getElementById("body");

// create var backgroundColor
let backgroundColor;
changeColor.addEventListener("click", () => {
    backgroundColor = rondemNumber();
    body.style.backgroundColor = `#${backgroundColor}`;
    changeColor.previousElementSibling.innerHTML =  backgroundColor ;
    console.log(a);
});

let rondemNumber = () => {
  /// Math.random()   =>        random nember like [ 0.787878787878 ]
  /// toFixed(2)      =>        Fixed nember like [ 0.12 ]
  /// toFixed(6)      =>        Fixed nember like [ 0.12457 ]
  let color = Math.random().toFixed(6);

  /// Math.abs()      =>        return nember positive
  /// toString(16)    =>        retun string like [ 12af67bb87ee ]
  let res = Math.abs(color).toString(16);

  return res.split(".")[1].slice(1, 7);
};
