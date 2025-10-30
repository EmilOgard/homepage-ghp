import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    no: {
        translation: {
            home: "Hjem",
            about: "Om meg",
            skills: "Ferdigheter",
            projects: "Prosjekter",
            contact: "Kontakt",
            email: "E-post",
            software_developer: "Programvareutvikler",
            age_info: "28 år gammel programvare utvikler.",
            place_info: " Fra Eidsvoll, bosatt i Oslo.",
            education: "Utdannet ved Universitetet i Oslo.",
            programming_languages: "Programmeringsspråk",
            frameworks_libraries: "Rammeverk og biblioteker",
            databases: "Databaser",
            tools_platforms: "Verktøy og plattformer",
            embedded: "Innebygde systemer",
            system: "System Programmering",
            view_project: "Se prosjekt",
        }
    },
    en: {
        translation: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            email: "Email",
            software_developer: "Software Developer",
            age_info: "28 years old software developer.",
            place_info: " From Eidsvoll, living in Oslo.",
            education: "Educated at the University of Oslo.",
            programming_languages: "Programming Languages",
            frameworks_libraries: "Frameworks and Libraries",
            databases: "Databases",
            tools_platforms: "Tools and Platforms",
            embedded: "Embedded Systems",
            system: "System Programming",
            view_project: "View Project",
        }
    },
    es: {
        translation: {
            home: "Inicio",
            about: "Acerca de",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto",
            email: "Correo electrónico",
            software_developer: "Desarrollador de Software",
            age_info: "Desarrollador de software de 28 años.",
            place_info: " De Eidsvoll, viviendo en Oslo.",
            education: "Educado en la Universidad de Oslo.",
            programming_languages: "Lenguajes de Programación",
            frameworks_libraries: "Frameworks y Bibliotecas",
            databases: "Bases de Datos",
            tools_platforms: "Herramientas y Plataformas",
            embedded: "Sistemas Empotrados",
            system: "Programación de Sistemas",
            view_project: "Ver Proyecto",
        }
    },
    it: {
        translation: {
            home: "Home",
            about: "Chi sono",
            skills: "Competenze",
            projects: "Progetti",
            contact: "Contatti",
            email: "Email",
            software_developer: "Sviluppatore di Software",
            age_info: "Sviluppatore software di 28 anni.",
            place_info: " Da Eidsvoll, vive a Oslo.",
            education: "Laurato presso l'Università di Oslo.",
            programming_languages: "Linguaggi di Programmazione",
            frameworks_libraries: "Framework e Librerie",
            databases: "Database",
            tools_platforms: "Strumenti e Piattaforme",
            embedded: "Sistemi Embedded",
            system: "Programmazione di Sistema",
            view_project: "Vedi Progetto",
        }
    },
    de: {
        translation: {
            home: "Startseite",
            about: "Über mich",
            skills: "Fähigkeiten",
            projects: "Projekte",
            contact: "Kontaktieren Sie mich",
            email: "E-Mail",
            software_developer: "Softwareentwickler",
            age_info: "28-jähriger Softwareentwickler.",
            place_info: " Aus Eidsvoll, wohnhaft in Oslo.",
            education: "Studiert an der Universität Oslo.",
            programming_languages: "Programmiersprachen",
            frameworks_libraries: "Frameworks und Bibliotheken",
            databases: "Datenbanken",
            tools_platforms: "Werkzeuge und Plattformen",
            embedded: "Eingebettete Systeme",
            system: "Systemprogrammierung",
            view_project: "Projekt ansehen",
        }
    },
    ru: {
        translation: {
            home: "Главная",
            about: "Обо мне",
            skills: "Навыки",
            projects: "Проекты",
            contact: "Контакты",
            email: "Электронная почта",
            software_developer: "Разработчик программного обеспечения",
            age_info: "28-летний разработчик программного обеспечения.",
            place_info: " Из Эйдсволля, проживающий в Осло.",
            education: "Окончил в Университете Осло.",
            programming_languages: "Языки программирования",
            frameworks_libraries: "Фреймворки и библиотеки",
            databases: "Базы данных",
            tools_platforms: "Инструменты и платформы",
            embedded: "Встроенные системы",
            system: "Системное программирование",
            view_project: "Посмотреть проект",
        }
    },
    ar: {
        translation: {
            home: "الصفحة الرئيسية",
            about: "معلومات عنا",
            skills: "المهارات",
            projects: "المشاريع",
            contact: "اتصل",
            email: "البريد الإلكتروني",
            software_developer: "مطور برمجيات",
            age_info: "مطور برمجيات يبلغ من العمر 28 عامًا.",
            place_info: " من إيدسفول، يعيش في أوسلو.",
            education: "تعليم في جامعة أوسلو",
            programming_languages: "لغات البرمجة",
            frameworks_libraries: "الأطر والمكتبات",
            databases: "قواعد البيانات",
            tools_platforms: "الأدوات والمنصات",
            embedded: "الأنظمة المدمجة",
            system: "برمجة النظام",
            view_project: "عرض المشروع",
        }
    },
    zh: {
        translation: {
            home: "首页",
            about: "关于我",
            skills: "技能",
            projects: "项目",
            contact: "联系",
            email: "电子邮件",
            software_developer: "软件开发人员",
            age_info: "28岁软件开发人员。",
            place_info: " 来自Eidsvoll，现居奥斯陆。",
            education: "毕业于奥斯陆大学",
            programming_languages: "编程语言",
            frameworks_libraries: "框架和库",
            databases: "数据库",
            tools_platforms: "工具和平台",
            embedded: "嵌入式系统",
            system: "系统编程",
            view_project: "查看项目",
        }
    },
    fr: {
        translation: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            contact: "Contact",
            email: "Email",
            software_developer: "Développeur de logiciels",
            age_info: "Développeur de logiciels de 28 ans.",
            place_info: " D'Eidsvoll, vivant à Oslo.",
            education: "Formé à l'Université d'Oslo.",
            programming_languages: "Langages de programmation",
            frameworks_libraries: "Frameworks et bibliothèques",
            databases: "Bases de données",
            tools_platforms: "Outils et plates-formes",
            embedded: "Systèmes embarqués",
            system: "Programmation système",
            view_project: "Voir le projet",
        }
    },
};

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
    });

export default i18next;