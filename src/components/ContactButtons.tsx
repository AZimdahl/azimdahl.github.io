export default function ContactButtons() {
  return (
    <div className="flex justify-center items-center gap-4">
      <a href="https://www.linkedin.com/in/alexander-zimdahl/" target="_blank" rel="external noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8" />
      </a>
      <a href="https://github.com/AZimdahl" target="_blank" rel="external noopener noreferrer">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-8 h-8 rounded" />
      </a>
      <a href="mailto:azimdahl91+portfolio@gmail.com">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-8 h-8" />
      </a>
    </div>
  )
}