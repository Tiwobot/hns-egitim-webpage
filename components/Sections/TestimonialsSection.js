import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-custom-blue">
              Öğrenci ve Veli Yorumları
            </h2>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              Başarı hikayelerimizden bazıları...
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {/* Testimonial Cards */}
          <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
            <div className="px-6 hover-scale">
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Ayşe K.</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Veli
                </p>
                <p className="mt-4 text-blueGray-500">
                  "Kızım matematiği artık çok seviyor. Her dersten sonra yeni şeyler öğrenmenin 
                  heyecanıyla geliyor."
                </p>
              </div>
            </div>
          </div>
          {/* Add more testimonial cards */}
        </div>
      </div>
    </section>
  );
} 