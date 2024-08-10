// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        e.preventDefault(); // Prevent form submission
    }
});

// Example of loading content dynamically (e.g., blog posts)
function loadBlogPosts() {
    const posts = [
        { title: 'Post 1', content: 'Content for post 1' },
        { title: 'Post 2', content: 'Content for post 2' },
    ];
    
    const blogSection = document.getElementById('blog');
    posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogSection.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', loadBlogPosts);

// Simple image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);

// Dark mode toggle
const toggleSwitch = document.querySelector('#dark-mode-toggle');

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Scroll animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            el.classList.add('animate');
        }
    });
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy");

    const lazyLoad = function() {
        lazyImages.forEach(image => {
            if (image.getBoundingClientRect().top < window.innerHeight) {
                image.src = image.dataset.src;
                image.classList.remove("lazy");
            }
        });

        if (lazyImages.length === 0) {
            document.removeEventListener("scroll", lazyLoad);
            window.removeEventListener("resize", lazyLoad);
            window.removeEventListener("orientationChange", lazyLoad);
        }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationChange", lazyLoad);
});

// Filterable project gallery
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const projects = document.querySelectorAll('.project');

        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '↑';
backToTopBtn.id = 'back-to-top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
