// scripts/services-toggle.js

document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("show-more-services");
    const showLessBtn = document.getElementById("show-less-services");
    const hiddenServicePairs = document.querySelectorAll(".hidden-service-pair");
    const hiddenServicesWrapper = document.getElementById("hidden-services");

    let currentPair = 0;

    showMoreBtn.addEventListener("click", () => {
        hiddenServicesWrapper.classList.remove("hidden");

        if (currentPair < hiddenServicePairs.length) {
            hiddenServicePairs[currentPair].classList.remove("hidden");
            currentPair++;
        }

        if (currentPair === hiddenServicePairs.length) {
            showMoreBtn.classList.add("hidden");
        }

        showLessBtn.classList.remove("hidden");
    });

    showLessBtn.addEventListener("click", () => {
        hiddenServicePairs.forEach(pair => pair.classList.add("hidden"));
        hiddenServicesWrapper.classList.add("hidden");

        currentPair = 0;
        showMoreBtn.classList.remove("hidden");
        showLessBtn.classList.add("hidden");

        document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    });
});
// ...no seu <script>...
toggleServicesButton.addEventListener('click', () => {
    const servicePairs = hiddenServices.querySelectorAll('.hidden-service-pair');
    if (hiddenServices.classList.contains('hidden')) {
        hiddenServices.classList.remove('hidden');
        servicePairs.forEach(pair => pair.classList.remove('hidden'));
        toggleServicesButton.classList.add('hidden'); // Esconde o botão
    } else {
        hiddenServices.classList.add('hidden');
        servicePairs.forEach(pair => pair.classList.add('hidden'));
        toggleServicesButton.textContent = 'Mais Serviços';
    }
});
// ...no seu <script>...
toggleServicesButton.addEventListener('click', () => {
    if (hiddenServices.classList.contains('hidden')) {
        hiddenServices.classList.remove('hidden');
        toggleServicesButton.textContent = 'Menos Serviços';
    } else {
        hiddenServices.classList.add('hidden');
        toggleServicesButton.textContent = 'Mais Serviços';
    }
});