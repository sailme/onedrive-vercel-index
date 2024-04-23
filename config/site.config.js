// 这是我们在第一次初始化网站时用来识别你的身份的东西。
// 确保这个和你使用的Microsoft帐户中的电子邮件地址完全相同。
// 如果你担心你的电子邮件在公开中被暴露，你可以在Vercel的环境变量中设置「下次公共用户原则」名称。
userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'sopadg111@outlook.com',

// [选项] 这是你要在导航栏左边放置的网站图标。应该放在OneDrive项目的根目录下，并在这里通过相对路径引用它。
icon: '/icons/128.png',

// 预冠字
kvPrefix: process.env.KV_PREFIX || '',

// 你的网站名。在此处与图标放在一起。
title: "哆啦松鼠",
baseDirectory: '/2024',
maxItems: 100,
googleFontSans: 'Inter',
googleFontMono: 'Fira Mono',
googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

// [选项] 我们使用Google字体内置的字体定制。
// 你可以从 https://fonts.google.com 下载并生成所需的链接和名称。
// googleFontSans - 在Onedrive Vercel索引中使用的无衬线苏打体字体。
googleFontSans: 'Inter',
googleFontMono: 'Fira Mono',
googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],
footer:
  '感激您使用< a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">Onedrive Vercel索引</a> </p><p> </p>',

// [选项] 这里是您的网站布局组件。您可以在这里写HTML代码，但需要转义双引号（'） - 变成“”。您可以在任何地方写下任何东西，如果您喜欢徽章，请使用 https://shields.io 来生成一些徽章。</p>
footer:
  '感谢您使用<a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">Onedrive Vercel索引</a>制作的哆啦松鼠。</p><p>由SpencerWoo制作的</p>',

// [选项] 这是一个与密码保护的文件夹相关的数组。这是一个指向您拥有 .password 的所有子目录的路径数组。查看文档以获取详细信息。
protectedRoutes:['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],
email: '',

// [选项] 如果你想在导航栏中删除这个电子邮件地址，这里就是。
links: [
  {
    name: 'GitHub',
    link: 'https://github.com/spencerwooo/onedrive-vercel-index',
  },
],
datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
