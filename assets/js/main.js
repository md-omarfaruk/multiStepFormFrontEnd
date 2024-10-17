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
const privateOffice = document.getElementById("privateOffice");
const teamOfficeSuite = document.getElementById("teamOfficeSuite");
const hybridOffice = document.getElementById("hybridOffice");
const dayOffice = document.getElementById("dayOffice");
const dedicatedDesk = document.getElementById("dedicatedDesk");
const dayPass = document.getElementById("dayPass");
const flexibleDesk = document.getElementById("flexibleDesk");
const virtualOffice = document.getElementById("virtualOffice");
const conferenceRoom = document.getElementById("conferenceRoom");
const eventSpace = document.getElementById("eventSpace");
const podcastStudio = document.getElementById("podcastStudio");
const zoomCallRoom = document.getElementById("zoomCallRoom");
const colorBurstRoom = document.getElementById("colorBurstRoom");
const alapRoom = document.getElementById("alapRoom");
const alochonaRoom = document.getElementById("alochonaRoom");
// -------------------------------requiredDomOfWorkSpaceEnd-----------------------------

// ----------------------------requiredDomOfSelectedPlanStart-----------------------------
const checkedRadio = document.getElementsByName('chosen_plan');

// -------------------------------requiredDomOfChosenPlanOverview-----------------------------
// -------------------------------requiredDomOfWorkspaceOptions-----------------------------
const privateWorkspaceOptions = document.getElementsByName('privateWorkspaceOptions');
const sharedWorkspaceOptions = document.getElementsByName('sharedWorkspaceOptions');
const collaborativeWorkspaceOptions = document.getElementsByName('collaborativeWorkspaceOptions');
// -------------------------------requiredDomOfNumberOfPeople-----------------------------
const people = document.getElementsByName('people');
const zero = document.getElementsByName('zero');
const decrement = document.getElementsByName('decrement');
const increment = document.getElementsByName('increment');
// -------------------------------requiredDomOfDate-----------------------------
const date = document.getElementsByName('date');
// -------------------------------requiredDomOfcheckBoxNBackNContinueBtn-------
const chosenPlanBackBtn = document.getElementsByName('chosenPlanBackBtn');
const chosenPlanContinueBtn = document.getElementsByName('chosenPlanContinueBtn');

// ----------------------------requiredDomOfSelectedPlanEnd-----------------------------

// ----------------------------requiredDomOfPersonalDetailsStart-----------------------------
const personalDetails = document.getElementsByName('personalDetails');
const termsAndConditions = document.getElementsByName('termsAndConditions');
const personalDetailsBackBtn = document.getElementsByName('personalDetailsBackBtn');
const personalDetailsContinueBtn = document.getElementsByName('personalDetailsContinueBtn');
// ----------------------------requiredDomOfPersonalDetailsEnd-----------------------------

// ----------------------------requiredDomOfReviewPaymentDetailsStart-----------------------------
const reviewPaymentDetails = document.getElementsByName('reviewPaymentDetails');
const reviewPaymentDetailsBackBtn = document.getElementsByName('reviewPaymentDetailsBackBtn');
const submit = document.getElementsByName('submit');
// ----------------------------requiredDomOfPaymentMethodsStart----------
const payNow = document.getElementsByName('payNow');
const payOnArrival = document.getElementsByName('payOnArrival');
// ----------------------------requiredDomOfPaymentMethodsEnd----------

// ----------------------------requiredDomOfReviewPaymentDetailsEnd-----------------------------















window.onload = function () {
    // Get the current date
    const today = new Date();

    // Format the date to YYYY-MM-DD for the date input
    const formattedDate = today.toISOString().split('T')[0];

    // Set the value of the input field to the current date
    document.getElementById('date').value = formattedDate;
};