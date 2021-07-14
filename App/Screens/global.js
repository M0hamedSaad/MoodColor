import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions } from 'react-native';


const lang = async () => {
    const lang = await AsyncStorage.getItem('lang')
    return lang
}
export default {
    BASE_URL: '',


    Blue: '#0091FF',
    move: '#6a27b3',
    moveOpacity: '#eedeff',

    Regular: 'Poppins-Regular',
    semiBold: 'Poppins-SemiBold',
    Bold: 'Poppins-Bold',

    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
    lang,

    en: {
        WELCOME: 'Welcome Back!',
        WELCOME_DETAILS: 'We are in the service of delivery to all individuals \nwherever you are in the world',
        USERNAME: 'Username',
        PASSWORD: 'Password',
        FORGET_PASSWORD: 'Forget password?',
        LOGIN: 'Login',
        RESET_PASSWORD: 'Reset password',
        RESET_PASSWORD_INSTRUCTIONS: "Enter the email associated with your account and we'll send an email with instructions to reser your password",
        SEND_INSTRUCTIONS: 'Send Instructions',
        RESENT_CODE_SENT: 'Reset code sent',
        ENTER_RESENT_CODE: 'Please enter the reset code sent to your email hussein@gmail.com',
        SEND_AGAIN: "Didn't receive code? Send Again",
        CREATE_PASS: "Enter the email associated with your account and we'll send an email with instructions to reser your password",
        CONFIRM_PASS: 'Confirm Password',
        VALID_PASS: 'Must be at least 8 characters. ',
        VALID_CONFIRM_PASS: 'Both passwords must match. ',
        PROFILE: 'More',
        OFFERS: 'Offers',
        SETTING: 'Setting',
        SEARCH: 'Search',
        REMEBER_ME: 'Remember me',
        PICK_UP: 'Pickup',
        ORDERS: 'Orders',
        SHIFTS: 'Shifts',
        COMPLETED: 'Completed',
        CHANGE_LANG: 'Channge Language',
        CAMERA: 'Camera',
        CHANGE_COLOR: 'Change Color',
        OLD_PASS: 'Old password',
        NEW_PASS: 'New password',
        CONFIRM_NEW_PASS: 'Confirm New Password',
        CONFIRM: 'CONFIRM',
        PERSONAL_DATA: 'Personal Data',
        YOUR_NAME: 'Your Name',
        BIRTH: 'Date of Birth',
        JOB: 'Your Job',
        INCOME: 'Monthly Income',
        GENDER: 'Gender',
        MALE: 'Male',
        FEMALE: 'Female',
        CHANGE_PASS: 'Change password',
        SETTINGS: 'Settings',
        FAQS: 'FAQs',
        LOGOUT: 'Logout',






    },
    ar: {
        WELCOME: 'مرحباً بك',
        WELCOME_DETAILS: 'نحن في خدمة التوصيل لجميع الافراد\n اينما كنت موجود في العالم',
        USERNAME: 'اسم المستخدم',
        PASSWORD: 'كلمة المرور',
        FORGET_PASSWORD: 'نسيت كلمة المرور؟',
        LOGIN: 'تسجيل الدخول',
        RESET_PASSWORD: 'إعادة تعيين كلمة المرور',
        RESET_PASSWORD_INSTRUCTIONS: 'أدخل البريد الإلكتروني المرتبط بحسابك وسنرسل بريدًا إلكترونيًا يحتوي على إرشادات لإعادة إرسال كلمة المرور الخاصة بك',
        SEND_INSTRUCTIONS: 'إرسال',
        RESENT_CODE_SENT: 'تم إرسال رمز إعادة التعيين',
        ENTER_RESENT_CODE: 'الرجاء إدخال رمز إعادة التعيين المرسل إلى بريدك الإلكتروني hussein@gmail.com',
        SEND_AGAIN: "لم تتلق رمز؟ أعد الإرسال",
        CREATE_PASS: 'أدخل البريد الإلكتروني المرتبط بحسابك وسنرسل بريدًا إلكترونيًا يحتوي على إرشادات لإعادة إرسال كلمة المرور الخاصة بك',
        CONFIRM_PASS: 'تأكيد كلمة المرور',
        VALID_PASS: 'يجب ألا يقل عن 8 أحرف.',
        VALID_CONFIRM_PASS: 'يجب أن تتطابق كلمتا المرور.',
        PROFILE: 'أخرى',
        OFFERS: 'العروض',
        SETTING: 'الأدوات',
        SEARCH: 'البحث',
        REMEBER_ME: 'تذكرني',
        PICK_UP: 'شحنة',
        ORDERS: 'طلبات',
        SHIFTS: 'تحولات',
        COMPLETED: 'منتهي',
        CHANGE_LANG: 'اللغة',
        CAMERA: 'الكاميرا',
        CHANGE_COLOR: 'الألوان',
        OLD_PASS: 'كلمة المرور القديمة',
        NEW_PASS: 'كلمة المرور الجديدة',
        CONFIRM_NEW_PASS: 'تأكيد كلمة المرور الجديدة',
        CONFIRM: 'تأكيد',
        PERSONAL_DATA: 'البيانات الشخصية',
        YOUR_NAME: 'الأسم',
        BIRTH: 'تاريخ الميلاد',
        JOB: 'الوظيفة',
        INCOME: 'الدخل',
        GENDER: 'النوع',
        MALE: 'ذكر',
        FEMALE: 'أنثى',
        CHANGE_PASS: 'تغيير كلمة المرور',
        SETTINGS: 'الإعدادات',
        FAQS: 'الأسئلة والأجوبة',
        LOGOUT: 'تسجيل الخروج',





    }
}