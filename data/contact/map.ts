export interface MapData {
  address: string
  embedUrl: string
  lat: number
  lng: number
  zoom: number
  title: string
}

export const mapConfig: MapData = {
  title: "Notre Siège Social",
  address: "Villa N°6 Bloc J Rue Zofa Sect 4 Hay Riad, Rabat, Maroc",
  // Google Maps embed URL for Hay Riad, Rabat
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7289569654784!2d-6.877894923508101!3d33.97451292150337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c8c4a169b1b%3A0xc31972b22ecdf2b9!2sHay%20Riad%2C%20Rabat!5e0!3m2!1sfr!2sma!4v1719100000000!5m2!1sfr!2sma",
  lat: 33.9745129,
  lng: -6.8778949,
  zoom: 15,
}
