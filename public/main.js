// /*===== SCROLL SECTIONS ACTIVE LINK =====*/
// const sections = document.querySelectorAll('section[id]');
// const scrollActive = () => {
//   const scrollY = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute('id'),
//       sectionClass = document.querySelector(
//         '.navbar__list a[href *=' + sectionId + ']'
//       );
//     if (sectionClass) {
//       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//         sectionClass.classList.add('activeNav');
//       } else {
//         sectionClass.classList.remove('activeNav');
//       }
//     }
//   });
// };

// window.addEventListener('scroll', scrollActive);
