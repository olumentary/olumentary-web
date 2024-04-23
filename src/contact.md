---
layout: default
title: 'Contact'
---

<section class="flex justify-center py-12 px-6">
  <div class="w-full max-w-xl">
    <form action="https://formspree.io/f/xrgwynop" name="contact" method="POST">
      <div class="grid grid-cols-1 gap-6">
        <div>
          <h2 class="text-3xl font-bold text-indigo-700 mb-2">Contact olumentary</h2>
          <p class="text-lg text-gray-700">We'll be in touch with you soon!</p>
        </div>
        <label class="block mb-4">
          <span class="text-gray-700">Email</span>
          <input type="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
        </label>
        <label class="block mb-4">
          <span class="text-gray-700">Message</span>
          <textarea name="message" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
        </label>
        <div class="flex items-center justify-between">
          <button type="submit" class="py-2 px-4 bg-indigo-600 text-white rounded shadow font-bold hover:bg-indigo-800">Send</button>
        </div>
      </div>
    </form>
  </div>
</section>
