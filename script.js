document.getElementById("toggleIngredients").addEventListener("click", function() {
    const ingredients = document.getElementById("ingredients");
    ingredients.classList.toggle("hidden");
    this.textContent = ingredients.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
});

document.getElementById("toggleSteps").addEventListener("click", function() {
    const steps = document.getElementById("steps");
    steps.classList.toggle("hidden");
    this.textContent = steps.classList.contains("hidden") ? "Show Steps" : "Hide Steps";
});

document.getElementById("startCooking").addEventListener("click", function() {
    const progressContainer = document.getElementById("progressContainer");
    const progressBar = document.getElementById("progressBar");
    progressContainer.classList.remove("hidden");
    progressBar.style.width = "0";
    
    let step = 0;
    const steps = document.querySelectorAll("#steps li");
    steps.forEach(s => s.style.background = "none");

    const interval = setInterval(() => {
        if (step < steps.length) {
            steps[step].style.background = "#c8e6c9";
            progressBar.style.width = ((step + 1) / steps.length) * 100 + "%";
            step++;
        } else {
            clearInterval(interval);
        }
    }, 2000);
});