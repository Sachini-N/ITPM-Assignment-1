// @ts-check
import { test, expect } from '@playwright/test';


  test('Pos_Fun_0001 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama midhulee innee.', { delay: 100 });

    
    await expect(page.getByText('මම මිදුලේ ඉන්නේ.')).toBeVisible({ timeout: 10000 });
  });

    test('Pos_Fun_0002 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('karuNaakaralaa mata podi udhavvak karanna puLuvandha?', { delay: 100 });

    
    await expect(page.getByText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?')).toBeVisible({ timeout: 10000 });
  });

  test('Pos_Fun_0003 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('oyaata baya hithenavaadha?', { delay: 100 });

    
    await expect(page.getByText('ඔයාට බය හිතෙනවාද?')).toBeVisible({ timeout: 10000 });
  });

  

  test('Pos_Fun_0004 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mata eeka karanna baee.', { delay: 100 });

    
    await expect(page.getByText('මට ඒක කරන්න බෑ.')).toBeVisible({ timeout: 10000 });
  });




  test('Pos_Fun_0005 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('api kaeema kanna yanavaa saha passe ammalage gedhara yanavaa', { delay: 100 });

    
    await expect(page.getByText('අපි කෑම කන්න යනවා සහ පස්සෙ අම්මලගෙ ගෙදර යනවා')).toBeVisible({ timeout: 10000 });
  });



    test('Pos_Fun_0006 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama heta panthiyata enavaa.', { delay: 100 });

    
    await expect(page.getByText('මම හෙට පන්තියට එනවා.')).toBeVisible({ timeout: 10000 });
  });


     test('Pos_Fun_0007 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('Zoom meeting ekak thiyennee heta oya sambandha venna.', { delay: 100 });

   
    await expect(page.getByText('Zoom meeting එකක් තියෙන්නේ හෙට ඔය සම්බන්ද වෙන්න.')).toBeVisible({ timeout: 10000 });
  });
  

    test('Pos_Fun_0008 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('hari hari lassanayi oyage aedhuma.', { delay: 100 });

    
    await expect(page.getByText('හරි හරි ලස්සනයි ඔයගෙ ඇදුම.')).toBeVisible({ timeout: 10000 });
  });


   test('Pos_Fun_0009 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('oyaa issarahata yanna.', { delay: 100 });


    await expect(page.getByText('ඔයා ඉස්සරහට යන්න.')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0010 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('api yamu.kathaa karanna', { delay: 100 });


    await expect(page.getByText('අපි යමු.')).toBeVisible({ timeout: 10000 });
  });




   test('Pos_Fun_0011 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mamakadetayanavaa', { delay: 100 });


    await expect(page.getByText('මමකඩෙටයනවා')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0012 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('Rs. 2500 mama heta pay karanavaa.', { delay: 100 });

    
    await expect(page.getByText('Rs. 2500 මම හෙට pay කරනවා.')).toBeVisible({ timeout: 10000 });
  });


   test('Pos_Fun_0013 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama iiyee office giyaa.', { delay: 100 });

    
    await expect(page.getByText('මම ඊයේ office ගියා.')).toBeVisible({ timeout: 10000 });
  });


   test('Pos_Fun_0014 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('oya enavaanam mama gedhara innavaa.', { delay: 100 });

    
    await expect(page.getByText('ඔය එනවානම් මම ගෙදර ඉන්නවා.')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0015 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('eka hari ela machan supiri!', { delay: 100 });

    
    await expect(page.getByText('එක හරි එල මචන් සුපිරි!')).toBeVisible({ timeout: 10000 });
  });




   test('Pos_Fun_0016 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('samaavenna, eeka athvaeradhimak.', { delay: 100 });

    
    await expect(page.getByText('සමාවෙන්න, ඒක අත්වැරදිමක්.')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0017 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('oyaalaa enavaa mata sathutuyi.', { delay: 100 });

    
    await expect(page.getByText('ඔයාලා එනවා මට සතුටුයි.')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0018 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('2026-01-21 mama Kandy yanavaa.', { delay: 100 });

    
    await expect(page.getByText('2026-01-21 මම Kandy යනවා.')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0019 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mata raeeta kanna bath oonee.', { delay: 100 });

    
    await expect(page.getByText('මට රෑට කන්න බත් ඕනේ.')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0020 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama gedhara yanavaa.\noyaa enavadha?', { delay: 100 });

    
    await expect(page.getByText('මම ගෙදර යනවා.\nඔයා එනවද?')).toBeVisible({ timeout: 10000 });
  });


  
 test('Pos_Fun_0021 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mata ooni thava maalu kg 2k ganna.', { delay: 100 });

   
    await expect(page.getByText('මට ඕනි තව මාලු kg 2ක් ගන්න.')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0022 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('gQQvathura heethuven anathuru sahagatha thaththvayakata path vi aetha.Ema nIsaa Siyaluma JAnathaava preveeshamen kAtayuthu karanna.', { delay: 150 });

    
    await expect(page.getByText('ගංවතුර හේතුවෙන් අනතුරු සහගත තත්ත්වයකට පත් වි ඇත.එම නිසා සියලුම ඦනතාව ප්‍රෙවේශමෙන් කටයුතු කරන්න.')).toBeVisible({ timeout: 15000 });
  });



   test('Pos_Fun_0023 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('OTP eka SMS eken enavaa.', { delay: 100 });

    
    await expect(page.getByText('OTP එක SMS එකෙන් එනවා.')).toBeVisible({ timeout: 10000 });
  });



   test('Pos_Fun_0024 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('anee karuNaakaralaa eeka dhenna.', { delay: 100 });

    
    await expect(page.getByText('අනේ කරුණාකරලා ඒක දෙන්න.')).toBeVisible({ timeout: 10000 });
  });



   test('Neg_Fun_0025 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mamagedharayanavaoyaaennavada', { delay: 100 });

   
    await expect(page.getByText('මම ගෙදර යනවා. ඔයා එනවද')).toBeVisible({ timeout: 10000 });
  });



   test('Neg_Fun_0026 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('lassssanayi', { delay: 100 });

    
    await expect(page.getByText('ලස්සනයි')).toBeVisible({ timeout: 10000 });
  });



  
   test('Neg_Fun_0027 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama pirisidu vaakyak kiyannam.', { delay: 100 });

    
    await expect(page.getByText('මම පිරිසිදු වාක්‍යක් කියන්නම්.')).toBeVisible({ timeout: 10000 });
  });


  test('Neg_Fun_0028 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama heta giyaa.', { delay: 100 });

  
    await expect(page.getByText('මම හෙට යනවා.')).toBeVisible({ timeout: 10000 });
  });


   test('Neg_Fun_0029 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('lamayi iskool yanava', { delay: 100 });

   
    await expect(page.getByText('ලමයි ඉස්කෝල් යනවා')).toBeVisible({ timeout: 10000 });
  });

  test('Neg_Fun_0030 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama ehema karannee naee naee', { delay: 100 });

    
    await expect(page.getByText('මම එහෙම කරන්නේ නෑ නේ')).toBeVisible({ timeout: 10000 });
  });


  test('Neg_Fun_0031 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama iyee gedhara yanavaa', { delay: 100 });

    
    await expect(page.getByText('මම ඉයේ ගෙදර ගියා')).toBeVisible({ timeout: 10000 });
  });


  test('Neg_Fun_0032 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mamagedharayanavaamatavaedakannaoonee', { delay: 100 });

    
    await expect(page.getByText('මම ගෙදර යනවා මට  වැඩ කන්න ඕනේ')).toBeVisible({ timeout: 10000 });
  });


  test('Neg_Fun_0033 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('mama  office giyaa namuth vaeda karanna bae kiyala manager ta kiwwa namuth eyaa ehema dheyak ahanne nae kiyala mata kiwwa', { delay: 100 });

   
    await expect(page.getByText('මම office ගියා නමුත් වැඩ කරන්න බැ කියල manager ට කිව්ව කිව්වමුත් එයා එහෙම දෙයක් අහන්නෙ නැ කියල මට කිව්වා')).toBeVisible({ timeout: 10000 });
  });


  test('Neg_Fun_0034 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('MaMa EnNeE NaE Vadak THiYenaWa MaTA', { delay: 100 });

   
    await expect(page.getByText('mama Ennee naee vaedak thiyenavaa Mata')).toBeVisible({ timeout: 10000 });
  });



  test('Pos_UI_0035 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');

    await inputBox.type('Api Haemadhama mee vageema ekata imu IssAraHatath.', { delay: 100 });

  
    await expect(page.getByText('අපි හැමදම මේ වගේම එකට ඉමු ඉස්සරහටත්.')).toBeVisible({ timeout: 10000 });
  });

