// document.getElementById('bookForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Ngăn biểu mẫu gửi đi

//     // Lấy giá trị từ biểu mẫu
//     const destination = document.querySelector('[name="destination"]').value;
//     const quantity = document.querySelector('[name="quantity"]').value;
//     const arrival_date = document.querySelector('[name="arrival_date"]').value;
//     const leaving_date = document.querySelector('[name="leaving_date"]').value;
//     const details = document.querySelector('[name="details"]').value;

//     // Tạo tệp Excel
//     const wb = XLSX.utils.book_new();
//     const ws_data = [
//         ["Destination", "Quantity", "Arrival Date", "Leaving Date", "Details"],
//         [destination, quantity, arrival_date, leaving_date, details]
//     ];
//     const ws = XLSX.utils.aoa_to_sheet(ws_data);
//     XLSX.utils.book_append_sheet(wb, ws, "Bookings");

//     // Tạo tệp và tự động tải xuống
//     XLSX.writeFile(wb, "bookings.xlsx");
// });














const scriptURL = 'https://script.google.com/macros/s/AKfycby6zCh8UQuhuQx5AV-bWdr_GvIigpaPKwFm0GkcwKL5WcaBBIV6Q8Wy7nFOUUNPLj5f/exec'
const form = document.getElementById('contact-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})