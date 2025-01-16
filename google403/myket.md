  <!-- <div style="
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-top: 15px;">
    <img src="/myket.svg" alt="Windows Logo" style="width: 100px; height: 100px;">
  </div> -->

# مخزن مایکت
مخزن Maven  مایکت یک مخزن نرم‌افزاری است که توسط مایکت، یکی از مارکت‌های معتبر اندرویدی ایران، ارائه شده است. این مخزن به توسعه‌دهندگان اندروید کمک می‌کند تا بتوانند کتابخانه‌ها یا فایل‌های مورد نیاز پروژه‌های خود را به‌صورت مستقیم از این مخزن دریافت و در پروژه‌هایشان استفاده کنند.


 - آسان کردن فرآیند Build
 - عدم نیاز به copy/paste کردن کد libraryها پروژه
 - آپدیت شدن خودکار کتابخانه‌ها


نحوه استفاده از مخزن Maven مایکت:

## راهنمای متنی

### ۱. اضافه کردن مخزن به فایل Gradle:
در فایل build.gradle سطح پروژه، بخش repositories را ویرایش کنید و آدرس مخزن مایکت را اضافه کنید:

::: code-group
```groovy
allprojects {
    repositories {
        google()
        mavenCentral()
        maven { url 'https://maven.myket.ir/' }
    }
}
```

```kotlin
allprojects {
    repositories {
        google()
        mavenCentral()
        maven("https://maven.myket.ir/")
    }
}
```
:::

### ۲. اضافه کردن کتابخانه به پروژه:

پس از اضافه کردن مخزن، می‌توانید کتابخانه‌های موجود در این مخزن را به بخش dependencies اضافه کنید. به عنوان مثال:

::: code-group
```groovy
dependencies {
    implementation 'com.example:library-name:version'
}

```

```kotlin
dependencies {
    implementation ("com.example:library-name:version")
}

```
:::


## راهنمای (ویدیویی)

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
    src="https://www.youtube.com/embed/CFyFRvAh6Hg" 
    title="مقدمه" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 10px;">
  </iframe>
</div>
