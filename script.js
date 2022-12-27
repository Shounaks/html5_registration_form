let isCorrect_full_name = false;
let isCorrect_email = false;
let isCorrect_mobile_number = false;
let isCorrect_gender = false;
let isCorrect_occupation = false;

let isCorrect_id_type = false;
let isCorrect_issue_authority = false;
let isCorrect_issue_state = false;

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

const submit_button = document.querySelector("#submitRegisterationButton");

function saveDataIntoLocalStorage() {
    console.log("Saving Data to Local Storage:")
    //Name
    console.log("Name : " + full_name.value)
    localStorage.setItem("full_name", full_name.value)

    //Date Of Birth
    console.log("Date Of Birth : " + date_of_birth.value)
    localStorage.setItem("date_of_birth", date_of_birth.value)

    //Email
    console.log("Email : " + email.value)
    localStorage.setItem("email", email.value)

    //MobileNumber
    console.log("Mobile Number : " + mobile_number.value)
    localStorage.setItem("mobile_number", mobile_number.value)

    //Gender
    console.log("Gender : " + gender.value)
    localStorage.setItem("gender", gender.value)

    //Occupation
    console.log("Occupation : " + occupation.value)
    localStorage.setItem("occupation", occupation.value)

    //Id Type
    console.log("Id Type : " + id_type.value)
    localStorage.setItem("id_type", id_type.value)

    //Id Number
    console.log("Id Number : " + id_number.value)
    localStorage.setItem("id_number", id_number.value)

    //Issue Authority
    console.log("Issue Authority : " + issue_authority.value)
    localStorage.setItem("issue_authority", issue_authority.value)

    //Issue Date
    console.log("Issue Date : " + issue_date.value)
    localStorage.setItem("issue_date", issue_date.value)

    //Issue State
    console.log("Issue State : " + issue_state.value)
    localStorage.setItem("issue_state", issue_state.value)

    //Expiry Date
    console.log("Expiry Date : " + expiry_date.value)
    localStorage.setItem("expiry_date", expiry_date.value)

    window.location.href = "dashboard.html"
}

full_name.addEventListener('keyup', () => {
    var name_regex = new RegExp("^([a-zA-Z ]{1,50})$");
    isCorrect_full_name = name_regex.test(full_name.value);
    document.querySelector("#full_name_error").hidden = isCorrect_full_name;
});

// Interesting article on email validation: https://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html
email.addEventListener('keyup', () => {
    var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    isCorrect_email = email_regex.test(email.value);
    document.querySelector("#email_error").hidden = isCorrect_email;
});

mobile_number.addEventListener('keyup', () => {
    var mobile_number_regex = new RegExp("^([0-9]{10})$");
    isCorrect_mobile_number = mobile_number_regex.test(mobile_number.value);
    document.querySelector("#mobile_number_error").hidden = isCorrect_mobile_number;
});

gender.addEventListener('keyup', () => {
    var gender_number_regex = new RegExp("^(male|female)$");
    isCorrect_gender = gender_number_regex.test(gender.value);
    document.querySelector("#gender_error").hidden = isCorrect_gender;
});

occupation.addEventListener('keyup', () => {
    var occupation_regex = new RegExp("^([a-zA-Z0-9 ]{0,50})$");
    isCorrect_occupation = occupation_regex.test(occupation.value);
    document.querySelector("#occupation_error").hidden = isCorrect_occupation;
});

id_type.addEventListener('keyup', () => {
    var id_type_regex = new RegExp("^([A-Z]{0,10})$");
    isCorrect_id_type = id_type_regex.test(id_type.value);
    document.querySelector("#id_type_error").hidden = isCorrect_id_type;
});

issue_authority.addEventListener('keyup', () => {
    var issue_authority_regex = new RegExp("^([a-zA-Z ]{3,50})$");
    isCorrect_issue_authority = issue_authority_regex.test(issue_authority.value);
    document.querySelector("#issue_authority_error").hidden = isCorrect_issue_authority;
});

issue_state.addEventListener('keyup', () => {
    var issue_state_regex = new RegExp("^([a-zA-Z ]{3,50})$");
    isCorrect_issue_state = issue_state_regex.test(issue_state.value);
    document.querySelector("#issue_state_error").hidden = isCorrect_issue_state;
});

//actually i shouldnt do setInterval() since a truely reactive system will propogate events once the 
//state of any Signal/Global Data is changed to see if any component is going to get affected
//but since i didnt make a state system this is okay i guess.
setInterval(() => {
    submit_button.disabled = !(isCorrect_full_name && isCorrect_email && isCorrect_mobile_number && isCorrect_gender && isCorrect_occupation && isCorrect_id_type && isCorrect_issue_authority && isCorrect_issue_state)
}, 200);

// setInterval(()=>{
//     console.log(!(isCorrect_full_name && isCorrect_email && isCorrect_mobile_number && isCorrect_gender && isCorrect_occupation && isCorrect_id_type && isCorrect_issue_authority && isCorrect_issue_state))
// },1000);