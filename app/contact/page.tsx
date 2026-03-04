import ContainerForm from '../_components/ContainerForm';

export const dynamic = 'force-static';

export default function ContactPage() {
  return (
    <div className='max-w-xl mx-auto px-4 py-16 sm:py-8'>
      {/* Decorative element */}
      <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/20 -z-10' />

      <div className='space-y-8'>
        {/* Header */}
        <div className='space-y-3'>
          <h1 className='text-4xl sm:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100'>
            Get in touch
          </h1>
          <div className='space-y-4'>
            <p className='text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
              Whether you have a{' '}
              <strong className='font-bold text-gray-900 dark:text-gray-100 relative'>
                development project
                <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
              </strong>{' '}
              in mind, a{' '}
              <strong className='font-bold text-gray-900 dark:text-gray-100 relative'>
                partnership opportunity
                <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
              </strong>
              , or just want to say{' '}
              <strong className='font-bold text-gray-900 dark:text-gray-100 relative italic'>
                hello
                <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
              </strong>{' '}
              —{' '}
              <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'>
                I'd love to hear from you.
              </span>
            </p>
          </div>
        </div>
        <ContainerForm />
      </div>
    </div>
  );
}
