import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Category {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-category-filter',
  template: `
    <div class="relative">
      <div class="flex space-x-3 overflow-x-auto pb-4 -mb-4 no-scrollbar">
        @for (category of categories(); track category.name) {
          <button
            (click)="selectCategory(category.name)"
            [class]="
              'flex-shrink-0 flex flex-col items-center justify-center space-y-2 w-24 h-24 p-2 rounded-lg border-2 transition-all duration-200 ' +
              (selectedCategory() === category.name
                ? 'bg-emerald-50 border-emerald-500 shadow-md'
                : 'bg-white border-gray-200 hover:border-emerald-300 hover:shadow-sm')
            "
          >
            <div class="w-8 h-8 text-gray-600" [innerHTML]="category.icon"></div>
            <span class="text-xs font-semibold text-center text-gray-700">{{
              category.name
            }}</span>
          </button>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFilterComponent {
  readonly categories = signal<Category[]>([
    {
      name: 'Enfant',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" /></svg>`,
    },
    {
      name: 'Adulte',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`,
    },
    {
      name: 'EVG / EVJF',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H9.375A2.625 2.625 0 1012 4.875z" /></svg>`,
    },
    {
      name: 'Team Building',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-.059 1.137-.086 1.719-.086H12c.582 0 1.148.027 1.719.086m-7.5 2.962a3 3 0 014.682 2.72 8.986 8.986 0 013.741.479m-9.865-5.82aA2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v3.75c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 01-1.125-1.125v-3.75a2.25 2.25 0 012.25-2.25H18M3.75 12.75h.008v.008H3.75v-.008z" /></svg>`,
    },
    {
      name: 'À la maison',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></svg>`,
    },
    {
      name: 'Multi-activités',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>`,
    },
    {
      name: 'Aquatique',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 00-5.84-2.56m0 0a12.022 12.022 0 01-5.84 2.56m5.84-2.56V4.5A2.25 2.25 0 009.75 2.25L7.5 7.5m0 0l2.25 2.25M7.5 7.5l-2.25 2.25m9 0l2.25 2.25M16.5 7.5l-2.25 2.25" /></svg>`,
    },
    {
      name: 'Aérien',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>`,
    },
  ]);

  readonly selectedCategory = signal<string>('Enfant');

  selectCategory(categoryName: string) {
    this.selectedCategory.set(categoryName);
  }
}

