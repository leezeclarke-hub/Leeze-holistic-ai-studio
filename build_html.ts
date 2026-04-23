import fs from 'fs';

const appTsx = fs.readFileSync('src/App.tsx', 'utf-8');
const indexCss = fs.readFileSync('src/index.css', 'utf-8');

let html = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leeze Holistic | Premium Holistic Coaching</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              maroon: '#7A3232',
              'cream-dark': '#F4F0E6',
              beige: '#E8E2D5',
            },
            fontFamily: {
              sans: ['Outfit', 'Helvetica Neue', 'Arial', 'sans-serif'],
              serif: ['Cormorant Garamond', 'Georgia', 'serif'],
            }
          }
        }
      }
    </script>
    <style>
      body {
          font-family: 'Outfit', sans-serif;
          background-color: #FDFBF7;
          color: #4A423C;
      }
      .font-serif {
          font-family: 'Cormorant Garamond', serif;
      }
      .text-maroon {
          color: #7A3232;
      }
      .bg-maroon {
          background-color: #7A3232;
      }
      .border-maroon {
          border-color: #7A3232;
      }
      /* Marquee Animation for Testimonials */
      .marquee-container {
          display: flex;
          width: fit-content;
          animation: marquee 50s linear infinite;
      }
      .marquee-container:hover {
          animation-play-state: paused;
      }
      @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
      }
      @keyframes gentle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
      }
      .animate-gentle-pulse {
          animation: gentle-pulse 2s infinite ease-in-out;
      }
    </style>
</head>
<body class="antialiased font-light selection:bg-maroon selection:text-white overflow-x-hidden">
`;

// Extract return ( ... ) from App.tsx
const match = appTsx.match(/return \([\s\S]*?<div className="[^"]*">([\s\S]*?)<ChatAssistant \/>/);

if (match) {
    let bodyContent = match[1];
    
    // Replace className with class
    bodyContent = bodyContent.replace(/className=/g, 'class=');
    // Replace {isMenuOpen ? ...} classes
    bodyContent = bodyContent.replace(/class=\{`([^`]+)`\}/g, 'class="$1"');
    // remove $\{isMenuOpen \? 'translate-y-0' : '-translate-y-full'\}
    bodyContent = bodyContent.replace(/\$\{isMenuOpen \? 'translate-y-0' : '-translate-y-full'\}/g, '-translate-y-full');
    
    // Fix Menu button
    bodyContent = bodyContent.replace(/\{isMenuOpen \? <X size=\{28\} \/> : <Menu size=\{28\} \/>\}/g, '<iconify-icon id="menu-icon" icon="lucide:menu" class="w-7 h-7"></iconify-icon>');
    // Fix ArrowRight
    bodyContent = bodyContent.replace(/<ArrowRight size=\{14\} \/>/g, '<iconify-icon icon="lucide:arrow-right" class="w-[14px] h-[14px]"></iconify-icon>');
    
    // remove onClick
    bodyContent = bodyContent.replace(/onClick=\{[^\}]+\}/g, '');
    
    // fix onClick={() => window.location.href='...'}
    bodyContent = bodyContent.replace(/onClick=\{[^"]+\}/g, '');
    
    // add IDs for scripts
    bodyContent = bodyContent.replace('<button class="md:hidden text-maroon relative z-50 p-2"', '<button id="menu-btn" class="md:hidden text-maroon relative z-50 p-2"');
    bodyContent = bodyContent.replace('<div class="fixed inset-0 bg-[#FDFBF7] z-40 transition-transform duration-500 pt-32 px-6 flex flex-col justify-start md:hidden -translate-y-full"', '<div id="mobile-menu" class="fixed inset-0 bg-[#FDFBF7] z-40 transition-transform duration-500 pt-32 px-6 flex flex-col justify-start md:hidden -translate-y-full"');
    
    // remove `<br className="hidden md:block"/>`
    bodyContent = bodyContent.replace(/<br class="hidden md:block"\/>/g, '<br class="hidden md:block"/>');

    html += `  <div class="antialiased font-light selection:bg-maroon selection:text-white overflow-x-hidden">`;
    html += bodyContent;
    html += `  </div>`;
}

// Add script logic
html += `
  <script>
    // Menu toggle logic
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('-translate-y-full');
                mobileMenu.classList.add('translate-y-0');
                menuIcon.setAttribute('icon', 'lucide:x');
            } else {
                mobileMenu.classList.remove('translate-y-0');
                mobileMenu.classList.add('-translate-y-full');
                menuIcon.setAttribute('icon', 'lucide:menu');
            }
        });
    }

    // Nav links should close menu
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.remove('translate-y-0');
                mobileMenu.classList.add('-translate-y-full');
                menuIcon.setAttribute('icon', 'lucide:menu');
            });
        });
    }
    
    // Logo redirect
    const logoBtn = document.querySelector('.text-maroon.uppercase.text-xl');
    if (logoBtn) {
        logoBtn.addEventListener('click', () => {
            window.location.href = 'https://linktr.ee/leeze';
        });
    }

    // Intersection Observer for scroll reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-12');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-[1200ms]', 'ease-out');
        observer.observe(el);
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log('Successfully generated index.html');
