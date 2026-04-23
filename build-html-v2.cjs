const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Strip out React, useState, useEffect, etc.
appContent = appContent.replace(/import.*?['"];?/g, '');
appContent = appContent.replace(/export default function App\(\) \{[\s\S]*?return \(/, '');
appContent = appContent.replace(/;\n\}\n*$/, '');
appContent = appContent.replace(/<ChatAssistant \/>/, '<!-- Chat Assistant (Removed for static HTML) -->');
appContent = appContent.replace(/className=/g, 'class=');

// Fix dynamic classes for the menu
appContent = appContent.replace(/\{`fixed inset-0[^`]*`\}/g, '"fixed inset-0 bg-[#FDFBF7] z-40 transition-transform duration-500 pt-32 px-6 flex flex-col justify-start md:hidden -translate-y-full" id="mobile-menu"');
appContent = appContent.replace(/onClick=\{.*?\}\s*/g, '');

// Icons
appContent = appContent.replace(/\{isMenuOpen \? <X size=\{28\} \/> : <Menu size=\{28\} \/>\}/g, '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="feather feather-menu text-maroon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="menu-icon-dynamic"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>');

appContent = appContent.replace(/<ArrowRight size=\{14\} \/>/g, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>');

appContent = appContent.replace(/<Globe size=\{20\} \/>/g, '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>');

appContent = appContent.replace(/<Phone size=\{20\} \/>/g, '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>');

appContent = appContent.replace(/<Info size=\{20\} \/>/g, '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>');

// remove dangling closing tags
appContent = appContent.replace(/<\/?>(.*)/, '$1'); // removes the `<>` at the start
appContent = appContent.replace(/<\/>\n*$/, ''); // removes the `</>` at the end

let html = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEEZE Holistic</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Inter:wght@300;400;500;600&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #FDFBF7;
        }
        .font-serif {
            font-family: 'Bodoni Moda', serif;
        }
        .bg-maroon {
            background-color: #4A1A1A;
        }
        .text-maroon {
            color: #4A1A1A;
            fill: currentColor;
        }
        .border-maroon {
            border-color: #4A1A1A;
        }
        .bg-beige {
            background-color: #EBE5D9;
        }
        .border-beige {
            border-color: #EBE5D9;
        }
        
        .marquee-container {
            display: flex;
            width: fit-content;
            animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 16px)); }
        }
        .marquee-container:hover {
            animation-play-state: paused;
        }
        
        .opacity-0 { opacity: 0; }
        .translate-y-12 { transform: translateY(3rem); }
        .opacity-100 { opacity: 1; }
        .translate-y-0 { transform: translateY(0); }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
        .duration-\\[1200ms\\] { transition-duration: 1200ms; }
        .ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
    </style>
</head>
<body class="antialiased font-light selection:bg-[#4A1A1A] selection:text-white overflow-x-hidden">
${appContent}

<script>
    // Menu Logic
    const menuBtn = document.querySelector('button.md\\\\:hidden');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon-dynamic');
    let isMenuOpen = false;
    
    // SVG icons
    const iconMenu = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
    const iconClose = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';

    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                mobileMenu.classList.remove('-translate-y-full');
                mobileMenu.classList.add('translate-y-0');
                if(menuIcon) menuIcon.innerHTML = iconClose;
            } else {
                mobileMenu.classList.add('-translate-y-full');
                mobileMenu.classList.remove('translate-y-0');
                if(menuIcon) menuIcon.innerHTML = iconMenu;
            }
        });
        
        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('-translate-y-full');
                mobileMenu.classList.remove('translate-y-0');
                if(menuIcon) menuIcon.innerHTML = iconMenu;
            });
        });
    }

    // Reveal Animation Logic
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
</html>`;

fs.writeFileSync('index.html', html);
console.log("Converted to statick index.html successfully!");
