import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CategoryFilterComponent } from '../../components/category-filter/category-filter.component';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CategoryFilterComponent, ActivityCardComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header></app-header>

      <main class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <!-- Breadcrumbs -->
        <nav class="text-sm mb-4 text-gray-500" aria-label="Breadcrumb">
          <ol class="list-none p-0 inline-flex">
            <li class="flex items-center">
              <a href="#" class="hover:underline">Accueil</a>
            </li>
            <li class="flex items-center">
              <svg
                class="h-5 w-auto text-gray-400 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="font-medium text-gray-700">Activités</span>
            </li>
          </ol>
        </nav>

        <!-- Main Title -->
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Activités et loisirs : + de 10 000 activités partout en France
        </h1>

        <!-- Category Filters -->
        <app-category-filter></app-category-filter>

        <!-- Activities Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
        >
          @for (activity of activities(); track activity.title) {
            <app-activity-card [activity]="activity"></app-activity-card>
          }
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button
            (click)="loadMore()"
            class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Voir plus
          </button>
        </div>

        <!-- SEO Text Block -->
        <section class="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Yallakef, le spécialiste de la réservation d'activités
          </h2>
          <div class="space-y-4 text-gray-600">
            <p>
              Découvrez des milliers d'activités et de loisirs partout en France
              avec Yallakef ! Que vous cherchiez une idée de sortie en famille,
              une activité pour un enterrement de vie de célibataire (EVG/EVJF),
              un team building pour votre entreprise ou simplement un cadeau
              original, nous avons ce qu'il vous faut.
            </p>
            <p>
              Du saut en parachute à l'atelier de cuisine, en passant par
              l'escape game et les parcs d'attractions, réservez en quelques
              clics des expériences inoubliables. Notre sélection rigoureuse
              vous garantit des prestations de qualité auprès de nos partenaires
              certifiés. N'attendez plus, l'aventure vous appelle !
            </p>
          </div>
        </section>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly activities = signal<Activity[]>([
    {
      imageUrl: 'https://picsum.photos/400/300?random=1',
      isFavorite: false,
      isFeatured: true,
      category: 'Simulateur de Vol',
      title: 'Simulation de Vol en Avion de Chasse',
      location: 'Paris 13ème',
      rating: 4.9,
      reviewCount: 138,
      price: 99,
      priceType: 'person',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=2',
      isFavorite: true,
      isFeatured: false,
      category: 'Atelier Cuisine',
      title: 'Cours de Pâtisserie Macarons',
      location: 'Lyon 2ème',
      rating: 4.8,
      reviewCount: 205,
      price: 75,
      priceType: 'person',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=3',
      isFavorite: false,
      isFeatured: false,
      category: 'Escape Game',
      title: 'Le Trésor des Pirates',
      location: 'Marseille',
      rating: 4.7,
      reviewCount: 312,
      price: 120,
      priceType: 'group',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=4',
      isFavorite: false,
      isFeatured: true,
      category: "Parc d'attractions",
      title: 'Journée à AventureLand',
      location: 'Magny-en-Vexin',
      rating: 4.5,
      reviewCount: 1024,
      price: 25,
      priceType: 'person',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=5',
      isFavorite: false,
      isFeatured: false,
      category: 'Réalité Virtuelle',
      title: 'Expérience VR Multijoueur',
      location: 'Bordeaux',
      rating: 4.9,
      reviewCount: 98,
      price: 45,
      priceType: 'person',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=6',
      isFavorite: true,
      isFeatured: false,
      category: 'Dégustation',
      title: 'Dégustation de Vins et Fromages',
      location: 'Toulouse',
      rating: 5.0,
      reviewCount: 76,
      price: 60,
      priceType: 'person',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=7',
      isFavorite: false,
      isFeatured: false,
      category: 'Saut en Parachute',
      title: 'Saut en Tandem au-dessus des Falaises',
      location: 'Étretat',
      rating: 4.9,
      reviewCount: 450,
      price: 280,
      priceType: 'person',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=8',
      isFavorite: false,
      isFeatured: false,
      category: 'Spa et Bien-être',
      title: 'Massage Relaxant et Accès au Spa',
      location: 'Nice',
      rating: 4.8,
      reviewCount: 112,
      price: 110,
      priceType: 'person',
    },
  ]);

  loadMore() {
    const currentActivities = this.activities();
    const newActivities = [
      ...currentActivities.slice(4, 8).map((a, i) => ({
        ...a,
        imageUrl: `https://picsum.photos/400/300?random=${currentActivities.length + i + 1}`,
      })),
    ];
    this.activities.update((activities) => [...activities, ...newActivities]);
  }
}

