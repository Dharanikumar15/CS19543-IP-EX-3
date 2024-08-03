function validateForm() {
  const name = document.getElementById('fname');
  const birthday = document.getElementById('birthday');
  const qualification = document.getElementById('cars');
  const mobileNumber = document.getElementById('number');
  const passPercentage = document.getElementById('pass');
  const postApplying = document.getElementById('post');
  const skills = document.getElementById('skills');
  const experience = document.getElementById('experience');
  const file = document.getElementById('myfile');

  if (name.value.trim() === '') {
    alert('Please enter your name');
    name.focus();
    return false;
  }

  if (birthday.value.trim() === '') {
    alert('Please enter your date of birth');
    birthday.focus();
    return false;
  }

  if (qualification.selectedIndex === 0) {
    alert('Please select your qualification');
    qualification.focus();
    return false;
  }

  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobileNumber.value)) {
    alert('Please enter a valid mobile number');
    mobileNumber.focus();
    return false;
  }

  const passRegex = /^[0-9]{1,3}$/;
  if (!passRegex.test(passPercentage.value)) {
    alert('Please enter a valid pass percentage');
    passPercentage.focus();
    return false;
  }

  if (postApplying.selectedIndex === 0) {
    alert('Please select the post you are applying for');
    postApplying.focus();
    return false;
  }

  if (skills.value.trim() === '') {
    alert('Please enter your skills');
    skills.focus();
    return false;
  }

  if (experience.value.trim() === '') {
    alert('Please enter your experience');
    experience.focus();
    return false;
  }

  if (file.value.trim() === '') {
    alert('Please select a file');
    file.focus();
    return false;
  }

  return true;
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    if (validateForm()) {
      // Display success message
      const successMessage = document.getElementById('success-message');
      successMessage.style.display = 'block';
      successMessage.innerHTML = 'Form submitted successfully!';
      // Submit the form
      // You can also use AJAX to submit the form without reloading the page
      // For simplicity, I'm just submitting the form normally
      // If you want to stay on the same page, you can use AJAX
      setTimeout(function() {
        form.submit();
      }, 2000); // Wait for 2 seconds before submitting the form
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  });
});