// -----------------------DomOfFullPopupBodyStart----------------------------
const bookingPopup = document.getElementById("bookingPopup");
// -----------------------DomOfFullPopupBodyEnd----------------------------
// -----------------------DomOfHeaderStart-----------------------------
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");
const stepFour = document.getElementById("stepFour");
const planTypeName = document.getElementById("planTypeName");
const noOfPeople = document.getElementById("noOfPeople");
const startDate = document.getElementById("startDate");
const duration = document.getElementById("duration");
const monthlyCost = document.getElementById("monthlyCost");
// -----------------------DomOfHeaderEnd-----------------------------

// -------------------------------DomOfWorkSpaceStart-----------------------------
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
// -------------------------------DomOfWorkSpaceEnd-----------------------------

// -------------------------------DomOfChosenPlanOverviewStart------------------
const chosenPlanOverview = document.getElementById('chosenPlanOverview');
const selectedOfficeOrRoomType = document.getElementById('selectedOfficeOrRoomType');
const selectedPlanDuration = document.getElementById('selectedPlanDuration');
const selectedPlanOverview = document.getElementById('selectedPlanOverview');

// -------------------------------DomOfNumberOfPeople-----------------------------
const people = document.getElementById('people');
const zero = document.getElementById('zero');
let decrement = document.getElementById('decrement');
let increment = document.getElementById('increment');
// -------------------------------DomOfDate-----------------------------
const date = document.getElementById('date');
// -------------------------------DomOfChosenPlanOverviewBoxNBackNContinueBtn-------
const chosenPlanBackBtn = document.getElementById('chosenPlanBackBtn');
const chosenPlanContinueBtn = document.getElementById('chosenPlanContinueBtn');
// -------------------------------DomOfChosenPlanOverviewEnd------------------

// ----------------------------DomOfPersonalDetailsStart-----------------------------
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
// ----------------------------DomOfPersonalDetailsEnd-----------------------------

// ----------------------------DomOfReviewPaymentDetailsStart-----------------------------
const reviewPaymentDetails = document.getElementById('reviewPaymentDetails');
const reviewPaymentDetailsBackBtn = document.getElementById('reviewPaymentDetailsBackBtn');
const submit = document.getElementById('submit');
// ----------------------------DomOfPaymentMethodsStart----------
const payNow = document.getElementById('payNow');
const payOnArrival = document.getElementById('payOnArrival');
// ----------------------------DomOfPaymentMethodsEnd----------

// ----------------------------DomOfReviewPaymentDetailsEnd-----------------------------
// ----------------------commonFunctionsForElementClassAddNRemove--------------------------------
const addNRemoveClass = (element, classAdd, classRemove) => {
    element.classList.add(classAdd);
    element.classList.remove(classRemove);
};
// ----------------------commonFunctionsForelementInnerHTML--------------------------------
const elementInnerHTML = (element, innerContents) => {
    element.innerHTML = innerContents;
};

// ---------------ShowingPopup--------------------------------

let tk = [700, 900, 800];
let me = 900;
if (me === 900) {
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
            elementInnerHTML(planTypeName, "Private Office");
            elementInnerHTML(selectedOfficeOrRoomType, "Private Office");
        } else if (buttonId === "teamOfficeSuite") {
            addNRemoveClass(teamOfficeSuitePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Team Office Suite");
            elementInnerHTML(selectedOfficeOrRoomType, "Team Office Suite");
        }
        else if (buttonId === "hybridOffice") {
            addNRemoveClass(hybridOfficePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Hybrid Office");
            elementInnerHTML(selectedOfficeOrRoomType, "Hybrid Office");
        }
        else if (buttonId === "dayOffice") {
            addNRemoveClass(dayOfficePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Day Office");
            elementInnerHTML(selectedOfficeOrRoomType, "Day Office");
        }
        else if (buttonId === "dedicatedDesk") {
            addNRemoveClass(dedicatedDeskPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Dedicated Desk");
            elementInnerHTML(selectedOfficeOrRoomType, "Dedicated Desk");
        }
        else if (buttonId === "dayPass") {
            addNRemoveClass(dayPassPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Day Pass");
            elementInnerHTML(selectedOfficeOrRoomType, "Day Pass");
        }
        else if (buttonId === "flexibleDesk") {
            addNRemoveClass(flexibleDeskPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Flexible Desk");
            elementInnerHTML(selectedOfficeOrRoomType, "Flexible Desk");
        }
        else if (buttonId === "virtualOffice") {
            addNRemoveClass(virtualOfficePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Virtual Office");
            elementInnerHTML(selectedOfficeOrRoomType, "Virtual Office");
        }
        else if (buttonId === "conferenceRoom") {
            addNRemoveClass(conferenceRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Conference Room");
            elementInnerHTML(selectedOfficeOrRoomType, "Conference Room");
        }
        else if (buttonId === "eventSpace") {
            addNRemoveClass(eventSpacePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Event Space");
            elementInnerHTML(selectedOfficeOrRoomType, "Event Space");
        }
        else if (buttonId === "podcastStudio") {
            addNRemoveClass(podcastStudioPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Podcast Studio");
            elementInnerHTML(selectedOfficeOrRoomType, "Podcast Studio");
        }
        else if (buttonId === "zoomCallRoom") {
            addNRemoveClass(zoomCallRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Zoom Call Room");
            elementInnerHTML(selectedOfficeOrRoomType, "Zoom Call Room");
        }
        else if (buttonId === "colorBurstRoom") {
            addNRemoveClass(colorBurstRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Color Burst Room");
            elementInnerHTML(selectedOfficeOrRoomType, "Color Burst Room");
        }
        else if (buttonId === "alapRoom") {
            addNRemoveClass(alapRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Alap Room");
            elementInnerHTML(selectedOfficeOrRoomType, "Alap Room");
        }
        else if (buttonId === "alochonaRoom") {
            addNRemoveClass(alochonaRoomPopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Alochona Room");
            elementInnerHTML(selectedOfficeOrRoomType, "Alochona Room");
        }
    }
};

// ------------------GoToNextChosenPlanOverviewAfterPlanSelectionStart------------------------
checkedRadio.forEach(function (radio) {
    radio.addEventListener("change", function () {
        console.log(this.value);
        console.log(this.id);
        var label = document.querySelector('label[for=' + this.id + ']');
        var text = label.innerHTML;
        elementInnerHTML(duration, text);
        elementInnerHTML(selectedPlanDuration, text);
        addNRemoveClass(this.closest(".office"), "view-none", "view");
        addNRemoveClass(chosenPlanOverview, "view", "view-none");
        addNRemoveClass(stepTwo, "active", "completed");
        addNRemoveClass(stepOne, "completed", null);
        noOfPeople.innerHTML = 1;
        chosenPlanBackBtn.onclick = () => {
            addNRemoveClass(stepOne, "active", "completed");
            addNRemoveClass(stepTwo, "completed", "active");
            addNRemoveClass(chosenPlanOverview, "view-none", "view");
            addNRemoveClass(this.closest(".office"), "view", "view-none");
        };

    });
});

// ------------------GoToNextChosenPlanOverviewAfterPlanSelectionEnd------------------------
// ------------------ChosenPlanOverviewStart------------------------
increment.onclick = () => {
    let noOfPeopleParseInt = parseInt(noOfPeople.innerHTML);
    noOfPeopleParseInt++;
    noOfPeople.innerHTML = noOfPeopleParseInt;
    console.log(noOfPeople.innerHTML);
};
decrement.onclick = () => {
    let noOfPeopleParseInt = parseInt(noOfPeople.innerHTML);
    noOfPeopleParseInt--;
    noOfPeople.innerHTML = noOfPeopleParseInt;
    console.log(noOfPeople.innerHTML);
};
chosenPlanContinueBtn.onclick = () => {
    addNRemoveClass(chosenPlanOverview, "view-none", "view");
    addNRemoveClass(personalDetails, "view", "view-none");
    addNRemoveClass(stepThree, "active", null);
    addNRemoveClass(stepTwo, "completed", "active");
};
// ------------------ChosenPlanOverviewEnd------------------------

// ------------------PersonalDetailsStart-------------------------
personalDetailsBackBtn.onclick = () => {
    addNRemoveClass(stepTwo, "active", null);
    addNRemoveClass(stepThree, null, "active");
    addNRemoveClass(personalDetails, "view-none", "view");
    addNRemoveClass(chosenPlanOverview, "view", "view-none");
};
// ------------------PersonalDetailsEnd---------------------------


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
    elementInnerHTML(startDate, formattedDate);
    date.addEventListener('change', () => {
        elementInnerHTML(startDate, date.value);
    });
};