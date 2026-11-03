import { Injectable } from '@nestjs/common';

// Українська транслітерація (спрощена, за мотивами КМУ 2010)
const TRANSLIT: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', є: 'ie', ж: 'zh', з: 'z',
  и: 'y', і: 'i', ї: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p',
  р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh',
  щ: 'shch', ь: '', ю: 'iu', я: 'ia', ы: 'y', э: 'e', ё: 'io', ъ: '',
};

@Injectable()
export class SlugService {
  generateSlug(title: string): string {
    const latin = [...title.toLowerCase()]
      .map((char) => TRANSLIT[char] ?? char)
      .join('');

    const slug = latin
      .replace(/[^a-z0-9]+/g, '-') // усе, крім латиниці й цифр, стає дефісом
      .replace(/^-+|-+$/g, ''); // прибираємо дефіси по краях

    return slug === '' ? 'item' : slug;
  }
}
