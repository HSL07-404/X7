import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'pa' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries
const translations = {
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.attendance': 'Attendance',
    'nav.classes': 'Classes',
    'nav.students': 'Students',
    'nav.faculty': 'Faculty',
    'nav.reports': 'Reports',
    'nav.analytics': 'Analytics',
    'nav.settings': 'Settings',
    'nav.logout': 'Sign Out',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.overall_attendance': 'Overall Attendance',
    'dashboard.total_students': 'Total Students',
    'dashboard.active_classes': 'Active Classes',
    'dashboard.at_risk_students': 'At Risk Students',
    'dashboard.quick_actions': 'Quick Actions',
    'dashboard.start_class': 'Start Class Session',
    'dashboard.face_recognition': 'Face Recognition',
    'dashboard.generate_report': 'Generate Report',
    'dashboard.view_analytics': 'View Analytics',
    
    // Attendance
    'attendance.title': 'Attendance Management',
    'attendance.my_attendance': 'My Attendance',
    'attendance.mark_attendance': 'Mark your attendance and track your progress',
    'attendance.quick_checkin': 'Quick Check-in',
    'attendance.scan_qr': 'Scan QR Code',
    'attendance.face_recognition': 'Face Recognition',
    'attendance.ai_powered': 'AI-powered check-in',
    'attendance.attendance_summary': 'Attendance Summary',
    'attendance.overall_rate': 'Overall Attendance Rate',
    'attendance.present': 'Present',
    'attendance.absent': 'Absent',
    'attendance.total': 'Total',
    
    // Common
    'common.loading': 'Loading...',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.close': 'Close',
    'common.refresh': 'Refresh',
    'common.export': 'Export',
    'common.import': 'Import',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.clear': 'Clear',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.punjabi': 'ਪੰਜਾਬੀ',
    'lang.malayalam': 'മലയാളം'
  },
  
  hi: {
    // Navigation
    'nav.dashboard': 'डैशबोर्ड',
    'nav.attendance': 'उपस्थिति',
    'nav.classes': 'कक्षाएं',
    'nav.students': 'छात्र',
    'nav.faculty': 'संकाय',
    'nav.reports': 'रिपोर्ट',
    'nav.analytics': 'विश्लेषण',
    'nav.settings': 'सेटिंग्स',
    'nav.logout': 'साइन आउट',
    
    // Dashboard
    'dashboard.welcome': 'वापसी पर स्वागत है',
    'dashboard.overall_attendance': 'कुल उपस्थिति',
    'dashboard.total_students': 'कुल छात्र',
    'dashboard.active_classes': 'सक्रिय कक्षाएं',
    'dashboard.at_risk_students': 'जोखिम में छात्र',
    'dashboard.quick_actions': 'त्वरित कार्य',
    'dashboard.start_class': 'कक्षा सत्र शुरू करें',
    'dashboard.face_recognition': 'चेहरा पहचान',
    'dashboard.generate_report': 'रिपोर्ट बनाएं',
    'dashboard.view_analytics': 'विश्लेषण देखें',
    
    // Attendance
    'attendance.title': 'उपस्थिति प्रबंधन',
    'attendance.my_attendance': 'मेरी उपस्थिति',
    'attendance.mark_attendance': 'अपनी उपस्थिति चिह्नित करें और प्रगति ट्रैक करें',
    'attendance.quick_checkin': 'त्वरित चेक-इन',
    'attendance.scan_qr': 'QR कोड स्कैन करें',
    'attendance.face_recognition': 'चेहरा पहचान',
    'attendance.ai_powered': 'AI-संचालित चेक-इन',
    'attendance.attendance_summary': 'उपस्थिति सारांश',
    'attendance.overall_rate': 'कुल उपस्थिति दर',
    'attendance.present': 'उपस्थित',
    'attendance.absent': 'अनुपस्थित',
    'attendance.total': 'कुल',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.save': 'सेव करें',
    'common.cancel': 'रद्द करें',
    'common.close': 'बंद करें',
    'common.refresh': 'रीफ्रेश',
    'common.export': 'निर्यात',
    'common.import': 'आयात',
    'common.search': 'खोजें',
    'common.filter': 'फिल्टर',
    'common.clear': 'साफ करें',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.punjabi': 'ਪੰਜਾਬੀ',
    'lang.malayalam': 'മലയാളം'
  },
  
  pa: {
    // Navigation
    'nav.dashboard': 'ਡੈਸ਼ਬੋਰਡ',
    'nav.attendance': 'ਹਾਜ਼ਰੀ',
    'nav.classes': 'ਕਲਾਸਾਂ',
    'nav.students': 'ਵਿਦਿਆਰਥੀ',
    'nav.faculty': 'ਫੈਕਲਟੀ',
    'nav.reports': 'ਰਿਪੋਰਟਾਂ',
    'nav.analytics': 'ਵਿਸ਼ਲੇਸ਼ਣ',
    'nav.settings': 'ਸੈਟਿੰਗਾਂ',
    'nav.logout': 'ਸਾਈਨ ਆਊਟ',
    
    // Dashboard
    'dashboard.welcome': 'ਵਾਪਸੀ ਤੇ ਸੁਆਗਤ ਹੈ',
    'dashboard.overall_attendance': 'ਕੁੱਲ ਹਾਜ਼ਰੀ',
    'dashboard.total_students': 'ਕੁੱਲ ਵਿਦਿਆਰਥੀ',
    'dashboard.active_classes': 'ਸਰਗਰਮ ਕਲਾਸਾਂ',
    'dashboard.at_risk_students': 'ਖਤਰੇ ਵਿੱਚ ਵਿਦਿਆਰਥੀ',
    'dashboard.quick_actions': 'ਤੇਜ਼ ਕਾਰਵਾਈਆਂ',
    'dashboard.start_class': 'ਕਲਾਸ ਸੈਸ਼ਨ ਸ਼ੁਰੂ ਕਰੋ',
    'dashboard.face_recognition': 'ਚਿਹਰਾ ਪਛਾਣ',
    'dashboard.generate_report': 'ਰਿਪੋਰਟ ਬਣਾਓ',
    'dashboard.view_analytics': 'ਵਿਸ਼ਲੇਸ਼ਣ ਦੇਖੋ',
    
    // Attendance
    'attendance.title': 'ਹਾਜ਼ਰੀ ਪ੍ਰਬੰਧਨ',
    'attendance.my_attendance': 'ਮੇਰੀ ਹਾਜ਼ਰੀ',
    'attendance.mark_attendance': 'ਆਪਣੀ ਹਾਜ਼ਰੀ ਨਿਸ਼ਾਨ ਲਗਾਓ ਅਤੇ ਪ੍ਰਗਤੀ ਟਰੈਕ ਕਰੋ',
    'attendance.quick_checkin': 'ਤੇਜ਼ ਚੈੱਕ-ਇਨ',
    'attendance.scan_qr': 'QR ਕੋਡ ਸਕੈਨ ਕਰੋ',
    'attendance.face_recognition': 'ਚਿਹਰਾ ਪਛਾਣ',
    'attendance.ai_powered': 'AI-ਸੰਚਾਲਿਤ ਚੈੱਕ-ਇਨ',
    'attendance.attendance_summary': 'ਹਾਜ਼ਰੀ ਸਾਰਾਂਸ਼',
    'attendance.overall_rate': 'ਕੁੱਲ ਹਾਜ਼ਰੀ ਦਰ',
    'attendance.present': 'ਹਾਜ਼ਰ',
    'attendance.absent': 'ਗੈਰਹਾਜ਼ਰ',
    'attendance.total': 'ਕੁੱਲ',
    
    // Common
    'common.loading': 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
    'common.save': 'ਸੇਵ ਕਰੋ',
    'common.cancel': 'ਰੱਦ ਕਰੋ',
    'common.close': 'ਬੰਦ ਕਰੋ',
    'common.refresh': 'ਰੀਫ੍ਰੈਸ਼',
    'common.export': 'ਨਿਰਯਾਤ',
    'common.import': 'ਆਯਾਤ',
    'common.search': 'ਖੋਜੋ',
    'common.filter': 'ਫਿਲਟਰ',
    'common.clear': 'ਸਾਫ਼ ਕਰੋ',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.punjabi': 'ਪੰਜਾਬੀ',
    'lang.malayalam': 'മലയാളം'
  },
  
  ml: {
    // Navigation
    'nav.dashboard': 'ഡാഷ്‌ബോർഡ്',
    'nav.attendance': 'ഹാജർ',
    'nav.classes': 'ക്ലാസുകൾ',
    'nav.students': 'വിദ്യാർത്ഥികൾ',
    'nav.faculty': 'ഫാക്കൽറ്റി',
    'nav.reports': 'റിപ്പോർട്ടുകൾ',
    'nav.analytics': 'വിശകലനം',
    'nav.settings': 'ക്രമീകരണങ്ങൾ',
    'nav.logout': 'സൈൻ ഔട്ട്',
    
    // Dashboard
    'dashboard.welcome': 'തിരിച്ചുവരവിൽ സ്വാഗതം',
    'dashboard.overall_attendance': 'മൊത്തം ഹാജർ',
    'dashboard.total_students': 'മൊത്തം വിദ്യാർത്ഥികൾ',
    'dashboard.active_classes': 'സജീവ ക്ലാസുകൾ',
    'dashboard.at_risk_students': 'അപകടത്തിലുള്ള വിദ്യാർത്ഥികൾ',
    'dashboard.quick_actions': 'വേഗത്തിലുള്ള പ്രവർത്തനങ്ങൾ',
    'dashboard.start_class': 'ക്ലാസ് സെഷൻ ആരംഭിക്കുക',
    'dashboard.face_recognition': 'മുഖം തിരിച്ചറിയൽ',
    'dashboard.generate_report': 'റിപ്പോർട്ട് സൃഷ്ടിക്കുക',
    'dashboard.view_analytics': 'വിശകലനം കാണുക',
    
    // Attendance
    'attendance.title': 'ഹാജർ മാനേജ്മെന്റ്',
    'attendance.my_attendance': 'എന്റെ ഹാജർ',
    'attendance.mark_attendance': 'നിങ്ങളുടെ ഹാജർ അടയാളപ്പെടുത്തുകയും പുരോഗതി ട്രാക്ക് ചെയ്യുകയും ചെയ്യുക',
    'attendance.quick_checkin': 'വേഗത്തിലുള്ള ചെക്ക്-ഇൻ',
    'attendance.scan_qr': 'QR കോഡ് സ്കാൻ ചെയ്യുക',
    'attendance.face_recognition': 'മുഖം തിരിച്ചറിയൽ',
    'attendance.ai_powered': 'AI-പവർഡ് ചെക്ക്-ഇൻ',
    'attendance.attendance_summary': 'ഹാജർ സംഗ്രഹം',
    'attendance.overall_rate': 'മൊത്തം ഹാജർ നിരക്ക്',
    'attendance.present': 'ഹാജർ',
    'attendance.absent': 'ഹാജരല്ലാത്ത',
    'attendance.total': 'മൊത്തം',
    
    // Common
    'common.loading': 'ലോഡ് ചെയ്യുന്നു...',
    'common.save': 'സേവ് ചെയ്യുക',
    'common.cancel': 'റദ്ദാക്കുക',
    'common.close': 'അടയ്ക്കുക',
    'common.refresh': 'പുതുക്കുക',
    'common.export': 'കയറ്റുമതി',
    'common.import': 'ഇറക്കുമതി',
    'common.search': 'തിരയുക',
    'common.filter': 'ഫിൽട്ടർ',
    'common.clear': 'മായ്ക്കുക',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.punjabi': 'ਪੰਜਾਬੀ',
    'lang.malayalam': 'മലയാളം'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('attendify_language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('attendify_language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key as keyof typeof translations.en] || key;
  };

  useEffect(() => {
    // Set document language attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};