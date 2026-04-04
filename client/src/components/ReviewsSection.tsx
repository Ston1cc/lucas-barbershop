import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

interface Review {
  nameRo: string;
  nameRu: string;
  textRo: string;
  textRu: string;
  rating: number;
  timeRo: string;
  timeRu: string;
  stylist?: string;
}

const reviews: Review[] = [
  {
    nameRo: "Client Verificat",
    nameRu: "Проверенный Клиент",
    textRo: "Am fost la o tunsoare cand am vizitat Chisinaul. Probabil cea mai buna decizie pe care am luat-o. Rosca Ion este un maestru al artei tunsului. Am avut cea mai buna tunsoare din viata mea! Daca vizitati Chisinaul, faceti-va timp si mergeti la Peaky Blades. Nu veti regreta niciodata alegerea.",
    textRu: "Я подстригся когда был в Кишинёве. Пожалуй, лучшее решение, которое я принял. Рошка Ион - мастер парикмахерского искусства. У меня была лучшая стрижка в моей жизни! Если вы посещаете Кишинёв, найдите время и зайдите в Peaky Blades. Вы никогда не пожалеете о своём выборе.",
    rating: 5,
    timeRo: "acum 4 luni",
    timeRu: "4 месяца назад",
    stylist: "Rosca Ion",
  },
  {
    nameRo: "Client Fidel",
    nameRu: "Постоянный Клиент",
    textRo: "Folosesc serviciile lui Andrei de cativa ani. Serviciu excelent, atmosfera distractiva. Recomand cu incredere!",
    textRu: "Пользуюсь услугами Андрея уже несколько лет. Отличный сервис, весёлая атмосфера. Рекомендую!",
    rating: 5,
    timeRo: "acum 1 an",
    timeRu: "1 год назад",
  },
  {
    nameRo: "Client Nou",
    nameRu: "Новый Клиент",
    textRo: "Adevarati profesionisti si preturi adecvate. Recomand!",
    textRu: "Настоящие профессионалы и адекватные цены. Рекомендую!",
    rating: 5,
    timeRo: "acum 3 saptamani",
    timeRu: "3 недели назад",
  },
  {
    nameRo: "Client Multumit",
    nameRu: "Довольный Клиент",
    textRo: "Barbierul Andrei chiar se pricepe, un barber de top cu un ochi excelent pentru detalii. A ascultat exact ce am vrut si a livrat o tunsoare fantastica. Il recomand cu caldura oricui cauta un barber excelent.",
    textRu: "Барбер Андрей действительно знает своё дело, топовый барбер с отличным глазом на детали. Он выслушал именно то, что я хотел, и сделал фантастическую стрижку. Горячо рекомендую его всем, кто ищет отличного барбера.",
    rating: 5,
    timeRo: "acum 9 luni",
    timeRu: "9 месяцев назад",
    stylist: "Andrei",
  },
];

function ReviewCard({ review, index, isInView }: { review: Review; index: number; isInView: boolean }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative p-8 bg-[#1A1A1A]/50 border border-[#C8A961]/10 rounded-sm hover:border-[#C8A961]/25 transition-all duration-500 group"
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 text-[#C8A961]/10 group-hover:text-[#C8A961]/20 transition-colors duration-500" size={40} />

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-[#C8A961] text-[#C8A961]" />
        ))}
      </div>

      {/* Review Text */}
      <p
        className="text-[#E8E0D4]/70 text-sm leading-relaxed mb-6 italic"
        style={{ fontFamily: "var(--font-display)" }}
      >
        &ldquo;{lang === "ro" ? review.textRo : review.textRu}&rdquo;
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-[#C8A961]/5">
        <div>
          <p className="text-[#E8E0D4] text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
            {lang === "ro" ? review.nameRo : review.nameRu}
          </p>
          {review.stylist && (
            <p className="text-[#C8A961]/60 text-xs mt-1" style={{ fontFamily: "var(--font-body)" }}>
              Stylist: {review.stylist}
            </p>
          )}
        </div>
        <span className="text-[#E8E0D4]/30 text-xs" style={{ fontFamily: "var(--font-body)" }}>
          {lang === "ro" ? review.timeRo : review.timeRu}
        </span>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden" style={{ background: "#111111" }}>
      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C8A961] text-sm tracking-[0.3em] block mb-4" style={{ fontFamily: "var(--font-body)" }}>
            {t("reviews.label")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E0D4]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            {t("reviews.title")}
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A961] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#E8E0D4]/50 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            {t("reviews.subtitle")}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Google Rating */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A]/50 border border-[#C8A961]/10 rounded-full">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="fill-[#C8A961] text-[#C8A961]" />
              ))}
            </div>
            <span className="text-[#E8E0D4]/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              5.0 — Google Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
