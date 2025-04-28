export default function ContactButtons({hardSize}: {hardSize?: string}) {
  const size = hardSize ? hardSize : "size-8 lg:size-10"

  return (
    <div className="flex justify-center items-center gap-4">
      <a href="https://www.linkedin.com/in/alexander-zimdahl/" target="_blank" rel="external noopener noreferrer" className={`${size} hover:scale-115 transition-transform duration-300 ease-in-out`}>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"  />
      </a>
      <a href="https://github.com/AZimdahl" target="_blank" rel="external noopener noreferrer" className={`${size} hover:scale-115 transition-transform duration-300 ease-in-out`}>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="rounded" />
      </a>
      <a href="mailto:azimdahl91+portfolio@gmail.com" className={`${size} hover:scale-115 transition-transform duration-300 ease-in-out`}>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email"  />
      </a>
    </div>
  )
}