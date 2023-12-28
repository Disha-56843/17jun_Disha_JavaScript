const bookingChoice = document.getElementById('bookingChoice');
const dateContainer = document.getElementById('dateContainer');
const slotContainer = document.getElementById('slotContainer');
const timeSlotContainer = document.getElementById('timeSlotContainer');

bookingChoice.addEventListener('change', function () {
    if (bookingChoice.value === 'fullDay') {
        dateContainer.style.display = 'block';
        timeSlotContainer.style.display = 'none';
        slotContainer.style.display = 'none';
    } else if (bookingChoice.value === 'halfDay') {
        dateContainer.style.display = 'block';
        slotContainer.style.display = 'block';
        timeSlotContainer.style.display = 'none';
    } else if (bookingChoice.value === 'hourly') {
        dateContainer.style.display = 'block';
        timeSlotContainer.style.display = 'block';
        slotContainer.style.display = 'none';
    }
});
function confirm() {
    // alert("Your Booking is confirm");
    const para = document.createElement("h4");
    const node = document.createTextNode("Your Booking is Confirm");
    para.appendChild(node);
    const element = document.getElementById("bookingForm");
    element.appendChild(para).style.color="red";
}
