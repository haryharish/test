import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.100.247:85/login');
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('orders@benfranklin.in');
  await page.getByLabel('Email *').press('Tab');
  await page.getByLabel('Password *').fill('12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Main Menu').click();
  await page.getByText('Order Booking', { exact: true }).click();
  await page.getByRole('row', { name: 'plus-circle ORD/1155/101211' }).getByLabel('', { exact: true }).check();
  await page.getByLabel('Select Vendor').click();
  await page.getByText('Essilor India Pvt Ltd').click();
  await page.locator('.ant-picker-input').click();
  await page.getByText('21', { exact: true }).click();
  await page.getByRole('button', { name: 'Book To Vendor' }).click();
});