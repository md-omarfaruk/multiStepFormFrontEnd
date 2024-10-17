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

// ----------------------------requiredDomOfSelectedOfficeOrRoomOverviewStart-----------------------------
const checkedRadio = document.getElementsByName('chosen_plan');
const selectedOfficeOrRoom = document.getElementById('selectedOfficeOrRoom');
const selectedPlanTime = document.getElementById('selectedPlanTime');
const selectedPlanOverview = document.getElementById('selectedPlanOverview');
// -------------------------------requiredDomOfWorkspaceOptions-----------------------------
const privateWorkspaceOptions = document.getElementById('privateWorkspaceOptions');
const sharedWorkspaceOptions = document.getElementById('sharedWorkspaceOptions');
const collaborativeWorkspaceOptions = document.getElementById('collaborativeWorkspaceOptions');
// -------------------------------requiredDomOfNumberOfPeople-----------------------------
const people = document.getElementById('people');
const zero = document.getElementById('zero');
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















window.onload = function () {
    // Get the current date
    const today = new Date();

    // Format the date to YYYY-MM-DD for the date input
    const formattedDate = today.toISOString().split('T')[0];

    // Set the value of the input field to the current date
    document.getElementById('date').value = formattedDate;
};