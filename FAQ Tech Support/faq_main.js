var HALO_terms = ["Registration", "Exam Freeze", "Find User Exam Attempt", "Delete an Exam Attempt", "Resume an Exam For User", 
"Resetting User Password", "App or Browser Related Issues", "Email Templates", "User Invalid ID Email", "Camera Permissions", "Exam Missing in Dropdown", "Pre-environment Scan",
"Password Reset Email", "First Step of Registration"];
var User_terms = ["Find User Exam Attempt", "Delete an Exam Attempt to allow Retake", "Resume an Exam For User", "Resetting User Password"]
var Pre_terms = ["App or Browser Related Issues", "Pre-environment Scan"]
var Exam_terms = ["User Invalid ID Email", "Password Reset Email",  "Camera Permissions", "Exam Missing in Dropdown", "Exam Freeze"]
var Reg_terms = ["Registration", "Face Verification", "Passport", "First Step of Registration"]
var Email_terms = ["Password Reset Email", "User Invalid ID Email"]
var NEMO_terms = ["How to enroll in a course", "How do I reset my password", "Where do I find my courses", "My course module is not being marked as “Complete”", "There is a blank window popping up when I try to open my course"]
var Enroll_terms = ["How to enroll in a course"]
var Password_terms = ["How do I reset my password"]
var Course_terms = ["Where do I find my courses", "My course module is not being marked as “Complete”", "There is a blank window popping up when I try to open my course"]


function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
  