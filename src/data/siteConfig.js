export const siteConfig = {
  name: "Ramiza Wellness Zone",
  tagline: "Mission Healthy and Happy Life",
  shortDescription: "A vibrant wellness community dedicated to transforming lives through daily health sessions, mindful nutrition, fitness habits, and joyful family events.",
  
  contact: {
    phone: "6352393043",
    displayPhone: "+91 63523 93043",
    email: "ramizawellnesszone@gmail.com",
    address: {
      line1: "Haji Building, Opp. Khamosh Footwear",
      line2: "Near Goliwala Book Store, Jamalpur",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "380001",
      full: "Haji Building, Opp. Khamosh Footwear, Near Goliwala Book Store, Jamalpur, Ahmedabad, Gujarat 380001"
    },
    googleMapsUrl: "https://maps.google.com/?q=Jamalpur+Ahmedabad+Gujarat",
    timings: {
      morningClub: "6:30 AM – 10:30 AM",
      eveningSession: "5:30 PM – 8:30 PM",
      sundayFamilyDay: "8:00 AM – 12:00 PM"
    }
  },

  whatsapp: {
    number: "916352393043",
    defaultMessage: "Hello Ramiza Wellness Zone! I would like to know more about your daily wellness sessions and community activities.",
    getLink: (customMsg) => {
      const msg = encodeURIComponent(customMsg || siteConfig.whatsapp.defaultMessage);
      return `https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`;
    }
  },

  navLinks: [
    { name: "Home", path: "#hero" },
    { name: "About Us", path: "#about" },
    { name: "Gallery", path: "#gallery" },
    { name: "Lifestyle", path: "#lifestyle" },
    { name: "Contact Us", path: "#contact" },
  ],

  stats: [
    { value: "500+", label: "Community Members", desc: "Active individuals & families transforming daily habits" },
    { value: "200+", label: "Wellness Sessions", desc: "Interactive morning & evening health lectures" },
    { value: "50+", label: "Community Events", desc: "Events at partner halls, open spaces & venues" },
    { value: "12+", label: "Family Days Celebrated", desc: "Dedicated togetherness & bonding events" },
  ],

  founder: {
    name: "Founder & Lead Wellness Coach",
    club: "Ramiza Wellness Zone",
    quote: "Wellness is not a temporary routine—it is a daily celebration of life, good nutrition, and positive community energy.",
    experience: "Years of dedicated community guidance in healthy active lifestyle & personalized habit coaching.",
    image: "/assets/coach-hero.jpeg"
  }
};
