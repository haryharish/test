import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.100.247:85/login');
  await page.getByLabel('Email *').fill('orders@benfranklin.in');
  await page.getByLabel('Password *').fill('12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('menuitem', { name: 'layout Main Menu' }).click();
  await page.getByText('Order Booking', { exact: true }).click();
  await page.getByRole('row', { name: 'plus-circle ORD/1035/105861' }).getByLabel('', { exact: true }).check();
});