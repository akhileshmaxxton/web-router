export interface IUser {
  id: Number;
  name: String;
  email: String;
  website: String;
  username: String;
  phone: String;
  address: {
    geo: {
      lat: Number;
      lng: Number;
    };
  };
}
