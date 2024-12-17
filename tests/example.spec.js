// @ts-check
const { test, expect} = require('@playwright/test');

test('get started link', async ({ page }) => {
  await page.goto('https://dex.pokemonshowdown.com/');

  const pokedex = page.locator('input[placeholder="Search Pokémon, moves, abilities, items, types, or more"]');

  await pokedex.click();
  await pokedex.fill('pikachu');
  const searchButton = page.locator('button.button:has-text("Pokédex Search")');
  await searchButton.click()
  await expect(page).toHaveURL('a[data-entry="pokemon|Pikachu"]');
  const linkToPikachu = page.locator('a[data-entry="pokemon|Pikachu"]');
  await linkToPikachu.click();
  await expect(page).toHaveURL('https://dex.pokemonshowdown.com/pokemon/pikachu');
});