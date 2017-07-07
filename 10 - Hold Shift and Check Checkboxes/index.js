const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxs.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("stating to check them as in between");
      }
      if (inBetween) {
        checkbox.checked = true;
        // console.log();
      }
    });
  }
  lastChecked = this;
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
