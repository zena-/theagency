import Image from 'next/image'

export default function WorkCard({ item, priority = false }) {
  const live = Boolean(item.href)
  const shot = (
    <Image
      src={item.image}
      alt={`${item.name} website screenshot`}
      fill
      priority={priority}
      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px"
    />
  )
  return (
    <article className={`card work-card${live ? '' : ' archived'}`}>
      {live ? (
        <a href={item.href} target="_blank" rel="noreferrer" className="shot" aria-label={`Visit ${item.name}`}>
          {shot}
        </a>
      ) : (
        <div className="shot">{shot}</div>
      )}
      <div className="card-body">
        <span className="tag">{item.tag}</span>
        <h3>
          {live ? (
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.name} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            item.name
          )}
        </h3>
        <p>{item.text}</p>
      </div>
    </article>
  )
}
