document.addEventListener('DOMContentLoaded', function () {
  // 📱 Sidebar Toggle Logic (for mobile)
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeMobileMenu');
  const sidebar = document.getElementById('sidebar');

  if (toggleBtn && closeBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.add('active'); // 'active' class triggers CSS animation
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  }

  // 🎓 Education Modal Logic
  const educationCards = document.querySelectorAll('.education-card');
  const modal = document.getElementById('educationModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const closeModal = document.getElementById('closeModal');

  const educationData = {
    masters: {
      title: 'Master of Computer Applications - IIT Delhi',
      content: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2">CGPA</h4>
              <p class="text-2xl font-bold text-secondary">8.7/10</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2">Duration</h4>
              <p class="text-gray-600">2018 - 2020</p>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">Key Subjects</h4>
            <div class="grid md:grid-cols-2 gap-2">
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Advanced Algorithms</span>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Database Systems</span>
              <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Software Engineering</span>
              <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
              <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Web Technologies</span>
              <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Cloud Computing</span>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">Achievements</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Dean's List for Academic Excellence</li>
              <li>Best Project Award for E-commerce Platform</li>
              <li>Teaching Assistant for Web Development Course</li>
            </ul>
          </div>
        </div>
      `
    },
    bachelors: {
      title: 'Bachelor of Computer Science - Delhi University',
      content: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2">CGPA</h4>
              <p class="text-2xl font-bold text-secondary">8.2/10</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2">Duration</h4>
              <p class="text-gray-600">2015 - 2018</p>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">Core Subjects</h4>
            <div class="grid md:grid-cols-2 gap-2">
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Data Structures</span>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Object Oriented Programming</span>
              <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Computer Networks</span>
              <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Operating Systems</span>
              <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Database Management</span>
              <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Computer Graphics</span>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">Activities</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>President of Computer Science Society</li>
              <li>Organized Annual Tech Fest</li>
              <li>Participated in Inter-College Programming Contest</li>
            </ul>
          </div>
        </div>
      `
    }
  };

  educationCards.forEach(card => {
    card.addEventListener('click', function () {
      const type = this.dataset.education;
      const data = educationData[type];
      modalTitle.textContent = data.title;
      modalContent.innerHTML = data.content;
      modal.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // 📬 Contact Form Logic
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      alert(`Thank you ${name}! Your message has been sent. We'll get back to you at ${email}.`);
      contactForm.reset();
    });
  }
});
