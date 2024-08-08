'use client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { Yellow } from './Yellow'

export default function GoogleMap() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  console.log(API_KEY)

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 35.10404018147665, lng: -106.63322078630809 }}
        reuseMaps
        defaultZoom={12.5}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        styles={Yellow}
      />
    </APIProvider>
  )
}
