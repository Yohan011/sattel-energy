import type { Product } from "@/components/products/product-grid"

export const products: Product[] = [
  // Stockage
  {
    id: "stockage-1",
    name: "Système de stockage résidentiel 10kWh",
    description:
      "Système de stockage d'énergie compact pour les maisons, permettant de stocker l'énergie solaire produite pendant la journée pour une utilisation nocturne.",
    image: "/assets/images/products/batteries.jpg",
    price: "Sur devis",
    category: "stockage",
    features: [
      "Capacité de 10kWh",
      "Garantie de 10 ans",
      "Rendement de 95%",
      "Installation facile",
      "Compatible avec tous les onduleurs",
    ],
  },
  {
    id: "stockage-2",
    name: "Système de stockage commercial 50kWh",
    description:
      "Solution de stockage d'énergie pour les entreprises, permettant de réduire les coûts énergétiques et d'assurer une continuité de service.",
    image: "/assets/images/products/batteries.jpg",
    price: "Sur devis",
    category: "stockage",
    features: [
      "Capacité de 50kWh",
      "Garantie de 15 ans",
      "Rendement de 97%",
      "Surveillance à distance",
      "Système modulaire extensible",
    ],
  },
  {
    id: "stockage-3",
    name: "Système de stockage industriel 200kWh",
    description:
      "Solution de stockage d'énergie à grande échelle pour les sites industriels, permettant de gérer les pics de consommation et d'optimiser l'autoconsommation.",
    image: "/assets/images/products/batteries.jpg",
    price: "Sur devis",
    category: "stockage",
    features: [
      "Capacité de 200kWh",
      "Garantie de 20 ans",
      "Rendement de 98%",
      "Système de refroidissement intégré",
      "Gestion intelligente de l'énergie",
    ],
  },

  // Batteries
  {
    id: "batteries-1",
    name: "Batterie Lithium-Ion 5kWh",
    description:
      "Batterie haute performance pour le stockage d'énergie résidentiel, offrant une longue durée de vie et une grande fiabilité.",
    image: "/assets/images/products/batteries.jpg",
    price: "Sur devis",
    category: "batteries",
    features: [
      "Capacité de 5kWh",
      "Technologie Lithium-Ion",
      "Durée de vie: 6000 cycles",
      "Profondeur de décharge: 90%",
      "Garantie de 10 ans",
    ],
  },
  {
    id: "batteries-2",
    name: "Batterie LFP 10kWh",
    description:
      "Batterie Lithium Fer Phosphate pour une sécurité maximale et une longue durée de vie, idéale pour les applications résidentielles et commerciales.",
    image: "/assets/images/products/batteries.jpg",
    price: "Sur devis",
    category: "batteries",
    features: [
      "Capacité de 10kWh",
      "Technologie LFP (Lithium Fer Phosphate)",
      "Durée de vie: 8000 cycles",
      "Profondeur de décharge: 95%",
      "Garantie de 12 ans",
    ],
  },
  {
    id: "batteries-3",
    name: "Batterie industrielle 50kWh",
    description:
      "Batterie haute capacité pour les applications industrielles, offrant une grande densité énergétique et une excellente stabilité thermique.",
    image: "/assets/images/products/batteries.jpg",
    price: "Sur devis",
    category: "batteries",
    features: [
      "Capacité de 50kWh",
      "Technologie NMC",
      "Durée de vie: 5000 cycles",
      "Système de gestion thermique avancé",
      "Surveillance à distance",
    ],
  },

  // Structures
  {
    id: "structures-1",
    name: "Structure de montage pour toiture inclinée",
    description:
      "Structure en aluminium pour l'installation de panneaux solaires sur toiture inclinée, résistante aux intempéries et facile à installer.",
    image: "/assets/images/products/panels.jpg",
    price: "Sur devis",
    category: "structures",
    features: [
      "Aluminium anodisé",
      "Résistance au vent: 200 km/h",
      "Garantie de 20 ans",
      "Installation sans perçage",
      "Compatible avec tous types de panneaux",
    ],
  },
  {
    id: "structures-2",
    name: "Structure de montage pour toiture plate",
    description:
      "Système de montage pour toiture plate, optimisé pour maximiser la production d'énergie tout en minimisant le poids sur la structure.",
    image: "/assets/images/products/panels.jpg",
    price: "Sur devis",
    category: "structures",
    features: [
      "Angle d'inclinaison réglable",
      "Lestage optimisé",
      "Résistance au vent: 180 km/h",
      "Installation sans perçage",
      "Garantie de 20 ans",
    ],
  },
  {
    id: "structures-3",
    name: "Structure au sol pour installations agricoles",
    description:
      "Structure robuste pour installations solaires au sol, compatible avec les activités agricoles et résistante aux conditions extérieures.",
    image: "/assets/images/products/panels.jpg",
    price: "Sur devis",
    category: "structures",
    features: [
      "Acier galvanisé à chaud",
      "Hauteur réglable",
      "Compatible avec l'agrivoltaïsme",
      "Résistance au vent: 220 km/h",
      "Garantie de 25 ans",
    ],
  },

  // Kits
  {
    id: "kits-1",
    name: "Kit solaire résidentiel 3kWc",
    description:
      "Kit solaire complet pour maison individuelle, comprenant panneaux, onduleur, structure et accessoires de montage.",
    image: "/assets/images/products/kits.jpg",
    price: "Sur devis",
    category: "kits",
    features: [
      "10 panneaux solaires 300W",
      "Onduleur 3kW",
      "Structure de montage",
      "Câblage et accessoires",
      "Guide d'installation",
    ],
  },
  {
    id: "kits-2",
    name: "Kit solaire autoconsommation 6kWc avec stockage",
    description:
      "Solution complète d'autoconsommation avec stockage, permettant une autonomie énergétique maximale pour les foyers.",
    image: "/assets/images/products/kits.jpg",
    price: "Sur devis",
    category: "kits",
    features: [
      "20 panneaux solaires 300W",
      "Onduleur hybride 6kW",
      "Batterie 10kWh",
      "Structure de montage",
      "Système de monitoring",
    ],
  },
  {
    id: "kits-3",
    name: "Kit solaire pour site isolé",
    description:
      "Solution autonome pour sites isolés sans accès au réseau électrique, comprenant production, stockage et gestion de l'énergie.",
    image: "/assets/images/products/kits.jpg",
    price: "Sur devis",
    category: "kits",
    features: [
      "Panneaux solaires 5kWc",
      "Batteries 20kWh",
      "Onduleur off-grid",
      "Régulateur de charge",
      "Système de monitoring à distance",
    ],
  },

  // Onduleurs
  {
    id: "onduleurs-1",
    name: "Onduleur monophasé 5kW",
    description:
      "Onduleur solaire monophasé haute efficacité pour installations résidentielles, avec fonctionnalités de surveillance intégrées.",
    image: "/assets/images/products/inverters.jpg",
    price: "Sur devis",
    category: "onduleurs",
    features: [
      "Puissance: 5kW",
      "Rendement: 98%",
      "WiFi intégré",
      "Garantie de 10 ans",
      "Surveillance via application mobile",
    ],
  },
  {
    id: "onduleurs-2",
    name: "Onduleur triphasé 10kW",
    description:
      "Onduleur triphasé pour installations commerciales, offrant une grande fiabilité et des fonctionnalités avancées de gestion du réseau.",
    image: "/assets/images/products/inverters.jpg",
    price: "Sur devis",
    category: "onduleurs",
    features: [
      "Puissance: 10kW",
      "Rendement: 98.5%",
      "Interface Ethernet et WiFi",
      "Conformité aux normes réseau avancées",
      "Garantie de 12 ans",
    ],
  },
  {
    id: "onduleurs-3",
    name: "Onduleur hybride 8kW",
    description:
      "Onduleur hybride permettant la gestion simultanée des panneaux solaires et des batteries, pour une optimisation maximale de l'autoconsommation.",
    image: "/assets/images/products/inverters.jpg",
    price: "Sur devis",
    category: "onduleurs",
    features: [
      "Puissance: 8kW",
      "Compatible batteries Lithium-Ion",
      "Fonction backup",
      "Gestion intelligente de l'énergie",
      "Garantie de 10 ans",
    ],
  },

  // Monitoring
  {
    id: "monitoring-1",
    name: "Système de monitoring résidentiel",
    description:
      "Solution de surveillance pour installations résidentielles, permettant de suivre la production et la consommation d'énergie en temps réel.",
    image: "/assets/images/products/monitoring.jpg",
    price: "Sur devis",
    category: "monitoring",
    features: [
      "Suivi en temps réel",
      "Application mobile",
      "Alertes personnalisables",
      "Historique des données",
      "Installation plug-and-play",
    ],
  },
  {
    id: "monitoring-2",
    name: "Système de monitoring commercial",
    description:
      "Solution de surveillance avancée pour installations commerciales, avec analyse détaillée des performances et détection précoce des anomalies.",
    image: "/assets/images/products/monitoring.jpg",
    price: "Sur devis",
    category: "monitoring",
    features: [
      "Surveillance multi-sites",
      "Analyse prédictive",
      "Rapports automatisés",
      "API pour intégration",
      "Support technique dédié",
    ],
  },
  {
    id: "monitoring-3",
    name: "Système de monitoring industriel",
    description:
      "Solution complète de surveillance pour grandes installations, avec fonctionnalités avancées de gestion de la maintenance et d'optimisation des performances.",
    image: "/assets/images/products/monitoring.jpg",
    price: "Sur devis",
    category: "monitoring",
    features: [
      "Surveillance en temps réel",
      "Maintenance prédictive",
      "Intégration SCADA",
      "Analyse des performances",
      "Support 24/7",
    ],
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
