
<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <!-- Ganti ke h2 langsung jika tidak mau ubah SectionTitle.vue -->
      <h2 class="text-3xl font-bold mb-4 text-grey-800">Hubungi Saya</h2>
      <!-- Atau kalau kamu ubah SectionTitle.vue, pakai ini:
      <SectionTitle title="Hubungi Saya" className="text-yellow-400" />
      -->

      <p class="text-xl text-gray-300 mb-8">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=apriliacindynatasyasitanggang@gmail.com&su=Halo%20Asyaa&body=Halo%20Aprilia%20Cindy%2C%20saya%20ingin%20menghubungi%20Anda%20melalui%20portofolio%20web%20ini."
        target="_blank"
        rel="noopener"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>

      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/Asyaa415"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>

        <a
          href="https://www.instagram.com/szaasyy?igsh=MTRvOHp6OWo3ZXcybg=="
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Instagram
        </a>
      </div>

      <p class="text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Asyaa Dibuat dengan menggunakan Vue.js
      </p>
    </div>
  </footer>
</template>
