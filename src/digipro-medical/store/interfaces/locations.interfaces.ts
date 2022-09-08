export interface IProvince {
  id?: number;
  name: string;
  slug?: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface IDistrict {
  id?: number;
  name: string;
  slug?: string;
  province: IProvince;
  lcoation: {
    lat: number;
    lng: number;
  };
}

export interface ILocationState {
  province: {
    provinces: IProvince[];
    provincesLoading: boolean;
  };
  district: {
    districts: IDistrict[];
    districtsLoading: boolean;
  };
}
