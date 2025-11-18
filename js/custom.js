// Faq 
document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', function (e) {
        const groupHeader = e.target.closest('.group-header')
        console.log(groupHeader);

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.group-body');
        const icon = groupHeader.querySelector('i');


        // Toggle
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
        
        // Toggle visibility of body
        groupBody.classList.toggle('open');
        
        // close other faq body
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach(function (res) {
            if (res !== group) {
                const otherGroupBody = res.querySelector('.group-body');
                const otherIcon = res.querySelector('.group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        })
    })
});



// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))
})