// -----------------------requiredDomOfHeader-----------------------------
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");
const stepFour = document.getElementById("stepFour");
const planTypeName = document.getElementById("planTypeName");
const noOfPeople = document.getElementById("noOfPeople");
const startDate = document.getElementById("startDate");
const duration = document.getElementById("duration");
const monthlyCost = document.getElementById("monthlyCost");

// -------------------------------requiredDomOfWorkSpace-----------------------------
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

// ----------------------------requiredDomOfSelectedPlan-----------------------------
const checkedRadio = document.getElementsByName('chosen_plan');

// -------------------------------requiredDomOfWorkspaceOptions-----------------------------








window.onload = function () {
    // Get the current date
    const today = new Date();

    // Format the date to YYYY-MM-DD for the date input
    const formattedDate = today.toISOString().split('T')[0];

    // Set the value of the input field to the current date
    document.getElementById('date').value = formattedDate;
};