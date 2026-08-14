/**
 * Angel Lopez — Portfolio Client Script
 * One-click clipboard for Email, form dispatch handling & toast alerts
 */

(function () {
  'use strict';

  // --- 1. Toast Notification Helper ---
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // --- 2. Copy Email Button ---
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = btnCopyEmail.getAttribute('data-email') || 'gabby11.al@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied: ' + email);
        const originalText = btnCopyEmail.innerHTML;
        btnCopyEmail.innerHTML = '<span>✓ Copied!</span>';
        setTimeout(() => {
          btnCopyEmail.innerHTML = originalText;
        }, 2200);
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  // --- 3. Contact Form Submission ---
  const contactForm = document.getElementById('contactForm');
  const btnSubmitForm = document.getElementById('btnSubmitForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value.trim() || 'Friend';

      if (btnSubmitForm) {
        btnSubmitForm.disabled = true;
        btnSubmitForm.innerHTML = '<span>Message Dispatched ✓</span>';
      }

      showToast(`Thank you, ${name}! Your message has been received.`);
      contactForm.reset();

      setTimeout(() => {
        if (btnSubmitForm) {
          btnSubmitForm.disabled = false;
          btnSubmitForm.innerHTML = '<span>Send Message</span>';
        }
      }, 4000);
    });
  }

})();
