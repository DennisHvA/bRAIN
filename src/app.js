const path = window.location.pathname;

if (path === "/onboarding") {
  let currentStep = 1;
  const circles = document.getElementsByClassName('circle');
  const steps = document.getElementsByClassName('step');

  function updateProgressIndicator() {
    for (var i = 0; i < circles.length; i++) {
      if (i === currentStep - 1) {
        circles[i].style.backgroundColor = 'var(--color-green)';
      } else {
        circles[i].style.backgroundColor = 'transparent';
      }
    }
  }

  // updateProgressIndicator()

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

  document.getElementById('step-1').querySelector('button').addEventListener('click', nextStep);
  document.getElementById('step-2').querySelector('button:last-of-type').addEventListener('click', nextStep);
  document.getElementById('step-2').querySelector('button:first-of-type').addEventListener('click', previousStep);
  document.getElementById('step-3').querySelector('button:last-of-type').addEventListener('click', nextStep);
  document.getElementById('step-3').querySelector('button:first-of-type').addEventListener('click', previousStep);
  document.getElementById('step-4').querySelector('button:last-of-type').addEventListener('click', nextStep);
  document.getElementById('step-4').querySelector('button:first-of-type').addEventListener('click', previousStep);
  document.getElementById('step-5').querySelector('button:last-of-type').addEventListener('click', nextStep);
  document.getElementById('step-5').querySelector('button:first-of-type').addEventListener('click', previousStep);

  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {

    const daktype = document.querySelector('input[name="daktype"]:checked').id;
    const size = document.getElementById('size').value;
    const pipes = document.getElementById('pipes').value;
    const liter = document.getElementById('liter').value;
    const zip = document.getElementById('zip').value;
    const huisnummer = document.getElementById('huisnummer').value;

    const formData = {
      daktype,
      size,
      pipes,
      liter,
      zip,
      huisnummer
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  });

}

const notification = document.querySelector('.notifications');
const bellButton = document.querySelector('header i')

bellButton.addEventListener("click", function() {
  notification.classList.toggle('showNotifications')
})

// if (path === "/gegevens") {

//   const formData = JSON.parse(localStorage.getItem('formData'));

//   const daktype = document.getElementById('daktype');
//   const size = document.getElementById('size');
//   const pipes = document.getElementById('pipes');
//   const liter = document.getElementById('liter');
//   const zip = document.getElementById('zip');
//   const huisnummer = document.getElementById('huisnummer');

//   if (formData) {
//     daktype.textContent = formData.daktype;
//     size.value = formData.size;
//     pipes.value = formData.pipes;
//     liter.value = formData.liter;
//     zip.value = formData.zip;
//     huisnummer.value = formData.huisnummer;
//   }

//   console.log(formData);
// }

