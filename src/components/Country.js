function Country({country, flag}){
  return (
    <div className='flex items-center justify-center'>
      <img src={flag} alt=' ' className='mr-2 w-6 h-4'/> {country}
    </div>
  )
}

export default Country;