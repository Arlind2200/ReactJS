function shuffleValues() {
    let form = document.getElementById("myForm");
    let checkboxes = Array.from(document.querySelectorAll(".checkbox-label"));
    checkboxes.sort(() => Math.random() - 0.5);
    // console.log(checkboxes);
    checkboxes.forEach(checkbox => {
      form.appendChild(checkbox);
    });
  }

  function changeValues() {
    let checkboxes = document.getElementsByName("checkbox");
    let values = ["vlera 1", "vlera 2", "vlera 3", "vlera 4"];

    checkboxes.forEach((checkbox, index) => {
        checkbox.value = values[index];
      });
  }

  function showSelectedValues() {
    let checkboxes = document.getElementsByName("checkbox");
    let selectedValues = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });
    alert("Selected Values: " + selectedValues);
  } 