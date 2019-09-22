import 'googlemaps';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;

}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, ){
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1, 
      center: {
        lat: 0,
        lng: 0,
      } 
    });
  }

  addMarker(object: Mappable ): void{

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: object.location.lat,
        lng: object.location.lng,
      }
    })

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: object.markerContent()
      });

      infowindow.open(this.googleMap, marker);
    })
  }

} 