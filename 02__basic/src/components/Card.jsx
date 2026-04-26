import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
      <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6 hover:shadow-xl transition">

  <img 
    class="w-full h-48 object-cover rounded-lg"
    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    alt="profile"
  />

  <div class="mt-4">
    <h2 class="text-xl font-bold text-gray-800">
        {/* use the props here  */}
     {props.someObj.name}
     <br />
     {props.someObj.age}
    </h2>

    <p class="text-gray-600 text-sm mt-2">
      Frontend Developer passionate about building beautiful UI with React and Tailwind CSS.
    </p>

    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
      Follow
    </button>

  </div>
</div>
    </div>
  )
}

export default Card
