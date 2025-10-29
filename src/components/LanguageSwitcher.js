import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import { useState, useEffect } from 'react';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || i18n.language || 'en';
    });

    const languages = [
        { code: 'no', name: 'Norsk', country_code: 'NO' },
        { code: 'en', name: 'English', country_code: 'GB' },
        { code: 'es', name: 'Español', country_code: 'ES' },
        { code: 'it', name: 'Italiano', country_code: 'IT' },
        { code: 'de', name: 'Deutsch', country_code: 'DE' },
        { code: 'ru', name: 'Русский', country_code: 'RU' },
        { code: 'ar', name: 'العربية', country_code: 'SA' },
        { code: 'zh', name: '中文', country_code: 'CN' },
    ];

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setLanguage(code);
        localStorage.setItem('language', code);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [i18n, language]);

    const currentLanguage = languages.find(lang => lang.code === language);

    return (
        <Dropdown align="end">
            <Dropdown.Toggle variant="tertiary" id="dropdown-language-switcher">
                {currentLanguage && (
                    <>
                        <ReactCountryFlag countryCode={currentLanguage.country_code} svg style={{ width: '1.5em', height: '1.5em' }} title={currentLanguage.name} />
                        <span className="ms-2">{currentLanguage.name}</span>
                    </>
                )}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {languages.map((lang) => (
                    <Dropdown.Item key={lang.code} onClick={() => changeLanguage(lang.code)} active={lang.code === language}>
                        <ReactCountryFlag countryCode={lang.country_code} svg style={{ width: '1.5em', height: '1.5em' }} title={lang.name} />
                        <span className="ms-2">{lang.name}</span>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageSwitcher;