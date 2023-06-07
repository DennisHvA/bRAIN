let currentStep = 1;
const circles = document.getElementsByClassName('circle');
const steps = document.getElementsByClassName('step');
const progress = document.getElementsByClassName('progress');

function updateProgressIndicator() {
  for (var i = 0; i < circles.length; i++) {
    if (i === currentStep - 1) {
      circles[i].style.backgroundColor = 'var(--color-green)';
    } else {
      circles[i].style.backgroundColor = 'transparent';
    }
  }
}

updateProgressIndicator()

function getStarted() {
  // if (currentStep < steps.length && document.getElementById('step-' + currentStep).checkValidity()) {
  //   steps[currentStep - 1].classList.remove('active');
  //   currentStep++;
  //   steps[currentStep - 1].classList.add('active');
  // }
  document.getElementById('step-1').classList.add('active')
  progress[0].classList.add('show');
  document.getElementById('start').classList.add('hide');
}

function nextStep() {
  if (currentStep < steps.length && document.getElementById('step-' + currentStep).checkValidity()) {
    steps[currentStep - 1].classList.remove('active');
    currentStep++;
    steps[currentStep - 1].classList.add('active');
    updateProgressIndicator();
  }
}

function previousStep() {
  if (currentStep > 1) {
    steps[currentStep - 1].classList.remove('active');
    currentStep--;
    steps[currentStep - 1].classList.add('active');
    updateProgressIndicator();
  }
}

document.getElementById('start').querySelector('button').addEventListener('click', getStarted);

document.getElementById('step-1').querySelector('button').addEventListener('click', nextStep);
document.getElementById('step-2').querySelector('button:last-of-type').addEventListener('click', nextStep);
document.getElementById('step-2').querySelector('button:first-of-type').addEventListener('click', previousStep);
document.getElementById('step-3').querySelector('button:last-of-type').addEventListener('click', nextStep);
document.getElementById('step-3').querySelector('button:first-of-type').addEventListener('click', previousStep);
document.getElementById('step-4').querySelector('button:last-of-type').addEventListener('click', nextStep);
document.getElementById('step-4').querySelector('button:first-of-type').addEventListener('click', previousStep);
document.getElementById('step-5').querySelector('button:last-of-type').addEventListener('click', nextStep);
document.getElementById('step-5').querySelector('button:first-of-type').addEventListener('click', previousStep);
