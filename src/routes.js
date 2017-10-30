import React from 'react'
import Home from 'components/Home'
import Blog from 'components/Blog'
import preload from 'components/data.json'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/blog/:id',
    exact: true,
    component: Blog,
  },
  {
    path: '/hotel/:id',
    exact: true,
    component: props => {
      const selectedHotel = preload.hotels.find(hotel => props.match.params.id === hotel.hotelname)
      return <Blog hotel={selectedHotel} {...props} />
    },
  },
]
