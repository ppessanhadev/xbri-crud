export class Utils {
  public static capitalize(word?: string) {
    if (!word) return '';
    return word[0].toUpperCase() + word.slice(1);
  }

  public static labelize(word?: string) {
    if (!word) return '';
    return this.capitalize(word.replace('-', ' ').toLowerCase());
  }
}
