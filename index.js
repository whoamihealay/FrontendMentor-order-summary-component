const payBtn = document.getElementById("pay");
const cancelBtn = document.getElementById("cancelBtn");
const planDiv = document.getElementById("plan");

const annualPlan = "<h2><b>Annual Plan</b></h2><p>$59.99/year</p>";
const monthlyPlan = "<h2><b>Monthly Plan</b></h2><p>$5.99/year</p>";

let planToggle = false;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const toggle = () => {
  if (planToggle) {
    planToggle = false;
    planDiv.innerHTML = annualPlan;
  } else {
    planToggle = true;
    planDiv.innerHTML = monthlyPlan;
  }
};

const pay = () => {
  payBtn.disabled = true;
  payBtn.innerHTML = "Thank you for your order !";
};

const cancel = async () => {
  if (payBtn.innerHTML === "Thank you for your order !") {
    payBtn.disabled = true;
    payBtn.innerHTML = "Cancelling...";
    await sleep(2000);
    payBtn.innerHTML = "Canceled";
    await sleep(1000);
    payBtn.disabled = false;
    payBtn.innerHTML = "Proceed to Payment";
  }
};
