import Image from 'next/image'
import Quotation from '../images/bg-pattern-quotation.svg'

export default function ArticleCard({
  icon,
  border,
  cardColor,
  photo,
  name,
  title,
  textColor,
  paragraph,
  breakpoints,
}) {
  return (
    <article
      className={`relative flex w-full flex-col gap-4 rounded-lg shadow-2xl shadow-light-gray ${cardColor} px-9 py-6 ${breakpoints}`}
    >
      {icon ? (
        <Image
          className="absolute right-6 top-0 z-0"
          src={Quotation}
          alt="Quotation Icon"
        />
      ) : (
        ''
      )}
      <section className="z-10 flex flex-row items-center gap-5">
        {border ? (
          <Image
            className="h-8 w-8 rounded-full border border-purple-400"
            src={photo}
            alt="Profile Photo"
          />
        ) : (
          <Image
            className="h-8 w-8 rounded-full border"
            src={photo}
            alt="Profile Photo"
          />
        )}
        <article className="flex flex-col text-body">
          <span className={`${textColor}`}>{name}</span>
          <span className={`${textColor} opacity-50`}>Verified Graduate</span>
        </article>
      </section>
      <h3 className={`z-10 text-xl font-semibold ${textColor}`}>{title}</h3>
      <p className={`text-body font-medium ${textColor} opacity-70`}>
        “ {paragraph} ”
      </p>
    </article>
  )
}
