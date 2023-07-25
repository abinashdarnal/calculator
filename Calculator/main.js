document.querySelector("#calculations").value = "";

calculatedResult = () => {
  let result = document.querySelector("#calculations").value;
  for (i = 0; i < result.length; i++) {
    if (result[result.length - 1] == "%") {
      percent = document.querySelector("#calculations").value.slice(0, -1);

      result = (percent / 100).toFixed(3);
    } else if (result[result.length - i] == "%") {
      document.querySelector("#calculations").value = "invalid";
    } else {
      document.querySelector("#calculations").value = eval(result);
    }
  }
};
backSpace = () => {
  let result = document.querySelector("#calculations");
  //   document.querySelector("#calculations").innerHTML = result.slice(0, -1);
  result.value = result.value.slice(0, -1);
  //   console.log(result.slice(0, -1));
};
