const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Section paddings
content = content.replace(/py-32 px-6/g, 'py-20 md:py-32 px-6');
content = content.replace(/py-32 md:py-40/g, 'py-20 md:py-40');
content = content.replace(/py-32 md:py-48/g, 'py-20 md:py-40');
content = content.replace(/py-24 px-6/g, 'py-16 md:py-24 px-6');
content = content.replace(/py-32 bg-white/g, 'py-20 md:py-32 bg-white');

// Heading sizes
content = content.replace(/md:text-4xl leading-relaxed text-3xl font-light italic/g, 'md:text-4xl leading-relaxed text-2xl font-light italic');
content = content.replace(/text-4xl tracking-tight font-serif/g, 'text-3xl md:text-4xl tracking-tight font-serif');
content = content.replace(/text-4xl md:text-6xl/g, 'text-3xl md:text-5xl lg:text-6xl');
content = content.replace(/md:text-6xl text-maroon text-4xl/g, 'md:text-5xl lg:text-6xl text-maroon text-3xl');
content = content.replace(/text-4xl tracking-\[0.2em\]/g, 'text-2xl md:text-4xl tracking-[0.2em]');

// Testimonial styling fixes (mobile size and padding)
content = content.replace(/w-\[350px\] md:w-\[450px\] flex-none bg-\[#FDFBF7\] p-12/g, 'w-[85vw] sm:w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-8 md:p-12');
content = content.replace(/font-serif text-xl text-\[#4A423C\] leading-relaxed italic mb-10/g, 'font-serif text-lg md:text-xl text-[#4A423C] leading-relaxed italic mb-6 md:mb-10');
content = content.replace(/border-t border-beige pt-6/g, 'border-t border-beige pt-4 md:pt-6');

fs.writeFileSync('src/App.tsx', content);
