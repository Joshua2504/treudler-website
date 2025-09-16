// Internationalization (i18n) Module for Treudler Managed Services
class I18n {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.init();
    }

    // Initialize i18n system
    async init() {
        await this.loadTranslations();
        this.detectLanguage();
        this.setupLanguageSwitcher();
        this.translatePage();
    }

    // Load translation files
    async loadTranslations() {
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.about': 'About',
                'nav.contact': 'Contact',

                // Hero Section
                'hero.title': 'Elite Managed Services',
                'hero.subtitle': 'Professional IT infrastructure management with cutting-edge expertise',
                'hero.description': 'I\'m Joshua, working with my team of experts to deliver comprehensive managed services that keep your business running at peak performance. From cloud infrastructure to cybersecurity, we\'ve got you covered.',
                'hero.cta.primary': 'Get Started',
                'hero.cta.secondary': 'Learn More',

                // Floating Cards
                'card.infrastructure.title': 'Infrastructure Management',
                'card.infrastructure.desc': 'Complete oversight of your IT infrastructure with proactive monitoring and optimization.',
                'card.security.title': 'Cybersecurity Solutions',
                'card.security.desc': 'Advanced threat protection and security protocols to safeguard your digital assets.',
                'card.cloud.title': 'Cloud Services',
                'card.cloud.desc': 'Scalable cloud solutions designed for performance, reliability, and cost-efficiency.',

                // Services Overview
                'services.title': 'Our Core Services',
                'services.subtitle': 'Comprehensive managed services tailored to your business needs',
                'services.infrastructure.title': 'Infrastructure & Operations',
                'services.infrastructure.desc': 'Complete IT infrastructure management and operational excellence.',
                'services.security.title': 'Security & Compliance',
                'services.security.desc': 'Advanced cybersecurity and regulatory compliance solutions.',
                'services.cloud.title': 'Cloud & DevOps',
                'services.cloud.desc': 'Modern cloud architecture and development operations.',
                'services.support.title': '24/7 Support & Monitoring',
                'services.support.desc': 'Round-the-clock technical support and system monitoring.',
                'services.consulting.title': 'Strategic IT Consulting',
                'services.consulting.desc': 'Expert guidance for your digital transformation journey.',
                'services.automation.title': 'Process Automation',
                'services.automation.desc': 'Streamline operations with intelligent automation solutions.',

                // Managed Services Categories
                'managed.title': 'Comprehensive Managed Services',
                'managed.subtitle': 'Complete technology management across all critical business areas',
                'managed.infrastructure.title': 'Infrastructure Management',
                'managed.security.title': 'Security & Compliance',
                'managed.cloud.title': 'Cloud & DevOps',
                'managed.support.title': 'Support & Monitoring',

                // Infrastructure Services
                'service.server.management': 'Server Management & Maintenance',
                'service.network.administration': 'Network Administration',
                'service.storage.solutions': 'Storage Solutions & Backup',
                'service.virtualization.management': 'Virtualization Management',
                'service.hardware.procurement': 'Hardware Procurement & Setup',
                'service.capacity.planning': 'Capacity Planning & Scaling',
                'service.disaster.recovery': 'Disaster Recovery Planning',
                'service.performance.optimization': 'Performance Optimization',

                // Security Services
                'service.threat.detection': 'Threat Detection & Response',
                'service.vulnerability.assessment': 'Vulnerability Assessment',
                'service.compliance.management': 'Compliance Management',
                'service.security.audits': 'Security Audits & Reviews',
                'service.endpoint.protection': 'Endpoint Protection',
                'service.firewall.management': 'Firewall Management',
                'service.identity.management': 'Identity & Access Management',
                'service.security.training': 'Security Awareness Training',

                // Cloud Services
                'service.cloud.migration': 'Cloud Migration & Strategy',
                'service.devops.implementation': 'DevOps Implementation',
                'service.container.orchestration': 'Container Orchestration',
                'service.ci.cd.pipelines': 'CI/CD Pipeline Management',
                'service.infrastructure.code': 'Infrastructure as Code',
                'service.cloud.cost.optimization': 'Cloud Cost Optimization',
                'service.multi.cloud.management': 'Multi-Cloud Management',
                'service.serverless.architecture': 'Serverless Architecture',

                // Support Services
                'service.help.desk': 'Help Desk & User Support',
                'service.system.monitoring': 'System Monitoring & Alerting',
                'service.patch.management': 'Patch Management',
                'service.software.licensing': 'Software Licensing Management',
                'service.documentation.management': 'Documentation Management',
                'service.change.management': 'Change Management',
                'service.incident.response': 'Incident Response',
                'service.maintenance.windows': 'Maintenance Window Planning',

                // About Section
                'about.title': 'About Joshua & Team',
                'about.subtitle': 'Expert-led managed services with a personal touch',
                'about.description': 'I\'m Joshua, a seasoned IT professional working alongside a carefully selected team of specialists. Together, we bring decades of combined experience in enterprise IT management, cybersecurity, and cloud operations. Our approach combines cutting-edge technology with personalized service delivery.',
                'about.experience': 'Our team has successfully managed IT infrastructure for companies ranging from startups to Fortune 500 enterprises, ensuring optimal performance, security, and scalability.',
                'about.stats.projects': 'Projects Completed',
                'about.stats.uptime': 'Average Uptime',
                'about.stats.response': 'Avg Response Time',
                'about.stats.satisfaction': 'Client Satisfaction',

                // Contact Section
                'contact.title': 'Get In Touch',
                'contact.subtitle': 'Ready to optimize your IT infrastructure? Let\'s discuss your needs.',
                'contact.info.title': 'Contact Information',
                'contact.info.email': 'hello@treudler.com',
                'contact.info.phone': '+1 (555) 123-4567',
                'contact.info.location': 'Remote & On-Site Services',
                'contact.form.title': 'Send us a message',
                'contact.form.name': 'Your Name',
                'contact.form.email': 'Your Email',
                'contact.form.company': 'Company Name',
                'contact.form.message': 'Tell us about your IT needs...',
                'contact.form.submit': 'Send Message',
                'contact.cta.title': 'Ready to get started?',
                'contact.cta.description': 'Contact us today for a free consultation and discover how we can optimize your IT infrastructure.',
                'contact.cta.button': 'Schedule Consultation',

                // Footer
                'footer.tagline': 'Elite managed services for the digital age',
                'footer.links.privacy': 'Privacy Policy',
                'footer.links.terms': 'Terms of Service',
                'footer.links.support': 'Support',
                'footer.copyright': '© 2024 Treudler Managed Services. All rights reserved.',

                // Notifications
                'notification.success': 'Thank you! I\'ll get back to you within 24 hours.',
                'notification.error': 'Something went wrong. Please try again.',
                'notification.language.switched': 'Language changed successfully'
            },

            de: {
                // Navigation
                'nav.home': 'Start',
                'nav.services': 'Services',
                'nav.about': 'Über uns',
                'nav.contact': 'Kontakt',

                // Hero Section
                'hero.title': 'Elite Managed Services',
                'hero.subtitle': 'Professionelle IT-Infrastruktur-Verwaltung mit modernster Expertise',
                'hero.description': 'Ich bin Joshua und arbeite mit meinem Expertenteam zusammen, um umfassende Managed Services zu liefern, die Ihr Unternehmen auf Höchstleistung halten. Von Cloud-Infrastruktur bis Cybersicherheit - wir haben alles abgedeckt.',
                'hero.cta.primary': 'Loslegen',
                'hero.cta.secondary': 'Mehr erfahren',

                // Floating Cards
                'card.infrastructure.title': 'Infrastruktur-Management',
                'card.infrastructure.desc': 'Vollständige Überwachung Ihrer IT-Infrastruktur mit proaktivem Monitoring und Optimierung.',
                'card.security.title': 'Cybersicherheits-Lösungen',
                'card.security.desc': 'Erweiterte Bedrohungsabwehr und Sicherheitsprotokolle zum Schutz Ihrer digitalen Assets.',
                'card.cloud.title': 'Cloud-Services',
                'card.cloud.desc': 'Skalierbare Cloud-Lösungen für Leistung, Zuverlässigkeit und Kosteneffizienz.',

                // Services Overview
                'services.title': 'Unsere Kern-Services',
                'services.subtitle': 'Umfassende Managed Services, maßgeschneidert für Ihre Geschäftsanforderungen',
                'services.infrastructure.title': 'Infrastruktur & Betrieb',
                'services.infrastructure.desc': 'Komplettes IT-Infrastruktur-Management und operative Exzellenz.',
                'services.security.title': 'Sicherheit & Compliance',
                'services.security.desc': 'Erweiterte Cybersicherheit und regulatorische Compliance-Lösungen.',
                'services.cloud.title': 'Cloud & DevOps',
                'services.cloud.desc': 'Moderne Cloud-Architektur und Entwicklungsoperationen.',
                'services.support.title': '24/7 Support & Monitoring',
                'services.support.desc': 'Rund-um-die-Uhr technischer Support und Systemüberwachung.',
                'services.consulting.title': 'Strategische IT-Beratung',
                'services.consulting.desc': 'Expertenführung für Ihre digitale Transformationsreise.',
                'services.automation.title': 'Prozess-Automatisierung',
                'services.automation.desc': 'Optimieren Sie Abläufe mit intelligenten Automatisierungslösungen.',

                // Managed Services Categories
                'managed.title': 'Umfassende Managed Services',
                'managed.subtitle': 'Komplettes Technologie-Management in allen kritischen Geschäftsbereichen',
                'managed.infrastructure.title': 'Infrastruktur-Management',
                'managed.security.title': 'Sicherheit & Compliance',
                'managed.cloud.title': 'Cloud & DevOps',
                'managed.support.title': 'Support & Monitoring',

                // Infrastructure Services
                'service.server.management': 'Server-Management & Wartung',
                'service.network.administration': 'Netzwerk-Administration',
                'service.storage.solutions': 'Speicher-Lösungen & Backup',
                'service.virtualization.management': 'Virtualisierungs-Management',
                'service.hardware.procurement': 'Hardware-Beschaffung & Setup',
                'service.capacity.planning': 'Kapazitätsplanung & Skalierung',
                'service.disaster.recovery': 'Disaster Recovery Planung',
                'service.performance.optimization': 'Leistungsoptimierung',

                // Security Services
                'service.threat.detection': 'Bedrohungserkennung & Reaktion',
                'service.vulnerability.assessment': 'Schwachstellen-Assessment',
                'service.compliance.management': 'Compliance-Management',
                'service.security.audits': 'Sicherheits-Audits & Reviews',
                'service.endpoint.protection': 'Endpoint-Schutz',
                'service.firewall.management': 'Firewall-Management',
                'service.identity.management': 'Identity & Access Management',
                'service.security.training': 'Sicherheitsbewusstsein-Schulung',

                // Cloud Services
                'service.cloud.migration': 'Cloud-Migration & Strategie',
                'service.devops.implementation': 'DevOps-Implementierung',
                'service.container.orchestration': 'Container-Orchestrierung',
                'service.ci.cd.pipelines': 'CI/CD Pipeline Management',
                'service.infrastructure.code': 'Infrastructure as Code',
                'service.cloud.cost.optimization': 'Cloud-Kostenoptimierung',
                'service.multi.cloud.management': 'Multi-Cloud Management',
                'service.serverless.architecture': 'Serverless-Architektur',

                // Support Services
                'service.help.desk': 'Help Desk & Benutzer-Support',
                'service.system.monitoring': 'System-Monitoring & Alerting',
                'service.patch.management': 'Patch-Management',
                'service.software.licensing': 'Software-Lizenz-Management',
                'service.documentation.management': 'Dokumentations-Management',
                'service.change.management': 'Change-Management',
                'service.incident.response': 'Incident Response',
                'service.maintenance.windows': 'Wartungsfenster-Planung',

                // About Section
                'about.title': 'Über Joshua & Team',
                'about.subtitle': 'Expertengeführte Managed Services mit persönlicher Note',
                'about.description': 'Ich bin Joshua, ein erfahrener IT-Profi, der mit einem sorgfältig ausgewählten Spezialistenteam zusammenarbeitet. Gemeinsam bringen wir jahrzehntelange kombinierte Erfahrung in Enterprise-IT-Management, Cybersicherheit und Cloud-Operationen mit. Unser Ansatz kombiniert modernste Technologie mit personalisierter Serviceerbringung.',
                'about.experience': 'Unser Team hat erfolgreich IT-Infrastruktur für Unternehmen von Startups bis Fortune 500-Konzerne verwaltet und dabei optimale Leistung, Sicherheit und Skalierbarkeit gewährleistet.',
                'about.stats.projects': 'Projekte abgeschlossen',
                'about.stats.uptime': 'Durchschnittliche Uptime',
                'about.stats.response': 'Ø Reaktionszeit',
                'about.stats.satisfaction': 'Kundenzufriedenheit',

                // Contact Section
                'contact.title': 'Kontakt aufnehmen',
                'contact.subtitle': 'Bereit, Ihre IT-Infrastruktur zu optimieren? Sprechen wir über Ihre Bedürfnisse.',
                'contact.info.title': 'Kontaktinformationen',
                'contact.info.email': 'hello@treudler.com',
                'contact.info.phone': '+1 (555) 123-4567',
                'contact.info.location': 'Remote & Vor-Ort Services',
                'contact.form.title': 'Senden Sie uns eine Nachricht',
                'contact.form.name': 'Ihr Name',
                'contact.form.email': 'Ihre E-Mail',
                'contact.form.company': 'Firmenname',
                'contact.form.message': 'Erzählen Sie uns von Ihren IT-Anforderungen...',
                'contact.form.submit': 'Nachricht senden',
                'contact.cta.title': 'Bereit anzufangen?',
                'contact.cta.description': 'Kontaktieren Sie uns heute für eine kostenlose Beratung und entdecken Sie, wie wir Ihre IT-Infrastruktur optimieren können.',
                'contact.cta.button': 'Beratung planen',

                // Footer
                'footer.tagline': 'Elite Managed Services für das digitale Zeitalter',
                'footer.links.privacy': 'Datenschutzrichtlinie',
                'footer.links.terms': 'Nutzungsbedingungen',
                'footer.links.support': 'Support',
                'footer.copyright': '© 2024 Treudler Managed Services. Alle Rechte vorbehalten.',

                // Notifications
                'notification.success': 'Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.',
                'notification.error': 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
                'notification.language.switched': 'Sprache erfolgreich geändert'
            }
        };
    }

    // Detect browser language and user preference
    detectLanguage() {
        const savedLanguage = localStorage.getItem('preferred-language');
        const browserLanguage = navigator.language.split('-')[0];
        
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else if (this.translations[browserLanguage]) {
            this.currentLanguage = browserLanguage;
        } else {
            this.currentLanguage = 'en'; // Default fallback
        }
        
        // Update document language attribute
        document.documentElement.lang = this.currentLanguage;
    }

    // Setup language switcher in navigation
    setupLanguageSwitcher() {
        const nav = document.querySelector('.nav-links');
        if (!nav) return;

        const languageSwitch = document.createElement('div');
        languageSwitch.className = 'language-switcher';
        languageSwitch.innerHTML = `
            <button class="lang-btn ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
                <span class="flag">🇺🇸</span> EN
            </button>
            <button class="lang-btn ${this.currentLanguage === 'de' ? 'active' : ''}" data-lang="de">
                <span class="flag">🇩🇪</span> DE
            </button>
        `;

        nav.appendChild(languageSwitch);

        // Add click event listeners
        languageSwitch.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = btn.dataset.lang;
                this.switchLanguage(newLang);
            });
        });
    }

    // Switch to specified language
    switchLanguage(language) {
        if (!this.translations[language]) return;

        this.currentLanguage = language;
        localStorage.setItem('preferred-language', language);
        document.documentElement.lang = language;

        // Update language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === language);
        });

        // Translate the page
        this.translatePage();

        // Show notification
        this.showNotification(this.translate('notification.language.switched'), 'success');
    }

    // Translate entire page
    translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Handle special cases with HTML content
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = this.translate(key);
            
            if (translation) {
                element.innerHTML = translation;
            }
        });

        // Update page title based on language
        const titleKey = this.currentLanguage === 'de' ? 'Joshua Treudler - Managed Services Richtig Gemacht' : 'Joshua Treudler - Managed Services Done Right';
        document.title = titleKey;
    }

    // Get translation for a key
    translate(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                // Fallback to English if translation not found
                translation = this.translations['en'];
                for (const fallbackKey of keys) {
                    if (translation && translation[fallbackKey]) {
                        translation = translation[fallbackKey];
                    } else {
                        return key; // Return key if no translation found
                    }
                }
                break;
            }
        }
        
        return translation || key;
    }

    // Show notification (reuse existing function)
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Check if language is supported
    isLanguageSupported(language) {
        return !!this.translations[language];
    }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18n;
}
