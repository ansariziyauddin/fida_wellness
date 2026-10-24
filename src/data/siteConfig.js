const BASE = import.meta.env.BASE_URL || '/';
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = BASE.endsWith('/') ? BASE : `${BASE}/`;
  return `${cleanBase}${cleanPath}`;
};

export const siteConfig = {
  name: "Fida Wellness Zone",
  tagline: "Mission Healthy and Happy Life",
  shortDescription: "A vibrant wellness community dedicated to transforming lives through daily health sessions, mindful nutrition, fitness habits, and joyful family events.",
  logo: getAssetUrl("assets/logo.png"),
  
  contact: {
    phone: "8530140707",
    displayPhone: "+91 85301 40707",
    email: "chanshakirfida@gmail.com",
    address: {
      line1: "Bharat Traders, Chhipa Society",
      line2: "Bakery Wali Gali, Danilimda",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "382405",
      full: "Bharat Traders, Chhipa Society, Bakery Wali Gali, Danilimda, Ahmedabad, Gujarat 382405"
    },
    googleMapsUrl: "https://maps.google.com/?q=Bharat+Traders+Chhipa+Society+Bakery+Wali+Gali+Danilimda+Ahmedabad+Gujarat+382405",
    timings: {
      morningClub: "7:00 AM – 1:00 PM",
      eveningSession: "3:00 PM – 7:00 PM",
      fullDay: "7:00 AM – 7:00 PM",
      sundayFamilyDay: "7:00 AM – 7:00 PM",
      days: "Monday to Sunday, 7:00 AM – 7:00 PM"
    }
  },

  whatsapp: {
    number: "918530140707",
    defaultMessage: "Hello Fida Wellness Zone! I would like to know more about your daily wellness sessions and community activities.",
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
    name: "Shakir Hussain",
    title: "Founder & Lead Wellness Coach",
    club: "Fida Wellness Zone",
    quote: "Wellness is not a temporary routine—it is a daily celebration of life, good nutrition, and positive community energy.",
    experience: "Years of dedicated community guidance in healthy active lifestyle & personalized habit coaching.",
    image: getAssetUrl("assets/coach-placeholder.jpg")
  },

  parentCommunity: {
    name: "Magical Community",
    logo: getAssetUrl("assets/magical-community.png"),
    tagline: "Empowering Lives Through Positive Habits & Nutrition",
    hashtag: "#MagicalCommunity"
  }
};
