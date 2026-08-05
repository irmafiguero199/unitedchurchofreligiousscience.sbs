export default function SectionHeader({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-primary-200' : 'text-primary-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-1 rounded-full mt-4 ${centered ? 'mx-auto' : ''} ${light ? 'bg-accent-400' : 'bg-accent-500'}`} />
    </div>
  )
}
