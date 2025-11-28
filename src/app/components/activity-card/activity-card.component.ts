import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-activity-card',
  template: `
    @if (activity(); as act) {
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      >
        <div class="relative">
          <img
            class="h-48 w-full object-cover"
            [src]="act.imageUrl"
            [alt]="'Image for ' + act.title"
          />
          <button
            class="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-red-500 transition-colors duration-200"
          >
            <svg
              class="h-6 w-6"
              [class.text-red-500]="act.isFavorite"
              [class.fill-current]="act.isFavorite"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          @if (act.isFeatured) {
            <div
              class="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded"
            >
              À la une
            </div>
          }
        </div>
        <div class="p-4 flex flex-col flex-grow">
          <p class="text-sm font-semibold text-primary uppercase">
            {{ act.category }}
          </p>
          <h3 class="text-lg font-bold text-gray-900 mt-1 truncate">
            {{ act.title }}
          </h3>
          <p class="text-sm text-gray-500 mt-1 flex items-center">
            <svg
              class="h-4 w-4 mr-1 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            {{ act.location }}
          </p>
          <div class="flex items-center mt-2">
            <svg
              class="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="text-gray-800 font-bold ml-1">{{
              act.rating.toFixed(1)
            }}</span>
            <span class="text-gray-500 text-sm ml-2"
              >({{ act.reviewCount }} avis)</span
            >
          </div>
          <div class="mt-auto pt-4">
            <p class="text-lg font-extrabold text-gray-900">
              {{ act.price }} €
              <span class="text-sm font-normal text-gray-500">
                @if (act.priceType === 'person') {
                  / pers.
                } @else {
                  / groupe
                }
              </span>
            </p>
          </div>
        </div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityCardComponent {
  activity = input.required<Activity>();
}

