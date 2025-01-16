import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  
  head: [
    ['link', { rel: 'icon', href: '/public/logo.ico' }],
    ['html', { dir: 'rtl' }],
    ['script', {}, `document.documentElement.setAttribute('dir', 'rtl');`]
  ],
  title: "اندروید برای فارسی زبان‌ها",
  lang: 'fa-IR',
  dir: 'rtl',
  description: "آموزش برنامه نویسی اندروید به زبان فارسی",

  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import '/.vitepress/style.css';`,
          postcss: '/postcss.config.js'  // مسیر پیکربندی PostCSS
        },
      },
    },
  },
  
  themeConfig: {
    outlineTitle :'در این صفحه',
    returnToTopLabel:'بازگشت به بالا',
    darkModeSwitchLabel:'ظاهر',
    lightModeSwitchTitle:'تغییر به تم روشن',
    darkModeSwitchTitle:'تغییر به تم تاریک',
    sidebarMenuLabel:'منو',
    siteTitle: 'آموزش به زبان فارسی',
    search :{
       provider: 'local'
    },
    // تعریف سایدبار‌های مختلف برای مسیرهای خاص
    sidebar: {
      '/':[        
      ],
      '/docs/': [
        // {
        //   text: 'راهنما',
        //   link: 'fa/guide//google403/403',
        //   activeMatch: '/guide/'
        // },
        {
          text: 'مرجع',
          link: 'fa/reference/site-config',
          // activeMatch: '/reference/'
        },
        {
          text: 'مرجع',
          base: 'public',
          items: [
            { text: 'پیکربندی Site', link: 'site-config' },
            { text: 'پیکربندی Frontmatter', link: 'frontmatter-config' },
            { text: 'Runtime API', link: 'runtime-api' },
            { text: 'CLI', link: 'cli' },
            {
              text: 'تم پیش‌فرض',
              base: 'fa/reference/default-theme-',
              items: [
                { text: 'بررسی اجمالی', link: 'config' },
                { text: 'ناوبری', link: 'nav' },
                { text: 'نوار کنار صفحه', link: 'sidebar' },
                { text: 'صفحه اصلی', link: 'home-page' },
                { text: 'پاورقی', link: 'footer' },
                { text: 'طرح', link: 'layout' ,items:[
                  { text: 'نوار کنار صفحه', link: 'sidebar' },
                  { text: 'نوار کنار صفحه', link: 'sidebar' },
                ]},
                { text: 'نشان', link: 'badge' },
                { text: 'صفحه تیم', link: 'team-page' },
                { text: 'لینک‌های قبلی / بعدی', link: 'prev-next-links' },
                { text: 'ویرایش لینک', link: 'edit-link' },
                { text: 'Timestamp آخرین به‌روزرسانی', link: 'last-updated' },
                { text: 'جستجو', link: 'search' },
                { text: 'تبلیغات Carbon', link: 'carbon-ads' }
              ]
            }
          ]
        },
        {
          text: 'معرفی',
          collapsed: false,
          items: [
            { text: 'ویت‌پرس چیست؟', link: '/google403/403' },
            { text: 'شروع کار', link: 'getting-started' },
            { text: 'مسیریابی', link: 'routing' },
            { text: 'استقرار', link: 'deploy' }
          ]
        },
        {
          text: 'dsdsdd',
          items: [
            {
              text: 'Changelog',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
            },
            {
              text: 'مشارکت',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
            }
          ]
        },
        {
          text: 'Documentation',
          items: [
            { text: 'api-examples', link: '/docs/api-examples' },
            { text: 'Getting Started', link: '/docs/api-examples' },
            { text: 'Advanced Guide', link: '/docs/api-examples' }
          ]
        },
        {
          text: 'Documentation',
          items: [
            { text: 'api-examples', link: '/docs/api-examples' },
            { text: 'Getting Started', link: '/docs/api-examples' },
            { text: 'Advanced Guide', link: '/docs/api-examples' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Endpoints', link: '/api/endpoints' },
            { text: 'Authentication', link: '/api/authentication' }
          ]
        }
      ],
      '/version/': [
        {
          text: 'راهنمای نصب',
          link :'/version/Android Studio',
          items: [
            {text: 'نصب با تولباکس',link : '/version/toolbox'},
            {text: 'نصب با روش فایل نصبی',items : [
            { text: 'ویندوز', link: '/version/file#ویندوز' },
            { text: 'لینوکس', link: '/version/file#لینوکس' },
            { text: 'مک', link: '/version/file#مک' }
            ]},
          ]
        }
      ],
      '/google403/':[
        {
          text: 'ویندوز',
          collapsed: true,
          items: [
            { text: '403', link: '/google403/403#%D9%88%DB%8C%D9%86%D8%AF%D9%88%D8%B2-dns' },
            { text: 'شکن', link: '/google403/shecan#%D9%88%DB%8C%D9%86%D8%AF%D9%88%D8%B2-dns' },
            { text: 'everyProxy', link: '/google403/everyProxy' },
            { text: 'pdaNet', link: '/google403/pdaNet' },
            { text: 'bat', link: '/google403/bat' },
            { text: 'fodev', link: '/google403/fodev' },
            { text: 'myket', link: '/google403/myket' },
          ]
        },
        {
          text: 'لینوکس',
          collapsed: true,
          items: [
            { text: '403', link: '/google403/403#%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3-dns' },
            { text: 'شکن', link: '/google403/shecan#%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3-dns' },
            { text: 'everyProxy', link: '/google403/everyProxy' },
            { text: 'fodev', link: '/google403/fodev' },
            { text: 'myket', link: '/google403/myket' },
          ]
        },
        // {
        //   text: 'مک',
        //   collapsed: true,
        //   items: [
        //     { text: '403', link: '/google403/403' },
        //     { text: 'شکن', link: '/google403/403' },
        //     { text: 'everyProxy', link: '/google403/403' },
        //     { text: 'fodev', link: '/google403/403' },
        //     { text: 'myket', link: '/google403/403' },
        //   ]
        // },

      ]
    },
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/LearnDotRoid' },
      { icon: 'youtube', link: 'https://www.youtube.com/@learndotroid' }
    ],

    // ناوبری
    nav: [
      { text: 'نویسندگان', link: '/docs/api-examples' },

    ],
    docFooter: {
      prev: 'صفحه قبلی',
      next: 'صفحه بعدی',
    },
    notFound :{
      title : 'محتوا پیدا نشد',
      quote :'محتوایی برای نمایش به شما پیدا نشد',
      linkText :'برگرد به صحفه اصلی'
    },
    aside: true,
  },

});