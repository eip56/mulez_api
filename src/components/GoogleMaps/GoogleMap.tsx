'use client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { Cobalt } from './Cobalt'
import { AssassinsCreed } from './AssassinCreed'
import { Lunar } from './Lunar'

//https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

export default function GoogleMap() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        id="GoogleMap"
        style={{ width: '100%', height: 'calc(100% + 36px)' }}
        defaultCenter={{ lat: 35.10404018147665, lng: -106.63322078630809 }}
        reuseMaps
        defaultZoom={12.5}
        gestureHandling={'none'}
        disableDefaultUI={true}
        styles={Lunar}
        fullscreenControl={false}
        scaleControl={false}
        streetViewControl={false}
        zoomControl={false}
        mapTypeControl={false}
        keyboardShortcuts={false}
      />
    </APIProvider>
  )
}
