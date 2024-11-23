// Star Rating
const stars = document.querySelectorAll('.star-rating .star');

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    resetStars();
    highlightStars(star);
  });

  star.addEventListener('click', () => {
    setRating(star);
  });

  star.addEventListener('mouseout', resetStars);
});

function highlightStars(star) {
  const value = parseInt(star.dataset.value, 10); // Ensure dataset value is parsed as integer
  for (let i = 0; i < value; i++) {
    stars[i].classList.add('active');
  }
}

function resetStars() {
  stars.forEach(star => star.classList.remove('active'));
}

function setRating(star) {
  const rating = parseInt(star.dataset.value, 10); // Ensure dataset value is parsed as integer
  // Optionally update rating display
  // ratingValue.textContent = `Your rating: ${rating}`;
  stars.forEach(star => star.classList.remove('selected'));
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add('selected');
  }
}

// Navbar Dropdown Hover
$(document).ready(function () {
  $('.navbar .dropdown').hover(
    function () {
      $(this).find('.dropdown-menu').stop(true, true).fadeIn(300);
    },
    function () {
      $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
    }
  );
});

// Reviews Carousel with Slick.js
$(document).ready(function () {
  // Reviews Slider
  $(".Reviews").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For devices with width ≤ 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For devices with width ≤ 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });



  $(".youtube_slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
    ],
    customPaging: function () {
      // Return a plain dot for each slide
      return `
      <li class="custom-dot"></li>
      `;
    },
  });
  

  // Viewer Slider
  $(".viewer").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For devices with width ≤ 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For devices with width ≤ 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


// Tab Navigation
function showTabContent(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active class from all tab links
  const tabs = document.querySelectorAll('.pagination li');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Show the clicked tab content
  const activeTab = document.getElementById(tabName);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Set the clicked tab as active
  const activeTabLink = document.querySelector(`.pagination li a[href='#${tabName}']`);
  if (activeTabLink) {
    activeTabLink.parentElement.classList.add('active');
  }
}

// Smooth Scroll
document.querySelector('.scrollbar a').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Scroll the body to a specific position
  window.scrollTo({
    top: 1000, // Adjust this value for how far you want to scroll
    behavior: 'smooth' // Smooth scrolling effect
  });
});



document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior

    const text = this.closest('.faq-bx').querySelector('.faq-text'); // Find the text within the same box
    if (text) {
      text.classList.toggle('expanded'); // Toggle the 'expanded' class

      // Change the button content
      this.innerHTML = text.classList.contains('expanded')
        ? 'Read Less <img src="assets/img/right-arrow.svg" alt="right-arrow">'
        : 'Read More <img src="assets/img/right-arrow.svg" alt="right-arrow">';
    }
  });
});




document.addEventListener("DOMContentLoaded", function () {
  // Select all cards
  const cards = document.querySelectorAll(".instagram-card");
  const delPrice = document.querySelector(".del-price");
  const regPrice = document.querySelector(".regular-price");
  const discountBoxes = document.querySelectorAll("#pricing-bx .discount");

  // Define pricing and discount details for each card
  const pricingData = {
      default: {
          delPrice: "$14.99",
          regPrice: "$9.99",
          discountBoxValues: [
              { heading: "100", body: "50% Off" },
              { heading: "200", body: "40% Off" },
              { heading: "300", body: "30% Off" },
              { heading: "400", body: "20% Off" },
              { heading: "500", body: "10% Off" },
              { heading: "600", body: "5% Off" }
          ]
      },
      Premium: {
          delPrice: "$19.99",
          regPrice: "$15.99",
          discountBoxValues: [
              { heading: "150", body: "25% Off" },
              { heading: "250", body: "20% Off" },
              { heading: "350", body: "15% Off" },
              { heading: "450", body: "10% Off" },
              { heading: "550", body: "5% Off" },
              { heading: "650", body: "2% Off" }
          ]
      }
  };

  // Add click event listener to each card
  cards.forEach(card => {
      card.addEventListener("click", function () {
          // Get the ID of the clicked card
          const cardId = card.id || "default";

          // Update price values
          const priceData = pricingData[cardId] || pricingData.default;
          delPrice.textContent = priceData.delPrice;
          regPrice.textContent = priceData.regPrice;

          // Update all discount boxes with the corresponding values
          discountBoxes.forEach((box, index) => {
              const boxData = priceData.discountBoxValues[index] || { heading: "0", body: "No Discount" };
              box.querySelector(".pricing-heading").textContent = boxData.heading;
              box.querySelector(".pricing-body").textContent = boxData.body;
          });

          // Highlight the active card
          cards.forEach(c => c.classList.remove("active")); // Remove active class from all cards
          card.classList.add("active"); // Add active class to clicked card
      });
  });
});






document.addEventListener('DOMContentLoaded', function () {
  // Function to handle clicks on .viewr-discount items
  function handleItemClick(e) {
      const item = e.target.closest('.viewr-discount');
      if (item) {
          // Fetch values from the clicked item
          const saveText = item.querySelector('.view-heading').textContent.trim();
          const viewBody = item.querySelector('.view-body').textContent.trim();
          const delPrice = item.querySelector('.del-price-insta').textContent.trim();
          const salePrice = item.querySelector('.sale-price span').textContent.trim();

          // Update values in the #pricing-bx section
          document.querySelectorAll('#pricing-bx .discount').forEach((discount) => {
              discount.querySelector('.pricing-heading').textContent = viewBody;
              discount.querySelector('.pricing-body').textContent = saveText;
          });

          // Update values in the .add_cart section
          const addCart = document.querySelector('.add_cart');
          addCart.querySelector('.del-price').textContent = delPrice;
          addCart.querySelector('.regular-price').textContent = salePrice;
          addCart.querySelector('p').innerHTML = `
              <img src="assets/img/card-checklist.png" alt="card-checklist" class="img-fluid"> 
              You saved ${parseFloat(delPrice.slice(1)) - parseFloat(salePrice.slice(1))}€
          `;
      }
  }

  // Attach event listener to the viewer container
  const viewer = document.querySelector('.viewer');
  if (viewer) {
      viewer.addEventListener('click', handleItemClick);
  }

  // Reapply event listener after each slide change
  const slider = document.querySelector('.slider'); // Replace with the actual slider selector
  if (slider) {
      slider.addEventListener('slid.bs.carousel', function () {
          // Ensure event listeners are applied to the new content
          viewer.removeEventListener('click', handleItemClick);
          viewer.addEventListener('click', handleItemClick);
      });
  }
});




// tracker number form
function trackOrder() {
  // Get the values of the email and tracker number fields
  const email = document.getElementById('email').value;
  const trackerNumber = document.getElementById('number').value;

  // Check if both fields are filled
  if (email && trackerNumber) {
    // Display the email and tracker number in an alert
    alert(`Email: ${email}\nTracker Number: ${trackerNumber}`);
  } else {
    // Show an error message if fields are empty
    alert('Please fill out both Email and Tracker Number fields!');
  }
}



function submitContactForm() {
  // Retrieve form values
  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;
  const reason = document.getElementById('reason').value;
  const orderNumber = document.getElementById('orderNumber').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (firstName && email && reason && message) {
    alert(`
      First Name: ${firstName}
      Email: ${email}
      Reason: ${reason}
      Order Number: ${orderNumber || 'N/A'}
      Message: ${message}
    `);
  } else {
    alert('Please fill out all required fields.');
  }
}


// Blog Data (Replace with actual dynamic data if available)
const blogs = [
  { id: 1, image: 'assets/img/b1.svg', category: 'Instagram Marketing', title: 'A Guide To How The Youtube Algorithm Works', description: 'Instagram is the world’s leading social media app, with over 547 million downloads in 2022 alone. Although the social network has a web version.', publisherImg: 'assets/img/authers.svg', publisherName: 'Jane Doe', publisherRole: 'Tech Writer' },
  { id: 2, image: 'assets/img/b2.svg', category: 'Instagram Marketing', title: 'A Guide To How The Youtube Algorithm Works', description: 'Instagram is the world’s leading social media app, with over 547 million downloads in 2022 alone. Although the social network has a web version.', publisherImg: 'assets/img/authers.svg', publisherName: 'John Smith', publisherRole: 'Health Blogger' },
  { id: 3, image: 'assets/img/b3.svg', category: 'Instagram Marketing', title: 'A Guide To How The Youtube Algorithm Works', description: 'Instagram is the world’s leading social media app, with over 547 million downloads in 2022 alone. Although the social network has a web version.', publisherImg: 'assets/img/authers.svg', publisherName: 'Emma Brown', publisherRole: 'Entrepreneur' },
  { id: 4, image: 'assets/img/b4.svg', category: 'Instagram Marketing', title: 'A Guide To How The Youtube Algorithm Works', description: 'Instagram is the world’s leading social media app, with over 547 million downloads in 2022 alone. Although the social network has a web version.', publisherImg: 'assets/img/authers.svg', publisherName: 'Sophia White', publisherRole: 'Educator' },
  { id: 5, image: 'assets/img/b5.svg', category: 'Instagram Marketing', title: 'A Guide To How The Youtube Algorithm Works', description: 'Instagram is the world’s leading social media app, with over 547 million downloads in 2022 alone. Although the social network has a web version.', publisherImg: 'assets/img/authers.svg', publisherName: 'Liam Green', publisherRole: 'Finance Expert' },
  { id: 6, image: 'assets/img/b6.svg', category: 'Instagram Marketing', title: 'A Guide To How The Youtube Algorithm Works', description: 'Instagram is the world’s leading social media app, with over 547 million downloads in 2022 alone. Although the social network has a web version.', publisherImg: 'assets/img/authers.svg', publisherName: 'Olivia Grey', publisherRole: 'Travel Blogger' },
  { id: 7, image: 'assets/img/b6.svg', category: 'Instagram Marketing', title: 'A Guide To How The Youtube Algorithm Works', description: 'Instagram is the world’s leading social media app, with over 547 million downloads in 2022 alone. Although the social network has a web version.', publisherImg: 'assets/img/authers.svg', publisherName: 'Noah Brown', publisherRole: 'Lifestyle Enthusiast' },
  { id: 8, image: 'assets/img/b6.svg', category: 'Instagram Marketing', title: 'A Guide To How The Youtube Algorithm Works', description: 'Instagram is the world’s leading social media app, with over 547 million downloads in 2022 alone. Although the social network has a web version.', publisherImg: 'assets/img/authers.svg', publisherName: 'Ethan Black', publisherRole: 'Astrophysicist' },
  // Add more blogs as needed
];

const blogsPerPage = 6;
let currentPage = 1;

// Function to Render Blogs
function renderBlogs(page) {
  const blogGrid = document.getElementById('blog-grid');
  blogGrid.innerHTML = '';

  // Calculate Start and End Index
  const start = (page - 1) * blogsPerPage;
  const end = start + blogsPerPage;
  const pageBlogs = blogs.slice(start, end);

  // Populate Blogs
  pageBlogs.forEach((blog) => {
    blogGrid.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${blog.image}" class="card-img-top" alt="${blog.title}">
          <div class="card-body">
            <span class="badge text-bg-primary mb-2">${blog.category}</span>
            <h5 class="card-title">${blog.title}</h5>
            <p class="card-text">${blog.description}</p>
          </div>
          <div class="cs-puglisher d-flex align-items-center">
            <img src="${blog.publisherImg}" alt="${blog.publisherName}" class="rounded-circle me-2" width="40" height="40">
            <div>
              <strong>${blog.publisherName}</strong>
              <p class="mb-0 text-muted">${blog.publisherRole}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

// Function to Render Pagination
function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <li class="page-item ${i === currentPage ? 'active' : ''}">
        <button class="page-link" onclick="changePage(${i})">${i}</button>
      </li>
    `;
  }
}

// Function to Change Page
function changePage(page) {
  currentPage = page;
  renderBlogs(page);
  renderPagination();
}

// Initial Render
renderBlogs(currentPage);
renderPagination();



document.getElementById("instagramUrlForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission
  const urlInput = document.getElementById("instagramPostUrl").value.trim();
  
  if (urlInput === "" || !urlInput.startsWith("https://www.instagram.com/p/")) {
    alert("Please enter a valid Instagram post URL.");
  } else {
    alert("Form submitted successfully!");
    // Proceed with further logic here
  }
});

