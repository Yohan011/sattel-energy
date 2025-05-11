// Système de traduction simple pour le site Sattel Energy

export type Language = "fr" | "en"

export type TranslationKey =
  | "nav.about"
  | "nav.solutions"
  | "nav.products"
  | "nav.projects"
  | "nav.contact"
  | "nav.quote"
  | "nav.search"
  | "about.company"
  | "about.history"
  | "about.mission"
  | "about.faq"
  | "about.partners"
  | "solutions.residential"
  | "solutions.commercial"
  | "solutions.industrial"
  | "solutions.agricultural"
  | "solutions.photovoltaic"
  | "solutions.storage"
  | "solutions.monitoring"
  | "solutions.evCharging"
  | "products.panels"
  | "products.inverters"
  | "products.batteries"
  | "products.monitoring"
  | "products.mounting"
  | "products.accessories"
  | "products.viewAll"
  | "products.storage"
  | "home.hero.title"
  | "home.hero.subtitle"
  | "home.hero.cta1"
  | "home.hero.cta2"
  | "home.solutions.title"
  | "home.solutions.subtitle"
  | "home.products.title"
  | "home.products.subtitle"
  | "home.products.cta"
  | "home.about.title"
  | "home.about.subtitle"
  | "home.about.innovation"
  | "home.about.sustainability"
  | "home.about.expertise"
  | "home.about.cta"
  | "home.news.title"
  | "home.news.subtitle"
  | "home.news.cta"
  | "home.cta.title"
  | "home.cta.subtitle"
  | "home.cta.cta1"
  | "home.cta.cta2"
  | "footer.description"
  | "footer.quickLinks"
  | "footer.contact"
  | "footer.newsletter"
  | "footer.newsletter.cta"
  | "footer.rights"
  | "footer.privacy"
  | "footer.terms"
  | "footer.cookies"
  | "contact.title"
  | "contact.subtitle"
  | "contact.info.title"
  | "contact.info.address"
  | "contact.info.phone"
  | "contact.info.email"
  | "contact.info.hours"
  | "contact.form.title"
  | "contact.form.name"
  | "contact.form.email"
  | "contact.form.phone"
  | "contact.form.userType"
  | "contact.form.userType.distribution"
  | "contact.form.userType.professional"
  | "contact.form.userType.government"
  | "contact.form.userType.residential"
  | "contact.form.userType.other"
  | "contact.form.subject"
  | "contact.form.message"
  | "contact.form.submit"
  | "contact.quote.title"
  | "contact.quote.subtitle"
  | "contact.quote.cta"
  | "faq.title"
  | "faq.subtitle"
  | "faq.search"
  | "faq.categories.all"
  | "faq.categories.general"
  | "faq.categories.technical"
  | "faq.categories.commercial"
  | "faq.categories.installation"
  | "faq.notFound"
  | "faq.reset"
  | "faq.contact.title"
  | "faq.contact.subtitle"
  | "faq.contact.cta"
  | "products.title"
  | "products.subtitle"
  | "products.catalog.title"
  | "products.catalog.subtitle"
  | "products.custom.title"
  | "products.custom.description1"
  | "products.custom.description2"
  | "products.details.specifications"
  | "products.details.features"
  | "products.details.applications"
  | "products.details.warranty"
  | "products.details.downloads"
  | "products.details.relatedProducts"
  | "products.details.requestInfo"
  | "quote.title"
  | "quote.subtitle"
  | "quote.step"
  | "quote.projectType"
  | "quote.projectType.subtitle"
  | "quote.projectType.residential"
  | "quote.projectType.commercial"
  | "quote.projectType.industrial"
  | "quote.location.title"
  | "quote.location.subtitle"
  | "quote.location.placeholder"
  | "quote.location.needs"
  | "quote.location.needs.placeholder"
  | "quote.contact.title"
  | "quote.contact.subtitle"
  | "quote.contact.name"
  | "quote.contact.email"
  | "quote.contact.phone"
  | "quote.contact.company"
  | "quote.message.title"
  | "quote.message.subtitle"
  | "quote.message.placeholder"
  | "quote.success.title"
  | "quote.success.message"
  | "quote.buttons.previous"
  | "quote.buttons.next"
  | "quote.buttons.send"
  | "quote.buttons.close"
  | "search.title"
  | "search.placeholder"
  | "search.results"
  | "search.noResults"
  | "solutions.hero.title"
  | "solutions.hero.description"
  | "solutions.hero.cta"
  | "solutions.learnMore"
  | "solutions.bySector.title"
  | "solutions.bySector.description"
  | "solutions.byTechnology.title"
  | "solutions.byTechnology.description"
  | "solutions.features.title"
  | "solutions.features.description"
  | "solutions.features.customized.title"
  | "solutions.features.customized.description"
  | "solutions.features.turnkey.title"
  | "solutions.features.turnkey.description"
  | "solutions.features.quality.title"
  | "solutions.features.quality.description"
  | "solutions.features.sustainable.title"
  | "solutions.features.sustainable.description"
  | "solutions.features.support.title"
  | "solutions.features.support.description"
  | "solutions.features.financing.title"
  | "solutions.features.financing.description"
  | "solutions.cta.title"
  | "solutions.cta.description"
  | "solutions.cta.primary"
  | "solutions.cta.secondary"
  | "solutions.residential.title"
  | "solutions.residential.description"
  | "solutions.commercial.title"
  | "solutions.commercial.description"
  | "solutions.industrial.title"
  | "solutions.industrial.description"
  | "solutions.agricultural.title"
  | "solutions.agricultural.description"
  | "solutions.photovoltaic.title"
  | "solutions.photovoltaic.description"
  | "solutions.storage.title"
  | "solutions.storage.description"
  | "solutions.monitoring.title"
  | "solutions.monitoring.description"
  | "solutions.evCharging.title"
  | "solutions.evCharging.description"
  | "solutions.benefits.title"
  | "solutions.benefits.subtitle"
  | "solutions.process.title"
  | "solutions.process.subtitle"
  | "solutions.process.step1.title"
  | "solutions.process.step1.description"
  | "solutions.process.step2.title"
  | "solutions.process.step2.description"
  | "solutions.process.step3.title"
  | "solutions.process.step3.description"
  | "solutions.process.step4.title"
  | "solutions.process.step4.description"
  // Commercial solutions specific translations
  | "solutions.commercial.hero.title"
  | "solutions.commercial.hero.description"
  | "solutions.commercial.features.title"
  | "solutions.commercial.features.subtitle"
  | "solutions.commercial.features.costs.title"
  | "solutions.commercial.features.costs.description"
  | "solutions.commercial.features.brand.title"
  | "solutions.commercial.features.brand.description"
  | "solutions.commercial.features.compliance.title"
  | "solutions.commercial.features.compliance.description"
  | "solutions.commercial.features.value.title"
  | "solutions.commercial.features.value.description"
  | "solutions.commercial.benefits.title"
  | "solutions.commercial.benefits.subtitle"
  | "solutions.commercial.benefits.roi.title"
  | "solutions.commercial.benefits.roi.description"
  | "solutions.commercial.benefits.certification.title"
  | "solutions.commercial.benefits.certification.description"
  | "solutions.commercial.benefits.independence.title"
  | "solutions.commercial.benefits.independence.description"
  | "solutions.commercial.process.title"
  | "solutions.commercial.process.subtitle"
  | "solutions.commercial.process.audit.title"
  | "solutions.commercial.process.audit.description"
  | "solutions.commercial.process.study.title"
  | "solutions.commercial.process.study.description"
  | "solutions.commercial.process.admin.title"
  | "solutions.commercial.process.admin.description"
  | "solutions.commercial.process.installation.title"
  | "solutions.commercial.process.installation.description"
  | "solutions.commercial.process.maintenance.title"
  | "solutions.commercial.process.maintenance.description"
  | "solutions.commercial.testimonial.quote"
  | "solutions.commercial.testimonial.author"
  | "solutions.commercial.testimonial.location"
  | "solutions.commercial.cta.title"
  | "solutions.commercial.cta.description"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  fr: {
    "nav.about": "À propos de nous",
    "nav.solutions": "Solutions",
    "nav.products": "Produits",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.quote": "Demander un devis",
    "nav.search": "Rechercher...",
    "about.company": "Notre entreprise",
    "about.history": "Notre histoire",
    "about.mission": "Mission & Vision",
    "about.faq": "FAQ",
    "about.partners": "Partenaires",
    "solutions.residential": "Résidentiel",
    "solutions.commercial": "Commercial",
    "solutions.industrial": "Industriel",
    "solutions.agricultural": "Agricole",
    "solutions.photovoltaic": "Photovoltaïque",
    "solutions.storage": "Stockage d'énergie",
    "solutions.monitoring": "Monitoring",
    "solutions.evCharging": "Recharge VE",
    "products.panels": "Panneaux solaires",
    "products.inverters": "Onduleurs",
    "products.batteries": "Batteries",
    "products.monitoring": "Systèmes de monitoring",
    "products.mounting": "Structures",
    "products.accessories": "Accessoires",
    "products.viewAll": "Voir tous les produits",
    "products.storage": "Systèmes de stockage",
    "home.hero.title": "Sattel Energy : Allumer aujourd'hui l'Afrique de demain",
    "home.hero.subtitle":
      "Des petits systèmes résidentiels aux grandes installations commerciales, Sattel Energy propose des solutions sur mesure pour tous vos besoins énergétiques.",
    "home.hero.cta1": "Découvrir nos solutions",
    "home.hero.cta2": "Contacter un expert",
    "home.solutions.title": "Solutions adaptées à tous les besoins",
    "home.solutions.subtitle":
      "Sattel Energy propose une gamme complète de solutions d'énergie solaire pour les particuliers, les institutions et les entreprises.",
    "home.products.title": "Nos produits phares",
    "home.products.subtitle": "Découvrez notre gamme de produits innovants pour tous vos projets d'énergie solaire.",
    "home.products.cta": "Voir tous les produits",
    "home.about.title": "Pourquoi choisir Sattel Energy?",
    "home.about.subtitle":
      "Nous combinons expertise technique, innovation et engagement pour la transition énergétique.",
    "home.about.innovation": "Innovation constante",
    "home.about.sustainability": "Engagement durable",
    "home.about.expertise": "Expertise technique",
    "home.about.cta": "En savoir plus sur nous",
    "home.news.title": "Actualités et événements",
    "home.news.subtitle": "Restez informé des dernières nouvelles et événements de Sattel Energy.",
    "home.news.cta": "Toutes les actualités",
    "home.cta.title": "Prêt à passer à l'énergie solaire?",
    "home.cta.subtitle":
      "Nos experts sont à votre disposition pour vous accompagner dans votre projet d'énergie solaire.",
    "home.cta.cta1": "Demander un devis gratuit",
    "home.cta.cta2": "Contacter un conseiller",
    "footer.description":
      "Solutions d'énergie solaire innovantes pour les particuliers, les institutions et les entreprises.",
    "footer.quickLinks": "Liens rapides",
    "footer.contact": "Contact",
    "footer.newsletter": "Newsletter",
    "footer.newsletter.cta": "S'inscrire",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.cookies": "Cookies",
    "contact.title": "Contactez-nous",
    "contact.subtitle":
      "Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet d'énergie solaire.",
    "contact.info.title": "Nos coordonnées",
    "contact.info.address": "123 Rue du Soleil, 75001 Paris, France",
    "contact.info.phone": "+33 1 23 45 67 89",
    "contact.info.email": "info@sattelenergy.com",
    "contact.info.hours": "Lundi - Vendredi: 9h00 - 18h00",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Email",
    "contact.form.phone": "Téléphone",
    "contact.form.userType": "Qui êtes-vous ?",
    "contact.form.userType.distribution": "Entreprise de distribution",
    "contact.form.userType.professional": "Client professionnel",
    "contact.form.userType.government": "Institution gouvernementale",
    "contact.form.userType.residential": "Client résidentiel",
    "contact.form.userType.other": "Autres",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le message",
    "contact.quote.title": "Besoin d'un devis personnalisé ?",
    "contact.quote.subtitle": "Vous avez un projet spécifique ? Demandez un devis détaillé adapté à vos besoins.",
    "contact.quote.cta": "Demander un devis gratuit",
    "faq.title": "Questions fréquemment posées",
    "faq.subtitle": "Trouvez des réponses aux questions les plus courantes sur l'énergie solaire et nos services.",
    "faq.search": "Rechercher une question...",
    "faq.categories.all": "Tous",
    "faq.categories.general": "Général",
    "faq.categories.technical": "Technique",
    "faq.categories.commercial": "Commercial",
    "faq.categories.installation": "Installation",
    "faq.notFound": "Aucune question ne correspond à votre recherche. Essayez avec d'autres termes.",
    "faq.reset": "Réinitialiser la recherche",
    "faq.contact.title": "Vous n'avez pas trouvé votre réponse ?",
    "faq.contact.subtitle": "Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques.",
    "faq.contact.cta": "Contactez-nous",
    "products.title": "Nos Produits",
    "products.subtitle":
      "Explorez notre gamme complète de solutions d'énergie solaire conçues pour répondre à tous vos besoins énergétiques, des installations résidentielles aux projets industriels.",
    "products.catalog.title": "Catalogue de solutions solaires",
    "products.catalog.subtitle":
      "Découvrez notre gamme complète de solutions d'énergie solaire pour répondre à tous vos besoins énergétiques.",
    "products.custom.title": "Solutions sur mesure",
    "products.custom.description1":
      "Chez Sattel Energy, nous comprenons que chaque projet est unique. C'est pourquoi nous proposons des solutions personnalisées adaptées à vos besoins spécifiques, qu'il s'agisse d'une installation résidentielle ou d'un projet industriel à grande échelle.",
    "products.custom.description2":
      "Notre équipe d'experts vous accompagne à chaque étape, de la conception à l'installation et à la maintenance, pour garantir une performance optimale de votre système solaire.",
    "products.details.specifications": "Spécifications techniques",
    "products.details.features": "Caractéristiques",
    "products.details.applications": "Applications",
    "products.details.warranty": "Garantie",
    "products.details.downloads": "Téléchargements",
    "products.details.relatedProducts": "Produits associés",
    "products.details.requestInfo": "Demander plus d'informations",
    "quote.title": "Demande de devis",
    "quote.subtitle": "Pour vous offrir la meilleure solution adaptée à vos besoins",
    "quote.step": "Étape",
    "quote.projectType": "Type de projet",
    "quote.projectType.subtitle": "Sélectionnez la nature de votre projet",
    "quote.projectType.residential": "Résidentiel",
    "quote.projectType.commercial": "Commercial",
    "quote.projectType.industrial": "Industriel",
    "quote.location.title": "Localisation et besoins",
    "quote.location.subtitle": "Précisez l'emplacement et vos besoins spécifiques",
    "quote.location.placeholder": "Ville, région, pays",
    "quote.location.needs": "Décrivez vos besoins",
    "quote.location.needs.placeholder": "Consommation d'énergie, objectifs, contraintes particulières...",
    "quote.contact.title": "Vos coordonnées",
    "quote.contact.subtitle": "Pour vous contacter et finaliser votre devis",
    "quote.contact.name": "Nom complet",
    "quote.contact.email": "Email",
    "quote.contact.phone": "Téléphone",
    "quote.contact.company": "Entreprise (facultatif)",
    "quote.message.title": "Message supplémentaire",
    "quote.message.subtitle": "Informations complémentaires pour votre demande",
    "quote.message.placeholder": "Précisions, questions, disponibilités...",
    "quote.success.title": "Demande envoyée avec succès !",
    "quote.success.message":
      "Nous avons bien reçu votre demande de devis. Notre équipe vous contactera dans les plus brefs délais.",
    "quote.buttons.previous": "Précédent",
    "quote.buttons.next": "Suivant",
    "quote.buttons.send": "Envoyer",
    "quote.buttons.close": "Fermer",
    "search.title": "Résultats de recherche",
    "search.placeholder": "Rechercher...",
    "search.results": "résultats trouvés pour",
    "search.noResults": "Aucun résultat trouvé pour",
    "solutions.hero.title": "Solutions énergétiques durables",
    "solutions.hero.description":
      "Nous proposons des solutions énergétiques sur mesure pour répondre aux besoins spécifiques de chaque client, qu'il s'agisse de particuliers, d'entreprises ou d'institutions.",
    "solutions.hero.cta": "Demander un devis",
    "solutions.learnMore": "En savoir plus",
    "solutions.bySector.title": "Solutions par secteur",
    "solutions.bySector.description": "Découvrez nos solutions adaptées à chaque secteur d'activité",
    "solutions.byTechnology.title": "Solutions par technologie",
    "solutions.byTechnology.description":
      "Explorez nos différentes technologies pour répondre à vos besoins énergétiques",
    "solutions.features.title": "Pourquoi choisir nos solutions",
    "solutions.features.description":
      "Nos solutions se distinguent par leur qualité, leur fiabilité et leur adaptabilité",
    "solutions.features.customized.title": "Solutions sur mesure",
    "solutions.features.customized.description":
      "Chaque projet est conçu spécifiquement pour répondre à vos besoins uniques",
    "solutions.features.turnkey.title": "Projets clé en main",
    "solutions.features.turnkey.description":
      "De la conception à la mise en service, nous gérons toutes les étapes de votre projet",
    "solutions.features.quality.title": "Équipements premium",
    "solutions.features.quality.description":
      "Nous utilisons uniquement des composants de haute qualité des meilleurs fabricants",
    "solutions.features.sustainable.title": "Impact environnemental",
    "solutions.features.sustainable.description":
      "Nos solutions contribuent activement à la réduction de l'empreinte carbone",
    "solutions.features.support.title": "Support continu",
    "solutions.features.support.description": "Notre équipe reste à votre disposition pour le suivi et la maintenance",
    "solutions.features.financing.title": "Options de financement",
    "solutions.features.financing.description":
      "Nous proposons diverses solutions de financement adaptées à votre budget",
    "solutions.cta.title": "Prêt à passer à l'énergie durable?",
    "solutions.cta.description":
      "Contactez-nous dès aujourd'hui pour discuter de votre projet ou utilisez notre configurateur pour obtenir une estimation rapide.",
    "solutions.cta.primary": "Nous contacter",
    "solutions.cta.secondary": "Utiliser le configurateur",
    "solutions.residential.title": "Solutions résidentielles",
    "solutions.residential.description":
      "Systèmes photovoltaïques et solutions de stockage pour les particuliers et les habitations",
    "solutions.commercial.title": "Solutions commerciales",
    "solutions.commercial.description": "Installations solaires pour bureaux, commerces et petites entreprises",
    "solutions.industrial.title": "Solutions industrielles",
    "solutions.industrial.description":
      "Systèmes énergétiques à grande échelle pour les sites industriels et manufacturiers",
    "solutions.agricultural.title": "Solutions agricoles",
    "solutions.agricultural.description": "Solutions adaptées aux exploitations agricoles et aux installations rurales",
    "solutions.photovoltaic.title": "Systèmes photovoltaïques",
    "solutions.photovoltaic.description": "Panneaux solaires de haute performance pour la production d'électricité",
    "solutions.storage.title": "Stockage d'énergie",
    "solutions.storage.description": "Solutions de batteries pour stocker l'énergie et optimiser l'autoconsommation",
    "solutions.monitoring.title": "Monitoring & Gestion",
    "solutions.monitoring.description": "Systèmes intelligents pour surveiller et optimiser votre production d'énergie",
    "solutions.evCharging.title": "Recharge véhicules électriques",
    "solutions.evCharging.description": "Bornes de recharge pour véhicules électriques alimentées par énergie solaire",
    "solutions.benefits.title": "Avantages de nos solutions",
    "solutions.benefits.subtitle": "Découvrez pourquoi nos solutions sont idéales pour vos besoins",
    "solutions.process.title": "Notre processus",
    "solutions.process.subtitle": "Comment nous mettons en œuvre votre projet d'énergie solaire",
    "solutions.process.step1.title": "Consultation",
    "solutions.process.step1.description": "Nous évaluons vos besoins et objectifs spécifiques",
    "solutions.process.step2.title": "Conception",
    "solutions.process.step2.description": "Nous concevons une solution personnalisée pour votre projet",
    "solutions.process.step3.title": "Installation",
    "solutions.process.step3.description": "Notre équipe installe votre système avec précision et professionnalisme",
    "solutions.process.step4.title": "Suivi",
    "solutions.process.step4.description": "Nous assurons le suivi et la maintenance de votre installation",
    // Commercial solutions translations
    "solutions.commercial.hero.title": "Solutions Commerciales",
    "solutions.commercial.hero.description": "Des solutions photovoltaïques adaptées aux bureaux, commerces et bâtiments tertiaires",
    "solutions.commercial.features.title": "Pourquoi choisir le solaire pour votre entreprise ?",
    "solutions.commercial.features.subtitle": "Découvrez les avantages d'une installation photovoltaïque pour votre activité commerciale",
    "solutions.commercial.features.costs.title": "Réduction des coûts opérationnels",
    "solutions.commercial.features.costs.description": "Diminuez significativement vos dépenses énergétiques et améliorez votre rentabilité",
    "solutions.commercial.features.brand.title": "Image de marque responsable",
    "solutions.commercial.features.brand.description": "Valorisez votre engagement environnemental auprès de vos clients et partenaires",
    "solutions.commercial.features.compliance.title": "Conformité réglementaire",
    "solutions.commercial.features.compliance.description": "Anticipez les futures réglementations environnementales pour les bâtiments commerciaux",
    "solutions.commercial.features.value.title": "Valorisation immobilière",
    "solutions.commercial.features.value.description": "Augmentez la valeur de vos actifs immobiliers grâce à une meilleure performance énergétique",
    "solutions.commercial.benefits.title": "Les bénéfices pour votre activité",
    "solutions.commercial.benefits.subtitle": "Une installation solaire offre de nombreux avantages stratégiques pour votre entreprise",
    "solutions.commercial.benefits.roi.title": "Retour sur investissement rapide",
    "solutions.commercial.benefits.roi.description": "Amortissement de l'installation en 5 à 8 ans avec une durée de vie de plus de 25 ans",
    "solutions.commercial.benefits.certification.title": "Certification environnementale",
    "solutions.commercial.benefits.certification.description": "Facilitez l'obtention de certifications (BREEAM, HQE, LEED) grâce à votre installation solaire",
    "solutions.commercial.benefits.independence.title": "Indépendance énergétique",
    "solutions.commercial.benefits.independence.description": "Réduisez votre dépendance au réseau et sécurisez vos approvisionnements énergétiques",
    "solutions.commercial.process.title": "Notre processus d'accompagnement",
    "solutions.commercial.process.subtitle": "Un accompagnement complet pour une transition énergétique sans souci",
    "solutions.commercial.process.audit.title": "Audit énergétique",
    "solutions.commercial.process.audit.description": "Analyse détaillée de votre consommation et de votre potentiel solaire",
    "solutions.commercial.process.study.title": "Étude technique et financière",
    "solutions.commercial.process.study.description": "Dimensionnement optimal et analyse de rentabilité avec différents scénarios",
    "solutions.commercial.process.admin.title": "Démarches administratives",
    "solutions.commercial.process.admin.description": "Gestion complète des autorisations et des demandes de raccordement",
    "solutions.commercial.process.installation.title": "Installation et mise en service",
    "solutions.commercial.process.installation.description": "Réalisation des travaux avec un impact minimal sur votre activité",
    "solutions.commercial.process.maintenance.title": "Maintenance et optimisation",
    "solutions.commercial.process.maintenance.description": "Suivi de performance et maintenance préventive pour maximiser votre production",
    "solutions.commercial.testimonial.quote": "L'installation photovoltaïque réalisée par Sattel Energy nous a permis de réduire nos coûts énergétiques de 40% et d'améliorer notre image de marque auprès de nos clients.",
    "solutions.commercial.testimonial.author": "Jean Dupont",
    "solutions.commercial.testimonial.location": "Directeur, Centre Commercial Bellevue",
    "solutions.commercial.cta.title": "Optimisez les coûts énergétiques de votre entreprise",
    "solutions.commercial.cta.description": "Contactez nos experts pour une étude personnalisée",
  },
  en: {
    "nav.about": "About Us",
    "nav.solutions": "Solutions",
    "nav.products": "Products",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.quote": "Request a Quote",
    "nav.search": "Search...",
    "about.company": "Our Company",
    "about.history": "Our History",
    "about.mission": "Mission & Vision",
    "about.faq": "FAQ",
    "about.partners": "Partners",
    "solutions.residential": "Residential",
    "solutions.commercial": "Commercial",
    "solutions.industrial": "Industrial",
    "solutions.agricultural": "Agricultural",
    "solutions.photovoltaic": "Photovoltaic",
    "solutions.storage": "Energy Storage",
    "solutions.monitoring": "Monitoring & Management",
    "solutions.evCharging": "EV Charging",
    "products.panels": "Solar Panels",
    "products.inverters": "Inverters",
    "products.batteries": "Batteries",
    "products.monitoring": "Monitoring Systems",
    "products.mounting": "Mounting Systems",
    "products.accessories": "Accessories",
    "products.viewAll": "View All Products",
    "products.storage": "Energy Storage Systems",
    "home.hero.title": "SATTEL Energy : Allumer aujourd'hui l'Afrique de demain",
    "home.hero.subtitle":
      "From small residential systems to large commercial installations, Sattel Energy offers tailored solutions for all your energy needs.",
    "home.hero.cta1": "Discover Our Solutions",
    "home.hero.cta2": "Contact an Expert",
    "home.solutions.title": "Solutions for All Needs",
    "home.solutions.subtitle":
      "Sattel Energy offers a complete range of solar energy solutions for individuals, institutions, and businesses.",
    "home.products.title": "Our Featured Products",
    "home.products.subtitle": "Discover our range of innovative products for all your solar energy projects.",
    "home.products.cta": "View All Products",
    "home.about.title": "Why Choose Sattel Energy?",
    "home.about.subtitle": "We combine technical expertise, innovation, and commitment to energy transition.",
    "home.about.innovation": "Constant Innovation",
    "home.about.sustainability": "Sustainable Commitment",
    "home.about.expertise": "Technical Expertise",
    "home.about.cta": "Learn More About Us",
    "home.news.title": "News and Events",
    "home.news.subtitle": "Stay informed about the latest news and events from Sattel Energy.",
    "home.news.cta": "All News",
    "home.cta.title": "Ready to Switch to Solar Energy?",
    "home.cta.subtitle": "Our experts are available to assist you with your solar energy project.",
    "home.cta.cta1": "Request a Free Quote",
    "home.cta.cta2": "Contact an Advisor",
    "footer.description": "Innovative solar energy solutions for individuals, institutions, and businesses.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.newsletter": "Newsletter",
    "footer.newsletter.cta": "Subscribe",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.cookies": "Cookies",
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Our team is available to answer all your questions and assist you with your solar energy project.",
    "contact.info.title": "Our Contact Information",
    "contact.info.address": "123 Sun Street, 75001 Paris, France",
    "contact.info.phone": "+33 1 23 45 67 89",
    "contact.info.email": "info@sattelenergy.com",
    "contact.info.hours": "Monday - Friday: 9:00 AM - 6:00 PM",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.userType": "Who Are You?",
    "contact.form.userType.distribution": "Distribution Company",
    "contact.form.userType.professional": "Professional Client",
    "contact.form.userType.government": "Government Institution",
    "contact.form.userType.residential": "Residential Client",
    "contact.form.userType.other": "Others",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.quote.title": "Need a Customized Quote?",
    "contact.quote.subtitle": "Have a specific project? Request a detailed quote tailored to your needs.",
    "contact.quote.cta": "Request a Free Quote",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to the most common questions about solar energy and our services.",
    "faq.search": "Search for a question...",
    "faq.categories.all": "All",
    "faq.categories.general": "General",
    "faq.categories.technical": "Technical",
    "faq.categories.commercial": "Commercial",
    "faq.categories.installation": "Installation",
    "faq.notFound": "No questions match your search. Try with other terms.",
    "faq.reset": "Reset Search",
    "faq.contact.title": "Didn't Find Your Answer?",
    "faq.contact.subtitle": "Our team is available to answer all your specific questions.",
    "faq.contact.cta": "Contact Us",
    "products.title": "Our Products",
    "products.subtitle":
      "Explore our complete range of solar energy solutions designed to meet all your energy needs, from residential installations to industrial projects.",
    "products.catalog.title": "Solar Solutions Catalog",
    "products.catalog.subtitle": "Discover our complete range of solar energy solutions to meet all your energy needs.",
    "products.custom.title": "Custom Solutions",
    "products.custom.description1":
      "At Sattel Energy, we understand that each project is unique. That's why we offer customized solutions tailored to your specific needs, whether it's a residential installation or a large-scale industrial project.",
    "products.custom.description2":
      "Our team of experts accompanies you at every step, from design to installation and maintenance, to ensure optimal performance of your solar system.",
    "products.details.specifications": "Technical Specifications",
    "products.details.features": "Features",
    "products.details.applications": "Applications",
    "products.details.warranty": "Warranty",
    "products.details.downloads": "Downloads",
    "products.details.relatedProducts": "Related Products",
    "products.details.requestInfo": "Request More Information",
    "quote.title": "Quote Request",
    "quote.subtitle": "To offer you the best solution adapted to your needs",
    "quote.step": "Step",
    "quote.projectType": "Project Type",
    "quote.projectType.subtitle": "Select the nature of your project",
    "quote.projectType.residential": "Residential",
    "quote.projectType.commercial": "Commercial",
    "quote.projectType.industrial": "Industrial",
    "quote.location.title": "Location and Needs",
    "quote.location.subtitle": "Specify the location and your specific needs",
    "quote.location.placeholder": "City, region, country",
    "quote.location.needs": "Describe your needs",
    "quote.location.needs.placeholder": "Energy consumption, objectives, specific constraints...",
    "quote.contact.title": "Your Contact Information",
    "quote.contact.subtitle": "To contact you and finalize your quote",
    "quote.contact.name": "Full Name",
    "quote.contact.email": "Email",
    "quote.contact.phone": "Phone",
    "quote.contact.company": "Company (optional)",
    "quote.message.title": "Additional Message",
    "quote.message.subtitle": "Additional information for your request",
    "quote.message.placeholder": "Details, questions, availability...",
    "quote.success.title": "Request Sent Successfully!",
    "quote.success.message": "We have received your quote request. Our team will contact you as soon as possible.",
    "quote.buttons.previous": "Previous",
    "quote.buttons.next": "Next",
    "quote.buttons.send": "Send",
    "quote.buttons.close": "Close",
    "search.title": "Search Results",
    "search.placeholder": "Search...",
    "search.results": "results found for",
    "search.noResults": "No results found for",
    "solutions.hero.title": "Sustainable Energy Solutions",
    "solutions.hero.description":
      "We offer customized energy solutions to meet the specific needs of each client, whether individuals, businesses, or institutions.",
    "solutions.hero.cta": "Request a Quote",
    "solutions.learnMore": "Learn more",
    "solutions.bySector.title": "Solutions by Sector",
    "solutions.bySector.description": "Discover our solutions adapted to each sector of activity",
    "solutions.byTechnology.title": "Solutions by Technology",
    "solutions.byTechnology.description": "Explore our different technologies to meet your energy needs",
    "solutions.features.title": "Why Choose Our Solutions",
    "solutions.features.description": "Our solutions stand out for their quality, reliability, and adaptability",
    "solutions.features.customized.title": "Customized Solutions",
    "solutions.features.customized.description": "Each project is specifically designed to meet your unique needs",
    "solutions.features.turnkey.title": "Turnkey Projects",
    "solutions.features.turnkey.description": "From design to commissioning, we manage all stages of your project",
    "solutions.features.quality.title": "Premium Equipment",
    "solutions.features.quality.description": "We only use high-quality components from the best manufacturers",
    "solutions.features.sustainable.title": "Environmental Impact",
    "solutions.features.sustainable.description": "Our solutions actively contribute to reducing carbon footprint",
    "solutions.features.support.title": "Ongoing Support",
    "solutions.features.support.description": "Our team remains at your disposal for monitoring and maintenance",
    "solutions.features.financing.title": "Financing Options",
    "solutions.features.financing.description": "We offer various financing solutions adapted to your budget",
    "solutions.cta.title": "Ready to Switch to Sustainable Energy?",
    "solutions.cta.description":
      "Contact us today to discuss your project or use our configurator for a quick estimate.",
    "solutions.cta.primary": "Contact Us",
    "solutions.cta.secondary": "Use the Configurator",
    "solutions.residential.title": "Residential Solutions",
    "solutions.residential.description": "Photovoltaic systems and storage solutions for individuals and homes",
    "solutions.commercial.title": "Commercial Solutions",
    "solutions.commercial.description": "Solar installations for offices, shops, and small businesses",
    "solutions.industrial.title": "Industrial Solutions",
    "solutions.industrial.description": "Large-scale energy systems for industrial and manufacturing sites",
    "solutions.agricultural.title": "Agricultural Solutions",
    "solutions.agricultural.description": "Solutions adapted to farms and rural installations",
    "solutions.photovoltaic.title": "Photovoltaic Systems",
    "solutions.photovoltaic.description": "High-performance solar panels for electricity production",
    "solutions.storage.title": "Energy Storage",
    "solutions.storage.description": "Battery solutions to store energy and optimize self-consumption",
    "solutions.monitoring.title": "Monitoring & Management",
    "solutions.monitoring.description": "Smart systems to monitor and optimize your energy production",
    "solutions.evCharging.title": "EV Charging",
    "solutions.evCharging.description": "Electric vehicle charging stations powered by solar energy",
    "solutions.benefits.title": "Benefits of Our Solutions",
    "solutions.benefits.subtitle": "Discover why our solutions are ideal for your needs",
    "solutions.process.title": "Our Process",
    "solutions.process.subtitle": "How we implement your solar energy project",
    "solutions.process.step1.title": "Consultation",
    "solutions.process.step1.description": "We assess your specific needs and goals",
    "solutions.process.step2.title": "Design",
    "solutions.process.step2.description": "We design a customized solution for your project",
    "solutions.process.step3.title": "Installation",
    "solutions.process.step3.description": "Our team installs your system with precision and professionalism",
    "solutions.process.step4.title": "Follow-up",
    "solutions.process.step4.description": "We ensure the monitoring and maintenance of your installation",
    // Commercial solutions translations
    "solutions.commercial.hero.title": "Commercial Solutions",
    "solutions.commercial.hero.description": "Photovoltaic solutions adapted to offices, shops and commercial buildings",
    "solutions.commercial.features.title": "Why choose solar for your business?",
    "solutions.commercial.features.subtitle": "Discover the benefits of a photovoltaic installation for your commercial activity",
    "solutions.commercial.features.costs.title": "Reduction of operational costs",
    "solutions.commercial.features.costs.description": "Significantly reduce your energy expenses and improve your profitability",
    "solutions.commercial.features.brand.title": "Responsible brand image",
    "solutions.commercial.features.brand.description": "Promote your environmental commitment to your customers and partners",
    "solutions.commercial.features.compliance.title": "Regulatory compliance",
    "solutions.commercial.features.compliance.description": "Anticipate future environmental regulations for commercial buildings",
    "solutions.commercial.features.value.title": "Property valuation",
    "solutions.commercial.features.value.description": "Increase the value of your real estate assets thanks to better energy performance",
    "solutions.commercial.benefits.title": "Benefits for your business",
    "solutions.commercial.benefits.subtitle": "A solar installation offers many strategic advantages for your company",
    "solutions.commercial.benefits.roi.title": "Quick return on investment",
    "solutions.commercial.benefits.roi.description": "Amortization of the installation in 5 to 8 years with a lifespan of more than 25 years",
    "solutions.commercial.benefits.certification.title": "Environmental certification",
    "solutions.commercial.benefits.certification.description": "Facilitate obtaining certifications (BREEAM, HQE, LEED) thanks to your solar installation",
    "solutions.commercial.benefits.independence.title": "Energy independence",
    "solutions.commercial.benefits.independence.description": "Reduce your dependence on the grid and secure your energy supplies",
    "solutions.commercial.process.title": "Our support process",
    "solutions.commercial.process.subtitle": "Complete support for a worry-free energy transition",
    "solutions.commercial.process.audit.title": "Energy audit",
    "solutions.commercial.process.audit.description": "Detailed analysis of your consumption and your solar potential",
    "solutions.commercial.process.study.title": "Technical and financial study",
    "solutions.commercial.process.study.description": "Optimal sizing and profitability analysis with different scenarios",
    "solutions.commercial.process.admin.title": "Administrative procedures",
    "solutions.commercial.process.admin.description": "Complete management of authorizations and connection requests",
    "solutions.commercial.process.installation.title": "Installation and commissioning",
    "solutions.commercial.process.installation.description": "Carrying out the work with minimal impact on your activity",
    "solutions.commercial.process.maintenance.title": "Maintenance and optimization",
    "solutions.commercial.process.maintenance.description": "Performance monitoring and preventive maintenance to maximize your production",
    "solutions.commercial.testimonial.quote": "The photovoltaic installation carried out by Sattel Energy has allowed us to reduce our energy costs by 40% and improve our brand image with our customers.",
    "solutions.commercial.testimonial.author": "John Smith",
    "solutions.commercial.testimonial.location": "Director, Bellevue Shopping Center",
    "solutions.commercial.cta.title": "Optimize your company's energy costs",
    "solutions.commercial.cta.description": "Contact our experts for a personalized study",
  },
}

translations.fr["products.storage"] = "Systèmes de stockage"
translations.en["products.storage"] = "Energy Storage Systems"

// 1. Fix inconsistent capitalization in English translations
translations.en["solutions.storage"] = "Energy Storage"
translations.en["solutions.monitoring"] = "Monitoring & Management"
translations.en["products.monitoring"] = "Monitoring Systems"

// 2. Ensure consistent terminology in French
translations.fr["solutions.storage"] = "Stockage d'énergie"
translations.fr["products.storage"] = "Systèmes de stockage"
translations.fr["products.monitoring"] = "Systèmes de monitoring"

translations.fr["products.details.specifications"] = "Spécifications techniques"
translations.fr["products.details.features"] = "Caractéristiques"
translations.fr["products.details.applications"] = "Applications"
translations.fr["products.details.warranty"] = "Garantie"
translations.fr["products.details.downloads"] = "Téléchargements"
translations.fr["products.details.relatedProducts"] = "Produits associés"
translations.fr["products.details.requestInfo"] = "Demander plus d'informations"

translations.en["products.details.specifications"] = "Technical Specifications"
translations.en["products.details.features"] = "Features"
translations.en["products.details.applications"] = "Applications"
translations.en["products.details.warranty"] = "Warranty"
translations.en["products.details.downloads"] = "Downloads"
translations.en["products.details.relatedProducts"] = "Related Products"
translations.en["products.details.requestInfo"] = "Request More Information"

translations.fr["solutions.benefits.title"] = "Avantages de nos solutions"
translations.fr["solutions.benefits.subtitle"] = "Découvrez pourquoi nos solutions sont idéales pour vos besoins"
translations.fr["solutions.process.title"] = "Notre processus"
translations.fr["solutions.process.subtitle"] = "Comment nous mettons en œuvre votre projet d'énergie solaire"
translations.fr["solutions.process.step1.title"] = "Consultation"
translations.fr["solutions.process.step1.description"] = "Nous évaluons vos besoins et objectifs spécifiques"
translations.fr["solutions.process.step2.title"] = "Conception"
translations.fr["solutions.process.step2.description"] = "Nous concevons une solution personnalisée pour votre projet"
translations.fr["solutions.process.step3.title"] = "Installation"
translations.fr["solutions.process.step3.description"] =
  "Notre équipe installe votre système avec précision et professionnalisme"
translations.fr["solutions.process.step4.title"] = "Suivi"
translations.fr["solutions.process.step4.description"] =
  "Nous assurons le suivi et la maintenance de votre installation"

translations.en["solutions.benefits.title"] = "Benefits of Our Solutions"
translations.en["solutions.benefits.subtitle"] = "Discover why our solutions are ideal for your needs"
translations.en["solutions.process.title"] = "Our Process"
translations.en["solutions.process.subtitle"] = "How we implement your solar energy project"
translations.en["solutions.process.step1.title"] = "Consultation"
translations.en["solutions.process.step1.description"] = "We assess your specific needs and goals"
translations.en["solutions.process.step2.title"] = "Design"
translations.en["solutions.process.step2.description"] = "We design a customized solution for your project"
translations.en["solutions.process.step3.title"] = "Installation"
translations.en["solutions.process.step3.description"] =
  "Our team installs your system with precision and professionalism"
translations.en["solutions.process.step4.title"] = "Follow-up"
translations.en["solutions.process.step4.description"] = "We ensure the monitoring and maintenance of your installation"

export function getTranslation(key: TranslationKey, language: Language): string {
  return translations[language][key]
}
