/**
 * 1 COIN TOSSED n TIMES
 */
// FORM
const formNumCoinTosses = document.querySelector("#number-coin-tosses")
// SELECT BOX
const selectElement = document.querySelector("#selectNumber")
// DISPLAY RESULTS
const results = document.querySelector("#results")
let numCoinTosses = document.querySelector("#numCoinTosses")
const numHeads = document.querySelector("#numHeads")
const headsPercent = document.querySelector("#headsPercent")
const numTails = document.querySelector("#numTails")
const tailsPercent = document.querySelector("#tailsPercent")

formNumCoinTosses.addEventListener("submit", e => {
  e.preventDefault()

  let coinTosses = getSelectedValue(selectElement)

  let heads = 0
  let tails = 0

  for (let i = 0; i < coinTosses; i = i + 1) {
    if (Math.random() <= 0.5) {
      heads = heads + 1
    } else {
      tails = tails + 1
    }
  }

  // DISPLAY
  // 0) Open box (and keep open) after form submitted
  unHide(results)
  // 1) Number of coin tosses
  selectValuesToInnerText(coinTosses, numCoinTosses)

  // 2) Number of  heads and tails (gross)
  numHeads.innerText = heads
  numTails.innerText = tails

  // 3) Number of  heads and tails (%)
  const percentageHeads = roundNumber((heads / coinTosses) * 100, 2)
  headsPercent.innerText = percentageHeads
  const percentageTails = roundNumber((tails / coinTosses) * 100, 2)
  tailsPercent.innerText = percentageTails
})
/* end form */

const clearCoinResultsBtn = document.querySelector("#clearCoinResultsBtn")
clearCoinResultsBtn.addEventListener("click", () => {
  reloadPage()
})

const showCoinResultsBtn = document.querySelector("#showCoinResultsBtn")
showCoinResultsBtn.addEventListener("click", () => {
  show(clearCoinResultsBtn)
  showCoinResultsBtn.innerText = "Update results"
})

/**
 * MULTI simulation CHART - with select number of simulations option
 **/

/* SELECTORS */
const chartInputForm = document.querySelector("#chartInputForm")

const selectNumSimulations = document.querySelector("#selectNumSimulations")

const selectPopulationSize = document.querySelector("#selectPopulationSize")
const selectNumberGenerations = document.querySelector(
  "#selectNumberGenerations"
)

/* Display */
const chartTitle = document.querySelector("#chartTitle")

const numSimulations = document.querySelector("#numSimulationsTxt")

const populationSize = document.querySelector("#populationSize")
const numGenerations = document.querySelector("#numGenerations")

/* Loading message NO LUCK WITH DETECTING CHART UPDATING YET */
const chart_loading = document.querySelector("#chart_loading")

/* Form */
chartInputForm.addEventListener("submit", e => {
  e.preventDefault()

  let P

  const N = getSelectedValue(selectPopulationSize)
  const generations = getSelectedValue(selectNumberGenerations)

  const numSimulations = getSelectedValue(selectNumSimulations)

  const allData = []

  /** function next_generation */
  function next_generation(simulation_data) {
    const totalAlleles = 2 * N
    let a1 = 0
    let a2 = 0
    for (let i = 0; i < totalAlleles; i = i + 1) {
      if (Math.random() <= P) {
        a1 = a1 + 1
      } else {
        a2 = a2 + 1
      }
    }
    P = a1 / totalAlleles
    simulation_data.push(P)
  }
  /** END function next_generation */

  /** function simulation */
  function simulation(simulation_counter) {
    P = 0.5 // reset P to starting point before each iteration
    for (let i = 0; i < generations; i = i + 1) {
      next_generation(allData[simulation_counter])
    }
  }
  /** END function simulation */

  chart_loading.innerText = `Loading...`
  chart_loading.classList.add("pulse")
  chartTitle.classList.add("pulse")

  // variable time in milliseconds for settimeout
  let timeDelay
  if (numSimulations === 1) timeDelay = 100
  if (numSimulations === 2) timeDelay = 200
  if (numSimulations === 3) timeDelay = 300
  if (numSimulations === 4) timeDelay = 400
  if (numSimulations === 5) timeDelay = 500
  if (numSimulations === 6) timeDelay = 600
  if (numSimulations === 7) timeDelay = 700
  if (numSimulations === 8) timeDelay = 800
  if (numSimulations === 9) timeDelay = 900
  if (numSimulations === 10) timeDelay = 1000

  // Call simulation function n times
  setTimeout(() => {
    for (let i = 0; i < numSimulations; i = i + 1) {
      allData.push([]) // push an empty array into allData array
      simulation(i) // i = simulation_counter parameter in func simulation
    }

    /* visualisation */
    draw_line_chart(
      allData,
      "Generation",
      "P (B allele frequency)",
      ["Population size:", N, "Generations:", generations],
      "#chart",
      "chart"
    )
    chart_loading.innerText = ""
    chart_loading.classList.remove("pulse")
    chartTitle.classList.remove("pulse")
  }, timeDelay)

  unHide(chartTitle)
  selectValuesToInnerText(numSimulations, numSimulationsTxt)
  selectValuesToInnerText(N, populationSize)
  selectValuesToInnerText(generations, numGenerations)

  console.log(generations)
})
/* End Form */

const clearChartResultsBtn = document.querySelector("#clearChartResultsBtn")
clearChartResultsBtn.addEventListener("click", () => {
  reloadPage()
})

const showChartResultsBtn = document.querySelector("#showChartResultsBtn")
showChartResultsBtn.addEventListener("click", () => {
  const chartHeight = document.querySelector("#chart")
  chartHeight.classList.add("chart-height")
  show(clearChartResultsBtn)
  showChartResultsBtn.innerText = "Update chart"
  const chart = document.querySelector("[data-chart]")
  if (chart) {
    removeElement(chart)
    return // guard clause
  }
})
