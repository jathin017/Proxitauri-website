/**
 * configurator.js
 * Handles chip selection and live price updates.
 */

(function () {
  const BASE_PRICE = 890;
  const state = {};

  // Initialize state from default active chips
  document.querySelectorAll('.chip.active').forEach(chip => {
    const group = chip.dataset.group;
    state[group] = {
      val: chip.dataset.val,
      price: parseInt(chip.dataset.price, 10),
    };
  });

  // Chip click handler
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const group = chip.dataset.group;

      // Deactivate siblings
      document.querySelectorAll(`[data-group="${group}"]`).forEach(c => {
        c.classList.remove('active');
      });

      // Activate clicked chip
      chip.classList.add('active');

      // Update state
      state[group] = {
        val: chip.dataset.val,
        price: parseInt(chip.dataset.price, 10),
      };

      update();
    });
  });

  function update() {
    let total = BASE_PRICE;

    for (const key in state) {
      total += state[key].price;

      const el = document.getElementById('s-' + key);
      if (el) el.textContent = state[key].val;
    }

    const priceEl = document.getElementById('price');
    if (priceEl) {
      // priceEl.textContent = '$' + total.toLocaleString();
      priceEl.textContent = "TBD"
    }
  }

  // Run once on load
  update();
})();
