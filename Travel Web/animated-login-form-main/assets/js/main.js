const webAppUrl = 'https://script.google.com/macros/s/AKfycbwphDrL88ZbsbyXyV7LpalA3XgBQo3XZvvYgbfDLrn13vU3L_TJBTdAZWwZ10tFIEeb/exec';

const showHiddenPass = (passId, eyeId) => {
   const input = document.getElementById(passId),
         iconEye = document.getElementById(eyeId);

   iconEye.addEventListener('click', () => {
      if (input.type === 'password') {
         input.type = 'text';
         iconEye.classList.add('ri-eye-line');
         iconEye.classList.remove('ri-eye-off-line');
      } else {
         input.type = 'password';
         iconEye.classList.remove('ri-eye-line');
         iconEye.classList.add('ri-eye-off-line');
      }
   });
}

showHiddenPass('login-pass', 'login-eye');
showHiddenPass('register-pass', 'register-eye');

const toggleForm = (form) => {
   document.getElementById('login-form').style.display = form === 'login' ? 'block' : 'none';
   document.getElementById('register-form').style.display = form === 'register' ? 'block' : 'none';
}

const submitForm = (action) => {
   const email = document.getElementById(`${action}-email`).value;
   const password = document.getElementById(`${action}-pass`).value;

   const formData = new FormData();
   formData.append('action', action);
   formData.append('email', email);
   formData.append('password', password);

   const xhr = new XMLHttpRequest();
   xhr.open('POST', webAppUrl);
   xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
         if (xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            if (res.result === 'success') {
               // Nếu đăng nhập hoặc đăng ký thành công, chuyển hướng sang trang travel.html
               window.location.href = 'D:\Travel Web\index.html';
            } else {
               alert(res.message || 'Error occurred!');
            }
         } else {
            console.error('Error:', xhr.statusText);
            alert('An error occurred while processing your request.');
         }
      }
   };
   xhr.send(formData);
}





/*=============== SHOW HIDDEN - PASSWORD ===============*/
// const showHiddenPass = (loginPass, loginEye) =>{                  PHẦN THUÒNG CUA TRANG WEB CÓ SẴN
//    const input = document.getElementById(loginPass),
//          iconEye = document.getElementById(loginEye)

//    iconEye.addEventListener('click', () =>{
//       // Change password to text
//       if(input.type === 'password'){
//          // Switch to text
//          input.type = 'text'

//          // Icon change
//          iconEye.classList.add('ri-eye-line')
//          iconEye.classList.remove('ri-eye-off-line')
//       } else{
//          // Change to password
//          input.type = 'password'

//          // Icon change
//          iconEye.classList.remove('ri-eye-line')
//          iconEye.classList.add('ri-eye-off-line')
//       }
//    })
// }

// showHiddenPass('login-pass','login-eye')









// Không biết
//  /*=============== SHOW HIDDEN - PASSWORD ===============*/
//  const showHiddenPass = (loginPass, loginEye) =>{
//    const input = document.getElementById(loginPass),
//          iconEye = document.getElementById(loginEye)

//    iconEye.addEventListener('click', () =>{
//       // Change password to text
//       if(input.type === 'password'){
//          // Switch to text
//          input.type = 'text'

//          // Icon change
//          iconEye.classList.add('ri-eye-line')
//          iconEye.classList.remove('ri-eye-off-line')
//       } else{
//          // Change to password
//          input.type = 'password'

//          // Icon change
//          iconEye.classList.remove('ri-eye-line')
//          iconEye.classList.add('ri-eye-off-line')
//       }
//    })
// }

// showHiddenPass('login-pass','login-eye')

// // Handle form submission
// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', function(event) {
//    event.preventDefault(); // Prevent default form submission

//    const email = document.getElementById('login-email').value;
//    const password = document.getElementById('login-pass').value;

//    // Simple validation (you can add more complex validation if needed)
//    if (email && password) {
//       // Redirect to the specified page
//       window.location.href = "Travel%20Web/index.html";
//    } else {
//       alert('Please enter both email and password.');
//    }
// });