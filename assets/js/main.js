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
// ---------------------------chosenPlan------------------------
const checkedRadio = document.getElementsByName('chosen_plan');
// -------------------------------requiredDomOfWorkSpaceEnd-----------------------------

// -------------------------------requiredDomOfChosenPlanOverviewStart------------------
const chosenPlanOverview = document.getElementById('chosenPlanOverview');
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
// -------------------------------requiredDomOfChosenPlanOverviewBoxNBackNContinueBtn-------
const chosenPlanBackBtn = document.getElementById('chosenPlanBackBtn');
const chosenPlanContinueBtn = document.getElementById('chosenPlanContinueBtn');
// -------------------------------requiredDomOfChosenPlanOverviewEnd------------------

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


document.addEventListener("click", function (event) {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
        const buttonId = event.target.id;
        // Show only the relevant popup based on button clicked

// Hide both popups initially
        // ------FullPopUpBody-------------
        bookingPopUp.classList.remove("view-none");
        // ----------chosenPlanOverview---------
        chosenPlanOverview.classList.add("view-none");
        chosenPlanOverview.classList.remove("view");
        // ---------reviewPaymentDetailsBackBtnNSubmitBtn--------------------------------
        reviewPaymentDetailsBackBtn.classList.add("view-none");
        submit.classList.add("view-none");
        // --------------PrivateOfficePopUpPlanScript--------------------------------
        privateOfficePopUp.classList.add("view-none");
        privateOfficePopUp.classList.remove("view");
        // --------------TeamOfficeSuitePopUpPlanScript--------------------------------
        teamOfficeSuitePopUp.classList.add("view-none");
        teamOfficeSuitePopUp.classList.remove("view");
        // --------------HybridOfficePopUpPlanScript--------------------------------
        hybridOfficePopUp.classList.add("view-none");
        hybridOfficePopUp.classList.remove("view");
        // --------------DayOfficePopUpPlanScript--------------------------------
        dayOfficePopUp.classList.add("view-none");
        dayOfficePopUp.classList.remove("view");
        // --------------DedicatedDeskPopUpPlanScript--------------------------------
        dedicatedDeskPopUp.classList.add("view-none");
        dedicatedDeskPopUp.classList.remove("view");
        // --------------DayPassPopUpPlanScript--------------------------------
        dayPassPopUp.classList.add("view-none");
        dayPassPopUp.classList.remove("view");
        // --------------FlexibleDeskPopUpPlanScript--------------------------------
        flexibleDeskPopUp.classList.add("view-none");
        flexibleDeskPopUp.classList.remove("view");
        // --------------VirtualOfficePopUpPlanScript--------------------------------
        virtualOfficePopUp.classList.add("view-none");
        virtualOfficePopUp.classList.remove("view");
        // --------------ConferenceRoomPopUpPlanScript--------------------------------
        conferenceRoomPopUp.classList.add("view-none");
        conferenceRoomPopUp.classList.remove("view");
        // --------------EventSpacePopUpPlanScript--------------------------------
        eventSpacePopUp.classList.add("view-none");
        eventSpacePopUp.classList.remove("view");
        // --------------PodcastStudioPopUpPlanScript--------------------------------
        podcastStudioPopUp.classList.add("view-none");
        podcastStudioPopUp.classList.remove("view");
        // --------------ZoomCallRoomPopUpPlanScript--------------------------------
        zoomCallRoomPopUp.classList.add("view-none");
        zoomCallRoomPopUp.classList.remove("view");
        // --------------ColorBurstRoomPopUpPlanScript--------------------------------
        colorBurstRoomPopUp.classList.add("view-none");
        colorBurstRoomPopUp.classList.remove("view");
        // --------------AlapRoomPopUpPlanScript--------------------------------
        alapRoomPopUp.classList.add("view-none");
        alapRoomPopUp.classList.remove("view");
        // --------------AlochonaRoomPopUpPlanScript--------------------------------
        alochonaRoomPopUp.classList.add("view-none");
        alochonaRoomPopUp.classList.remove("view");


        if (buttonId === "privateOffice") {
            privateOfficePopUp.classList.remove("view-none");
            privateOfficePopUp.classList.add("view");
        } else if (buttonId === "teamOfficeSuite") {
            teamOfficeSuitePopUp.classList.remove("view-none");
            teamOfficeSuitePopUp.classList.add("view");
        }
        else if (buttonId === "hybridOffice") {
            hybridOfficePopUp.classList.remove("view-none");
            hybridOfficePopUp.classList.add("view");
        }
        else if (buttonId === "dayOffice") {
            dayOfficePopUp.classList.remove("view-none");
            dayOfficePopUp.classList.add("view");
        }
        else if (buttonId === "dedicatedDesk") {
            dedicatedDeskPopUp.classList.remove("view-none");
            dedicatedDeskPopUp.classList.add("view");
        }
        else if (buttonId === "dayPass") {
            dayPassPopUp.classList.remove("view-none");
            dayPassPopUp.classList.add("view");
        }
        else if (buttonId === "flexibleDesk") {
            flexibleDeskPopUp.classList.remove("view-none");
            flexibleDeskPopUp.classList.add("view");
        }
        else if (buttonId === "virtualOffice") {
            virtualOfficePopUp.classList.remove("view-none");
            virtualOfficePopUp.classList.add("view");
        }
        else if (buttonId === "conferenceRoom") {
            conferenceRoomPopUp.classList.remove("view-none");
            conferenceRoomPopUp.classList.add("view");
        }
        else if (buttonId === "eventSpace") {
            eventSpacePopUp.classList.remove("view-none");
            eventSpacePopUp.classList.add("view");
        }
        else if (buttonId === "podcastStudio") {
            podcastStudioPopUp.classList.remove("view-none");
            podcastStudioPopUp.classList.add("view");
        }
        else if (buttonId === "zoomCallRoom") {
            zoomCallRoomPopUp.classList.remove("view-none");
            zoomCallRoomPopUp.classList.add("view");
        }
        else if (buttonId === "colorBurstRoom") {
            colorBurstRoomPopUp.classList.remove("view-none");
            colorBurstRoomPopUp.classList.add("view");
        }
        else if (buttonId === "alapRoom") {
            alapRoomPopUp.classList.remove("view-none");
            alapRoomPopUp.classList.add("view");
        }
        else if (buttonId === "alochonaRoom") {
            alochonaRoomPopUp.classList.remove("view-none");
            alochonaRoomPopUp.classList.add("view");

        }
    }
    checkedRadio.forEach(function (radio) {
        radio.addEventListener("change", function () {
            console.log(this.value);
            this.closest(".office").classList.add("view-none");
            chosenPlanOverview.classList.remove("view");
        });
    });
});


// ---------------functionOfClosePopUp--------------------------------
const closePopUp = document.getElementById('closePopUp');
closePopUp.addEventListener('click', () => {
    bookingPopUp.classList.remove("view");
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