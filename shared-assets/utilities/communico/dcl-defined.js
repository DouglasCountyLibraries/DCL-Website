/* ====================================================
 * support your local library
 * comments/questions? djarrett at dclibraries dot org
   ==================================================== */

// add a link to library card application on login form
  
// add a link to library card application on login form
/* ------------------------------------------------------------ */
$(document).ready(function() {
    function addCardLink() {
        var link = document.createElement('a');
        link.href = 'https://www.dcl.org/library-card/';
        link.textContent = 'Get a library card.';
        link.target = '_blank';
        link.classList.add('library-card-link');
        var targetElement = document.querySelector('.amnp-login-form > .am-field-password > .am-form-desc');
        if (targetElement) {
            targetElement.appendChild(link);
        }
    }
    addCardLink();
});
