import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import banner from "../../../public/image/h1_hero_2.png";


export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white" data-testid="hero-section">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ 
          backgroundImage: `url(${banner})`,

        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-testid="hero-content">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="hero-title">
              လူငယ်များအနာဂတ်အတွက် <span className="text-amber-400">NCC UK Diploma</span> အတန်းများအတွက် <span className="text-amber-400"> NiT College</span>မှာတတ်ရောက်နိုင်ပါပြီ။
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-gray-200" data-testid="hero-subtitle-myanmar">
             <span className="text-amber-400"> NiT</span> နဲ့အတူ နိုင်ငံတကာနဲ့ ပြည်တွင်းမှာခိုင်မာတဲ့ Career တစ်ခုကို တည်ဆောက်လိုက်ပါ။
            </p>
            <p className="text-xl mb-8 text-gray-300" data-testid="hero-subtitle-english">
              <span className="text-amber-400">NCC Program (Level 3, 4, 5)</span> အတန်းများကို <span className="text-amber-400">NiT College</span> နဲ့ ကမ္ဘာ့အဆင့်မီ <span className="text-amber-400"> UK</span> နိုင်ငံ <span className="text-amber-400"> NCC Education</span> တို့တရားoင်ပူးပေါင်းပြီး ဖွင့်လှစ်ထားတဲ့ Program တစ်ခုဖြစ်တဲ့အပြင် ပြည်ပကို သွားစရာမလိုဘဲ ပြည်တွင်းမှာတင် <span className="text-amber-400"> UK Diploma</span> ကို ရယူနိုင်မှာ ဖြစ်ပါတယ်။
            </p>
           <div className="flex flex-col sm:flex-row gap-4" data-testid="hero-actions">
  <Link
    to="/programs"
    className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 #000080 px-8 py-4 text-lg font-bold rounded"
    data-testid="explore-programs-button"
  >
    Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
  </Link>

  <Link
    to="/about"
    className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 text-lg font-bold rounded"
    data-testid="learn-more-button"
  >
    Learn More
  </Link>
</div>

          </div>
          <div className="lg:block" data-testid="hero-image">
            {/* <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Students collaborating in modern classroom" 
              className="rounded-xl shadow-2xl"
              data-testid="hero-main-image"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
