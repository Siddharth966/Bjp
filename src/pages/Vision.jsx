import { useState } from "react";

const englishData = [
  {
    title: "1) Law and Order",
    content:
      "Strengthening law and order by empowering police forces, increasing manpower as per population, eliminating crime, and ensuring a safe, corruption-free, and fear-free environment for citizens.",
  },
  {
    title: "2) Health",
    content:
      "Improving healthcare infrastructure, strengthening primary health centers, upgrading government hospitals, and ensuring affordable healthcare for every citizen.",
  },
  {
    title: "3) Education & Sports",
    content:
      "Providing quality education, job-oriented skill training, and modern sports infrastructure to empower youth and build a confident generation.",
  },
  {
    title: "4) Employment & Industries",
    content:
      "Encouraging industrial growth, MSMEs, entrepreneurship, and sustainable employment opportunities to strengthen the local economy.",
  },
  {
    title: "5) Government Scheme Benefits",
    content:
      "Ensuring transparent implementation and last-mile delivery of government schemes to farmers, women, youth, workers, and senior citizens.",
  },
  {
    title: "6) Women Empowerment",
    content:
      "Promoting women safety, education, entrepreneurship, financial independence, and effective implementation of women-centric schemes.",
  },
  {
    title: "7) Roads, Traffic & Transport",
    content:
      "Developing durable roads, smart traffic management, and reliable public transport for safer and faster daily travel.",
  },
  {
    title: "8) Justice & Social Relief",
    content:
      "Providing justice, grievance redressal, transparency, and timely relief to every citizen and marginalized community.",
  },
  {
    title: "9) Development",
    content:
      "Ensuring all-round development through infrastructure, green initiatives, government office consolidation, oxygen parks, and senior citizen facilities.",
  },
];

const marathiData = [
  {
    title: "१) कायदा व सुव्यवस्था",
    content:
      "पोलीस यंत्रणा मजबूत करून, गुन्हेगारीवर कठोर कारवाई करून नागरिकांसाठी सुरक्षित, भ्रष्टाचारमुक्त व भयमुक्त वातावरण निर्माण करणे.",
  },
  {
    title: "२) आरोग्य",
    content:
      "दर्जेदार आरोग्य सुविधा, प्राथमिक आरोग्य केंद्रे बळकट करणे आणि सर्व नागरिकांसाठी परवडणारी आरोग्यसेवा उपलब्ध करणे.",
  },
  {
    title: "३) शिक्षण व क्रीडा",
    content:
      "दर्जेदार शिक्षण, कौशल्य विकास आणि क्रीडा पायाभूत सुविधा मजबूत करून युवकांना सक्षम करणे.",
  },
  {
    title: "४) रोजगार व उद्योग",
    content:
      "उद्योगांना चालना देऊन, उद्योजकतेला प्रोत्साहन देऊन आणि शाश्वत रोजगार निर्माण करणे.",
  },
  {
    title: "५) शासकीय योजनांचे फायदे",
    content:
      "सर्व सरकारी योजनांचे लाभ पारदर्शकपणे प्रत्येक पात्र नागरिकापर्यंत पोहोचवणे.",
  },
  {
    title: "६) महिला सक्षमीकरण",
    content:
      "महिलांची सुरक्षा, शिक्षण, आर्थिक स्वावलंबन आणि उद्योजकतेला प्रोत्साहन देणे.",
  },
  {
    title: "७) रस्ते व वाहतूक",
    content:
      "उत्तम रस्ते, स्मार्ट वाहतूक व्यवस्थापन आणि सार्वजनिक वाहतूक सुधारणा.",
  },
  {
    title: "८) न्याय व दिलासा",
    content:
      "नागरिकांना वेळेवर न्याय, तक्रार निवारण आणि सामाजिक दिलासा देणे.",
  },
  {
    title: "९) विकास",
    content:
      "पिंपरीचा सर्वांगीण विकास, पायाभूत सुविधा, ऑक्सिजन पार्क आणि ज्येष्ठ नागरिक सुविधा उभारणे.",
  },
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
