console.log("MD NUR NABI KHAN   - Portfolio");


//Loading Animation 

window.onload = function () {
  setTimeout(() => {
    document.querySelector('.preloaders').style.display = 'none';
  }, 3000);
};



// Side Bar Animation 

function openNav() {
    document.getElementById("sidebar").style.width = "200px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

// Login Pages Function

function gg() {
alert("You're Login Successfully...");
window.location.href = 'index.html';
}

function ff() {
alert("You're Registered Successfully...");
window.location.href = 'index.html';
}


// Blinking Animation 


  let dot = document.getElementById("dot");
   visible = 1; 

  setInterval(function() {
    if (visible === 1) {
      dot.style.opacity = 0; 
     visible = 0;
    } else {
      dot.style.opacity = 1; 
      visible = 1; 
    }
  }, 1000); 




// Typing Animation 

const span = document.querySelector(".typing");
    const words = [" Front-end Web Developer....", " Figma, XD, PSD To HTML.... " ," Landing Page Developer.... ", "Responsive UI Developer....", " Small Bug Fixer....", ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];
      const displayedText = isDeleting 
        ? currentWord.substring(0, charIndex--) 
        : currentWord.substring(0, charIndex++);
      
      span.textContent = displayedText;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 5000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 1);
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    }

    typeEffect();
    
    
    
    
    
    
 // Scroll Effects 
 
 
// Hero Section 

document.getElementById("hero-btn").addEventListener("click", function() {
            document.getElementById("hero-sec").scrollIntoView({ behavior: "smooth" });
        });




//About Section 

document.getElementById("about-btn").addEventListener("click", function() {
            document.getElementById("about-sec").scrollIntoView({ behavior: "smooth" });
        });



// Skill Section 

document.getElementById("skill-btn").addEventListener("click", function() {
            document.getElementById("skill-sec").scrollIntoView({ behavior: "smooth" });
        });


// Services Section 

document.getElementById("services-btn").addEventListener("click", function() {
            document.getElementById("services-sec").scrollIntoView({ behavior: "smooth" });
        });



// Portfolio Section 

document.getElementById("portfolio-btn").addEventListener("click", function() {
            document.getElementById("portfolio-sec").scrollIntoView({ behavior: "smooth" });
        });


// Contact Section 

document.getElementById("contact-btn").addEventListener("click", function() {
            document.getElementById("contact-sec").scrollIntoView({ behavior: "smooth" });
        });



//Form Submission Button Actions

document.getElementById('lb').addEventListener('click', function() {
      setTimeout(function() {
        window.location.href = 'index.html';
        alert("Your Message Has Sent!")
      }, 1500);
    });
