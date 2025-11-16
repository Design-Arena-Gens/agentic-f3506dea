"use client";

import { useState } from "react";

interface Headphone {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  rating: number;
  specs: {
    appleEcosystem: number;
    pcCompatibility: number;
    soundQuality: number;
    anc: number;
    batteryLife: string;
    weight: string;
    connectivity: string[];
    spatialAudio: boolean;
    multipoint: boolean;
  };
  pros: string[];
  cons: string[];
  appleIntegration: string;
  pcPerformance: string;
  bestFor: string;
}

const headphones: Headphone[] = [
  {
    id: "airpods-max",
    name: "AirPods Max (2024)",
    brand: "Apple",
    price: "579€",
    image: "🎧",
    rating: 4.5,
    specs: {
      appleEcosystem: 10,
      pcCompatibility: 6,
      soundQuality: 9,
      anc: 9,
      batteryLife: "20h",
      weight: "385g",
      connectivity: ["Bluetooth 5.0", "Lightning/USB-C"],
      spatialAudio: true,
      multipoint: false,
    },
    pros: [
      "Intégration Apple parfaite",
      "Audio spatial dynamique",
      "Qualité de construction premium",
      "ANC excellent",
      "Commutation automatique entre appareils Apple"
    ],
    cons: [
      "Prix élevé",
      "Lourd",
      "Pas de multipoint",
      "Fonctionnalités limitées sur PC",
      "Étui de transport peu pratique"
    ],
    appleIntegration: "★★★★★ Intégration native parfaite, audio spatial, commutation automatique, Siri",
    pcPerformance: "★★★☆☆ Fonctionne en Bluetooth basique, pas d'app Windows, fonctionnalités limitées",
    bestFor: "Utilisateurs 100% Apple, écosystème iOS/Mac exclusif"
  },
  {
    id: "sonos-ace",
    name: "Sonos Ace",
    brand: "Sonos",
    price: "499€",
    image: "🎵",
    rating: 4.3,
    specs: {
      appleEcosystem: 7,
      pcCompatibility: 8,
      soundQuality: 9,
      anc: 8,
      batteryLife: "30h",
      weight: "312g",
      connectivity: ["Bluetooth 5.4", "USB-C", "3.5mm"],
      spatialAudio: true,
      multipoint: true,
    },
    pros: [
      "Son spatial impressionnant",
      "Excellent confort",
      "Multipoint fonctionnel",
      "Bonne autonomie",
      "Compatible iOS et Android"
    ],
    cons: [
      "App requise pour réglages",
      "ANC correct mais pas le meilleur",
      "Écosystème Sonos requis pour certaines fonctions",
      "Pas de pliage"
    ],
    appleIntegration: "★★★★☆ Bonne compatibilité via app iOS, audio spatial compatible",
    pcPerformance: "★★★★☆ Excellent via USB-C et Bluetooth, multipoint pratique",
    bestFor: "Utilisateurs multi-appareils, fans Sonos"
  },
  {
    id: "sony-xm6",
    name: "WH-1000XM6",
    brand: "Sony",
    price: "429€",
    image: "🎼",
    rating: 4.7,
    specs: {
      appleEcosystem: 8,
      pcCompatibility: 9,
      soundQuality: 9.5,
      anc: 10,
      batteryLife: "30h",
      weight: "250g",
      connectivity: ["Bluetooth 5.3", "USB-C", "3.5mm", "LDAC"],
      spatialAudio: true,
      multipoint: true,
    },
    pros: [
      "Meilleur ANC du marché",
      "Son exceptionnel",
      "Très léger et confortable",
      "Multipoint excellent",
      "App complète iOS/Android/Windows"
    ],
    cons: [
      "Design en plastique",
      "Pas d'intégration native Apple",
      "Audio spatial nécessite l'app"
    ],
    appleIntegration: "★★★★☆ Excellente compatibilité via app Sony, LDAC non supporté sur iOS",
    pcPerformance: "★★★★★ Parfait - app Windows, multipoint, LDAC, USB-C audio",
    bestFor: "Meilleur choix global Apple + PC, ANC prioritaire"
  },
  {
    id: "bose-qc-ultra",
    name: "QuietComfort Ultra",
    brand: "Bose",
    price: "449€",
    image: "🎶",
    rating: 4.4,
    specs: {
      appleEcosystem: 8,
      pcCompatibility: 8,
      soundQuality: 8.5,
      anc: 9.5,
      batteryLife: "24h",
      weight: "254g",
      connectivity: ["Bluetooth 5.3", "USB-C", "3.5mm"],
      spatialAudio: true,
      multipoint: true,
    },
    pros: [
      "ANC de référence",
      "Confort exceptionnel",
      "Audio spatial immersif",
      "Multipoint fluide",
      "App excellente iOS/Android"
    ],
    cons: [
      "Autonomie réduite avec spatial audio",
      "Son moins détaillé que Sony",
      "Prix élevé"
    ],
    appleIntegration: "★★★★☆ Très bonne compatibilité, app iOS complète, audio spatial propriétaire",
    pcPerformance: "★★★★☆ Excellent, multipoint, compatible Windows",
    bestFor: "Confort maximal, voyages fréquents"
  },
  {
    id: "sennheiser-momentum-4",
    name: "Momentum 4 Wireless",
    brand: "Sennheiser",
    price: "349€",
    image: "🎻",
    rating: 4.5,
    specs: {
      appleEcosystem: 8,
      pcCompatibility: 9,
      soundQuality: 9.5,
      anc: 8,
      batteryLife: "60h",
      weight: "293g",
      connectivity: ["Bluetooth 5.2", "USB-C", "3.5mm", "aptX Adaptive"],
      spatialAudio: false,
      multipoint: true,
    },
    pros: [
      "Qualité audio audiophile",
      "Autonomie record 60h",
      "AptX Adaptive",
      "Excellent rapport qualité/prix",
      "Multipoint stable"
    ],
    cons: [
      "Design moins premium",
      "Pas d'audio spatial",
      "ANC correct mais pas exceptionnel",
      "AptX non supporté sur iOS"
    ],
    appleIntegration: "★★★★☆ Bonne compatibilité, app iOS fonctionnelle, pas d'aptX",
    pcPerformance: "★★★★★ Excellent - aptX Adaptive, autonomie énorme, multipoint",
    bestFor: "Audiophiles, autonomie prioritaire, budget raisonnable"
  },
  {
    id: "bang-olufsen-h95",
    name: "Beoplay H95",
    brand: "Bang & Olufsen",
    price: "799€",
    image: "💎",
    rating: 4.2,
    specs: {
      appleEcosystem: 7,
      pcCompatibility: 7,
      soundQuality: 9.5,
      anc: 8,
      batteryLife: "38h",
      weight: "323g",
      connectivity: ["Bluetooth 5.1", "USB-C", "3.5mm"],
      spatialAudio: false,
      multipoint: false,
    },
    pros: [
      "Design luxueux premium",
      "Son audiophile exceptionnel",
      "Matériaux haut de gamme",
      "Excellent confort",
      "Batterie remplaçable"
    ],
    cons: [
      "Prix très élevé",
      "Pas de multipoint",
      "ANC moyen",
      "Fonctionnalités limitées",
      "Pas d'audio spatial"
    ],
    appleIntegration: "★★★☆☆ Compatibilité basique, app iOS simple",
    pcPerformance: "★★★☆☆ Fonctionne bien mais fonctionnalités basiques",
    bestFor: "Luxe et design, audiophiles fortunés"
  },
  {
    id: "bowers-wilkins-px8",
    name: "Px8",
    brand: "Bowers & Wilkins",
    price: "699€",
    image: "🎺",
    rating: 4.3,
    specs: {
      appleEcosystem: 7,
      pcCompatibility: 8,
      soundQuality: 10,
      anc: 7,
      batteryLife: "30h",
      weight: "320g",
      connectivity: ["Bluetooth 5.2", "USB-C audio", "aptX Adaptive"],
      spatialAudio: false,
      multipoint: true,
    },
    pros: [
      "Meilleure qualité audio du comparatif",
      "Construction premium métal",
      "USB-C audio haute résolution",
      "AptX Adaptive",
      "Design élégant"
    ],
    cons: [
      "ANC décevant pour le prix",
      "Prix très élevé",
      "App basique",
      "Pression sur les oreilles",
      "AptX non disponible sur iOS"
    ],
    appleIntegration: "★★★☆☆ Compatible iOS mais sans aptX, fonctionnalités limitées",
    pcPerformance: "★★★★☆ Excellent pour audiophiles PC, USB-C audio hi-res, aptX",
    bestFor: "Audiophiles pure qualité audio, utilisation PC/bureau"
  },
  {
    id: "dyson-ontrac",
    name: "OnTrac",
    brand: "Dyson",
    price: "499€",
    image: "🔧",
    rating: 3.8,
    specs: {
      appleEcosystem: 6,
      pcCompatibility: 7,
      soundQuality: 7.5,
      anc: 8.5,
      batteryLife: "55h",
      weight: "451g",
      connectivity: ["Bluetooth 5.0", "USB-C"],
      spatialAudio: false,
      multipoint: false,
    },
    pros: [
      "Design unique personnalisable",
      "Autonomie exceptionnelle 55h",
      "ANC performant",
      "Coussins interchangeables",
      "Innovation Dyson"
    ],
    cons: [
      "Très lourd (451g)",
      "Son correct mais pas exceptionnel",
      "Pas de multipoint",
      "Prix élevé pour les performances",
      "Manque de maturité logicielle"
    ],
    appleIntegration: "★★★☆☆ Compatibilité basique, app iOS fonctionnelle",
    pcPerformance: "★★★☆☆ Fonctionne mais sans fonctionnalités avancées",
    bestFor: "Design unique, fans de la marque Dyson"
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");

  const categories = [
    { id: "all", name: "Tous", icon: "🎧" },
    { id: "apple", name: "Meilleurs pour Apple", icon: "🍎" },
    { id: "pc", name: "Meilleurs pour PC", icon: "💻" },
    { id: "both", name: "Apple + PC", icon: "🔄" },
  ];

  const filteredHeadphones = headphones.filter((h) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "apple") return h.specs.appleEcosystem >= 8;
    if (selectedCategory === "pc") return h.specs.pcCompatibility >= 8;
    if (selectedCategory === "both") return h.specs.appleEcosystem >= 8 && h.specs.pcCompatibility >= 8;
    return true;
  }).sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price") return parseInt(a.price) - parseInt(b.price);
    if (sortBy === "sound") return b.specs.soundQuality - a.specs.soundQuality;
    return 0;
  });

  const getBestChoice = () => {
    return {
      overall: headphones.find(h => h.id === "sony-xm6"),
      apple: headphones.find(h => h.id === "airpods-max"),
      pc: headphones.find(h => h.id === "sony-xm6"),
      appleAndPc: headphones.find(h => h.id === "sony-xm6"),
      budget: headphones.find(h => h.id === "sennheiser-momentum-4"),
      audiophile: headphones.find(h => h.id === "bowers-wilkins-px8"),
    };
  };

  const best = getBestChoice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🎧 Comparatif Casques Audio Premium 2024
          </h1>
          <p className="text-gray-600 text-lg">
            Analyse complète pour l&apos;écosystème Apple et utilisation PC
          </p>
        </div>
      </header>

      {/* Quick Recommendations */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🏆 Recommandations Rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-2">👑</div>
            <h3 className="font-bold text-lg mb-1">Meilleur choix global</h3>
            <p className="text-xl font-bold">{best.overall?.name}</p>
            <p className="text-sm opacity-90 mt-2">ANC exceptionnel, excellent sur Apple et PC</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-2">🍎</div>
            <h3 className="font-bold text-lg mb-1">100% Apple</h3>
            <p className="text-xl font-bold">{best.apple?.name}</p>
            <p className="text-sm opacity-90 mt-2">Intégration parfaite écosystème Apple</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-bold text-lg mb-1">Apple + PC</h3>
            <p className="text-xl font-bold">{best.appleAndPc?.name}</p>
            <p className="text-sm opacity-90 mt-2">Multipoint, apps partout, polyvalent</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-bold text-lg mb-1">Meilleur rapport qualité/prix</h3>
            <p className="text-xl font-bold">{best.budget?.name}</p>
            <p className="text-sm opacity-90 mt-2">60h d&apos;autonomie, son audiophile</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-2">🎵</div>
            <h3 className="font-bold text-lg mb-1">Audiophiles</h3>
            <p className="text-xl font-bold">{best.audiophile?.name}</p>
            <p className="text-sm opacity-90 mt-2">Meilleure qualité audio, USB-C hi-res</p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-2">💻</div>
            <h3 className="font-bold text-lg mb-1">Meilleur pour PC</h3>
            <p className="text-xl font-bold">{best.pc?.name}</p>
            <p className="text-sm opacity-90 mt-2">App Windows, codecs avancés, multipoint</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filtrer par utilisation</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === cat.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full sm:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Trier par</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="rating">Note globale</option>
                <option value="price">Prix</option>
                <option value="sound">Qualité audio</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Headphones Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {filteredHeadphones.map((headphone) => (
            <div key={headphone.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left: Image and Basic Info */}
                  <div className="lg:w-1/4">
                    <div className="text-8xl mb-4 text-center">{headphone.image}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{headphone.name}</h3>
                    <p className="text-gray-600 mb-2">{headphone.brand}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl font-bold text-blue-600">{headphone.price}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-xl">★</span>
                        <span className="font-semibold ml-1">{headphone.rating}/5</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-2">IDÉAL POUR</p>
                      <p className="text-sm text-gray-800">{headphone.bestFor}</p>
                    </div>
                  </div>

                  {/* Middle: Specs */}
                  <div className="lg:w-2/5">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Caractéristiques</h4>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">🍎 Écosystème Apple</span>
                          <span className="text-sm font-bold text-blue-600">{headphone.specs.appleEcosystem}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${headphone.specs.appleEcosystem * 10}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">💻 Compatibilité PC</span>
                          <span className="text-sm font-bold text-green-600">{headphone.specs.pcCompatibility}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${headphone.specs.pcCompatibility * 10}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">🎵 Qualité audio</span>
                          <span className="text-sm font-bold text-purple-600">{headphone.specs.soundQuality}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${headphone.specs.soundQuality * 10}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">🔇 Réduction de bruit</span>
                          <span className="text-sm font-bold text-orange-600">{headphone.specs.anc}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-600 h-2 rounded-full"
                            style={{ width: `${headphone.specs.anc * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">🔋 Autonomie:</span>
                        <span className="font-semibold ml-1">{headphone.specs.batteryLife}</span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">⚖️ Poids:</span>
                        <span className="font-semibold ml-1">{headphone.specs.weight}</span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded col-span-2">
                        <span className="text-gray-600">📡 Connectivité:</span>
                        <span className="font-semibold ml-1">{headphone.specs.connectivity.join(", ")}</span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">🎭 Audio spatial:</span>
                        <span className="font-semibold ml-1">{headphone.specs.spatialAudio ? "✅ Oui" : "❌ Non"}</span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">🔄 Multipoint:</span>
                        <span className="font-semibold ml-1">{headphone.specs.multipoint ? "✅ Oui" : "❌ Non"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Pros/Cons */}
                  <div className="lg:w-1/3">
                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2 text-green-700">✅ Points forts</h4>
                      <ul className="space-y-1">
                        {headphone.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2 text-red-700">❌ Points faibles</h4>
                      <ul className="space-y-1">
                        {headphone.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom: Integration Details */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-bold text-sm mb-2 text-blue-900">🍎 Intégration Apple</h5>
                      <p className="text-sm text-gray-800">{headphone.appleIntegration}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-bold text-sm mb-2 text-green-900">💻 Performance PC</h5>
                      <p className="text-sm text-gray-800">{headphone.pcPerformance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Tableau Comparatif Rapide</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Modèle</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Prix</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Note</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Apple</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">PC</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Son</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">ANC</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Autonomie</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Multipoint</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {headphones.map((h) => (
                <tr key={h.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{h.name}</td>
                  <td className="px-4 py-3 text-center font-semibold text-blue-600">{h.price}</td>
                  <td className="px-4 py-3 text-center">{h.rating}/5</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                      h.specs.appleEcosystem >= 9 ? 'bg-green-100 text-green-800' :
                      h.specs.appleEcosystem >= 7 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {h.specs.appleEcosystem}/10
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                      h.specs.pcCompatibility >= 9 ? 'bg-green-100 text-green-800' :
                      h.specs.pcCompatibility >= 7 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {h.specs.pcCompatibility}/10
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">{h.specs.soundQuality}/10</td>
                  <td className="px-4 py-3 text-center">{h.specs.anc}/10</td>
                  <td className="px-4 py-3 text-center">{h.specs.batteryLife}</td>
                  <td className="px-4 py-3 text-center">{h.specs.multipoint ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Recommendations */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">🎯 Verdict Final pour votre usage (Apple + PC)</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl mb-3">🥇</div>
              <h3 className="text-xl font-bold mb-2">Choix #1</h3>
              <p className="text-2xl font-bold mb-2">Sony WH-1000XM6</p>
              <p className="text-sm opacity-90">
                Le meilleur compromis Apple/PC. Excellente intégration sur les deux plateformes,
                multipoint parfait, meilleur ANC, app complète partout. 429€.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl mb-3">🥈</div>
              <h3 className="text-xl font-bold mb-2">Choix #2</h3>
              <p className="text-2xl font-bold mb-2">Bose QC Ultra</p>
              <p className="text-sm opacity-90">
                Confort maximal, excellent ANC, bon équilibre Apple/PC.
                Parfait pour longues sessions. 449€.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl mb-3">🥉</div>
              <h3 className="text-xl font-bold mb-2">Rapport qualité/prix</h3>
              <p className="text-2xl font-bold mb-2">Sennheiser Momentum 4</p>
              <p className="text-sm opacity-90">
                Son audiophile, 60h d&apos;autonomie, multipoint, excellente compatibilité.
                Meilleur prix. 349€.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">⚠️ À éviter pour votre usage</h3>
            <div className="space-y-2 text-sm">
              <p><strong>AirPods Max:</strong> Trop limité sur PC, pas de multipoint, prix élevé. Réservé aux utilisateurs 100% Apple.</p>
              <p><strong>Dyson OnTrac:</strong> Trop lourd (451g), son moyen, manque de fonctionnalités pour le prix.</p>
              <p><strong>B&O H95:</strong> Prix prohibitif (799€), pas de multipoint, fonctionnalités basiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Comparatif mis à jour - 2024 | Tous les prix sont indicatifs et peuvent varier
          </p>
        </div>
      </footer>
    </div>
  );
}
