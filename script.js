function checkCredentials() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    const correctUsername = 'love';  // اسم المستخدم الصحيح
    const correctPassword = 'حبيبة مجدي';  // كلمة المرور الصحيحة

    // إخفاء رسالة الخطأ إذا كانت ظاهرة
    document.getElementById('error-message').style.display = 'none';

    // التحقق من صحة اسم المستخدم وكلمة المرور
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // إخفاء صفحة تسجيل الدخول وعرض صفحة الدردشة
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('chat-section').style.display = 'block';

        // تحميل وإظهار سكريبت Tawk.to بعد تسجيل الدخول بنجاح
        loadTawkToScript();
    } else {
        // عرض رسالة الخطأ إذا كانت البيانات غير صحيحة
        document.getElementById('error-message').style.display = 'block';
    }
}

function loadTawkToScript() {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    
    // التأكد من عدم إضافة السكربت أكتر من مرة
    if (!document.getElementById('tawk-script')) {
        var s1 = document.createElement("script");
        s1.id = 'tawk-script'; // إضافة id للسكريبت للتأكد من عدم تحميله مرة تانية
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/67cc4376a7b059190e8055cb/1ilquf2fv'; // معرفك في Tawk.to
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    }
}
