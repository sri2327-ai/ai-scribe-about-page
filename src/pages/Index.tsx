
const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Healthcare Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              S10.AI delivers the fastest AI medical scribe, converting conversations into precise clinical notes. Reduce admin work & focus on patient care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/solutions/crush" 
                className="bg-tealBlue hover:bg-tealBlueBright text-white px-6 py-3 rounded-full text-lg font-medium transition-colors"
              >
                Explore CRUSH
              </a>
              <a 
                href="/solutions/bravo" 
                className="bg-white border-2 border-tealBlue text-tealBlue hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-medium transition-colors"
              >
                Explore BRAVO
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              S10.AI works with healthcare providers across specialties to improve documentation efficiency and patient care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">CRUSH - AI Medical Scribe</h3>
              <p className="text-gray-600 mb-4">
                Automate clinical documentation with our advanced AI scribe that captures, organizes, and formats patient-provider conversations.
              </p>
              <a href="/solutions/crush" className="text-tealBlue font-medium hover:underline">Learn more →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">BRAVO - AI Patient Care</h3>
              <p className="text-gray-600 mb-4">
                Enhance patient engagement with personalized follow-ups, appointment reminders, and care plan adherence monitoring.
              </p>
              <a href="/solutions/bravo" className="text-tealBlue font-medium hover:underline">Learn more →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">EHR Integrations</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate with leading electronic health record systems to streamline your workflow without disruption.
              </p>
              <a href="/integrations" className="text-tealBlue font-medium hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Ready to transform your practice?</h2>
          <a 
            href="/contactus" 
            className="bg-tealBlue hover:bg-tealBlueBright text-white px-8 py-4 rounded-full text-lg font-medium transition-colors inline-block"
          >
            Book a Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
