import React from 'react'

const Result = ({weatherData, historyData, historySearch}) => {

  const historyItems = historyData.map(
    (item, index) =>{
      return <li onClick={() => historySearch(item)} className=' text-xl cursor-pointer' key={index}>{item}</li>
    }
  )

  return (
    <div className='grid grid-cols-4 shadow-xl mt-5 p-2'>
      <div className=' col-span-1 border-r-2'>
        <span className=' text-center block font-bold'>History</span>
        <ul>
          {historyItems}
        </ul>
      </div>
      <div className=' col-span-3'> 
      {
        // weatherData.length !== 0 ?
        weatherData.name !== undefined ?
        
        <>
      <h2 className=' text-4xl text-center'>{weatherData.name}</h2>
      <div className=' text-2xl flex justify-around my-2'>
        <div>Max Temp: {weatherData.main.temp_max}</div>
        <div>Min Temp: {weatherData.main.temp_min}</div>
      </div>
      <div className=' text-2xl flex justify-around my-2'>
        <div>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
        </div>
        <div className=' mt-8'>{weatherData.weather[0].main}</div>
      </div>
      <div className=' text-2xl flex justify-around my-2'>
        <div>Max feels_like <hr /> <h1 className=' text-center mt-5'>{weatherData.main.feels_like}</h1></div>
        <div>Min pressure <hr /> <h1 className=' text-center mt-5'>{weatherData.main.pressure}</h1></div>
      </div>
        </>
        :
        <h3 className=' text-center p-3 text-5xl'>please Enter the City Name</h3>
      }
      </div>
    </div>
  )
}

export default Result