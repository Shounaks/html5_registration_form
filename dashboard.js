//Personal Details Fields
const full_name = document.querySelector("#full_name");
const date_of_birth = document.querySelector("#date_of_birth");
const email = document.querySelector("#email");
const mobile_number = document.querySelector("#mobile_number");
const gender = document.querySelector("#gender");
const occupation = document.querySelector("#occupation");

//Identity Details Fields
const id_type = document.querySelector("#id_type");
const id_number = document.querySelector("#id_number");
const issue_authority = document.querySelector("#issue_authority");
const issue_date = document.querySelector("#issue_date");
const issue_state = document.querySelector("#issue_state");
const expiry_date = document.querySelector("#expiry_date");

full_name.placeholder = localStorage.getItem("full_name");
date_of_birth.placeholder = localStorage.getItem("date_of_birth");
email.placeholder = localStorage.getItem("email");
mobile_number.placeholder = localStorage.getItem("mobile_number");
gender.placeholder = localStorage.getItem("gender");
occupation.placeholder = localStorage.getItem("occupation");

id_type.placeholder = localStorage.getItem("id_type");
id_number.placeholder = localStorage.getItem("id_number");
issue_authority.placeholder = localStorage.getItem("issue_authority");
issue_date.placeholder = localStorage.getItem("issue_date");
issue_state.placeholder = localStorage.getItem("issue_state");
expiry_date.placeholder =  localStorage.getItem("expiry_date");