# PiSync TR Dokümantasyon\n\nSunum ve uygulama açıklaması burada.```
# PiSync 💱📊 (Türkçe)

PiSync, **Pi Network ekosistemi** için geliştirilmiş **Merkeziyetsiz Fiyat Karşılaştırma ve Satıcı Güven Platformu**dur.  
Kullanıcıların ürün fiyatlarını farklı satıcılardan karşılaştırmasını, satıcı güvenini oluşturmasını ve merkeziyetsiz alışveriş deneyimi yaşamasını sağlar.

## 🌟 Özellikler
- 🔍 Fiyat Karşılaştırma – Farklı satıcılardan ürün fiyatlarını kolayca karşılaştır  
- 👨‍👩‍👧 Satıcı Güveni – Satıcılar topluluk tarafından puanlanır ve değerlendirilir  
- 📱 Çapraz Platform Uygulama – Mobil için React Native ile geliştirildi  
- ⚡ API Backend – Güvenli veri işleme için Node.js + Express backend  
- 🌎 Merkeziyetsiz Vizyon – Pi Network ekosistemi için tasarlandı  

## 📂 Proje Yapısı
PiSync-v2/
│
├── backend/         # Node.js + Express backend
│   ├── server.js    # Ana sunucu dosyası
│   └── data/
│       └── products.json
│
├── frontend/        # React Native frontend
│   ├── App.js
│   └── src/screens/
│       ├── HomeScreen.js
│       ├── VendorScreen.js
│       └── CompareScreen.js
│
├── README.md
├── README_EN.md
└── README_TR.md

## ⚙️ Kurulum
# 1. Repoyu Klonla
git clone https://github.com/umutcetiner07/PiSync-v2.git
cd PiSync-v2

# 2. Backend Kurulumu
cd backend
npm install
node server.js   # Backend → http://localhost:5000

# 3. Frontend Kurulumu (React Native)
cd frontend
npm install
npx react-native start

## 📸 Ekran Görüntüleri (opsiyonel)
# Daha sonra buraya ekran görüntüleri eklenecek

## 🤝 Katkıda Bulunma
Katkılar, öneriler ve sorun bildirimleri hoş geldiniz!  

## 📜 Lisans
Bu proje **MIT Lisansı** altında sunulmaktadır.
```
