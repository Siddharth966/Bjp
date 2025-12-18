import { useState } from "react";

const englishData = [
  {
    title: "1) Law and Order",
    content:
      "The Chinchwad Assembly constituency is known as a sensitive constituency with the largest number of slums. Despite the establishment of an independent commissionerate in the city, the number of serious crimes such as murders, rapes, child abuse, thefts, frauds, chain snatching, illegal alcohol sales, widespread drug trafficking, gambling, extortion, ‘koyata’ gangs, and terrorizing groups is increasing day by day. Therefore, my vision for Chinchwad is to strengthen the police system, Conducting police recruitment based on the population requirements, encourage the police force, and ensure a safe, corruption free and fear-free environment for citizens by cracking down on every criminal.",
  },
  {
    title: "2) Health",
    content:
      "My vision for Chinchwad includes seeking government-level assistance, expanding the medical infrastructure, and keeping private hospitals that exploit patients with excessive billing in check. Additionally, taking strict action against hospitals that misuse government schemes, establishing a modern cancer hospital to treat rapidly increasing life-threatening diseases like cancer, and empowering the Hospital in Chinchwad. This is my vision for My Chinchwad.",
  },
  {
    title: "3) Education & Sports",
    content:
      "My vision for Chinchwad includes maintaining the quality of education in government-aided schools, implementing government control over the exorbitant fees charged by unaided schools, and ensuring that the admission process under the RTE (Right to Education) is completed by July. Strict action will be taken against institutions that use various tactics to avoid the RTE admission process. In addition to traditional academic methods, vocational education will be integrated into secondary education to help students become self-reliant. Enhancing the standard of education in my city and providing students with national and international platforms and opportunities. Additionally, effective efforts have not been made in recent years to support athletes in the Chinchwad Assembly constituency. Athletes here feel the lack of well-equipped fields and national and international sports competitions. My vision is to establish the largest sports university in Maharashtra at the Shri Shiv Chhatrapati International Sports Complex in Balewadi, and to provide athletes with proper training and competitive opportunities these are key aspects of my vision for Chinchwad.",
  },
  {
    title: "4) Slum Rehabilitation Authority",
    content:
      "In Chinchwad city, where 14.78% of the population resides in slums, many have come here in search of work and a livelihood. These slum dwellers, who have made valuable contributions as labourers to the city's development, dream of owning their own homes. To fulfill this dream, my vision for Chinchwad is to provide these residents with well-equipped housing units, improving their living standards and quality of life. Additionally, there is an urgent need to launch an effective and people-friendly campaign to make the city slum-free. Efforts will be made to ensure that the poor receive homes up to 500 square feet in this rehabilitation process. This is my vision for Chinchwad.",
  },
  {
    title: "5) Government Scheme Benefits",
    content:
      "To ensure that government schemes reach the general public, it is essential to conduct various programs that provide information about these schemes and help people avail their benefits. It is the right of our differently-abled and disabled brothers and sisters to receive education, employment, business opportunities, public life participation, and access to government schemes at all levels, including reserved seats and appropriate opportunities. Therefore, the meticulous implementation of welfare schemes for the disabled is necessary. Often, the funds reserved for backward classes by the Maharashtra government and the municipal corporation are not utilized due to administrative negligence. Sometimes, these funds are merged into general funds, which is an injustice to the backward class community. Due to a corrupt system, our backward class brothers and sisters are deprived of their rightful entitlements. Therefore, it is crucial to implement various welfare schemes for the backward classes and ensure that every penny of the reserved funds is used for their development. Working for the justice and upliftment of Scheduled Castes, Scheduled Tribes, and other backward classes, and ensuring that every eligible and needy beneficiary receives the benefits of their rightful schemes, is my vision for Chinchwad.",
  },
  {
    title: "6) Women Empowerment",
    content:
      "The economic progress of women leads to the progress of families, which in turn results in the advancement of society, the state, and the nation, ultimately making the country a superpower. Therefore, women's empowerment is of utmost importance. Simply introducing schemes like Majhi Ladki Bhagin Yojana during elections and giving ₹1500 does not empower women. Due to the inflation and unemployment imposed by the central and state governments, women are struggling. Offering just ₹1500 is an insult to all women by this government. Self-respecting women do not want charity from the government; they need rightful employment and rights. The government fails to understand this! By providing business training to women through self-help groups and making loans available from banks for small businesses, many aspiring women will be able to start their own businesses and become permanently empowered. These same women will raise the name of our country. Therefore, my vision for Chinchwad is to implement a long-term, solid policy for women's empowerment.",
  },
  {
    title: "7) Roads, Traffic & Transport",
    content:
      "With the growing population of Chinchwad, the increasing traffic congestion and inadequate roads have highlighted the need to strengthen and improve the public transport system. To address the traffic congestion across the city, it is necessary to construct flyovers and underpasses at critical locations and enhance the city's internal transport system to ensure safe and efficient public travel. Providing special discounts and facilities during travel for students, women, senior citizens, and differently-abled individuals, completing all pending roadworks, and making the traffic system more efficient is my vision for Chinchwad.",
  },
  {
    title: "8) Justice & Social Relief for Society Members",
    content:
      "To fulfil their dream of owning a home, common citizens spend their life savings and take out loans to buy flats from builders. However, they soon realize that they have been greatly deceived by the builders and the municipal administration. There are many issues faced by society members in the city. Despite collecting exorbitant taxes, the municipal corporation rarely takes the initiative to resolve the problems and difficulties faced by society members. Therefore, it is crucial to ensure justice and relief for common society members. It is necessary to legally curb builders who exploit loopholes in agreements related to water supply and sewage treatment plants to hold society members hostage. Many societies face water shortages and have to rely on tankers for water because builders do not provide the water supply as per the agreement, and the STP plants they install are of poor quality, leading to additional financial burdens on society members. Hence, at the municipal level, it is important to establish and enforce strict rules to prevent flat owners from being deceived. Additionally, at the state level, policy decisions should be made to amend the RERA law for the protection of flat owners and to ensure its strict implementation. This is my vision for My Chinchwad.",
  },
  {
    title: "9) Development",
    content:
      "It is the duty of the elected representatives to provide all basic amenities to the citizens of the Chinchwad Assembly constituency and to elevate their standard of living. In the coming years, the comprehensive development of the Chinchwad Assembly will be prioritized.These are some of the ambitious projects I intend to undertake in our constituency. My vision for Pimpri is to establish the Chinchwad Assembly constituency as a model of development for the nation.",
  },
];

const marathiData = [
  {
    title: "१) कायदा व सुव्यवस्था",
    content:
      "चिंचवड विधानसभा मतदारसंघ हा मोठ्या प्रमाणात झोपडपट्ट्या असलेला आणि संवेदनशील मतदारसंघ म्हणून ओळखला जातो. शहरात स्वतंत्र पोलीस आयुक्तालय स्थापन झाले असतानाही खून, बलात्कार, बाल लैंगिक अत्याचार, चोरी, फसवणूक, साखळी चोरी, अवैध दारू विक्री, अमली पदार्थांची तस्करी, जुगार, खंडणी, ‘कोयता’ गँग आणि दहशत पसरवणारे टोळके यांसारख्या गंभीर गुन्ह्यांमध्ये दिवसेंदिवस वाढ होत आहे. त्यामुळे चिंचवडसाठी माझे व्हिजन म्हणजे पोलीस यंत्रणा अधिक सक्षम करणे, लोकसंख्येच्या प्रमाणात पोलीस भरती करणे, पोलीस दलाला प्रोत्साहन देणे आणि प्रत्येक गुन्हेगारावर कठोर कारवाई करून नागरिकांसाठी सुरक्षित, भ्रष्टाचारमुक्त व भयमुक्त वातावरण निर्माण करणे."
  },
  {
    title: "२) आरोग्य",
    content:
      "चिंचवडसाठी माझ्या व्हिजनमध्ये शासकीय पातळीवर मदत मिळवून वैद्यकीय पायाभूत सुविधा वाढवणे आणि रुग्णांची आर्थिक लूट करणाऱ्या खासगी रुग्णालयांवर नियंत्रण ठेवणे यांचा समावेश आहे. शासकीय योजना गैरवापर करणाऱ्या रुग्णालयांवर कठोर कारवाई करणे, वाढत्या कर्करोगासारख्या जीवघेण्या आजारांवर उपचारासाठी आधुनिक कर्करोग रुग्णालय उभारणे आणि चिंचवड येथील रुग्णालय अधिक सक्षम करणे, हे माझ्या चिंचवडसाठीच्या आरोग्य विषयक व्हिजनचा भाग आहे."
  },
  {
    title: "३) शिक्षण व क्रीडा",
    content:
      "चिंचवडसाठी माझ्या व्हिजनमध्ये अनुदानित शाळांमधील शिक्षणाची गुणवत्ता टिकवणे, विनाअनुदानित शाळांकडून आकारल्या जाणाऱ्या अवाजवी शुल्कावर शासकीय नियंत्रण आणणे आणि आरटीई अंतर्गत प्रवेश प्रक्रिया जुलै महिन्यापर्यंत पूर्ण होईल याची खात्री करणे यांचा समावेश आहे. आरटीई प्रवेश टाळण्यासाठी विविध क्लृप्त्या करणाऱ्या संस्थांवर कठोर कारवाई केली जाईल. पारंपरिक शिक्षणासोबतच माध्यमिक स्तरावर व्यावसायिक शिक्षण सुरू करून विद्यार्थ्यांना आत्मनिर्भर बनवले जाईल. विद्यार्थ्यांना राष्ट्रीय व आंतरराष्ट्रीय स्तरावर संधी उपलब्ध करून देणे हेही माझ्या व्हिजनचा भाग आहे. चिंचवड विधानसभा मतदारसंघातील खेळाडूंना आवश्यक मैदाने आणि स्पर्धांचा अभाव आहे. त्यामुळे बालेवाडी येथील श्री शिवछत्रपती आंतरराष्ट्रीय क्रीडा संकुलात महाराष्ट्रातील सर्वात मोठे क्रीडा विद्यापीठ स्थापन करून खेळाडूंना दर्जेदार प्रशिक्षण व स्पर्धा संधी उपलब्ध करून देणे हे माझे व्हिजन आहे."
  },
  {
    title: "४) झोपडपट्टी पुनर्वसन प्राधिकरण",
    content:
      "चिंचवड शहरातील सुमारे १४.७८% लोकसंख्या झोपडपट्ट्यांमध्ये राहते. रोजगारासाठी येथे आलेल्या या नागरिकांनी शहराच्या विकासात मोलाचे योगदान दिले आहे आणि त्यांचे स्वतःचे घर असावे हे त्यांचे स्वप्न आहे. हे स्वप्न पूर्ण करण्यासाठी चिंचवडसाठी माझे व्हिजन म्हणजे झोपडपट्टीवासीयांना सर्व सुविधा असलेली घरे उपलब्ध करून देऊन त्यांचा जीवनमान उंचावणे. शहर झोपडपट्टीमुक्त करण्यासाठी लोकाभिमुख आणि प्रभावी मोहिम राबवणे आवश्यक आहे. पुनर्वसन प्रक्रियेत गरीबांना किमान ५०० चौरस फूट क्षेत्रफळाची घरे मिळावीत यासाठी प्रयत्न केले जातील."
  },
  {
    title: "५) शासकीय योजनांचे लाभ",
    content:
      "शासकीय योजनांचे लाभ सर्वसामान्य नागरिकांपर्यंत पोहोचण्यासाठी त्या योजनांची माहिती देणारे कार्यक्रम राबवणे आवश्यक आहे. दिव्यांग बांधवांना शिक्षण, रोजगार, व्यवसाय, सार्वजनिक जीवनातील सहभाग आणि आरक्षणाचा लाभ मिळणे हा त्यांचा हक्क आहे. त्यामुळे दिव्यांगांसाठीच्या योजनांची काटेकोर अंमलबजावणी गरजेची आहे. मागासवर्गीयांसाठी राखीव असलेला निधी अनेकदा प्रशासनाच्या निष्काळजीपणामुळे वापरला जात नाही किंवा सर्वसाधारण निधीत वर्ग केला जातो, ही मोठी अन्यायकारक बाब आहे. त्यामुळे मागासवर्गीय, अनुसूचित जाती-जमाती आणि इतर वंचित घटकांसाठी असलेल्या प्रत्येक योजनेचा लाभ पात्र लाभार्थ्यांपर्यंत पोहोचवणे आणि राखीव निधी त्यांच्यासाठीच वापरणे हे माझे चिंचवडसाठीचे व्हिजन आहे."
  },
  {
    title: "६) महिला सक्षमीकरण",
    content:
      "महिलांचा आर्थिक विकास झाला तर कुटुंब, समाज, राज्य आणि देशाचा विकास होतो. केवळ निवडणुकीच्या काळात ‘माझी लाडकी बहीण’ योजनेअंतर्गत ₹१५०० देणे म्हणजे महिलांचे सक्षमीकरण नव्हे. वाढती महागाई आणि बेरोजगारीमुळे महिला त्रस्त आहेत. स्वाभिमानी महिलांना दान नको, तर रोजगार आणि हक्क हवेत. स्वयं-सहायता गटांमार्फत महिलांना व्यवसाय प्रशिक्षण देणे, बँक कर्ज उपलब्ध करून देणे आणि महिलांना कायमस्वरूपी आर्थिक स्वावलंबन मिळवून देणे, हे माझ्या चिंचवडसाठीच्या महिला सक्षमीकरणाचे दीर्घकालीन आणि ठोस धोरण आहे."
  },
  {
    title: "७) रस्ते, वाहतूक व परिवहन",
    content:
      "चिंचवडची वाढती लोकसंख्या, वाहतूक कोंडी आणि अपुरे रस्ते पाहता सार्वजनिक वाहतूक व्यवस्था सक्षम करणे अत्यावश्यक आहे. शहरातील प्रमुख ठिकाणी उड्डाणपूल आणि भुयारी मार्ग उभारणे, अंतर्गत वाहतूक सुधारणा करणे, विद्यार्थ्यांना, महिला, ज्येष्ठ नागरिक आणि दिव्यांगांसाठी सवलती देणे, अपूर्ण रस्ते कामे पूर्ण करणे आणि वाहतूक व्यवस्था अधिक कार्यक्षम बनवणे हे माझ्या चिंचवडसाठीचे व्हिजन आहे."
  },
  {
    title: "८) सोसायटीधारकांना न्याय व दिलासा",
    content:
      "घर खरेदीसाठी सामान्य नागरिक आयुष्याची कमाई गुंतवतात आणि कर्ज काढतात, मात्र अनेकदा बिल्डर आणि महापालिकेकडून त्यांची फसवणूक होते. पाणीपुरवठा, सांडपाणी प्रक्रिया केंद्रे (STP), कर आकारणी अशा अनेक समस्यांना सोसायटीधारकांना सामोरे जावे लागते. बिल्डर करारातील त्रुटींचा गैरफायदा घेतात. त्यामुळे बिल्डरांवर कठोर कायदेशीर नियंत्रण आणणे, महापालिका पातळीवर कडक नियम लागू करणे आणि फ्लॅटधारकांच्या संरक्षणासाठी RERA कायद्यात सुधारणा करून त्याची कठोर अंमलबजावणी करणे हे माझे चिंचवडसाठीचे व्हिजन आहे."
  },
  {
    title: "९) विकास",
    content:
      "निवडून आलेल्या प्रतिनिधींचे कर्तव्य आहे की त्यांनी नागरिकांना सर्व मूलभूत सुविधा पुरवून त्यांचा जीवनमान उंचावावे. येत्या काळात चिंचवड विधानसभा मतदारसंघाचा सर्वांगीण विकास प्राधान्याने केला जाईल. विविध महत्त्वाकांक्षी प्रकल्प राबवून चिंचवड विधानसभा मतदारसंघ देशासाठी विकासाचा आदर्श बनवणे हे माझे व्हिजन आहे."
  }
];


const Vision = () => {
  const [language, setLanguage] = useState("en");
  const [activeIndex, setActiveIndex] = useState(null);

  const data = language === "en" ? englishData : marathiData;

  return (
    <section className="vision-gradient">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5 fade-in">
          <h2 className="fw-bold vision-title">
            {language === "en" ? "My Vision" : "माझे व्हिजन"}
          </h2>
          <button
            className="btn btn-danger mt-3"
            onClick={() => setLanguage(language === "en" ? "mr" : "en")}
          >
            {language === "en" ? "Marathi" : "English"}
          </button>
        </div>

        {/* Accordion */}
        <div className="accordion-list">
          {data.map((item, index) => (
            <div
              key={index}
              className={`vision-item ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <div
                className={`vision-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {item.title}
                <span className="arrow">▼</span>
              </div>

              <div
                className="vision-content"
                style={{
                  maxHeight:
                    activeIndex === index ? "500px" : "0px",
                }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Vision;
