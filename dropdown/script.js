function show(value) {
    document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown_select")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
  }