import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-accent text-white">
      <div class="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              À propos
            </h3>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >Qui sommes-nous ?</a
                >
              </li>
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >Presse</a
                >
              </li>
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >Nous rejoindre</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              Aide
            </h3>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >FAQ</a
                >
              </li>
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >Contactez-nous</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              Légal
            </h3>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >CGV</a
                >
              </li>
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >Mentions légales</a
                >
              </li>
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >Confidentialité</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              Professionnels
            </h3>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >Devenir partenaire</a
                >
              </li>
              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white"
                  >Espace Pro</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mt-8 border-t border-accent-light pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p class="text-base text-gray-400 md:order-1">
            &copy; 2024 Yallakef. Tous droits réservés.
          </p>
          <div class="flex space-x-6 md:order-2 mt-4 md:mt-0">
            <!-- Social media icons would go here -->
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}

