// -----------------------requiredDomOfFullPopupBodyStart----------------------------
const bookingPopup = document.getElementById("bookingPopup");
// -----------------------requiredDomOfFullPopupBodyEnd----------------------------
// -----------------------requiredDomOfHeaderStart-----------------------------
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");
const stepFour = document.getElementById("stepFour");
const planTypeName = document.getElementById("planTypeName");
const noOfPeople = document.getElementById("noOfPeople");
const startDate = document.getElementById("startDate");
const duration = document.getElementById("duration");
const monthlyCost = document.getElementById("monthlyCost");
// -----------------------requiredDomOfHeaderEnd-----------------------------

// -------------------------------requiredDomOfWorkSpaceStart-----------------------------
const privateOfficePopup = document.getElementById("privateOfficePopup");
const teamOfficeSuitePopup = document.getElementById("teamOfficeSuitePopup");
const hybridOfficePopup = document.getElementById("hybridOfficePopup");
const dayOfficePopup = document.getElementById("dayOfficePopup");
const dedicatedDeskPopup = document.getElementById("dedicatedDeskPopup");
const dayPassPopup = document.getElementById("dayPassPopup");
const flexibleDeskPopup = document.getElementById("flexibleDeskPopup");
const virtualOfficePopup = document.getElementById("virtualOfficePopup");
const conferenceRoomPopup = document.getElementById("conferenceRoomPopup");
const eventSpacePopup = document.getElementById("eventSpacePopup");
const podcastStudioPopup = document.getElementById("podcastStudioPopup");
const zoomCallRoomPopup = document.getElementById("zoomCallRoomPopup");
const colorBurstRoomPopup = document.getElementById("colorBurstRoomPopup");
const alapRoomPopup = document.getElementById("alapRoomPopup");
const alochonaRoomPopup = document.getElementById("alochonaRoomPopup");
// ---------------------------chosenPlan------------------------
let checkedRadio = document.querySelectorAll('input[type="radio"][name="chosen_plan"]');
// -------------------------------requiredDomOfWorkSpaceEnd-----------------------------

// -------------------------------requiredDomOfChosenPlanOverviewStart------------------
const chosenPlanOverview = document.getElementById('chosenPlanOverview');
const selectedOfficeOrRoom = document.getElementById('selectedOfficeOrRoomType');
const selectedPlanTime = document.getElementById('selectedPlanDuration');
const selectedPlanOverview = document.getElementById('selectedPlanOverview');

// -------------------------------requiredDomOfNumberOfPeople-----------------------------
const people = document.getElementById('people');
const zero = document.getElementById('zero');
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
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const country = document.getElementById('country');
const companyName = document.getElementById('companyName');
const address = document.getElementById('address');
const apartment = document.getElementById('apartment');
const cityTown = document.getElementById('cityTown');
const postcode = document.getElementById('postcode');
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
// ----------------------commonFunctionsForElementClassAddNRemove--------------------------------
const addNRemoveClass = (element, classAdd, classRemove) => {
    element.classList.add(classAdd);
    element.classList.remove(classRemove);
};
// ----------------------commonFunctionsForElementInnerText--------------------------------
const elementInnerText = (element, text) => {
    element.innerText = text;
};

// ---------------scriptOfShowingPopup--------------------------------

let tk = [700, 900, 800];
let me = 900;
if (me === 900){
    console.log(me);
}

document.onclick = (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
        const buttonId = event.target.id;
        // Show only the relevant Popup based on button clicked

        // Hide both Popups initially
        // ------FullPopupBody-------------
        addNRemoveClass(bookingPopup, null, "view-none");
        // ----------chosenPlanOverview---------
        addNRemoveClass(chosenPlanOverview, "view-none", "view");
        // ---------reviewPaymentDetailsBackBtnNSubmitBtn--------------------------------
        addNRemoveClass(reviewPaymentDetailsBackBtn, "view-none", null)
        addNRemoveClass(submit, "view-none", null);
        // --------------PrivateOfficePopupHide--------------------------------
        addNRemoveClass(privateOfficePopup, "view-none", "view");
        // --------------TeamOfficeSuitePopupHide--------------------------------
        addNRemoveClass(teamOfficeSuitePopup, "view-none", "view");
        // --------------HybridOfficePopupHide--------------------------------
        addNRemoveClass(hybridOfficePopup, "view-none", "view");
        // --------------DayOfficePopupHide--------------------------------
        addNRemoveClass(dayOfficePopup, "view-none", "view");
        // --------------DedicatedDeskPopupHide--------------------------------
        addNRemoveClass(dedicatedDeskPopup, "view-none", "view");
        // --------------DayPassPopupHide--------------------------------
        addNRemoveClass(dayPassPopup, "view-none", "view");
        // --------------FlexibleDeskPopupHide--------------------------------
        addNRemoveClass(flexibleDeskPopup, "view-none", "view");
        // --------------VirtualOfficePopupHide--------------------------------
        addNRemoveClass(virtualOfficePopup, "view-none", "view");
        // --------------ConferenceRoomPopupHide--------------------------------
        addNRemoveClass(conferenceRoomPopup, "view-none", "view");
        // --------------EventSpacePopupHide--------------------------------
        addNRemoveClass(eventSpacePopup, "view-none", "view");
        // --------------PodcastStudioPopupHide--------------------------------
        addNRemoveClass(podcastStudioPopup, "view-none", "view");
        // --------------ZoomCallRoomPopupHide--------------------------------
        addNRemoveClass(zoomCallRoomPopup, "view-none", "view");
        // --------------ColorBurstRoomPopupHide--------------------------------
        addNRemoveClass(colorBurstRoomPopup, "view-none", "view");
        // --------------AlapRoomPopupHide--------------------------------
        addNRemoveClass(alapRoomPopup, "view-none", "view");
        // --------------AlochonaRoomPopupHide--------------------------------
        addNRemoveClass(alochonaRoomPopup, "view-none", "view");

        // --------------showingRequiredPlanInPopup--------------------------------
        if (buttonId === "privateOffice") {
            addNRemoveClass(privateOfficePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Private Office");
        } else if (buttonId === "teamOfficeSuite") {
            addNRemoveClass(teamOfficeSuitePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Team Office Suite");
        }
        else if (buttonId === "hybridOffice") {
            addNRemoveClass(hybridOfficePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Hybrid Office");
        }
        else if (buttonId === "dayOffice") {
            addNRemoveClass(dayOfficePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Day Office");
        }
        else if (buttonId === "dedicatedDesk") {
            addNRemoveClass(dedicatedDeskPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Dedicated Desk");
        }
        else if (buttonId === "dayPass") {
            addNRemoveClass(dayPassPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Day Pass");
        }
        else if (buttonId === "flexibleDesk") {
            addNRemoveClass(flexibleDeskPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Flexible Desk");
        }
        else if (buttonId === "virtualOffice") {
            addNRemoveClass(virtualOfficePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Virtual Office");
        }
        else if (buttonId === "conferenceRoom") {
            addNRemoveClass(conferenceRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Conference Room");
        }
        else if (buttonId === "eventSpace") {
            addNRemoveClass(eventSpacePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Event Space");
        }
        else if (buttonId === "podcastStudio") {
            addNRemoveClass(podcastStudioPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Podcast Studio");
        }
        else if (buttonId === "zoomCallRoom") {
            addNRemoveClass(zoomCallRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Zoom Call Room");
        }
        else if (buttonId === "colorBurstRoom") {
            addNRemoveClass(colorBurstRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Color Burst Room");
        }
        else if (buttonId === "alapRoom") {
            addNRemoveClass(alapRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Alap Room");
        }
        else if (buttonId === "alochonaRoom") {
            addNRemoveClass(alochonaRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerText(planTypeName, "Alochona Room");
        }
    }
};

// ------------------scriptForGoToNextChosenPlanOverviewAfterPlanSelectionStart------------------------
checkedRadio.forEach(function (radio) {
    radio.addEventListener("change", function () {
        console.log(this.value);
        addNRemoveClass(this.closest(".office"), "view-none", "view"); 
        addNRemoveClass(chosenPlanOverview, "view", "view-none");
        addNRemoveClass(stepTwo, "active", null);
        addNRemoveClass(stepOne, "completed", null);
        noOfPeople.innerText = 1;
        chosenPlanBackBtn.onclick = () => {
        addNRemoveClass(chosenPlanOverview, "view-none", "view"); 
        addNRemoveClass(this.closest(".office"), "view", "view-none"); 
        };

    });
});
// ------------------scriptForGoToNextChosenPlanOverviewAfterPlanSelectionEnd------------------------
// ------------------scriptForChosenPlanOverviewStart------------------------
chosenPlanContinueBtn.onclick = () => {
    addNRemoveClass(chosenPlanOverview, "view-none", "view");
    addNRemoveClass(personalDetails, "view", "view-none");
    reviewPaymentDetailsBackBtn.onclick = () => {
    addNRemoveClass(reviewPaymentDetails, "view-none", "view");
    addNRemoveClass(chosenPlanOverview, "view", "view-none");
    };
};
// ------------------scriptForChosenPlanOverviewEnd------------------------



// ---------------functionOfClosePopup--------------------------------
const closePopup = document.getElementById('closePopup');
closePopup.addEventListener('click', () => {
    addNRemoveClass(bookingPopup, "view-none", "view");
});













window.onload = function () {
    // Get the current date
    const today = new Date();

    // Format the date to YYYY-MM-DD for the date input
    const formattedDate = today.toISOString().split('T')[0];

    // Set the value of the input field to the current date
    date.value = formattedDate;
};