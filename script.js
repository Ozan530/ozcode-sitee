// ========================================
// LOADING SCREEN
// ========================================

const loadingScreen = document.getElementById("loading-screen");
const loadingLogo = document.querySelector(".loading-logo");
const hammer = document.getElementById("hammer");
const loadingStatus = document.getElementById("loadingStatus");

let loadingStep = 0;

const loadingMessages = [
    "Hazırlanıyor...",
    "Temel oluşturuluyor...",
    "Detaylar işleniyor...",
    "Son dokunuşlar...",
    "Hoş geldiniz!"
];

function hammerStrike() {

    loadingStep++;

    // Çekiç animasyonunu sıfırla
    hammer.classList.remove("hit");

    void hammer.offsetWidth;

    hammer.classList.add("hit");


    // Logo darbe efekti
    loadingLogo.classList.remove("hit-effect");

    void loadingLogo.offsetWidth;

    loadingLogo.classList.add("hit-effect");


    // Logo parçasını oluştur
    loadingLogo.classList.remove(
        "step-1",
        "step-2",
        "step-3",
        "step-4"
    );

    loadingLogo.classList.add(
        `step-${loadingStep}`
    );


    // Yazıyı değiştir
    loadingStatus.textContent =
        loadingMessages[loadingStep];


    // 4. vuruş
    if (loadingStep === 4) {

        loadingLogo.classList.add("complete");

        loadingStatus.textContent =
            loadingMessages[4];


        // Loading ekranını kapat
        setTimeout(() => {

            loadingScreen.classList.add("hide");

            document.body.classList.add(
                "page-loaded"
            );

        }, 1000);
    }
}


// ========================================
// VURUŞLARI BAŞLAT
// ========================================

window.addEventListener("load", () => {

    // İlk vuruş
    setTimeout(() => {
        hammerStrike();
    }, 600);


    // İkinci vuruş
    setTimeout(() => {
        hammerStrike();
    }, 1400);


    // Üçüncü vuruş
    setTimeout(() => {
        hammerStrike();
    }, 2200);


    // Dördüncü vuruş
    setTimeout(() => {
        hammerStrike();
    }, 3000);

});


// ========================================
// HERO CARD ANİMASYONU
// ========================================

const movingScene =
    document.querySelector(".moving-scene");

if (movingScene) {
    movingScene.classList.add("animate");
}


// ========================================
// MOBİL MENÜ
// ========================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ========================================
// WEB3FORMS - ÜCRETSİZ TEKLİF FORMU
// ========================================

const toast =
    document.getElementById("toast");

const quoteForm =
    document.getElementById("quoteForm");


if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        async (e) => {

            e.preventDefault();


            const button =
                quoteForm.querySelector("button");

            const originalText =
                button.innerHTML;


            // Gönderiliyor durumu
            button.disabled = true;

            button.innerHTML =
                "Gönderiliyor...";


            const formData =
                new FormData(quoteForm);


            try {

                const response =
                    await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",
                            body: formData
                        }
                    );


                const data =
                    await response.json();


                // ========================================
                // BAŞARILI
                // ========================================

                if (data.success) {

                    toast.textContent =
                        "Talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.";

                    toast.classList.add("show");


                    // Formu temizle
                    quoteForm.reset();


                    setTimeout(() => {

                        toast.classList.remove("show");

                    }, 4500);

                }


                // ========================================
                // HATA
                // ========================================

                else {

                    toast.textContent =
                        "Form gönderilemedi. Lütfen tekrar deneyin.";

                    toast.classList.add("show");


                    setTimeout(() => {

                        toast.classList.remove("show");

                    }, 4500);

                }

            }


            // ========================================
            // BAĞLANTI HATASI
            // ========================================

            catch (error) {

                console.error(
                    "Web3Forms Hatası:",
                    error
                );


                toast.textContent =
                    "Bir bağlantı hatası oluştu. Lütfen tekrar deneyin.";

                toast.classList.add("show");


                setTimeout(() => {

                    toast.classList.remove("show");

                }, 4500);

            }


            // ========================================
            // BUTONU ESKİ HALİNE GETİR
            // ========================================

            finally {

                button.disabled = false;

                button.innerHTML =
                    originalText;

            }

        }
    );

}


// ========================================
// NAVBAR SCROLL EFEKTİ
// ========================================

window.addEventListener("scroll", () => {

    const navbar =
        document.getElementById("navbar");


    if (!navbar) return;


    navbar.style.boxShadow =
        window.scrollY > 20
            ? "0 8px 25px rgba(15,39,71,.08)"
            : "none";

});