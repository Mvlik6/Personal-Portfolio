

/*const toggler = () =>{
    const darkToggle = document.querySelector('.toggle-dark');
    darkToggle.addEventListener('click', (event) =>{
        
        document.documentElement.classList.toggle('dark');})
        console.log("click");
}*/
tailwind.config ={
content: ["./**/*.{html,js}"],
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
