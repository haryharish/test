import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {
  test.slow()
  await page.goto('http://192.168.100.247:85/login');
  await page.getByLabel('Email *').fill('orders@benfranklin.in');
  await page.getByLabel('Password *').fill('12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(3000)
  await page.locator("//span[normalize-space()='Main Menu']").click()
  await page.locator("//span[normalize-space()='Order Booking']").click()
  await page.waitForTimeout(2000)
  await page.locator("//body[1]/div[1]/div[2]/div[1]/main[1]/section[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[1]/label[1]/span[1]/input[1]").click()
  await page.locator('#external-fitting-tab').click()
  await page.waitForTimeout(5000)



});