

/*const toggler = () =>{
    const darkToggle = document.querySelector('.toggle-dark');
    darkToggle.addEventListener('click', (event) =>{
        
        document.documentElement.classList.toggle('dark');})
        console.log("click");
}*/
tailwind.config ={
content: ["./dist/**/*.{html,js}"],
darkMode : 'class',
theme: {
  extend: {
    colors: {
      'body': '#000814',
      'bodyDark': '#EAE1D6',
      'texts':'#ca8a04',
      
      'cover-dark' : '#3C3635',
      'cover' : '#221038'
    },
    fontFamily:{
    'poppins':["'Poppins'",'sans-serif']
  }
},
}
}
function toggler(){
    const darkToggle = document.querySelector('.toggle-dark');
    document.documentElement.classList.toggle('dark');
    
}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("#main,#about,#projects,#contact");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("animate-ping");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("animate-ping");
    }
  });
}
