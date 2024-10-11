const weigth = document.querySelector(".weight-input");
const height = document.querySelector(".height-input");
const resultBtn = document.querySelector(".result");

let resultPlace = document.querySelector(".result-place");

function result() {
    let weigthVal = weigth.value;
    let heightVal = height.value;

    const heightMeters = heightVal / 100;
    const pow2 = Math.pow(heightMeters, 2);
    const bmi = weigthVal / pow2;

    if(bmi >= 40) {
        resultPlace.innerHTML = "Otyłość III st." + " " + bmi;
        resultPlace.classList.add("red");
    } else if (bmi >= 35) {
        resultPlace.innerHTML = "Otyłość II st." +  " " + bmi;
        resultPlace.classList.add("red");
    } else if (bmi >= 25) {
        resultPlace.innerHTML = "Otyłość I st." + " " + bmi;
        resultPlace.classList.add("red");
    }  else if (bmi >= 18.5) {
        resultPlace.innerHTML = "Waga optymalna" + " " + bmi;
        resultPlace.classList.add("green");
    } else if (bmi >= 17) {
        resultPlace.innerHTML = "Niedowaga " + " " + bmi;
        resultPlace.classList.add("red");
    } else if (bmi >= 16) {
        resultPlace.innerHTML = "Wychudzenie" + " " + bmi;
        resultPlace.classList.add("red");
    } else {
        resultPlace.innerHTML = "Wygłodzenie" + " " + bmi;
        resultPlace.classList.add("red");
    }
}

resultBtn.addEventListener("click", result);