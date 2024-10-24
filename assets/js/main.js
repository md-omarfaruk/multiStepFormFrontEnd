// -----------------------FullPopupBodyStart----------------------------
const bookingPopup = document.getElementById("bookingPopup");
const closePopup = document.getElementById('closePopup');
// -----------------------FullPopupBodyEnd----------------------------
// -----------------------HeaderStart-----------------------------
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");
const stepFour = document.getElementById("stepFour");
const planTypeName = document.getElementById("planTypeName");
const people = document.getElementById("people");
const startDate = document.getElementById("startDate");
const duration = document.getElementById("duration");
const monthlyCost = document.getElementById("monthlyCost");
// -----------------------HeaderEnd-----------------------------

// -------------------------------WorkSpaceStart-----------------------------
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
// -------------------------------WorkSpaceEnd-----------------------------

// -------------------------------ChosenPlanOverviewStart------------------
const chosenPlanOverview = document.getElementById('chosenPlanOverview');
const selectedOfficeOrRoomType = document.getElementById('selectedOfficeOrRoomType');
const selectedPlanDuration = document.getElementById('selectedPlanDuration');
const selectedPlanOverview = document.getElementById('selectedPlanOverview');

// -------------------------------NumberOfPeople-----------------------------
const noOfPeople = document.getElementById('noOfPeople');
const zero = document.getElementById('zero');
let decrement = document.getElementById('decrement');
let increment = document.getElementById('increment');
// -------------------------------Date-----------------------------
const date = document.getElementById('date');
// -------------------------------ChosenPlanOverviewBoxNBackNContinueBtn-------
const chosenPlanBackBtn = document.getElementById('chosenPlanBackBtn');
const chosenPlanContinueBtn = document.getElementById('chosenPlanContinueBtn');
// -------------------------------ChosenPlanOverviewEnd------------------

// ----------------------------PersonalDetailsStart-----------------------------
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
// ----------------------------PersonalDetailsEnd-----------------------------

// ----------------------------ReviewPaymentDetailsStart-----------------------------
const reviewPaymentDetails = document.getElementById('reviewPaymentDetails');
const subTotal = document.getElementById('subTotal');
const taxVat = document.getElementById('taxVat');
const total = document.getElementById('total');
const subsequentSubTotal = document.getElementById('subsequentSubTotal');
const subsequentTaxVat = document.getElementById('subsequentTaxVat');
const subsequentTotal = document.getElementById('subsequentTotal');
// ----------------------------PaymentMethodsStart----------
const payNow = document.getElementById('payNow');
const payOnArrival = document.getElementById('payOnArrival');
// ----------------------------PaymentMethodsEnd----------
// ----------------------------ReviewPaymentDetailsEnd-----------------------------
// ----------------------------formSubmitBtnStart-----------------------------
const formSubmitBtn = document.getElementById('formSubmitBtn');
const reviewPaymentDetailsBackBtn = document.getElementById('reviewPaymentDetailsBackBtn');
const submit = document.getElementById('submit');
// ----------------------------formSubmitBtnEnd-----------------------------

// ----------------------------commonScriptForAllElementStart----------------------------



// ----------------------------commonScriptForAllElementEnd----------------------------

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
        addNRemoveClass (chosenPlanOverview, "view-none", "view");
        addNRemoveClass (personalDetails, "view-none", "view");
        addNRemoveClass (reviewPaymentDetails, "view-none", "view");
        addNRemoveClass (stepOne, null, "active");
        addNRemoveClass (stepTwo, null, "active");
        addNRemoveClass (stepThree, null, "active");
        addNRemoveClass (stepFour, null, "active");
        addNRemoveClass (stepOne, null, "completed");
        addNRemoveClass (stepTwo, null, "completed");
        addNRemoveClass (stepThree, null, "completed");
        addNRemoveClass (stepFour, null, "completed");
        // ----------chosenPlanOverview---------
        // addNRemoveClass(chosenPlanOverview, "view-none", "view");
        // ---------reviewPaymentDetailsBackBtnNSubmitBtn--------------------------------
        // addNRemoveClass(reviewPaymentDetailsBackBtn, "view-none", null)
        // addNRemoveClass(submit, "view-none", null);
        // --------------PrivateOfficePopupHide--------------------------------
        // addNRemoveClass(privateOfficePopup, "view-none", "view");
        // --------------TeamOfficeSuitePopupHide--------------------------------
        // addNRemoveClass(teamOfficeSuitePopup, "view-none", "view");
        // --------------HybridOfficePopupHide--------------------------------
        // addNRemoveClass(hybridOfficePopup, "view-none", "view");
        // --------------DayOfficePopupHide--------------------------------
        // addNRemoveClass(dayOfficePopup, "view-none", "view");
        // --------------DedicatedDeskPopupHide--------------------------------
        // addNRemoveClass(dedicatedDeskPopup, "view-none", "view");
        // --------------DayPassPopupHide--------------------------------
        // addNRemoveClass(dayPassPopup, "view-none", "view");
        // --------------FlexibleDeskPopupHide--------------------------------
        // addNRemoveClass(flexibleDeskPopup, "view-none", "view");
        // --------------VirtualOfficePopupHide--------------------------------
        // addNRemoveClass(virtualOfficePopup, "view-none", "view");
        // --------------ConferenceRoomPopupHide--------------------------------
        // addNRemoveClass(conferenceRoomPopup, "view-none", "view");
        // --------------EventSpacePopupHide--------------------------------
        // addNRemoveClass(eventSpacePopup, "view-none", "view");
        // --------------PodcastStudioPopupHide--------------------------------
        // addNRemoveClass(podcastStudioPopup, "view-none", "view");
        // --------------ZoomCallRoomPopupHide--------------------------------
        // addNRemoveClass(zoomCallRoomPopup, "view-none", "view");
        // --------------ColorBurstRoomPopupHide--------------------------------
        // addNRemoveClass(colorBurstRoomPopup, "view-none", "view");
        // --------------AlapRoomPopupHide--------------------------------
        // addNRemoveClass(alapRoomPopup, "view-none", "view");
        // --------------AlochonaRoomPopupHide--------------------------------
        // addNRemoveClass(alochonaRoomPopup, "view-none", "view");

        // --------------showingRequiredPlanInPopup--------------------------------
        if (buttonId === "privateOffice") {
            addNRemoveClass(privateOfficePopup, "view", "view-none");
            addNRemoveClass(stepOne, "active", null);
            elementInnerHTML(planTypeName, "Private Office");
            elementInnerHTML(selectedOfficeOrRoomType, "Private Office");
            // addNRemoveClass(personalDetails, "view-none", "view");
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
        let checkedRadioValue = Number(this.value);
        let percentageOfTaxVat = Math.floor(checkedRadioValue / 100 * 15);
        let totalValue = checkedRadioValue  + percentageOfTaxVat;
        console.log(totalValue);    
        elementInnerHTML(subTotal, checkedRadioValue);
        elementInnerHTML(taxVat, percentageOfTaxVat);
        elementInnerHTML(total, totalValue);
        elementInnerHTML(subsequentSubTotal, checkedRadioValue);
        elementInnerHTML(subsequentTaxVat, percentageOfTaxVat);
        elementInnerHTML(subsequentTotal, totalValue);

        console.log(this.id);
        console.log(this.checked);
        var label = document.querySelector('label[for=' + this.id + ']');
        var labelText = label.innerHTML;
        elementInnerHTML(duration, labelText);
        elementInnerHTML(selectedPlanDuration, labelText);
        addNRemoveClass(this.closest(".office"), "view-none", "view");
        addNRemoveClass(chosenPlanOverview, "view", "view-none");
        addNRemoveClass(stepTwo, "active", null);
        addNRemoveClass(stepOne, "completed", null);
        elementInnerHTML(people, 1);
        elementInnerHTML(noOfPeople, 1);
        chosenPlanBackBtn.onclick = () => {
            addNRemoveClass(stepOne, "active", "completed");
            addNRemoveClass(stepTwo, null, "active");
            addNRemoveClass(chosenPlanOverview, "view-none", "view");
            addNRemoveClass(this.closest(".office"), "view", "view-none");
        };
        closePopup.onclick = () => {
            this.checked = false;
            elementInnerHTML(people, 0);
            elementInnerHTML(duration, "");
            addNRemoveClass(stepOne, null, "active");
            addNRemoveClass(stepTwo, null, "active");
            addNRemoveClass(stepOne, null, "completed");
            addNRemoveClass(stepTwo, null, "completed");
            addNRemoveClass(bookingPopup, "view-none", "view");
            console.log(this.checked);
        };

    });
});

// ------------------GoToNextChosenPlanOverviewAfterPlanSelectionEnd------------------------
// ------------------ChosenPlanOverviewStart------------------------
increment.onclick = () => {
    let noOfPeopleParseInt = parseInt(noOfPeople.innerHTML);
    noOfPeopleParseInt++;
    if (noOfPeopleParseInt > 9) {
        addNRemoveClass(zero, "view-none", null);
    }
    console.log(typeof (noOfPeopleParseInt));
    elementInnerHTML(noOfPeople, noOfPeopleParseInt);
    elementInnerHTML(people, noOfPeople.innerHTML);
    console.log(noOfPeople.innerHTML);
};
decrement.onclick = () => {
    let noOfPeopleParseInt = parseInt(noOfPeople.innerHTML);
    noOfPeopleParseInt--;
    if (noOfPeopleParseInt < 10) {
        addNRemoveClass(zero, null, "view-none");
    }
    if (noOfPeopleParseInt < 1) {
        elementInnerHTML(noOfPeople, 1);
    }
    else {
        elementInnerHTML(noOfPeople, noOfPeopleParseInt);
    }
    elementInnerHTML(people, noOfPeople.innerHTML);
    console.log(noOfPeople.innerHTML);
};
elementInnerHTML(people, noOfPeople.innerHTML);
chosenPlanContinueBtn.onclick = () => {
    addNRemoveClass(chosenPlanOverview, "view-none", "view");
    addNRemoveClass(personalDetails, "view", "view-none");
    addNRemoveClass(stepThree, "active", null);
    addNRemoveClass(stepTwo, "completed", "active");    
};
// ------------------ChosenPlanOverviewEnd------------------------

// ------------------PersonalDetailsStart-------------------------
personalDetailsBackBtn.onclick = () => {
    addNRemoveClass(stepTwo, "active", "completed");
    addNRemoveClass(stepThree, null, "active");
    addNRemoveClass(personalDetails, "view-none", "view");
    addNRemoveClass(chosenPlanOverview, "view", "view-none");
};

 // Email validation function
 function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Phone validation function (Bangladesh-specific format +880)
function validatePhone(phone) {
    const re = /^\+880\d{9,10}$/;
    return re.test(String(phone));
}

personalDetailsContinueBtn.onclick = (e) => {

    const inputs = [firstName, lastName, email, phone, country, companyName, address, apartment, cityTown, postcode];
    let isValid = true;
        let errorMessage = '';

        inputs.forEach(input => {
            const value = input.value.trim();

            // Check if field is empty
            if (value === '') {
                isValid = false;
                errorMessage += `${input.placeholder} is required.\n`;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }

            // Additional validation for specific fields
            if (input.type === 'email' && !validateEmail(value)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
                input.style.borderColor = 'red';
            }

            if (input.type === 'tel' && !validatePhone(value)) {
                isValid = false;
                errorMessage += 'Please enter a valid phone number (e.g., +880...).\n';
                input.style.borderColor = 'red';
            }
              
        });

        if(termsAndConditions.checked !== true){
            isValid = false;
            errorMessage += 'Please accept the Terms and Conditions.\n';
            termsAndConditions.style.borderColor ='red';
        }
        if (!isValid) {
            e.preventDefault();
            alert(errorMessage);
        }
        else{
            addNRemoveClass(personalDetails, "view-none", "view");
            addNRemoveClass(reviewPaymentDetails, "view", "view-none");
            addNRemoveClass(stepFour, "active", "completed");
            addNRemoveClass(stepThree, "completed", "active"); 
        }
   
};

// ------------------PersonalDetailsEnd---------------------------

// ---------------------ReviewPaymentDetailsStart-----------------
reviewPaymentDetailsBackBtn.onclick = () => {
    addNRemoveClass(reviewPaymentDetails, "view-none", "view");
    addNRemoveClass(personalDetails, "view", "view-none");
    addNRemoveClass(stepThree, "active", "completed");
    addNRemoveClass(stepFour, null, "active");
};
// ---------------------ReviewPaymentDetailsEnd---------------------




// ---------------functionOfClosePopup--------------------------------
closePopup.onclick = () => {
    addNRemoveClass(bookingPopup, "view-none", "view");
};













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