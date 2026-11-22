خطوات تحويل التطبيق إلى APK
1) أنشئ مستودعاً جديداً على GitHub لهذا التطبيق فقط، وارفع كل محتويات هذا المجلد إلى جذره (بما فيها المجلد المخفي .well-known وملف .nojekyll).
2) Settings > Pages > Branch: main / root، وانتظر ظهور الرابط.
3) افتح pwabuilder.com والصق الرابط، ثم Package for stores > Android.
4) Package ID: com.irtiqa.muallim   (لا تغيّره بعد النشر)
5) Signing key: New، ثم Generate، وحمّل الملف. احتفظ بملف المفتاح وكلمة السر.
6) في تقرير PWABuilder ستجد بصمة SHA256؛ ضعها في .well-known/assetlinks.json مكان النص العربي، وارفع الملف، ليختفي شريط المتصفح (يعمل ذلك على نطاق يخصك فقط: username.github.io أو نطاق مخصص).
7) ثبّت ملف .apk على الجهاز. انسخ بياناتك احتياطياً قبل الانتقال.
