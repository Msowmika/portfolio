// Smooth scrolling effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // const aboutLink = document.getElementById('aboutElement');
  // const about = document.getElementById('about');
  // const skillsLink = document.getElementById('skillsLink')
  // const skills = document.getElementById('skills')

  // aboutLink.onclick = function(e){
  //   e.preventDefault();
  //   if(about.style.display == 'none' || about.style.display == ''){
  //     about.style.display = 'block'
  //     aboutLink.textContent = 'About'
  //   }
  //   else{
  //     about.style.display = 'none'
  //     aboutLink.textContent = 'About'
  //   }
  // }

  function openSection(sectionId) {
    document.getElementById('mainMenu').style.display = 'none';
    
  
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'flex';
}

function backToMenu() {
 
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.getElementById('mainMenu').style.display = 'flex';
}