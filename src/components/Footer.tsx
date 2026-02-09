import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: {
      title: "خدمات ازکی",
      links: ["بیمه شخص ثالث", "بیمه بدنه", "بیمه موتور", "بیمه خانه", "بیمه تکمیلی", "بیمه عمر"],
    },
    company: {
      title: "ازکی",
      links: ["درباره ما", "تماس با ما", "فرصت‌های شغلی", "بلاگ", "قوانین و مقررات"],
    },
    support: {
      title: "پشتیبانی",
      links: ["سوالات متداول", "راهنمای خرید", "پیگیری سفارش", "شکایات"],
    },
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="azki-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold text-primary">azki</span>
            </div>
            
            <p className="text-background/70 mb-6 max-w-sm">
              ازکی، پلتفرم مقایسه و خرید آنلاین بیمه. با ما بهترین بیمه رو انتخاب کن.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5" />
                <span>۰۲۱-۹۱۰۰۱۲۳۴</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5" />
                <span>info@azki.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                <span>تهران، میدان ونک</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Linkedin, Send].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <p className="text-background/50 text-sm">
            © پروژه آموزشی درس فناوری و اطلاعات دانشگاه امیرکبیر - بهنیا معصومی - تمامی حقوق محفوظ است
          </p>

          {/* Trust Badges Placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-background/10 rounded-lg flex items-center justify-center text-xs text-background/50">
              نماد
            </div>
            <div className="w-16 h-16 bg-background/10 rounded-lg flex items-center justify-center text-xs text-background/50">
              اعتماد
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
