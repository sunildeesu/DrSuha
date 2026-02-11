export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Suha Riyaz",
  description:
    "Consultant Psychiatrist & Assistant Professor of Psychiatry at Shridevi Institute of Medical Sciences, Karnataka. Offering committed, confidential psychiatric care specializing in women's emotional health, anxiety, mood disorders, couples therapy, and addiction psychiatry.",
  telephone: "+919148828642",
  email: "doctorknowledgegeek@gmail.com",
  url: "https://drsuhariyaz.com",
  sameAs: [
    "https://www.linkedin.com/in/suha-riyaz",
    "https://medium.com/@doctorknowledgegeek",
  ],
  medicalSpecialty: "Psychiatry",
  knowsLanguage: ["English", "Kannada", "Hindi", "Urdu"],
  worksFor: {
    "@type": "Hospital",
    name: "Shridevi Institute of Medical Sciences & Research Hospital",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MBBS",
      recognizedBy: {
        "@type": "Organization",
        name: "Subbaiah Medical College & Hospital, Shimoga",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MD Psychiatry",
      recognizedBy: {
        "@type": "Organization",
        name: "RRMC&H Bangalore",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "MRCPsych Part A",
      recognizedBy: {
        "@type": "Organization",
        name: "Royal College of Psychiatrists, UK",
      },
    },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Indian Psychiatric Society",
    },
    {
      "@type": "Organization",
      name: "Royal College of Psychiatrists",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  availableService: [
    { "@type": "MedicalTherapy", name: "Cognitive Behaviour Therapy (CBT)" },
    { "@type": "MedicalTherapy", name: "Dialectical Behaviour Therapy (DBT)" },
    { "@type": "MedicalTherapy", name: "Couples Therapy" },
    { "@type": "MedicalTherapy", name: "Mindfulness-Based Therapy" },
    { "@type": "MedicalTherapy", name: "Supportive Psychotherapy" },
  ],
};
