/* Round numbers */
function roundNumber(value, decPlaces) {
  let decPointShifter = Math.pow(10, decPlaces)
  return Math.round(value * decPointShifter) / decPointShifter
}

/* unhiding / showing / hiding */
function unHide(el) {
  el.classList.add("show")
  el.classList.remove("hide")
}

function unShow(el) {
  el.classList.add("hide")
  el.classList.remove("show")
  return
}
function show(el) {
  el.classList.add("show")
}
function hide(el) {
  el.classList.remove("show")
}
function toggleShowHide(el) {
  el.classList.toggle("show")
}

/* Reload page (and clear results)*/
function reloadPage() {
  location.reload()
}

/* Remove element */
function removeElement(el) {
  el.parentNode.removeChild(el)
}

/* Get selected value */
function getSelectedValue(selectOption) {
  let selectElementValue = selectOption.value
  return (selectElementValue = parseFloat(selectElementValue))
}

/* Display selected value as innerText in results box */
function selectValuesToInnerText(number, numberText) {
  switch (number) {
    case 1:
      numberText.innerText = "1"
      break
    case 2:
      numberText.innerText = "2"
      break
    case 3:
      numberText.innerText = "3"
      break
    case 4:
      numberText.innerText = "4"
      break
    case 5:
      numberText.innerText = "5"
      break
    case 6:
      numberText.innerText = "6"
      break
    case 7:
      numberText.innerText = "7"
      break
    case 8:
      numberText.innerText = "8"
      break
    case 9:
      numberText.innerText = "9"
      break
    case 10:
      numberText.innerText = "10"
      break
    case 20:
      numberText.innerText = "20"
      break
    case 25:
      numberText.innerText = "25"
      break
    case 50:
      numberText.innerText = "50"
      break
    case 100:
      numberText.innerText = "100"
      break
    case 200:
      numberText.innerText = "200"
      break
    case 300:
      numberText.innerText = "300"
      break
    case 400:
      numberText.innerText = "400"
      break
    case 500:
      numberText.innerText = "500"
      break
    case 600:
      numberText.innerText = "600"
      break
    case 700:
      numberText.innerText = "700"
      break
    case 800:
      numberText.innerText = "800"
      break
    case 1000:
      numberText.innerText = "1,000"
      break
    case 10000:
      numberText.innerText = "10,000"
      break
    case 25000:
      numberText.innerText = "25,000"
      break
    case 40000:
      numberText.innerText = "40,000"
      break
    case 50000:
      numberText.innerText = "50,000"
      break
    case 100000:
      numberText.innerText = "100,000"
      break
    case 1000000:
      numberText.innerText = "1,000,000"
      break
    default:
    // do nothing
  }
}
