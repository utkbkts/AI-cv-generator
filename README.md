![screencapture-localhost-3000-2024-10-25-21_29_10](https://github.com/user-attachments/assets/f846ed32-0ce7-4bef-b2c6-0b0cc0f7140e)

# Nextjs 15 yeni güncellendiği için deploy problemi yaşanıyor o yüzden şimdilik canlı linki yok.

# 🎉 CV generator projesine Hoş geldiniz.

**Hoş geldiniz!** CV'nizi puanlayabileceğiniz bir projedir

---

## 🚀 Proje Özellikleri

- **Kullanıcı Paneli**: Kolayca cv geçmişinizi puanınızı görebileceğiniz sistem.
- **Modern Tasarım**: Shadcn ile şık ve profesyonel bir görünüm.
- **Node.js Backend**: Güvenli ve verimli bir sunucu yapısı ile hızlı veri işleme.
- **Docker ile Kolay Dağıtım**: Projenin her ortamda sorunsuz çalışmasını sağlamak için Docker kullanıldı.

---

## 📦 Teknolojiler

| Katman      | Teknolojiler                  |
|-------------|-------------------------------|
| **Frontend**  | Next.js 15                  |
| **Backend**   | Node.js,Express             |
| **Veritabanı**| MongoDB  Redis              |
| **Konteyner** | Docker                      |
| **Ödeme**     | Stripe                      |

---

## 📈 Hedef

Sistemsel olarak daha güzel bir cv yapmanıza olanak tanıyor

---

---

---

## ⚙️ Projeyi Çalıştırmak İçin
1. **İlk önce repoyu kendinize çekin:**
```bash
git clone https://github.com/utkbkts/AI-cv-generator.git
```
2.**Proje dizinine gelin ve gerekli bağımlılıkları yükleyin:**
 ```bash
cd frontend
npm install
```
3.**Projeyi çalıştırın:**
 ```bash
npm run dev
```
4.**Yerel olarak derleyin:**
```bash
npm run build
```
5.**.env-Backend**
```bash
MONGODB_URI=

GOOGLE_CLIENT_ID=430679364100-
GOOGLE_CLIENT_SECRET=

CLIENT_URL=
SESSION_SECRET=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
GEMINI_API_KEY=
RESEND_API_KEY=

STRIPE_SECRET_KEY=""

STRIPE_WEBHOOK_SECRET=""
```
6.**.env-Frontend**
```bash
NEXT_PUBLIC_API_URL=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
```

5.**Docker'ı çalıştırmak için**

1-**Ana dizine gidin /** - build
```bash
docker compose build
```
2-**Ana dizine gidin /** - run
```bash
docker compose up -d
```
