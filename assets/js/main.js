// -----------------------requiredDomOfFullPopUpBodyStart----------------------------
const bookingPopUp = document.getElementById("bookingPopUp");
// -----------------------requiredDomOfFullPopUpBodyEnd----------------------------
// -----------------------requiredDomOfHeaderStart-----------------------------
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");
const stepFour = document.getElementById("stepFour");
const planTypeName = document.getElementById("planTypeName").innerText;
const noOfPeople = document.getElementById("noOfPeople").innerText;
const startDate = document.getElementById("startDate").innerText;
const duration = document.getElementById("duration").innerText;
const monthlyCost = document.getElementById("monthlyCost").innerText;
// -----------------------requiredDomOfHeaderEnd-----------------------------

// -------------------------------requiredDomOfWorkSpaceStart-----------------------------
const privateOfficePopUp = document.getElementById("privateOfficePopUp");
const teamOfficeSuitePopUp = document.getElementById("teamOfficeSuitePopUp");
const hybridOfficePopUp = document.getElementById("hybridOfficePopUp");
const dayOfficePopUp = document.getElementById("dayOfficePopUp");
const dedicatedDeskPopUp = document.getElementById("dedicatedDeskPopUp");
const dayPassPopUp = document.getElementById("dayPassPopUp");
const flexibleDeskPopUp = document.getElementById("flexibleDeskPopUp");
const virtualOfficePopUp = document.getElementById("virtualOfficePopUp");
const conferenceRoomPopUp = document.getElementById("conferenceRoomPopUp");
const eventSpacePopUp = document.getElementById("eventSpacePopUp");
const podcastStudioPopUp = document.getElementById("podcastStudioPopUp");
const zoomCallRoomPopUp = document.getElementById("zoomCallRoomPopUp");
const colorBurstRoomPopUp = document.getElementById("colorBurstRoomPopUp");
const alapRoomPopUp = document.getElementById("alapRoomPopUp");
const alochonaRoomPopUp = document.getElementById("alochonaRoomPopUp");
// -------------------------------requiredDomOfWorkSpaceEnd-----------------------------

// ----------------------------requiredDomOfSelectedOfficeOrRoomOverviewStart-----------------------------
const checkedRadio = document.getElementsByName('chosen_plan');
const selectedOfficeOrRoom = document.getElementById('selectedOfficeOrRoomType').innerText;
const selectedPlanTime = document.getElementById('selectedPlanDuration').innerText;
const selectedPlanOverview = document.getElementById('selectedPlanOverview');

// -------------------------------requiredDomOfNumberOfPeople-----------------------------
const people = document.getElementById('people').innerText;
const zero = document.getElementById('zero').innerText;
const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
// -------------------------------requiredDomOfDate-----------------------------
const date = document.getElementById('date');
// -------------------------------requiredDomOfcheckBoxNBackNContinueBtn-------
const chosenPlanBackBtn = document.getElementById('chosenPlanBackBtn');
const chosenPlanContinueBtn = document.getElementById('chosenPlanContinueBtn');

// ----------------------------requiredDomOfSelectedOfficeOrRoomOverviewEnd-----------------------------

// ----------------------------requiredDomOfPersonalDetailsStart-----------------------------
const personalDetails = document.getElementById('personalDetails');
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const country = document.getElementById('country').value;
const companyName = document.getElementById('companyName').value;
const address = document.getElementById('address').value;
const apartment = document.getElementById('apartment').value;
const cityTown = document.getElementById('cityTown').value;
const postcode = document.getElementById('postcode').value;
const termsAndConditions = document.getElementById('termsAndConditions');
const personalDetailsBackBtn = document.getElementById('personalDetailsBackBtn');
const personalDetailsContinueBtn = document.getElementById('personalDetailsContinueBtn');
// ----------------------------requiredDomOfPersonalDetailsEnd-----------------------------

// ----------------------------requiredDomOfReviewPaymentDetailsStart-----------------------------
const reviewPaymentDetails = document.getElementById('reviewPaymentDetails');
const reviewPaymentDetailsBackBtn = document.getElementById('reviewPaymentDetailsBackBtn');
const submit = document.getElementById('submit');
// ----------------------------requiredDomOfPaymentMethodsStart----------
const payNow = document.getElementById('payNow');
const payOnArrival = document.getElementById('payOnArrival');
// ----------------------------requiredDomOfPaymentMethodsEnd----------

// ----------------------------requiredDomOfReviewPaymentDetailsEnd-----------------------------

// ---------------functionOfShowingPopUp--------------------------------
document.getElementById("privateOffice").addEventListener("click", function (event) {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
        const buttonId = event.target.id;
        if (buttonId === "privateOffice") {
            bookingPopUp.classList.remove("view-none");
            privateOfficePopUp.classList.remove("view-none");
        }
        else {
            bookingPopUp.classList.add("view-none");
            privateOfficePopUp.classList.add("view-none");
        }
    }
});

document.getElementById("teamOfficeSuite").addEventListener("click", function (event) {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
        const buttonId = event.target.id;
        if (buttonId === "teamOfficeSuite") {
            bookingPopUp.classList.remove("view-none");
            teamOfficeSuitePopUp.classList.remove("view-none");
        }
        else {
            bookingPopUp.classList.add("view-none");
            teamOfficeSuitePopUp.classList.add("view-none");
        }
    }
});


// document.addEventListener("click", function (event) {
//     // Check if the clicked element is a button
//     if (event.target.tagName === "BUTTON") {
//         const buttonId = event.target.id;
//         if (buttonId === "teamOfficeSuite") {
//             bookingPopUp.classList.remove("view-none");
//             teamOfficeSuitePopUp.classList.remove("view-none");           
//         }
//         else {
//             bookingPopUp.classList.add("view-none");
//             teamOfficeSuitePopUp.classList.add("view-none");            
//         }
//     }
// });
// document.addEventListener("click", function (event) {
//     // Check if the clicked element is a button
//     if (event.target.tagName === "BUTTON") {
//         const buttonId = event.target.id;
//         if (buttonId === "privateOffice") {
//             bookingPopUp.classList.remove("view-none");
//             privateOfficePopUp.classList.remove("view-none");            
//         }
//         else {
//             bookingPopUp.classList.add("view-none");
//             privateOfficePopUp.classList.add("view-none");            
//         }
//     }
// });
// ---------------functionOfClosePopUp--------------------------------
const closePopUp = document.getElementById('closePopUp');
closePopUp.addEventListener('click', () => {
    bookingPopUp.classList.add("view-none");
});













window.onload = function () {
    // Get the current date
    const today = new Date();

    // Format the date to YYYY-MM-DD for the date input
    const formattedDate = today.toISOString().split('T')[0];

    // Set the value of the input field to the current date
    date.value = formattedDate;
};