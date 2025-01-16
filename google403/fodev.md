  <!-- <div style="
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-top: 15px;">
    <img src="/FoD.png" alt="Windows Logo" style="width: 100px; height: 100px;">
  </div> -->

# پروکسی http
سرویس fodev سرویسی قدیمی اما ارزشمند است که زمان زیادی است در دور زدن محدودیت ها به ما کمک کرده

این سرویس به کمک پروکسی از نوع http سعی بر دور زدن محدودیت های اندروید استودیو میکند

::: warning اخطار
- ممکن است این روش بسته به اپراتور اینترنتی شما کار ندهد
- در این روش چون پروکسی روی اندروید استودیو ست میشه در بعضی مواقع ممکن است شبیه ساز نتواند اربتاط با سرور برقرار کند چرا که این پروکسی محدود به دامین های خاص مخازن است
:::

## روش فعالسازی
- اندروید استودیو را باز کنید.
- از منوی بالا، وارد مسیر زیر شوید:

File > Settings > Appearance & Behavior > System Settings > HTTP Proxy

- Manual Proxy Configuration: تنظیم پروکسی به صورت دستی.
- پیکربندی دستی پروکسی (Manual Proxy):
اگر گزینه Manual Proxy Configuration را انتخاب کنید:

- HTTP Proxy Host : ( fodev.org )

- Port: (8118)

::: warning اخطار
- دقت داشته باشید که ممکن است برای غیر فعال کردن این روش ممکن است صرفا انتخاب گزینه No Proxy کافی نباشد و شما باید به بخش گردل و به فایل پروپرتیز رفته و چک کنید چیزی از این سرویس نباشد و اگر بود به صورت دستی حذف و سینک کنید
:::

## فعال سازی روی اندروید استودیو 

<div style="
  position: relative; 
  width: 100%; 
  padding-bottom: 56.25%; 
  height: 0; 
  margin: 20px 0; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border-radius: 10px; 
  overflow: hidden; 
  background-color: #f9f9f9;
">
  <iframe 
    src="https://www.youtube.com/embed/PLSFHy20zCc" 
    title="مقدمه" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 10px;">
  </iframe>
</div>
