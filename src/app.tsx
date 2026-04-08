// import { Router } from "@/general/router.component";
import "./app.css";
import Favicon from "@/assets/favicon.svg";

function Application() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center flex flex-col items-center gap-6">
        <img src={Favicon} className="w-24 h-24" alt="Jana Göllner Logo" />

        <h1 className="text-3xl md:text-4xl font-yeseva text-gray-800">
          Jana Göllner
        </h1>

        <p className="text-base text-gray-500 italic">
          Heilpraktikerin · Hebamme · Hormonpraktikerin
        </p>

        <div className="border-t border-gray-200 w-full my-2" />

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 text-left flex flex-col gap-4">
          <p className="text-lg text-gray-700 font-inter leading-relaxed">
            Ich bin aktuell nicht als Hebamme tätig, helfe Ihnen aber gerne in
            Heilpraktiker-Angelegenheiten weiter.
          </p>

          <p className="text-gray-600 font-inter leading-relaxed">
            Als staatlich geprüfte Hebamme, Heilpraktikerin und
            Hormonpraktikerin begleite ich Frauen, Männer und Familien
            ganzheitlich – mit Naturheilkunde, Traditioneller Chinesischer
            Medizin (TCM), Akupunktur und psychosomatischen Verfahren.
          </p>

          <p className="text-gray-600 font-inter leading-relaxed">
            Meine Schwerpunkte umfassen Schilddrüsengesundheit, Erschöpfung,
            Kinderwunsch, Zyklusbeschwerden, Wechseljahresbeschwerden,
            Testosteronmangel sowie psychosomatische Beschwerden wie
            Schlafprobleme, Verdauungsstörungen und innere Unruhe.
          </p>

          <p className="text-gray-600 font-inter leading-relaxed">
            Mein Ziel ist es, nicht nur Symptome zu lindern, sondern Ursachen zu
            verstehen, Selbstheilungskräfte zu aktivieren und nachhaltige
            Veränderungen zu ermöglichen.
          </p>
        </div>

        <a
          href="https://heilpraktikerin-jana-goellner.de"
          className="mt-2 inline-block bg-[#33554d] text-white font-inter font-medium px-8 py-3 rounded-full hover:bg-[#2a4540] transition-colors"
        >
          Zur Heilpraktiker-Praxis →
        </a>

        <p className="text-sm text-gray-400 font-inter">
          https://heilpraktikerin-jana-goellner.de
        </p>
      </div>
    </div>
  );
}

export default Application;
