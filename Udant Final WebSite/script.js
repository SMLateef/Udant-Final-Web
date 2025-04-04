// ✅ Newsletter Subscription Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let email = document.getElementById("newsletter").value;

      if (validateEmail(email)) {
        alert("Thank you for subscribing to Udant!");
        document.getElementById("newsletter").value = ""; // Clear input field
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
});

// ✅ Email Validation Function
function validateEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
const translations = {
  en: {
    about: "About",
    features: "Features",
    workflow: "How It Works",
    contact: "Contact",
    heroTitle: "Empowering Farmers, Transforming Agriculture",
    heroText: "Connecting farmers and buyers with fair pricing, stable contracts, and technology-driven solutions.",
    explore: "Explore Udant",
    aboutTitle: "About Udant",
    aboutText: "Udant is a digital platform that eliminates middlemen and enables farmers to sell their crops directly to bulk buyers with pre-harvest contracts and market insights.",
    featuresTitle: "Key Features",
    feature1Title: "Digital Contracts",
    feature1Text: "Secure fair pricing and guaranteed payments through pre-harvest agreements between farmers and buyers.",
    feature2Title: "Market Insights",
    feature2Text: "AI-driven analytics provide real-time price trends and demand forecasting to help farmers make informed decisions.",
    feature3Title: "Farmer Support",
    feature3Text: "24/7 customer assistance, local language support, and educational resources to empower farmers."
  
  },
  hi: {
    about: "परिचय",
    features: "विशेषताएँ",
    workflow: "यह कैसे काम करता है",
    contact: "संपर्क करें",
    heroTitle: "किसानों को सशक्त बनाना, कृषि को बदलना",
    heroText: "किसानों और खरीदारों को निष्पक्ष मूल्य निर्धारण, स्थिर अनुबंध और प्रौद्योगिकी-संचालित समाधानों से जोड़ना।",
    explore: "उदंत अन्वेषण करें",
    aboutTitle: "उदंत के बारे में",
    aboutText: "उदंत एक डिजिटल प्लेटफ़ॉर्म है जो बिचौलियों को समाप्त करता है और किसानों को पूर्व-फसल अनुबंधों और बाजार अंतर्दृष्टि के साथ सीधे थोक खरीदारों को अपनी फसलें बेचने की अनुमति देता है।",
    featuresTitle: "मुख्य विशेषताएँ",
    feature1Title: "डिजिटल अनुबंध",
    feature1Text: "पूर्व-फसल अनुबंधों के माध्यम से निष्पक्ष मूल्य निर्धारण और गारंटीकृत भुगतान सुरक्षित करें।",
    feature2Title: "बाजार अंतर्दृष्टि",
    feature2Text: "एआई-संचालित विश्लेषण वास्तविक समय में मूल्य प्रवृत्तियों और मांग पूर्वानुमान प्रदान करता है।",
    feature3Title: "किसान सहायता",
    feature3Text: "24/7 ग्राहक सहायता, स्थानीय भाषा समर्थन, और शैक्षिक संसाधन।"

   },
  te: {
    about: "గురించి",
    features: "లక్షణాలు",
    workflow: "ఇది ఎలా పనిచేస్తుంది",
    contact: "సంప్రదించండి",
    heroTitle: "రైతులను శక్తివంతం చేయడం, వ్యవసాయాన్ని మార్చడం",
    heroText: "రైతులు మరియు కొనుగోలుదారులను న్యాయమైన ధరలు, స్థిర ఒప్పందాలు మరియు సాంకేతికత ఆధారిత పరిష్కారాలతో అనుసంధానించడం.",
    explore: "ఉదంత్ అన్వేషించండి",
    aboutTitle: "ఉదంత్ గురించి",
    aboutText: "ఉదంత్ అనేది డిజిటల్ ప్లాట్‌ఫాం, ఇది మధ్యవర్తులను తొలగిస్తుంది మరియు రైతులు వారి పంటలను ముందస్తు-హార్వెస్ట్ ఒప్పందాలు మరియు మార్కెట్ అంచనాలతో నేరుగా బల్క్ కొనుగోలుదారులకు విక్రయించడానికి అనుమతిస్తుంది.",
    featuresTitle: "ప్రధాన లక్షణాలు",
    feature1Title: "డిజిటల్ ఒప్పందాలు",
    feature1Text: "ముందస్తు-హార్వెస్ట్ ఒప్పందాల ద్వారా న్యాయమైన ధరలు మరియు హామీ చెల్లింపులను పొందండి.",
    feature2Title: "మార్కెట్ అంతర్దృష్టి",
    feature2Text: "ఏఐ ఆధారిత విశ్లేషణలు తక్షణమే ధర ధోరణులను మరియు డిమాండ్ అంచనాలను అందిస్తాయి.",
    feature3Title: "రైతు మద్దతు",
    feature3Text: "24/7 కస్టమర్ సపోర్ట్, స్థానిక భాషా మద్దతు, మరియు విద్యా వనరులు."
   
  }
};

// ✅ Change Language Function
document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("language-select");

  if (languageSelect) {
    languageSelect.addEventListener("change", function () {
      let selectedLang = this.value;
      document.querySelectorAll("[data-lang]").forEach(element => {
        let key = element.getAttribute("data-lang");
        if (translations[selectedLang] && translations[selectedLang][key]) {
          element.innerHTML = translations[selectedLang][key];
        }
      });
    });
  }
});

// ✅ Smooth Scroll to Features Section
function scrollToFeatures() {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

// Smooth Scroll to Explore Section
function scrollToExplore() {
  document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
}



//MM



document.getElementById("matchButton").addEventListener("click", function() {
  const farmerId = document.getElementById("farmerId").value;

  fetch("http://127.0.0.1:5000/match", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ farmer_id: parseInt(farmerId) })
  })
  .then(response => response.json())
  .then(data => {
      if (data.matched_mill) {
          document.getElementById("result").innerHTML = `
              Match Found! <br>
              Farmer: ${data.farmer.name} <br>
              Mill: ${data.matched_mill.name} <br>
              Location: ${data.matched_mill.location}
          `;
      } else {
          document.getElementById("result").innerHTML = "No match found.";
      }
  })
  .catch(error => console.error("Error:", error));
});

document.getElementById("matchBtn").addEventListener("click", function() {
  const farmerId = document.getElementById("farmerId").value;

  fetch("http://127.0.0.1:5000/match", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ farmer_id: farmerId })
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("result").innerText = data.message;
  })
  .catch(error => console.error("Error:", error));
});
