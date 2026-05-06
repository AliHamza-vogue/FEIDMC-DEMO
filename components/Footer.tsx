import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
                <span className="text-brand-navy font-bold text-xl">F</span>
              </div>
              <span className="text-white font-display font-bold text-2xl tracking-tight">FIEDMC</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Faisalabad Industrial Estate Development and Management Company. 
              Pakistan&apos;s premier industrial hub driving economic growth and 
              sustainable development through modern industrial cities.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-brand-gold">Industrial Estates</h3>
            <ul className="space-y-4">
              {[
                { name: 'M-3 Industrial City', slug: 'm3-industrial-city' },
                { name: 'Allama Iqbal Industrial City', slug: 'allama-iqbal' },
                { name: 'Value Addition City', slug: 'value-addition-city' },
                { name: 'FIEDMC City', slug: 'fiedmc-city' }
              ].map((estate) => (
                <li key={estate.slug}>
                  <Link href={`/estates/${estate.slug}`} className="text-white/60 hover:text-white transition-colors text-sm">
                    {estate.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-brand-gold">Head Office</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/60">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>FIEDMC Head Office, M-3 Industrial City Central, Faisalabad, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>+92 41 890 0000</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>info@fiedmc.com.pk</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-brand-gold">Newsletter</h3>
            <p className="text-white/60 text-sm">Stay updated with our latest developments and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-l-md w-full text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy px-4 py-3 rounded-r-md font-bold text-sm transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs gap-4">
          <p>© {currentYear} FIEDMC. All Rights Reserved. Govt. of Punjab, Pakistan.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
